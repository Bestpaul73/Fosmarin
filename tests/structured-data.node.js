import test from 'node:test';
import assert from 'node:assert/strict';
import { buildStructuredData } from '../src/data/structuredData.js';
import { languages, localizePath } from '../src/i18n/languages.js';

const siteUrl = 'https://fosmarin.vercel.app';
const options = {
  siteUrl,
  canonicalUrl: `${siteUrl}/technology`,
  path: '/technology',
  language: 'en',
  title: 'Technology | FOSMARIN',
  description: 'Technology description',
  projectDescription: 'Project description',
  languageCodes: languages.map(({ code }) => code),
  isKnownPage: true,
};

test('every language uses canonical production URLs and resolved graph references', () => {
  for (const { code } of languages) {
    const canonicalUrl = `${siteUrl}${localizePath('/technology', code)}`;
    const data = buildStructuredData({ ...options, language: code, canonicalUrl });
    const ids = new Set(data['@graph'].map((node) => node['@id']));
    const page = data['@graph'][2];
    assert.equal(page.url, canonicalUrl);
    assert.equal(page.inLanguage, code);
    assert.equal(page['@id'], `${canonicalUrl}#webpage`);
    for (const node of data['@graph']) {
      for (const property of ['about', 'publisher', 'isPartOf']) {
        if (node[property]) assert.ok(ids.has(node[property]['@id']));
      }
    }
    assert.deepEqual(data['@graph'][1].inLanguage, options.languageCodes);
  }
});

test('project and website identities remain stable across pages and languages', () => {
  const first = buildStructuredData(options)['@graph'];
  const second = buildStructuredData({ ...options, path: '/contact', language: 'de', canonicalUrl: `${siteUrl}/de/contact` })['@graph'];
  assert.deepEqual(first[0], second[0]);
  assert.deepEqual(first[1], second[1]);
  assert.equal(first[0]['@type'], 'ResearchProject');
  assert.equal(second[2]['@type'], 'ContactPage');
  assert.equal(buildStructuredData({ ...options, path: '/about' })['@graph'][2]['@type'], 'AboutPage');
});

test('changing the site origin updates all graph identities and URLs', () => {
  const finalOrigin = 'https://example.org';
  const data = buildStructuredData({ ...options, siteUrl: finalOrigin, canonicalUrl: `${finalOrigin}/technology` });
  assert.ok(!JSON.stringify(data).includes(siteUrl));
  assert.equal(data['@graph'][0].url, `${finalOrigin}/`);
});

test('unknown pages do not generate structured data', () => {
  assert.equal(buildStructuredData({ ...options, isKnownPage: false }), null);
});

test('metadata survives JSON encoding, including Greek, quotes and HTML-like text', () => {
  const description = 'Έργο "FOSMARIN" <script> & monitoring';
  const data = buildStructuredData({ ...options, description });
  assert.equal(JSON.parse(JSON.stringify(data))['@graph'][2].description, description);
});
