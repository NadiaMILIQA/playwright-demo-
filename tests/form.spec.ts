import { test, expect } from '@playwright/test'; 

test('formulaire – test de soumission', async ({ page }) => {
  await page.goto('https://example.com/form');

  await page.fill('#nom', 'Nadia');
  await page.fill('#email', 'nadia@test.com');
  await page.click('#submit');

  const message = await page.locator('#success-message');
  await expect(message).toContainText('Merci');
});
