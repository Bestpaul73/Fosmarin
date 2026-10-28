import { test, expect } from '@playwright/test';
import en from '../src/i18n/en';
import de from '../src/i18n/de';
import es from '../src/i18n/es';
import da from '../src/i18n/da';
import sv from '../src/i18n/sv';
import el from '../src/i18n/el';
import it from '../src/i18n/it';

const translations = { en, de, es, da, sv, el, it };
for (const invalidEmail of [false, true]) {
  test(`errors follow language changes, invalid email: ${invalidEmail}`, async ({ page }) => {
    let requests = 0;
    await page.route('**/api/contact', async (route) => {
      requests += 1;
      await route.abort();
    });
    await page.goto('/de/contact');
    await page.locator('#contact-organisation').fill('Keep this organisation');
    if (invalidEmail) await page.locator('#contact-email').fill('invalid-email');
    await page.locator('.contact-submit').click();
    for (const language of ['en', 'es', 'da', 'sv', 'el', 'it', 'de']) {
      await page.locator('.language-trigger').click();
      await page.locator(`[data-language="${language}"]`).click();
      await expect(page.locator('html')).toHaveAttribute('lang', language);
      const errors = translations[language].contact.form.errors;
      for (const field of ['name', 'email', 'subject', 'message']) {
        const key = field === 'email' && invalidEmail ? 'emailInvalid' : field;
        await expect(page.locator(`#contact-${field}-error`)).toHaveText(errors[key]);
        await expect(page.locator(`#contact-${field}`)).toHaveAttribute('aria-invalid', 'true');
      }
      await expect(page.locator('#contact-organisation')).toHaveValue('Keep this organisation');
    }
    await page.locator('#contact-name').fill('Paul');
    await expect(page.locator('#contact-name-error')).toHaveCount(0);
    await expect(page.locator('#contact-subject-error')).toBeVisible();
    expect(requests).toBe(0);
  });
}
