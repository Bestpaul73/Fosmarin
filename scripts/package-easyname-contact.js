// Собирает файлы для будущей загрузки на easyname. Ничего не публикует.
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const source = resolve('hosting/easyname');
const destination = join(source, 'package');
const privateDestination = join(destination, 'private/fosmarin');

// PHPMailer устанавливается Composer. Проверяем его наличие до создания пакета.
await readFile(join(source, 'private/vendor/autoload.php'));
await readFile(join(source, 'private/composer.lock'));
await rm(destination, { recursive: true, force: true });
await mkdir(join(destination, 'html/fosmarin-project'), { recursive: true });
await mkdir(privateDestination, { recursive: true });
await cp(join(source, 'public'), join(destination, 'html/fosmarin-project'), { recursive: true });

// Явный список: заполненный contact-config.php с паролем не копируется.
for (const name of ['src', 'vendor', 'composer.json', 'composer.lock', 'contact-config.example.php']) {
  await cp(join(source, 'private', name), join(privateDestination, name), { recursive: true });
}
await cp(join(source, 'api-routing.htaccess.example'), join(destination, 'api-routing.htaccess.example'));
await cp(join(source, 'README.md'), join(destination, 'README.md'));
await writeFile(join(destination, 'NOT-DEPLOYED.txt'),
  'Contact handler only. No credentials. Not deployed. Read README before uploading.\n');
console.log(`Prepared: ${destination}`);
console.log('Only contact handler files. SMTP password and full website are not included.');
