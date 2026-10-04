import { test, expect } from '@playwright/test';
import { languages, localizePath } from '../src/i18n/languages';

const PRODUCTION_ORIGIN = 'https://fosmarin.vercel.app';

for (const { code } of languages) {
  test(`JSON-LD matches canonical and metadata in ${code}`, async ({ page }) => {
    await page.goto(localizePath('/technology', code));

    const scripts = page.locator('head script[type="application/ld+json"]');

    await expect(scripts).toHaveCount(1);

    const data = JSON.parse(await scripts.textContent());

    const graph = data['@graph'];

    const webpage = graph.find((node) => node['@type'] === 'WebPage');

    expect(data['@context']).toBe('https://schema.org');

    expect(webpage.url).toBe(await page.locator('link[rel="canonical"]').getAttribute('href'));

    expect(webpage.name).toBe(await page.title());

    expect(webpage.description).toBe(await page.locator('meta[name="description"]').getAttribute('content'));

    expect(webpage.inLanguage).toBe(code);

    expect(graph.find((node) => node['@type'] === 'ResearchProject').name).toBe('FOSMARIN');
  });
}

test('SPA navigation updates one JSON-LD script and clears it on 404', async ({ page }) => {
  await page.goto('/about');

  const script = page.locator('#fosmarin-jsonld');

  // Читаем JSON напрямую: это содержимое script, а не текст страницы.
  await expect.poll(() => script.textContent()).toContain('AboutPage');

  await page.locator('footer').getByRole('link', { name: 'Contact', exact: true }).click();

  await expect.poll(() => script.textContent()).toContain('ContactPage');

  await expect(script).toHaveCount(1);

  // Переходим на неизвестный маршрут без перезагрузки SPA.
  await page.evaluate(() => {
    history.pushState(null, '', '/this-page-does-not-exist');

    window.dispatchEvent(new PopStateEvent('popstate'));
  });

  await expect(script).toHaveCount(0);

  // После возврата разметка страницы должна восстановиться.
  await page.goBack();

  await expect(script).toHaveCount(1);

  await expect.poll(() => script.textContent()).toContain('ContactPage');
});

test('known page uses production canonical and hreflang links', async ({ page }) => {
  await page.goto('/de/technology');

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PRODUCTION_ORIGIN}/de/technology`);

  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
    'href',
    `${PRODUCTION_ORIGIN}/technology`,
  );

  await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
    'href',
    `${PRODUCTION_ORIGIN}/technology`,
  );
});

test('localhost pages are noindex while keeping production canonical', async ({ page }) => {
  await page.goto('/contact');

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${PRODUCTION_ORIGIN}/contact`);
});

test('unknown route renders 404 and is noindex', async ({ page }) => {
  await page.goto('/de/this-page-does-not-exist');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Seite nicht gefunden',
    }),
  ).toBeVisible();

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');

  await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);

  await expect(page).toHaveTitle('Page not found | FOSMARIN');
});

test('social preview metadata uses the shared 1200x630 image', async ({ page }) => {
  await page.goto('/technology');

  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    `${PRODUCTION_ORIGIN}/og-image.png`,
  );

  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute('content', '1200');

  await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute('content', '630');

  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
});

test('robots and sitemap point to the production site', async ({ request }) => {
  const robots = await request.get('/robots.txt');

  expect(robots.ok()).toBeTruthy();

  expect(await robots.text()).toContain(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`);

  const sitemap = await request.get('/sitemap.xml');

  expect(sitemap.ok()).toBeTruthy();

  const xml = await sitemap.text();

  expect(xml).toContain(`<loc>${PRODUCTION_ORIGIN}/</loc>`);

  expect(xml).toContain('hreflang="x-default"');
});
