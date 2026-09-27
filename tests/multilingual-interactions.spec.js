import { test, expect } from '@playwright/test';

const languages = [
  {
    code: 'en',
    path: '/',
    searchLabel: 'Search FOSMARIN',
    query: 'Consortium',
  },

  {
    code: 'de',
    path: '/de',
    searchLabel: 'FOSMARIN durchsuchen',
    query: 'Konsortium',
  },

  {
    code: 'es',
    path: '/es',
    searchLabel: 'Buscar en FOSMARIN',
    query: 'Consorcio',
  },

  {
    code: 'da',
    path: '/da',
    searchLabel: 'Søg i FOSMARIN',
    query: 'Konsortium',
  },

  {
    code: 'sv',
    path: '/sv',
    searchLabel: 'Sök i FOSMARIN',
    query: 'Konsortium',
  },

  {
    code: 'el',
    path: '/el',
    searchLabel: 'Αναζήτηση στο FOSMARIN',
    query: 'Κονσόρτσιουμ',
  },

  {
    code: 'it',
    path: '/it',
    searchLabel: 'Cerca in FOSMARIN',
    query: 'Consorzio',
  },
];

for (const language of languages) {
  test.describe(`interactions: ${language.code}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({
        width: 1440,
        height: 1000,
      });

      await page.emulateMedia({
        reducedMotion: 'reduce',
      });

      await page.goto(language.path);
    });

    test(`${language.code}: search opens and receives focus`, async ({ page }) => {
      const trigger = page.locator('.search-trigger');

      await trigger.focus();

      await expect(trigger).toBeFocused();

      await page.keyboard.press('Enter');

      await expect(trigger).toHaveAttribute('aria-expanded', 'true');

      const input = page.getByRole('searchbox', {
        name: language.searchLabel,
      });

      await expect(input).toBeVisible();

      await expect(input).toBeFocused();
    });

    test(`${language.code}: localized search returns results and keyboard selection works`, async ({ page }) => {
      await page.locator('.search-trigger').click();

      const input = page.getByRole('searchbox', {
        name: language.searchLabel,
      });

      await input.fill(language.query);

      const results = page.locator('.site-search-result');

      await expect(results.first()).toBeVisible();

      expect(await results.count()).toBeGreaterThan(0);

      await page.keyboard.press('ArrowDown');

      await expect(input).toHaveAttribute('aria-activedescendant', 'site-search-result-0');

      await expect(page.locator('#site-search-result-0')).toHaveClass(/site-search-result--active/);
    });

    test(`${language.code}: search Escape closes and restores focus`, async ({ page }) => {
      const trigger = page.locator('.search-trigger');

      await trigger.focus();

      await page.keyboard.press('Enter');

      const input = page.getByRole('searchbox', {
        name: language.searchLabel,
      });

      await expect(input).toBeFocused();

      await page.keyboard.press('Escape');

      await expect(page.locator('#site-search-panel')).not.toBeVisible();

      await expect(trigger).toHaveAttribute('aria-expanded', 'false');

      await expect(trigger).toBeFocused();
    });

    test(`${language.code}: Enter opens active localized search result`, async ({ page }) => {
      await page.locator('.search-trigger').click();

      const input = page.getByRole('searchbox', {
        name: language.searchLabel,
      });

      await input.fill(language.query);

      const firstResult = page.locator('#site-search-result-0');

      await expect(firstResult).toBeVisible();

      const targetHref = await firstResult.getAttribute('href');

      expect(targetHref).not.toBeNull();

      await page.keyboard.press('ArrowDown');

      await page.keyboard.press('Enter');

      await expect(page.locator('#site-search-panel')).not.toBeVisible();

      await expect(page).toHaveURL(new RegExp(targetHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    });
  });
}

/*
 * LANGUAGE SELECTOR
 */

test.describe('language selector keyboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: 1440,
      height: 1000,
    });

    await page.goto('/about');
  });

  test('ArrowDown opens language menu and moves focus', async ({ page }) => {
    const languageButton = page.locator('.language-trigger');

    await languageButton.focus();

    await page.keyboard.press('ArrowDown');

    await expect(languageButton).toHaveAttribute('aria-expanded', 'true');

    const menu = page.locator('#language-menu');

    await expect(menu).toBeVisible();

    const focusedLanguage = page.locator('#language-menu [data-language]:focus');

    await expect(focusedLanguage).toHaveCount(1);
  });

  test('Escape closes language menu and restores focus', async ({ page }) => {
    const languageButton = page.locator('.language-trigger');

    await languageButton.focus();

    await page.keyboard.press('ArrowDown');

    await expect(page.locator('#language-menu')).toBeVisible();

    await page.keyboard.press('Escape');

    await expect(page.locator('#language-menu')).not.toBeVisible();

    await expect(languageButton).toBeFocused();
  });

  test('Home and End navigate language options', async ({ page }) => {
    const languageButton = page.locator('.language-trigger');

    await languageButton.focus();

    await page.keyboard.press('ArrowDown');

    await page.keyboard.press('End');

    await expect(page.locator('[data-language="it"]')).toBeFocused();

    await page.keyboard.press('Home');

    await expect(page.locator('[data-language="en"]')).toBeFocused();
  });

  test('ArrowDown and ArrowUp cycle language options', async ({ page }) => {
    const languageButton = page.locator('.language-trigger');

    await languageButton.focus();

    await page.keyboard.press('ArrowDown');

    const firstFocused = await page.evaluate(() => document.activeElement?.getAttribute('data-language'));

    expect(firstFocused).not.toBeNull();

    await page.keyboard.press('ArrowDown');

    const secondFocused = await page.evaluate(() => document.activeElement?.getAttribute('data-language'));

    expect(secondFocused).not.toBe(firstFocused);

    await page.keyboard.press('ArrowUp');

    await expect(page.locator(`[data-language="${firstFocused}"]`)).toBeFocused();
  });
});
