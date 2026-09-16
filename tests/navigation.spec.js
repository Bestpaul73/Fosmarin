import { test, expect } from '@playwright/test';

//
// HEADER — DESKTOP
//

test('desktop: hover opens submenu', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const technologyLink = nav.getByRole('link', {
    name: 'Technology',
    exact: true,
  });

  await technologyLink.hover();

  await expect(
    nav.getByRole('link', {
      name: 'Fibre Optic Acoustic Sensing (FOAS)',
    }),
  ).toBeVisible();
});

test('desktop: mouse leave closes submenu', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const technologyLink = nav.getByRole('link', {
    name: 'Technology',
    exact: true,
  });

  const firstSubmenuLink = nav.getByRole('link', {
    name: 'Fibre Optic Acoustic Sensing (FOAS)',
  });

  await technologyLink.hover();

  await expect(firstSubmenuLink).toBeVisible();

  await page.getByRole('heading', { level: 1 }).hover();

  await expect(firstSubmenuLink).not.toBeVisible();
});

//
// HEADER — KEYBOARD
//

test('keyboard: ArrowDown opens submenu and focuses first link', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const aboutLink = nav.getByRole('link', {
    name: 'About Fosmarin',
    exact: true,
  });

  const firstSubmenuLink = nav.getByRole('link', {
    name: 'Project Overview',
  });

  await aboutLink.focus();

  await page.keyboard.press('ArrowDown');

  await expect(firstSubmenuLink).toBeVisible();
  await expect(firstSubmenuLink).toBeFocused();
});

test('keyboard: ArrowDown and ArrowUp cycle through submenu', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const aboutLink = nav.getByRole('link', {
    name: 'About Fosmarin',
    exact: true,
  });

  const firstSubmenuLink = nav.getByRole('link', {
    name: 'Project Overview',
  });

  const lastSubmenuLink = nav.getByRole('link', {
    name: 'Consortium at a Glance',
  });

  await aboutLink.focus();

  await page.keyboard.press('ArrowDown');

  await expect(firstSubmenuLink).toBeFocused();

  await page.keyboard.press('ArrowUp');

  await expect(lastSubmenuLink).toBeFocused();

  await page.keyboard.press('ArrowDown');

  await expect(firstSubmenuLink).toBeFocused();
});

test('keyboard: ArrowRight opens next submenu', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const challengeLink = nav.getByRole('link', {
    name: 'The Challenge',
    exact: true,
  });

  const useCasesFirstLink = nav.getByRole('link', {
    name: 'Telecom Cables Protection',
  });

  await challengeLink.focus();

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowRight');

  await expect(useCasesFirstLink).toBeVisible();
  await expect(useCasesFirstLink).toBeFocused();
});

test('keyboard: Escape closes submenu and returns focus', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const challengeLink = nav.getByRole('link', {
    name: 'The Challenge',
    exact: true,
  });

  const firstSubmenuLink = nav.getByRole('link', {
    name: 'Threats to Subsea Cables',
  });

  await challengeLink.focus();

  await page.keyboard.press('ArrowDown');

  await expect(firstSubmenuLink).toBeFocused();

  await page.keyboard.press('Escape');

  await expect(firstSubmenuLink).not.toBeVisible();
  await expect(challengeLink).toBeFocused();
});

test('keyboard: click outside closes submenu', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const challengeLink = nav.getByRole('link', {
    name: 'The Challenge',
    exact: true,
  });

  const firstSubmenuLink = nav.getByRole('link', {
    name: 'Threats to Subsea Cables',
  });

  await challengeLink.focus();

  await page.keyboard.press('ArrowDown');

  await expect(firstSubmenuLink).toBeVisible();

  // Кликаем гарантированно вне Header.
  await page.mouse.click(20, 400);

  await expect(firstSubmenuLink).not.toBeVisible();
});

//
// HEADER — MOBILE / BREAKPOINT
//

test('1200px: burger is visible', async ({ page }) => {
  await page.setViewportSize({
    width: 1200,
    height: 800,
  });

  await page.goto('/');

  const burger = page.getByRole('button', {
    name: 'Toggle navigation',
  });

  await expect(burger).toBeVisible();

  await expect(burger).toHaveAttribute('aria-controls', 'primary-navigation');
});

test('1201px: burger is hidden', async ({ page }) => {
  await page.setViewportSize({
    width: 1201,
    height: 800,
  });

  await page.goto('/');

  await expect(
    page.getByRole('button', {
      name: 'Toggle navigation',
    }),
  ).not.toBeVisible();
});

test('mobile: burger opens navigation', async ({ page }) => {
  await page.setViewportSize({
    width: 900,
    height: 800,
  });

  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  const burger = page.getByRole('button', {
    name: 'Toggle navigation',
  });

  const aboutLink = nav.getByRole('link', {
    name: 'About Fosmarin',
    exact: true,
  });

  await expect(aboutLink).not.toBeVisible();

  await burger.click();

  await expect(aboutLink).toBeVisible();

  await expect(burger).toHaveAttribute('aria-expanded', 'true');
});

test('mobile: submenu toggle opens submenu', async ({ page }) => {
  await page.setViewportSize({
    width: 900,
    height: 800,
  });

  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  await page
    .getByRole('button', {
      name: 'Toggle navigation',
    })
    .click();

  const submenuButton = nav.getByRole('button', {
    name: 'About Fosmarin sections',
  });

  const firstSubmenuLink = nav.getByRole('link', {
    name: 'Project Overview',
  });

  await expect(submenuButton).toHaveAttribute('aria-controls', 'submenu-about');

  await submenuButton.click();

  await expect(firstSubmenuLink).toBeVisible();

  await expect(submenuButton).toHaveAttribute('aria-expanded', 'true');
});

test('mobile: opening another submenu closes previous one', async ({ page }) => {
  await page.setViewportSize({
    width: 900,
    height: 800,
  });

  await page.goto('/');

  const nav = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  await page
    .getByRole('button', {
      name: 'Toggle navigation',
    })
    .click();

  const aboutButton = nav.getByRole('button', {
    name: 'About Fosmarin sections',
  });

  const challengeButton = nav.getByRole('button', {
    name: 'The Challenge sections',
  });

  const aboutFirstLink = nav.getByRole('link', {
    name: 'Project Overview',
  });

  const challengeFirstLink = nav.getByRole('link', {
    name: 'Threats to Subsea Cables',
  });

  await aboutButton.click();

  await expect(aboutFirstLink).toBeVisible();

  await challengeButton.click();

  await expect(aboutFirstLink).not.toBeVisible();
  await expect(challengeFirstLink).toBeVisible();
});

//
// HEADER — WIDE TOUCH
//

test.describe('wide touch', () => {
  test.use({
    viewport: {
      width: 1600,
      height: 1024,
    },
    hasTouch: true,
  });

  test('submenu button is available and opens submenu', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', {
      name: 'Primary navigation',
    });

    const submenuButton = nav.getByRole('button', {
      name: 'Technology sections',
    });

    const firstSubmenuLink = nav.getByRole('link', {
      name: 'Fibre Optic Acoustic Sensing (FOAS)',
    });

    await expect(submenuButton).toBeVisible();

    await expect(submenuButton).toHaveAttribute('aria-controls', 'submenu-technology');

    await submenuButton.tap();

    await expect(firstSubmenuLink).toBeVisible();

    await expect(submenuButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('tap outside closes submenu', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', {
      name: 'Primary navigation',
    });

    const submenuButton = nav.getByRole('button', {
      name: 'Technology sections',
    });

    const firstSubmenuLink = nav.getByRole('link', {
      name: 'Fibre Optic Acoustic Sensing (FOAS)',
    });

    await submenuButton.tap();

    await expect(firstSubmenuLink).toBeVisible();

    await page
      .getByRole('heading', {
        level: 1,
      })
      .tap();

    await expect(firstSubmenuLink).not.toBeVisible();
  });
});

test.describe('touch compact header', () => {
  test.use({
    viewport: {
      width: 1366,
      height: 1024,
    },
    hasTouch: true,
  });

  test('1366px touch: burger is visible', async ({ page }) => {
    await page.goto('/');

    const burger = page.getByRole('button', {
      name: 'Toggle navigation',
    });

    await expect(burger).toBeVisible();

    await expect(burger).toHaveAttribute('aria-controls', 'primary-navigation');
  });
});

//
// FOOTER
//

test('footer: renders all main columns', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: 'About Fosmarin',
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'Quick Links',
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'Resources',
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'Follow Us',
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'Contact',
    }),
  ).toBeVisible();
});

test('footer: About section link opens correct hash', async ({ page }) => {
  await page.goto('/');

  await page
    .getByRole('navigation', {
      name: 'About Fosmarin footer navigation',
    })
    .getByRole('link', {
      name: 'Mission & Vision',
    })
    .click();

  await expect(page).toHaveURL(/\/about#mission-and-vision$/);
});

test('footer: website link returns to home page', async ({ page }) => {
  await page.goto('/technology');

  await page
    .getByRole('link', {
      name: 'www.fosmarin.eu',
    })
    .click();

  await expect(page).toHaveURL('/');
});

//
// STICKY HEADER
//
test('logo: returns current home page to top', async ({ page }) => {
  await page.goto('/de');

  await page.evaluate(() => {
    window.scrollTo(0, 1200);
  });

  await expect.poll(async () => page.evaluate(() => Math.round(window.scrollY))).toBeGreaterThan(0);

  await page
    .getByRole('link', {
      name: 'FOSMARIN',
      exact: true,
    })
    .click();

  await expect(page).toHaveURL(/\/de$/);

  await expect.poll(async () => page.evaluate(() => Math.round(window.scrollY))).toBe(0);
});

test('sticky header: stays at top after page scroll', async ({ page }) => {
  await page.goto('/technology');

  const header = page.locator('.header');

  await expect(header).toBeVisible();

  await page.evaluate(() => {
    window.scrollTo(0, 1200);
  });

  await expect
    .poll(async () => {
      const box = await header.boundingBox();

      if (!box) {
        return null;
      }

      return Math.round(box.y);
    })
    .toBe(0);
});

test('sticky header: hash target is not hidden behind header', async ({ page }) => {
  await page.goto('/technology#predictive-analytics-and-ai');

  const header = page.locator('.header');

  const target = page.locator('#predictive-analytics-and-ai');

  await expect(target).toBeVisible();

  await expect
    .poll(async () => {
      const headerBox = await header.boundingBox();

      const targetBox = await target.boundingBox();

      if (!headerBox || !targetBox) {
        return false;
      }

      const headerBottom = headerBox.y + headerBox.height;

      return targetBox.y >= headerBottom;
    })
    .toBe(true);
});

//
// PAGE SCROLL
//

test('navigation: changing page resets scroll position to top', async ({ page }) => {
  await page.goto('/de/about');

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await expect.poll(async () => page.evaluate(() => Math.round(window.scrollY))).toBeGreaterThan(0);

  const nav = page.getByRole('navigation', {
    name: 'Hauptnavigation',
  });

  await nav
    .getByRole('link', {
      name: 'Die Herausforderung',
      exact: true,
    })
    .click();

  await expect(page).toHaveURL(/\/de\/challenge$/);

  await expect.poll(async () => page.evaluate(() => Math.round(window.scrollY))).toBe(0);
});

//
// LANGUAGE SELECTOR
//

test('language: English to German keeps current page', async ({ page }) => {
  await page.goto('/technology');

  await page
    .getByRole('button', {
      name: 'Select language',
    })
    .click();

  await page
    .getByRole('menuitemradio', {
      name: /Deutsch/,
    })
    .click();

  await expect(page).toHaveURL(/\/de\/technology$/);

  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
});

test('language: German to Spanish keeps page and hash', async ({ page }) => {
  await page.goto('/de/technology#predictive-analytics-and-ai');

  await page.locator('.language-trigger').click();

  await page
    .getByRole('menuitemradio', {
      name: /Español/,
    })
    .click();

  await expect(page).toHaveURL(/\/es\/technology#predictive-analytics-and-ai$/);

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('language: direct localized URLs set correct document language', async ({ page }) => {
  await page.goto('/de/about');

  await expect(page.locator('html')).toHaveAttribute('lang', 'de');

  await page.goto('/es/about');

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');

  await page.goto('/about');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('language: keyboard opens menu, moves focus and selects language', async ({ page }) => {
  await page.goto('/technology');

  const languageButton = page.getByRole('button', {
    name: 'Select language',
  });

  await languageButton.focus();

  await page.keyboard.press('ArrowDown');

  const germanOption = page.getByRole('menuitemradio', {
    name: /Deutsch/,
  });

  await expect(germanOption).toBeVisible();
  await expect(germanOption).toBeFocused();

  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/\/de\/technology$/);

  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
});

//
// LANGUAGE AUTO-DETECTION
//

async function mockBrowserLanguages(page, languages) {
  await page.addInitScript((browserLanguages) => {
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get: () => browserLanguages[0],
    });

    Object.defineProperty(window.navigator, 'languages', {
      configurable: true,
      get: () => browserLanguages,
    });
  }, languages);
}

test('language: root auto-detects German browser and redirects to /de', async ({ page }) => {
  await mockBrowserLanguages(page, ['de-DE', 'de']);

  await page.goto('/');

  await expect(page).toHaveURL(/\/de$/);
});

test('language: root auto-detects Spanish browser and redirects to /es', async ({ page }) => {
  await mockBrowserLanguages(page, ['es-ES', 'es']);

  await page.goto('/');

  await expect(page).toHaveURL(/\/es$/);
});

test('language: manual selection is saved and overrides browser language on root', async ({ page }) => {
  await mockBrowserLanguages(page, ['es-ES', 'es']);

  await page.goto('/');

  await expect(page).toHaveURL(/\/es$/);

  await page
    .getByRole('button', {
      name: 'Select language',
    })
    .click();

  await page
    .getByRole('menuitemradio', {
      name: 'Deutsch',
    })
    .click();

  await expect(page).toHaveURL(/\/de$/);

  await page.goto('/');

  await expect(page).toHaveURL(/\/de$/);
});

//
// MULTILINGUAL SEO
//

test('SEO: German Technology page has localized title and description', async ({ page }) => {
  await page.goto('/de/technology');

  await expect(page).toHaveTitle('Technologie | Fibre Optic Acoustic Sensing | FOSMARIN');

  const description = page.locator('meta[name="description"]');

  await expect(description).toHaveAttribute('content', /FOSMARIN/);
});

test('SEO: canonical points to the current localized page without query or hash', async ({ page }) => {
  await page.goto('/de/technology?source=test#predictive-analytics-and-ai');

  const canonical = page.locator('link[rel="canonical"]');

  await expect(canonical).toHaveCount(1);

  const href = await canonical.getAttribute('href');

  expect(new URL(href).pathname).toBe('/de/technology');

  expect(new URL(href).search).toBe('');

  expect(new URL(href).hash).toBe('');
});

test('SEO: page exposes EN DE ES and x-default hreflang links', async ({ page }) => {
  await page.goto('/es/about');

  const alternates = page.locator('link[rel="alternate"][hreflang]');

  await expect(alternates).toHaveCount(4);

  const hrefs = await page.evaluate(() => {
    return Object.fromEntries(
      Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map((link) => [
        link.getAttribute('hreflang'),
        link.getAttribute('href'),
      ]),
    );
  });

  expect(new URL(hrefs.en).pathname).toBe('/about');

  expect(new URL(hrefs.de).pathname).toBe('/de/about');

  expect(new URL(hrefs.es).pathname).toBe('/es/about');

  expect(new URL(hrefs['x-default']).pathname).toBe('/about');
});

test('SEO: Open Graph metadata follows the current language and URL', async ({ page }) => {
  await page.goto('/es/challenge');

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'El desafío | Protección de cables submarinos | FOSMARIN',
  );

  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'es_ES');

  const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');

  expect(new URL(ogUrl).pathname).toBe('/es/challenge');
});

//
// SEARCH ENGINE FILES
//

test('SEO: sitemap is publicly available', async ({ request }) => {
  const response = await request.get('/sitemap.xml');

  expect(response.ok()).toBeTruthy();

  const sitemap = await response.text();

  expect(sitemap).toContain('<loc>https://fosmarin.vercel.app/technology</loc>');

  expect(sitemap).toContain('hreflang="de"');

  expect(sitemap).toContain('hreflang="es"');

  expect(sitemap).toContain('hreflang="x-default"');
});

test('SEO: robots.txt allows crawling and references sitemap', async ({ request }) => {
  const response = await request.get('/robots.txt');

  expect(response.ok()).toBeTruthy();

  const robots = await response.text();

  expect(robots).toContain('User-agent: *');

  expect(robots).toContain('Allow: /');

  expect(robots).toContain('Sitemap: https://fosmarin.vercel.app/sitemap.xml');
});

//
// MOBILE HORIZONTAL OVERFLOW
//

const mobileViewports = [
  {
    name: 'iPhone SE',
    width: 375,
    height: 667,
  },
  {
    name: 'iPhone 14',
    width: 390,
    height: 844,
  },
  {
    name: 'Samsung Galaxy',
    width: 412,
    height: 915,
  },
];

const mobilePages = [
  '/',
  '/about',
  '/challenge',
  '/use-cases',
  '/technology',
  '/consortium',
  '/news',
  '/resources',
  '/contact',

  '/de',
  '/de/about',
  '/de/challenge',
  '/de/use-cases',
  '/de/technology',
  '/de/consortium',
  '/de/news',
  '/de/resources',
  '/de/contact',

  '/es',
  '/es/about',
  '/es/challenge',
  '/es/use-cases',
  '/es/technology',
  '/es/consortium',
  '/es/news',
  '/es/resources',
  '/es/contact',
];

for (const viewport of mobileViewports) {
  test.describe(`mobile overflow: ${viewport.name}`, () => {
    test.use({
      viewport: {
        width: viewport.width,
        height: viewport.height,
      },
    });

    for (const path of mobilePages) {
      test(`${path} has no horizontal overflow`, async ({ page }) => {
        await page.goto(path);

        await page.waitForLoadState('networkidle');

        const result = await page.evaluate(() => {
          const viewportWidth =
            window.innerWidth;

          const root =
            document.documentElement;

          const body =
            document.body;

          const elements = [
            root,
            body,
            ...document.querySelectorAll(
              'body *'
            ),
          ];

          const overflowingElements =
            elements
              .map((element) => {
                const rect =
                  element.getBoundingClientRect();

                const styles =
                  window.getComputedStyle(
                    element
                  );

                return {
                  tag:
                    element.tagName.toLowerCase(),

                  id:
                    element.id || '',

                  className:
                    typeof element.className ===
                    'string'
                      ? element.className
                      : '',

                  text:
                    element.textContent
                      ?.trim()
                      .replace(/\s+/g, ' ')
                      .slice(0, 120) || '',

                  left:
                    Math.round(
                      rect.left
                    ),

                  right:
                    Math.round(
                      rect.right
                    ),

                  width:
                    Math.round(
                      rect.width
                    ),

                  scrollWidth:
                    element.scrollWidth,

                  clientWidth:
                    element.clientWidth,

                  whiteSpace:
                    styles.whiteSpace,

                  overflowX:
                    styles.overflowX,

                  minWidth:
                    styles.minWidth,

                  widthCss:
                    styles.width,
                };
              })
              .filter((item) => {
                const exceedsRight =
                  item.right >
                  viewportWidth + 1;

                const exceedsLeft =
                  item.left < -1;

                const hasInternalOverflow =
                  item.scrollWidth >
                  item.clientWidth + 1;

                return (
                  exceedsRight ||
                  exceedsLeft ||
                  hasInternalOverflow
                );
              })
              .slice(0, 30);

          return {
            viewportWidth,

            documentScrollWidth:
              root.scrollWidth,

            bodyScrollWidth:
              body.scrollWidth,

            overflowingElements,
          };
        });

        const debugInfo =
          JSON.stringify(
            {
              path,
              viewport:
                viewport.name,
              ...result,
            },
            null,
            2
          );

        expect(
          result.documentScrollWidth,
          debugInfo
        ).toBeLessThanOrEqual(
          result.viewportWidth
        );

        expect(
          result.bodyScrollWidth,
          debugInfo
        ).toBeLessThanOrEqual(
          result.viewportWidth
        );
      });
    }
  });
}