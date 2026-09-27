import { test, expect } from '@playwright/test';

const languages = [
  {
    code: 'en',
    prefix: '',
  },
  {
    code: 'de',
    prefix: '/de',
  },
  {
    code: 'es',
    prefix: '/es',
  },
  {
    code: 'da',
    prefix: '/da',
  },
  {
    code: 'sv',
    prefix: '/sv',
  },
  {
    code: 'el',
    prefix: '/el',
  },
  {
    code: 'it',
    prefix: '/it',
  },
];

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

const viewports = [
  {
    name: 'mobile',
    width: 390,
    height: 844,
  },
  {
    name: 'tablet',
    width: 768,
    height: 1024,
  },
  {
    name: 'desktop',
    width: 1440,
    height: 1000,
  },
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

function getLocalizedPath(prefix, path) {
  if (path === '/') {
    return prefix || '/';
  }

  return `${prefix}${path}`;
}

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

/*
 * STRUCTURE / SEMANTICS
 */

for (const language of languages) {
  for (const path of pages) {
    const localizedPath = getLocalizedPath(language.prefix, path);

    test(`structure: ${language.code} ${localizedPath}`, async ({ page }) => {
      await page.emulateMedia({
        reducedMotion: 'reduce',
      });

      await page.goto(localizedPath);

      await expect(page.locator('html')).toHaveAttribute('lang', language.code);

      await expect(page.locator('main')).toHaveCount(1);

      await expect(page.locator('h1')).toHaveCount(1);

      const title = await page.title();

      expect(title.trim().length).toBeGreaterThan(0);

      const emptyLinks = await page.locator('a[href]').evaluateAll(
        (elements) =>
          elements.filter((element) => {
            const text = element.textContent?.trim();

            const ariaLabel = element.getAttribute('aria-label');

            const labelledBy = element.getAttribute('aria-labelledby');

            const imageAlt = element.querySelector('img[alt]:not([alt=""])');

            return !(text || ariaLabel || labelledBy || imageAlt);
          }).length,
      );

      expect(emptyLinks, `Empty accessible links found on ${localizedPath}`).toBe(0);

      const emptyButtons = await page.locator('button').evaluateAll(
        (elements) =>
          elements.filter((element) => {
            const text = element.textContent?.trim();

            const ariaLabel = element.getAttribute('aria-label');

            const labelledBy = element.getAttribute('aria-labelledby');

            const title = element.getAttribute('title');

            return !(text || ariaLabel || labelledBy || title);
          }).length,
      );

      expect(emptyButtons, `Buttons without accessible names found on ${localizedPath}`).toBe(0);
    });
  }
}

/*
 * KEYBOARD
 */

for (const language of languages) {
  for (const path of pages) {
    const localizedPath = getLocalizedPath(language.prefix, path);

    test(`keyboard: ${language.code} ${localizedPath}`, async ({ page }) => {
      await page.setViewportSize({
        width: 1440,
        height: 1000,
      });

      await page.emulateMedia({
        reducedMotion: 'reduce',
      });

      await page.goto(localizedPath);

      const focusableElements = await getFocusableElements(page);

      expect(focusableElements.length, `No keyboard-focusable elements on ${localizedPath}`).toBeGreaterThan(0);

      await page.evaluate(() => {
        document.body.focus();
      });

      const visited = [];

      for (let index = 0; index < focusableElements.length; index += 1) {
        await page.keyboard.press('Tab');

        const activeElement = await getActiveElementInfo(page);

        expect(activeElement, `Tab ${index + 1} on ${localizedPath} did not focus an element`).not.toBeNull();

        expect(
          activeElement.visible,
          `Focused element is not visible on ${localizedPath}: ${activeElement.tagName} "${activeElement.text}"`,
        ).toBe(true);

        expect(
          activeElement.insideHiddenElement,
          `Focused element is inside hidden content on ${localizedPath}: ${activeElement.tagName} "${activeElement.text}"`,
        ).toBe(false);

        visited.push(activeElement.id);
      }

      const expectedIds = focusableElements.map((element) => element.id);

      expect(visited, `Keyboard focus order mismatch on ${localizedPath}`).toEqual(expectedIds);
    });
  }
}

/*
 * RESPONSIVE / HORIZONTAL OVERFLOW
 */

for (const viewport of viewports) {
  for (const language of languages) {
    for (const path of pages) {
      const localizedPath = getLocalizedPath(language.prefix, path);

      test(`layout: ${viewport.name} ${language.code} ${localizedPath}`, async ({ page }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });

        await page.emulateMedia({
          reducedMotion: 'reduce',
        });

        await page.goto(localizedPath);

        await page.waitForLoadState('networkidle');

        const dimensions = await page.evaluate(() => ({
          viewportWidth: document.documentElement.clientWidth,

          documentWidth: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        }));

        expect(
          dimensions.documentWidth,
          `Horizontal overflow on ${localizedPath} at ${viewport.width}px: document=${dimensions.documentWidth}px viewport=${dimensions.viewportWidth}px`,
        ).toBeLessThanOrEqual(dimensions.viewportWidth + 1);

        const escapedElements = await page.locator('body *').evaluateAll(
          (elements, viewportWidth) =>
            elements
              .filter((element) => {
                const style = window.getComputedStyle(element);

                if (style.display === 'none' || style.visibility === 'hidden') {
                  return false;
                }

                if (element.closest('[aria-hidden="true"]')) {
                  return false;
                }

                const rect = element.getBoundingClientRect();

                if (rect.width === 0 || rect.height === 0) {
                  return false;
                }

                return rect.left < -2 || rect.right > viewportWidth + 2;
              })
              .slice(0, 20)
              .map((element) => ({
                tag: element.tagName.toLowerCase(),

                className: typeof element.className === 'string' ? element.className : '',

                text: element.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80) ?? '',
              })),
          dimensions.viewportWidth,
        );

        expect(
          escapedElements,
          `Visible elements escape viewport on ${localizedPath} at ${viewport.width}px:\n${JSON.stringify(
            escapedElements,
            null,
            2,
          )}`,
        ).toEqual([]);
      });
    }
  }
}
