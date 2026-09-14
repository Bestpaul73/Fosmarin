import { test, expect } from '@playwright/test';

//
// DESKTOP
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
// KEYBOARD
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
// MOBILE / BREAKPOINT
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
// WIDE TOUCH
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

    await page.getByRole('heading', { level: 1 }).tap();

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
