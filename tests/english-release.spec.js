import { test, expect } from '@playwright/test';
import { navigation } from '../src/data/navigation.js';
import { availableLanguages, languages } from '../src/i18n/languages.js';

test.describe('English first release', () => {
  test.skip(languages.length !== 1 || languages[0].code !== 'en', 'English-only release checks.');

  for (const width of [393, 1600]) {
    test(`English ignores saved and browser language; header at ${width}px`, async ({ browser }) => {
      const context = await browser.newContext({ locale: 'de-DE', viewport: { width, height: 900 } });
      const page = await context.newPage();
      await page.addInitScript(() => localStorage.setItem('fosmarin-language', 'de'));
      await page.goto('/');
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page).toHaveURL(/\/$/);
      await expect(page.locator('.language-selector')).toHaveCount(0);
      await expect(page.locator('.search-trigger')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      if (width < 1361) {
        await page.locator('.menu-toggle').click();
        await expect(page.locator('#primary-navigation')).toBeVisible();
      }
      await context.close();
    });
  }

  test('all English pages expose only published hreflang and JSON-LD languages', async ({ page }) => {
    for (const path of ['/', ...navigation.map(({ path }) => path)]) {
      await page.goto(path);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(2);
      await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
      await expect(page.locator('link[hreflang="x-default"]')).toHaveCount(1);
      const graph = JSON.parse(await page.locator('#fosmarin-jsonld').textContent())['@graph'];
      expect(graph.find((item) => item['@type'] === 'WebSite').inLanguage).toEqual(['en']);
      await expect(page.locator('.language-trigger')).toHaveCount(0);
    }
  });

  for (const { code, prefix } of availableLanguages.filter(({ code }) => code !== 'en')) {
    test(`${code} translation is not published through a direct URL`, async ({ page }) => {
      await page.goto(`${prefix}/contact`);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page).toHaveTitle('Page not found | FOSMARIN');
      await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
      await expect(page.locator('.contact-form')).toHaveCount(0);
    });
  }

  test('English validation still works without sending mail', async ({ page }) => {
    let requests = 0;
    await page.route('**/api/contact', async (route) => { requests += 1; await route.abort(); });
    await page.goto('/contact');
    await page.locator('.contact-submit').click();
    await expect(page.locator('#contact-name-error')).toHaveText('Please enter your name.');
    await expect(page.locator('.contact-field-error')).toHaveCount(4);
    expect(requests).toBe(0);
  });
});
