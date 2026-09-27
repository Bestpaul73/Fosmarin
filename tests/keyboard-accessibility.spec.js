import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/about',
  '/challenge',
  '/use-cases',
  '/technology',
  '/consortium',
  '/news',
  '/resources',
  '/contact',
];

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'summary',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

async function getFocusableElements(page) {
  return page.locator(focusableSelector).evaluateAll((elements) =>
    elements
      .filter((element) => {
        const style = window.getComputedStyle(element);

        const rect = element.getBoundingClientRect();

        const isVisible =
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          Number(style.opacity) !== 0 &&
          rect.width > 0 &&
          rect.height > 0;

        const isHiddenFromInteraction = element.closest('[hidden], [inert], [aria-hidden="true"]') !== null;

        return isVisible && !isHiddenFromInteraction;
      })
      .map((element, index) => {
        if (!element.dataset.keyboardTestId) {
          element.dataset.keyboardTestId = `keyboard-test-${index}`;
        }

        return {
          id: element.dataset.keyboardTestId,
          tagName: element.tagName.toLowerCase(),
          text: element.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80) ?? '',
          href: element.getAttribute('href'),
          ariaLabel: element.getAttribute('aria-label'),
        };
      }),
  );
}

async function getActiveElementInfo(page) {
  return page.evaluate(() => {
    const element = document.activeElement;

    if (!element || element === document.body) {
      return null;
    }

    const style = window.getComputedStyle(element);

    const rect = element.getBoundingClientRect();

    return {
      id: element.dataset.keyboardTestId ?? null,

      tagName: element.tagName.toLowerCase(),

      text: element.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80) ?? '',

      visible:
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        Number(style.opacity) !== 0 &&
        rect.width > 0 &&
        rect.height > 0,

      insideHiddenElement: element.closest('[hidden], [inert], [aria-hidden="true"]') !== null,
    };
  });
}

for (const path of pages) {
  test(`keyboard navigation: ${path}`, async ({ page }) => {
    await page.emulateMedia({
      reducedMotion: 'reduce',
    });

    await page.goto(path);

    const focusableElements = await getFocusableElements(page);

    expect(focusableElements.length, `No keyboard-focusable elements found on ${path}`).toBeGreaterThan(0);

    await page.evaluate(() => {
      document.body.focus();
    });

    const visited = [];

    for (let index = 0; index < focusableElements.length; index += 1) {
      await page.keyboard.press('Tab');

      const activeElement = await getActiveElementInfo(page);

      expect(activeElement, `Tab ${index + 1} on ${path} did not focus an element`).not.toBeNull();

      expect(
        activeElement.visible,
        `Focused element is not visible on ${path}: ${activeElement.tagName} "${activeElement.text}"`,
      ).toBe(true);

      expect(
        activeElement.insideHiddenElement,
        `Focused element is inside hidden/inert content on ${path}: ${activeElement.tagName} "${activeElement.text}"`,
      ).toBe(false);

      visited.push(activeElement.id);
    }

    const expectedIds = focusableElements.map((element) => element.id);

    expect(visited, `Keyboard focus order does not match the focusable elements on ${path}`).toEqual(expectedIds);
  });
}
