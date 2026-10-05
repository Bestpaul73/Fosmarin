import { test, expect } from '@playwright/test';
import { languages, localizePath } from '../src/i18n/languages.js';
import { navigation } from '../src/data/navigation.js';

const widths = [320, 393, 768, 1024, 1366, 1920];
const paths = ['/', ...navigation.map(({ path }) => path)];

const settings = (textSize = 0, mode = 'default') => ({
  textSize,
  mode,
  underlineLinks: false,
  readableFont: false,
});

async function seed(page, value) {
  await page.addInitScript((saved) => {
    localStorage.setItem('fosmarin-language', 'en');

    if (!localStorage.getItem('fosmarin-accessibility')) {
      localStorage.setItem('fosmarin-accessibility', JSON.stringify(saved));
    }
  }, value);
}

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;

    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

async function checkOverflow(page) {
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth))
    .toBeLessThanOrEqual(1);
}

async function size(page) {
  await settle(page);

  return page.locator('main h1').evaluate((element) => parseFloat(getComputedStyle(element).fontSize));
}

const trigger = (page) => page.locator('.accessibility-tools__trigger');

const panel = (page) => page.locator('#accessibility-dialog');

const controls = (page) => page.locator('.accessibility-tools__controls > button');

for (const method of ['outside', 'escape', 'close']) {
  test(`panel: ${method} closes without shifting the page`, async ({ page }) => {
    await seed(page, settings());
    await page.goto('/about');
    await page.evaluate(() => window.scrollTo(0, 400));

    const before = await page.evaluate(() => ({
      width: document.documentElement.clientWidth,
      y: window.scrollY,
    }));

    await trigger(page).click();
    await expect(panel(page)).toBeVisible();

    expect(await page.evaluate(() => document.documentElement.clientWidth)).toBe(before.width);

    expect(await page.evaluate(() => window.scrollY)).toBe(before.y);

    if (method === 'outside') {
      await page.mouse.click(2, 200);
    }

    if (method === 'escape') {
      await page.keyboard.press('Escape');
    }

    if (method === 'close') {
      await page.locator('.accessibility-tools__heading button').click();
    }

    await expect(panel(page)).not.toBeVisible();

    if (method !== 'outside') {
      await expect(trigger(page)).toBeFocused();
    }
  });
}

test('resize: maximum text follows viewport and Reset restores it', async ({ page }) => {
  await seed(page, settings());
  await page.setViewportSize({ width: 1920, height: 900 });
  await page.goto('/');

  const desktopBase = await size(page);

  await trigger(page).click();

  for (let step = 0; step < 4; step += 1) {
    await controls(page).nth(0).click();
  }

  await expect(controls(page).nth(0)).toBeDisabled();

  await expect.poll(() => size(page)).toBeCloseTo(desktopBase * 1.4, 1);

  await page.setViewportSize({ width: 393, height: 852 });
  await settle(page);

  const mobileLarge = await size(page);

  await controls(page).nth(8).click();

  const mobileBase = await size(page);

  expect(mobileLarge).toBeCloseTo(mobileBase * 1.4, 1);

  await page.keyboard.press('Escape');
  await checkOverflow(page);

  await page.setViewportSize({ width: 1920, height: 900 });

  await expect.poll(() => size(page)).toBeCloseTo(desktopBase, 1);
});

for (const mode of ['high', 'light']) {
  test(`contrast: ${mode} keeps submenu hover and keyboard focus visible`, async ({ page }) => {
    await seed(page, settings(0, mode));
    await page.setViewportSize({ width: 1920, height: 900 });
    await page.goto('/about');

    const item = page.locator('.nav-item').nth(2);

    await item.locator('.nav-link').hover();

    const link = item.locator('.submenu a').first();

    await expect(link).toBeVisible();

    const background = await link.evaluate((element) => getComputedStyle(element).backgroundColor);

    await link.hover();

    await expect.poll(() => link.evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(background);

    await page.mouse.move(0, 0);
    await item.locator('.nav-link').focus();
    await page.keyboard.press('ArrowDown');

    await expect(link).toBeFocused();

    await expect.poll(() => link.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe('none');
  });
}

test('panel: settings survive reload and SPA navigation', async ({ page }) => {
  await seed(page, settings());
  await page.goto('/about');
  await trigger(page).click();

  await controls(page).nth(0).click();
  await controls(page).nth(0).click();
  await controls(page).nth(3).click();

  await page.keyboard.press('Escape');

  await expect(page.locator('html')).toHaveAttribute('data-a11y-mode', 'high');

  await page.locator('footer a[href="/contact"]').first().click();
  await expect(page).toHaveURL(/\/contact$/);

  await expect(page.locator('html')).toHaveClass(/a11y-large-text/);

  await page.reload();

  await expect(page.locator('html')).toHaveAttribute('data-a11y-mode', 'high');

  await expect(page.locator('html')).toHaveClass(/a11y-large-text/);
});

// 9 страниц × 7 языков × 6 ширин × 3 размера = 1134 сценария.
for (const { code } of languages) {
  for (const width of widths) {
    for (const textSize of [0, 2, 4]) {
      for (const path of paths) {
        test(`layout: ${code} ${width}px size ${textSize} ${path}`, async ({ page }, testInfo) => {
          await seed(page, settings(textSize));
          await page.setViewportSize({ width, height: 900 });
          await page.goto(localizePath(path, code));
          await settle(page);

          try {
            await checkOverflow(page);

            const menu = page.locator('.menu-toggle');

            if (await menu.isVisible()) {
              await menu.click();
            }

            await expect(page.locator('.main-nav')).toBeVisible();

            const clipped = await page.locator('.main-nav > .nav-item > .nav-link').evaluateAll((links) => {
              const width = document.documentElement.clientWidth;

              return links
                .filter((link) => {
                  const rect = link.getBoundingClientRect();

                  return rect.left < -1 || rect.right > width + 1 || link.scrollWidth > link.clientWidth + 1;
                })
                .map((link) => link.textContent);
            });

            expect(clipped).toEqual([]);
          } catch (error) {
            const diagnostics = await page.evaluate(() =>
              [...document.querySelectorAll('body *')]
                .filter((element) => element instanceof HTMLElement && element.getClientRects().length)
                .filter((element) => {
                  const rect = element.getBoundingClientRect();

                  return rect.left < -1 || rect.right > document.documentElement.clientWidth + 1;
                })
                .slice(0, 30)
                .map((element) => ({
                  tag: element.tagName,
                  class: element.className,
                })),
            );

            await testInfo.attach('overflow-elements', {
              body: JSON.stringify(diagnostics, null, 2),
              contentType: 'application/json',
            });

            await testInfo.attach('layout', {
              body: await page.screenshot({ fullPage: true }),
              contentType: 'image/png',
            });

            throw error;
          }
        });
      }
    }
  }
}
