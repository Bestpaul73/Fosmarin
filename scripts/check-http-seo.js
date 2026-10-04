import assert from 'node:assert/strict';

import { languages, localizePath } from '../src/i18n/languages.js';
import { navigation } from '../src/data/navigation.js';

// Проверяем Vercel Preview, а не локальный сервер Vite.
const target = process.argv[2];

if (!target) {
  console.error('Usage: node scripts/check-http-seo.js https://YOUR-PREVIEW.vercel.app');

  process.exit(1);
}

const origin = new URL(target).origin;

// Главная и восемь разделов на каждом из семи языков.
const knownPaths = languages.flatMap(({ code }) =>
  ['/', ...navigation.map(({ path }) => path)].map((path) => localizePath(path, code)),
);

async function request(path) {
  return fetch(`${origin}${path}`, {
    signal: AbortSignal.timeout(20000),
  });
}

async function checkPage(path, expectedStatus) {
  const response = await request(path);

  assert.equal(response.status, expectedStatus, `${path}: expected HTTP ${expectedStatus}, got ${response.status}`);

  assert.match(response.headers.get('content-type') ?? '', /text\/html/i, `${path}: expected HTML`);

  const html = await response.text();

  assert.match(html, /<div\b[^>]*id=["']root["']/i, `${path}: expected the React app HTML`);

  if (expectedStatus === 404) {
    assert.match(response.headers.get('x-robots-tag') ?? '', /noindex/i, `${path}: missing X-Robots-Tag noindex`);
  }

  console.log(`OK ${expectedStatus} ${path}`);

  return html;
}

try {
  // Проверяем страницы небольшими группами.
  for (let index = 0; index < knownPaths.length; index += 7) {
    await Promise.all(knownPaths.slice(index, index + 7).map((path) => checkPage(path, 200)));
  }

  // Завершающий слеш и query-параметры должны работать.
  for (const path of ['/de/contact/', '/technology/?http-seo-check=1']) {
    await checkPage(path, 200);
  }

  // Неизвестные страницы и отсутствующие файлы должны вернуть 404.
  for (const path of [
    '/this-page-does-not-exist',
    '/de/this-page-does-not-exist',
    '/fr/about',
    '/technology/not-a-page',
    '/assets/missing-http-seo-check.js',
    '/api/missing-http-seo-check',
  ]) {
    await checkPage(path, 404);
  }

  // Получаем адреса собранных JS/CSS из HTML.
  const html = await checkPage('/', 200);

  const assetPaths = [
    ...new Set([...html.matchAll(/(?:src|href)=["'](\/assets\/[^"']+)["']/g)].map((match) => match[1])),
  ];

  assert.ok(assetPaths.length > 0, 'No compiled asset URLs found in the HTML');

  // Статические файлы должны отдаваться файлами, а не HTML приложения.
  for (const path of ['/robots.txt', '/sitemap.xml', '/og-image.png', ...assetPaths]) {
    const response = await request(path);

    assert.equal(response.status, 200, `${path}: expected HTTP 200, got ${response.status}`);

    assert.doesNotMatch(
      response.headers.get('content-type') ?? '',
      /text\/html/i,
      `${path}: received HTML instead of a static file`,
    );

    await response.body?.cancel();

    console.log(`OK static ${path}`);
  }

  // Существующий API принимает POST, поэтому GET должен вернуть 405.
  const api = await request('/api/contact');

  assert.equal(api.status, 405, `/api/contact: expected HTTP 405, got ${api.status}`);

  assert.equal((await api.json()).code, 'METHOD_NOT_ALLOWED');

  console.log('OK API /api/contact');

  console.log('HTTP SEO checks passed.');
} catch (error) {
  console.error(`HTTP SEO check failed: ${error.message}`);

  process.exitCode = 1;
}
