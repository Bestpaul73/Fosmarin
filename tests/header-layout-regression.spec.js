import { test, expect } from '@playwright/test';

for (const lang of ['en', 'de', 'es', 'da', 'sv', 'el', 'it']) {
  for (const width of [320, 393, 1564, 1920]) {
    for (const textSize of [0, 4]) {
      test(`header: ${lang}, ${width}px, text ${textSize}`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.addInitScript((size) => {
          localStorage.setItem('fosmarin-accessibility', JSON.stringify({ textSize: size }));
        }, textSize);
        await page.goto(lang === 'en' ? '/about' : `/${lang}/about`);
        const burger = page.locator('.menu-toggle');
        const nav = page.locator('#primary-navigation');
        const compact = width <= 1564 || textSize > 0;
        if (!compact) {
          await expect(burger).toBeHidden();
          await expect(nav).toBeVisible();
          await expect(nav.locator('.nav-link')).toHaveCount(8);
          return;
        }
        await expect(burger).toBeVisible();
        await burger.click();
        await expect(nav).toBeVisible();
        const navBox = await nav.boundingBox();
        const headerBox = await page.locator('.header-inner').boundingBox();
        const buttonBox = await burger.boundingBox();
        const sidePadding = width <= 560 ? 16 : 24;
        expect(Math.abs(navBox.x + navBox.width - buttonBox.x - buttonBox.width)).toBeLessThan(2);
        expect(Math.abs(navBox.width - Math.min(360, headerBox.width - sidePadding * 2))).toBeLessThan(2);
        expect(navBox.x).toBeGreaterThanOrEqual(0);
        expect(Math.abs(navBox.y - headerBox.y - headerBox.height)).toBeLessThan(2);
        await page.mouse.click(5, 20);
        await expect(burger).toHaveAttribute('aria-expanded', 'false');
        await burger.click();
        await page.keyboard.press('Escape');
        await expect(burger).toHaveAttribute('aria-expanded', 'false');
        await burger.click();
        await page.locator('.language-trigger').click();
        await expect(burger).toHaveAttribute('aria-expanded', 'false');
        await expect(page.locator('.language-menu')).toBeVisible();
        await burger.click();
        await expect(page.locator('.language-menu')).toHaveCount(0);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
      });
    }
  }
}

test('Escape from mobile navigation returns focus to burger', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 900 });
  await page.goto('/about');
  const burger = page.locator('.menu-toggle');
  await burger.click();
  await page.locator('#primary-navigation .nav-link').first().focus();
  await page.keyboard.press('Escape');
  await expect(burger).toHaveAttribute('aria-expanded', 'false');
  await expect(burger).toBeFocused();
});
