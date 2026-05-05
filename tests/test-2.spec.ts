import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hepsiburada.com/');
  await page.locator('.productCard-module_article__HJ97o').first().click();
  await page.locator('#addToCart').click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator('[data-test-id="addToCart"]').click();
  await page.getByText('Ürün sepetinizde').click();
  await page.getByRole('button', { name: 'Sepete git' }).click();
  await page.locator('#onboarding_item_list').getByText('TL').click();
  await page.getByRole('button', { name: 'Alışverişi tamamla' }).click();
  await page.getByText('Üye olmadan devam et').click();
});