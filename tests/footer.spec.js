import { test, expect } from '@playwright/test';

test('footer: renders all main columns', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'About Fosmarin' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Quick Links' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Resources' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Follow Us' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Contact' })
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