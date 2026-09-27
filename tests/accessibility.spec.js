import { test, expect } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

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

function printViolations(violations) {
  if (!violations.length) {
    return;
  }

  console.log('\nAccessibility violations:\n');

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

for (const path of pages) {
  test(`accessibility: ${path}`, async ({ page }) => {
    await page.emulateMedia({
      reducedMotion: 'reduce',
    });

    await page.goto(path);

    const accessibilityScanResults = await new AxeBuilder({
      page,
    })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    printViolations(accessibilityScanResults.violations);

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}
