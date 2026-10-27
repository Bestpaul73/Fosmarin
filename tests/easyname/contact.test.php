<?php

declare(strict_types=1);

require __DIR__ . '/../../hosting/easyname/private/src/contact.php';
require __DIR__ . '/../../hosting/easyname/private/vendor/autoload.php';

use function Fosmarin\Contact\handleRequest;
use function Fosmarin\Contact\buildMailer;
use function Fosmarin\Contact\jsLength;

$valid = [
    'name' => 'Павел Παύλος',
    'email' => 'visitor@example.org',
    'organisation' => 'FOSMARIN',
    'subject' => 'Frage / Ερώτηση / Вопрос',
    'message' => "Первая строка\nΔεύτερη γραμμή\n🙂",
    'fax_number' => '',
];
$config = ['host' => 'localhost', 'port' => 465, 'user' => 'test-user', 'pass' => 'test-only',
    'from' => 'noreply@fosmarin.eu', 'to' => 'info@fosmarin.eu'];
$count = 0;
function check(bool $condition, string $label): void {
    global $count;
    if (!$condition) { throw new RuntimeException('FAIL: ' . $label); }
    echo 'OK ' . $label . "\n";
    $count++;
}
function runRequest(mixed $body, string $method = 'POST', string $type = 'application/json'): array {
    global $config;
    return handleRequest($method, $type, json_encode($body, JSON_THROW_ON_ERROR),
        static fn() => $config, static function () {});
}

check(runRequest($valid)['status'] === 200, 'valid multilingual message');
check(runRequest($valid, 'GET')['status'] === 405, 'POST only');
check(runRequest($valid, 'POST', 'text/plain')['status'] === 415, 'JSON only');
check(runRequest($valid, 'POST', 'application/json; charset=UTF-8')['status'] === 200, 'JSON charset');
check(runRequest([])['status'] === 400, 'array instead of object');
check(runRequest(null)['status'] === 400, 'null instead of object');
check(handleRequest('POST', 'application/json', '{broken', fn() => null, fn() => null)['status'] === 400, 'malformed JSON');
check(handleRequest('POST', 'application/json', str_repeat('x', 65537), fn() => null, fn() => null)['status'] === 413, 'body size limit');
foreach (['name', 'email', 'subject', 'message'] as $field) {
    $data = $valid; $data[$field] = ' ';
    check(runRequest($data)['status'] === 400, 'required ' . $field);
}
foreach (['name' => 120, 'email' => 254, 'organisation' => 200, 'subject' => 200, 'message' => 5000] as $field => $max) {
    $data = $valid; $data[$field] = str_repeat('я', $max + 1);
    check(runRequest($data)['status'] === 400, 'length limit ' . $field);
}
$data = $valid; $data['message'] = str_repeat('я', 5000);
check(runRequest($data)['status'] === 200, '5000 Cyrillic characters are not counted as bytes');
$data['message'] = str_repeat('🙂', 2500);
check(runRequest($data)['status'] === 200, 'emoji boundary matches JavaScript');
$data['message'] .= '🙂';
check(runRequest($data)['status'] === 400, 'emoji beyond boundary');
check(jsLength("A\nя🙂") === 5, 'UTF-16 length including newline');
foreach (['name', 'subject'] as $field) {
    $data = $valid; $data[$field] = "Normal\r\nBcc: attacker@example.org";
    check(runRequest($data)['status'] === 400, 'header injection ' . $field);
}
$data = $valid; $data['email'] = 'broken';
check(runRequest($data)['status'] === 400, 'invalid email');
$data = $valid; $data['message'] = "hello\0world";
check(runRequest($data)['status'] === 400, 'null byte');
$honeypot = handleRequest('POST', 'application/json', '{"fax_number":"bot"}',
    static function () { throw new RuntimeException('Config must not be read'); },
    static function () { throw new RuntimeException('Must not send'); });
check($honeypot === ['status' => 200, 'body' => ['ok' => true]], 'honeypot bypasses SMTP and config');
$raw = json_encode($valid, JSON_THROW_ON_ERROR);
check(handleRequest('POST', 'application/json', $raw, fn() => null, fn() => null)['status'] === 503, 'missing config');
check(handleRequest('POST', 'application/json', $raw, fn() => $config,
    static function () { throw new RuntimeException('Password must not escape'); })['body']['code'] === 'MAIL_SEND_FAILED', 'SMTP exception is generic');

$mail = buildMailer($config, $valid);
check($mail->From === 'noreply@fosmarin.eu', 'fixed From');
check($mail->getToAddresses() === [['info@fosmarin.eu', '']], 'fixed recipient');
check($mail->getReplyToAddresses() === [], 'no Reply-To');
check(str_contains($mail->Body, 'Email: visitor@example.org'), 'visitor email in body');
check($mail->SMTPSecure === 'ssl' && $mail->SMTPAuth && $mail->SMTPDebug === 0, 'encrypted authenticated SMTP without debug');
check($mail->preSend(), 'PHPMailer assembles MIME');
check(!preg_match('/^Reply-To:/mi', $mail->getSentMIMEMessage()), 'generated MIME has no Reply-To');
check(stripos($mail->getSentMIMEMessage(), 'charset=UTF-8') !== false, 'MIME uses UTF-8');
echo $count . " checks passed.\n";
