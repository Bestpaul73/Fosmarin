import { test, expect } from '@playwright/test';

test.describe('search keyboard accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({
      reducedMotion: 'reduce',
    });

    await page.goto('/');
  });

  test('opens from keyboard and focuses search field', async ({ page }) => {
    const searchButton = page.getByRole('button', {
      name: 'Search FOSMARIN',
    });

    await searchButton.focus();

    await expect(searchButton).toBeFocused();

    await page.keyboard.press('Enter');

    await expect(searchButton).toHaveAttribute('aria-expanded', 'true');

    const searchInput = page.getByRole('searchbox', {
      name: 'Search FOSMARIN',
    });

    await expect(searchInput).toBeVisible();

    await expect(searchInput).toBeFocused();
  });

  test('Escape closes search and returns focus to trigger', async ({ page }) => {
    const searchButton = page.getByRole('button', {
      name: 'Search FOSMARIN',
    });

    await searchButton.focus();

    await page.keyboard.press('Enter');

    const searchInput = page.getByRole('searchbox', {
      name: 'Search FOSMARIN',
    });

    await expect(searchInput).toBeFocused();

    await page.keyboard.press('Escape');

    await expect(searchButton).toHaveAttribute('aria-expanded', 'false');

    await expect(searchInput).not.toBeVisible();

    await expect(searchButton).toBeFocused();
  });

  test('ArrowDown selects first search result', async ({ page }) => {
    const searchButton = page.getByRole('button', {
      name: 'Search FOSMARIN',
    });

    await searchButton.click();

    const searchInput = page.getByRole('searchbox', {
      name: 'Search FOSMARIN',
    });

    await searchInput.fill('consortium');

    const firstResult = page.locator('#site-search-result-0');

    await expect(firstResult).toBeVisible();

    await expect(searchInput).not.toHaveAttribute('aria-activedescendant');

    await page.keyboard.press('ArrowDown');

    await expect(searchInput).toHaveAttribute('aria-activedescendant', 'site-search-result-0');

    await expect(firstResult).toHaveClass(/site-search-result--active/);
  });

  test('ArrowDown and ArrowUp move active search result', async ({ page }) => {
    await page
      .getByRole('button', {
        name: 'Search FOSMARIN',
      })
      .click();

    const searchInput = page.getByRole('searchbox', {
      name: 'Search FOSMARIN',
    });

    await searchInput.fill('project');

    const results = page.locator('.site-search-result');

    await expect(results.first()).toBeVisible();

    expect(await results.count()).toBeGreaterThan(1);

    await page.keyboard.press('ArrowDown');

    await expect(searchInput).toHaveAttribute('aria-activedescendant', 'site-search-result-0');

    await page.keyboard.press('ArrowDown');

    await expect(searchInput).toHaveAttribute('aria-activedescendant', 'site-search-result-1');

    await page.keyboard.press('ArrowUp');

    await expect(searchInput).toHaveAttribute('aria-activedescendant', 'site-search-result-0');
  });

  test('Enter opens active search result', async ({ page }) => {
    await page
      .getByRole('button', {
        name: 'Search FOSMARIN',
      })
      .click();

    const searchInput = page.getByRole('searchbox', {
      name: 'Search FOSMARIN',
    });

    await searchInput.fill('consortium');

    const firstResult = page.locator('#site-search-result-0');

    await expect(firstResult).toBeVisible();

    const targetHref = await firstResult.getAttribute('href');

    expect(targetHref).not.toBeNull();

    await page.keyboard.press('ArrowDown');

    await page.keyboard.press('Enter');

    await expect(page.locator('#site-search-panel')).not.toBeVisible();

    await expect(page).toHaveURL(new RegExp(targetHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  });

  test('ArrowUp from no selection wraps to last result', async ({ page }) => {
    await page
      .getByRole('button', {
        name: 'Search FOSMARIN',
      })
      .click();

    const searchInput = page.getByRole('searchbox', {
      name: 'Search FOSMARIN',
    });

    await searchInput.fill('project');

    const results = page.locator('.site-search-result');

    const resultCount = await results.count();

    expect(resultCount).toBeGreaterThan(0);

    await page.keyboard.press('ArrowUp');

    await expect(searchInput).toHaveAttribute('aria-activedescendant', `site-search-result-${resultCount - 1}`);
  });
});
