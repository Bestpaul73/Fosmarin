import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { availableLanguages, enabledLanguageCodes, languages, getLanguageFromPath, localizePath } from '../src/i18n/languages.js';
import { navigation } from '../src/data/navigation.js';

const paths = [...new Set(['/', ...navigation.map(({ path }) => path)])];
const disabled = availableLanguages.filter(({ code }) => !languages.some((language) => language.code === code));

test('only approved languages resolve as published languages', () => {
  assert.deepEqual(languages.map(({ code }) => code), enabledLanguageCodes);
  assert.equal(languages[0].code, 'en');
  assert.equal(availableLanguages.length, 7);
  for (const { prefix } of disabled) assert.equal(getLanguageFromPath(`${prefix}/contact`), 'en');
});

test('sitemap includes every published page and no disabled translations', async () => {
  const xml = await readFile('public/sitemap.xml', 'utf8');
  assert.equal((xml.match(/<loc>/g) || []).length, paths.length * languages.length);
  for (const { code } of languages) {
    for (const path of paths) assert.ok(xml.includes(`<loc>https://fosmarin.vercel.app${localizePath(path, code)}</loc>`));
  }
  for (const { code, prefix } of disabled) {
    assert.ok(!xml.includes(`hreflang="${code}"`));
    assert.ok(!xml.includes(`https://fosmarin.vercel.app${prefix}`));
  }
});

test('Vercel serves English routes and returns 404 for unpublished translations', async () => {
  const { routes } = JSON.parse(await readFile('vercel.json', 'utf8'));
  const routeFor = (path) => routes.find(({ src }) => src && new RegExp(src).test(path));
  for (const path of paths) assert.notEqual(routeFor(path).status, 404);
  for (const { prefix } of disabled) {
    for (const path of paths) assert.equal(routeFor(`${prefix}${path === '/' ? '' : path}`).status, 404);
  }
  assert.equal(routeFor('/missing-page').status, 404);
});

test('Apache page rules serve only published routes and keep API/private protections', async () => {
  const text = await readFile('hosting/easyname/full-site.htaccess.example', 'utf8');
  assert.ok(text.includes('^api/contact/?$ api/contact.php [END]'));
  assert.ok(text.includes('^\\.private(?:/|$) - [F]'));
  const patterns = [...text.matchAll(/^RewriteRule (\S+) index\.html \[END\]$/gm)].map((match) => new RegExp(match[1]));
  for (const path of paths) assert.ok(patterns.some((pattern) => pattern.test(path.slice(1))));
  for (const { prefix } of disabled) {
    for (const path of paths) assert.ok(!patterns.some((pattern) => pattern.test(`${prefix}${path === '/' ? '' : path}`.slice(1))));
  }
});
