// Keep the published sitemap and Vercel routes aligned with approved languages.
import { readFile, writeFile } from 'node:fs/promises';
import { languages, localizePath } from '../src/i18n/languages.js';
import { navigation } from '../src/data/navigation.js';

const siteUrl = (process.env.VITE_SITE_URL || 'https://fosmarin.vercel.app').replace(/\/+$/, '');
const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const paths = ['/', ...navigation.map(({ path }) => path).filter((path) => path !== '/')];
const uniquePaths = [...new Set(paths)];
const entries = languages.flatMap(({ code }) => uniquePaths.map((path) => {
  const alternates = [...languages, { code: 'x-default' }].map(({ code: alternateCode }) => {
    const href = `${siteUrl}${localizePath(path, alternateCode === 'x-default' ? 'en' : alternateCode)}`;
    return `    <xhtml:link rel="alternate" hreflang="${alternateCode}" href="${escapeXml(href)}" />`;
  });
  return `  <url>\n    <loc>${escapeXml(`${siteUrl}${localizePath(path, code)}`)}</loc>\n${alternates.join('\n')}\n  </url>`;
}));
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`);

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const prefixes = languages.map(({ prefix }) => prefix.slice(1)).filter(Boolean);
const localePattern = prefixes.map(escapeRegex).join('|');
const pagePattern = uniquePaths.filter((path) => path !== '/').map((path) => escapeRegex(path.slice(1))).join('|');
const prefixPattern = prefixes.length ? `(?:(?:${localePattern})/)?` : '';
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
config.routes = [
  { handle: 'filesystem' },
  { src: '^/$', dest: '/index.html' },
  ...(prefixes.length ? [{ src: `^/(?:${localePattern})/?$`, dest: '/index.html' }] : []),
  { src: `^/${prefixPattern}(?:${pagePattern})/?$`, dest: '/index.html' },
  { src: '/(.*)', dest: '/index.html', status: 404, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
];
await writeFile('vercel.json', `${JSON.stringify(config, null, 2)}\n`);
console.log(`Prepared sitemap and Vercel routes: ${languages.map(({ code }) => code).join(', ')}`);
