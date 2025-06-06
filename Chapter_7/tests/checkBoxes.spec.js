import { test, expect, chromium } from '@playwright/test';

test('Check Boxes', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/checkbox');

    // Expand all checkboxes
     await page.getByRole('button', { name: 'Expand all' }).click();

    // Find the "Commands" checkbox using its ID
    const commandsCheckbox = await page.locator('label').filter({ hasText: 'Commands' }).getByRole('img').first()

    if (!(await commandsCheckbox.isChecked())) {
        await commandsCheckbox.click();
    }

    const classifiedCheckbox = await page.locator('label').filter({ hasText: 'Classified' }).getByRole('img').first()
  await page.locator('label').filter({ hasText: 'Commands' }).locator('path').first().click();
  await page.locator('label').filter({ hasText: 'Excel File.doc' }).getByRole('img').first().click();

    // Locate "Classified" checkbox and check if visible
 
    if (await classifiedCheckbox.isVisible()) {
        await classifiedCheckbox.click();

        // Uncheck "Commands" checkbox only if it was checked before
        if (await commandsCheckbox.isChecked()) {
            await commandsCheckbox.click();
        }
    }

    // Verify if Excel File checkbox is enabled

    const excelFileCheckbox = await page.locator('label').filter({ hasText: 'Excel File.doc' }).getByRole('img').first();
    expect(await excelFileCheckbox.isEnabled()).toBeTruthy();



    await context.close();
    await browser.close();
});
