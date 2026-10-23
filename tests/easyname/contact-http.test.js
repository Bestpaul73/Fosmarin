// Интеграционный тест: браузерный JSON → настоящий PHP → PHPMailer → локальный SMTP/TLS.
// В Интернет письма НЕ отправляются: почтовый сервер создаётся внутри этого теста.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, cp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import net from 'node:net';
import tls from 'node:tls';
import { once } from 'node:events';

const php = process.env.PHP_BINARY || 'php';
const root = resolve('hosting/easyname');
const valid = { name: 'Павел Παύλος', email: 'visitor@example.org', organisation: '',
  subject: 'Test / Вопрос', message: 'Bonjour!\nΓεια σας!\n🙂', fax_number: '' };

async function freePort() {
  const server = net.createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const port = server.address().port;
  await new Promise((done) => server.close(done));
  return port;
}

// Один общий сервер PHP, последовательные под-тесты: меняем только закрытую конфигурацию.
test('easyname HTTP and SMTP', async (t) => {
  const temp = await mkdtemp(join(tmpdir(), 'fosmarin-contact-'));
  const publicDirectory = join(temp, 'html', 'fosmarin-project');
  const privateDirectory = join(temp, 'private', 'fosmarin');
  let smtp;
  let phpServer;
  const sockets = new Set();
  t.after(async () => {
    phpServer?.kill();
    for (const socket of sockets) socket.destroy();
    if (smtp) await new Promise((done) => smtp.close(done));
    if (phpServer && phpServer.exitCode === null) await once(phpServer, 'exit');
    await rm(temp, { recursive: true, force: true });
  });
  await mkdir(publicDirectory, { recursive: true });
  await cp(join(root, 'public'), publicDirectory, { recursive: true });
  await cp(join(root, 'private'), privateDirectory, { recursive: true });
  // Даже если разработчик создал настоящую локальную конфигурацию, тест её НЕ использует.
  await rm(join(privateDirectory, 'contact-config.php'), { force: true });

  const opensslConfig = join(temp, 'openssl.cnf');
  await writeFile(opensslConfig, `[req]\ndistinguished_name=dn\n[dn]\n[v3]\nsubjectAltName=DNS:localhost,IP:127.0.0.1\nbasicConstraints=critical,CA:TRUE\nkeyUsage=digitalSignature,keyEncipherment,keyCertSign\n`);
  // Создаём одноразовый сертификат. Доверяем ему только в процессе тестового PHP.
  const certScript = join(temp, 'certificate.php');
  await writeFile(certScript, `<?php
$options=['config'=>$argv[1],'private_key_bits'=>2048,'private_key_type'=>OPENSSL_KEYTYPE_RSA];
$key=openssl_pkey_new($options);
$csr=openssl_csr_new(['commonName'=>'localhost'],$key,$options);
$cert=openssl_csr_sign($csr,null,$key,1,['config'=>$argv[1],'x509_extensions'=>'v3']);
openssl_pkey_export($key,$pem,null,$options);file_put_contents($argv[2],$pem);
openssl_x509_export($cert,$pem);file_put_contents($argv[3],$pem);
`);
  const certificate = join(temp, 'certificate.pem');
  const certificateKey = join(temp, 'key.pem');
  const generated = spawnSync(php, [certScript, opensslConfig, certificateKey, certificate], { encoding: 'utf8' });
  assert.equal(generated.status, 0, generated.stderr || generated.error?.message);

  let rejectRecipient = false;
  const messages = [];
  const logins = [];
  smtp = tls.createServer({ key: await readFile(certificateKey), cert: await readFile(certificate) }, (socket) => {
    sockets.add(socket);
    socket.on('close', () => sockets.delete(socket));
    socket.on('error', () => {});
    socket.write('220 localhost test SMTP\r\n');
    let buffer = '';
    let authStep = 0;
    let data = false;
    let lines = [];
    socket.on('data', (chunk) => {
      buffer += chunk.toString();
      while (buffer.includes('\r\n')) {
        const end = buffer.indexOf('\r\n');
        const line = buffer.slice(0, end);
        buffer = buffer.slice(end + 2);
        if (data) {
          if (line === '.') {
            messages.push(lines.join('\r\n'));
            data = false; lines = [];
            socket.write('250 Message accepted\r\n');
          } else lines.push(line.replace(/^\.\./, '.'));
        } else if (authStep) {
          logins.push(Buffer.from(line, 'base64').toString());
          socket.write(authStep === 1 ? '334 UGFzc3dvcmQ6\r\n' : '235 Authenticated\r\n');
          authStep = authStep === 1 ? 2 : 0;
        } else if (/^EHLO/i.test(line)) socket.write('250-localhost\r\n250 AUTH LOGIN\r\n');
        else if (/^AUTH LOGIN/i.test(line)) { authStep = 1; socket.write('334 VXNlcm5hbWU6\r\n'); }
        else if (/^RCPT TO:/i.test(line)) socket.write(rejectRecipient ? '550 Rejected for test\r\n' : '250 Recipient OK\r\n');
        else if (line === 'DATA') { data = true; socket.write('354 End with dot\r\n'); }
        else if (line === 'QUIT') socket.end('221 Bye\r\n');
        else socket.write('250 OK\r\n');
      }
    });
  });
  smtp.listen(0, '127.0.0.1');
  await once(smtp, 'listening');

  const router = join(temp, 'router.php');
  await writeFile(router, `<?php
$path=parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
if(in_array($path,['/api/contact','/api/contact.php'],true)){require __DIR__.'/html/fosmarin-project/api/contact.php';return;}
http_response_code(404);echo 'Not found';
`);
  const port = await freePort();
  let errors = '';
  phpServer = spawn(php, ['-d', `openssl.cafile=${certificate}`, '-S', `127.0.0.1:${port}`, '-t', publicDirectory, router]);
  phpServer.stderr.on('data', (chunk) => { errors += chunk.toString(); });
  phpServer.on('error', () => {});
  const url = `http://127.0.0.1:${port}/api/contact`;
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { await fetch(url); ready = true; break; } catch { await new Promise((done) => setTimeout(done, 30)); }
  }
  assert.ok(ready, `PHP server did not start: ${errors}`);
  const post = (body = valid) => fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

  await t.test('GET returns 405 and Allow', async () => {
    const response = await fetch(url);
    assert.equal(response.status, 405);
    assert.equal(response.headers.get('allow'), 'POST');
  });
  await t.test('valid input without config returns 503', async () => {
    const response = await post();
    assert.equal(response.status, 503);
    assert.equal((await response.json()).code, 'MAIL_NOT_CONFIGURED');
    assert.match(response.headers.get('cache-control'), /no-store/);
    assert.match(response.headers.get('x-robots-tag'), /noindex/);
  });
  await t.test('bad fields and honeypot do not send mail', async () => {
    assert.equal((await post({ ...valid, email: 'bad' })).status, 400);
    assert.deepEqual(await (await post({ fax_number: 'bot' })).json(), { ok: true });
    assert.equal(messages.length, 0);
  });
  const config = { host: '127.0.0.1', port: smtp.address().port, user: 'fixture-user', pass: 'fixture-password',
    from: 'noreply@fosmarin.eu', to: 'info@fosmarin.eu' };
  const setConfig = (value) => writeFile(join(privateDirectory, 'contact-config.php'),
    `<?php return json_decode('${JSON.stringify(value)}', true, 512, JSON_THROW_ON_ERROR);`);
  await setConfig(config);
  await t.test('real TLS SMTP accepts the message', async () => {
    const response = await post();
    assert.equal(response.status, 200, errors);
    assert.deepEqual(await response.json(), { ok: true });
    assert.equal(messages.length, 1);
    assert.deepEqual(logins.slice(0, 2), ['fixture-user', 'fixture-password']);
    assert.match(messages[0], /^From: FOSMARIN website <noreply@fosmarin.eu>/m);
    assert.match(messages[0], /^To: info@fosmarin.eu/m);
    assert.doesNotMatch(messages[0], /^Reply-To:/mi);
    const encodedBody = messages[0].split('\r\n\r\n').slice(1).join('\r\n\r\n').replace(/=\r\n/g, '');
    const decodedBody = Buffer.from(encodedBody.replace(/=([0-9A-F]{2})/gi,
      (_, hex) => String.fromCharCode(parseInt(hex, 16))), 'latin1').toString('utf8');
    assert.match(decodedBody, /Email: visitor@example.org/);
    assert.ok(decodedBody.includes('Павел Παύλος'));
    assert.ok(decodedBody.includes('Γεια σας!'));
    assert.ok(decodedBody.includes('🙂'));
  });
  await t.test('SMTP rejects the recipient: generic 500', async () => {
    rejectRecipient = true;
    const response = await post();
    assert.equal(response.status, 500);
    const body = await response.text();
    assert.equal(JSON.parse(body).code, 'MAIL_SEND_FAILED');
    assert.ok(!body.includes('fixture-password'));
    assert.equal(messages.length, 1);
    assert.ok(!errors.includes('fixture-password'));
  });
});
