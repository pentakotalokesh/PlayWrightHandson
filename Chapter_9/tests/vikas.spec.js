import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://www.pepperfry.com/');
  await page.locator('#desktop-header-login a').first().click();
  await page.getByRole("link",{name:"Furniture",exact:true}).click();
  await page.locator(".category-list-bottom-text").click();
  await page.getByRole('link', { name: 'Settees & Benches',exact:true }).nth(0).click();
//   await page.getByRole('button', { name: 'Material' }).click();
//   await page.getByText('Metal', { exact: true }).click();
//   await page.locator('pf-drawer a').click();
//   await page.getByText('Filter By').click();
//   await page.getByRole('button', { name: 'Material' }).click();
//   await page.getByText('Metal (7)').click();
//   await page.getByText('Metal', { exact: true }).click();
//   await page.pause();
});