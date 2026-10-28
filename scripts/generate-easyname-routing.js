// Готовит правила для БУДУЩЕГО полного сайта, не заменяя конфигурацию заглушки.
import { writeFile } from 'node:fs/promises';
import { languages } from '../src/i18n/languages.js';
import { navigation } from '../src/data/navigation.js';

const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const prefixes = languages.map(({ prefix }) => prefix.slice(1)).filter(Boolean);
const pages = navigation.map(({ path }) => path.replace(/^\//, '')).filter(Boolean);
const localePattern = prefixes.map(escape).join('|');
const pagePattern = pages.map(escape).join('|');

const configuration = `# FOSMARIN: только для полного React-сайта в корне домена.
# Не загружать вместо конфигурации заглушки до согласованного запуска.
# Сгенерировано из src/data/navigation.js и src/i18n/languages.js.
# Повторная генерация: node scripts/generate-easyname-routing.js

Options -Indexes -MultiViews
DirectoryIndex index.html
ErrorDocument 404 /index.html

# При HTTP 404 возвращаем HTML React, но запрещаем индексацию и кеширование ошибки.
Header always set X-Robots-Tag "noindex, nofollow" "expr=%{REQUEST_STATUS} == 404"
Header always set Cache-Control "no-store" "expr=%{REQUEST_STATUS} == 404"

RewriteEngine On

# Дополнительный запрет прямого доступа к .private; её собственный .htaccess сохраняем.
RewriteRule ^\\.private(?:/|$) - [F]

# Серверная форма обрабатывается до правил React. Запрос и его тело не перенаправляются.
RewriteRule ^api/contact/?$ api/contact.php [END]

# Существующие файлы и каталоги отдаются обычным способом.
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [END]

# Только известные страницы получают HTTP 200 с index.html.
RewriteRule ^$ index.html [END]
RewriteRule ^(?:${localePattern})/?$ index.html [END]
RewriteRule ^(?:(?:${localePattern})/)?(?:${pagePattern})/?$ index.html [END]

# Неизвестный адрес получает настоящий 404 и React-страницу NotFound через ErrorDocument.
RewriteRule ^ - [R=404,END]
`;

const file = 'hosting/easyname/full-site.htaccess.example';
await writeFile(file, configuration);
console.log(`Prepared: ${file}`);
console.log('Future full site only. Placeholder configuration has not been changed.');
