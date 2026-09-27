import { test, expect } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

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

function getLocalizedPath(prefix, path) {
  if (path === '/') {
    return prefix || '/';
  }

  return `${prefix}${path}`;
}

function printViolations(language, path, violations) {
  if (!violations.length) {
    return;
  }

  console.log(`\nAccessibility violations: ${language} ${path}\n`);

  for (const violation of violations) {
    console.log(`${violation.id} — ${violation.impact ?? 'unknown impact'}`);

    for (const node of violation.nodes) {
      const target = node.target?.join(' ') ?? 'unknown target';

      const contrastData = node.any?.find((item) => item.id === 'color-contrast')?.data;

      if (contrastData) {
        console.log(`  ${target}`);

        console.log(`  contrast: ${contrastData.contrastRatio} / ${contrastData.expectedContrastRatio}`);

        console.log(`  colors: ${contrastData.fgColor} on ${contrastData.bgColor}`);
      } else {
        console.log(`  ${target}`);

        console.log(`  ${node.failureSummary ?? 'See axe output for details.'}`);
      }

      console.log('');
    }
  }
}

for (const language of languages) {
  for (const path of pages) {
    const localizedPath = getLocalizedPath(language.prefix, path);

    test(`axe: ${language.code} ${localizedPath}`, async ({ page }) => {
      await page.emulateMedia({
        reducedMotion: 'reduce',
      });

      await page.goto(localizedPath);

      await page.waitForLoadState('networkidle');

      const accessibilityScanResults = await new AxeBuilder({
        page,
      })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      printViolations(language.code, localizedPath, accessibilityScanResults.violations);

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
}
