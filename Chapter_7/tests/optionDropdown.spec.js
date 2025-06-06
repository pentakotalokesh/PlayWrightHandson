import {test,expect,chromium} from '@playwright/test';

test('Dropdown Option', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');
    // Locate the dropdown element
    const stateDropdown = page.locator('#state');
    await stateDropdown.isEnabled();

    const cityDropdown = page.locator('#city');
    await cityDropdown.isEnabled();

    await stateDropdown.click();

    await page.getByText('NCR', { exact: true }).click();
    await cityDropdown.click();
    await page.getByText('Delhi', { exact: true }).click();
    // Close the browser
    await browser.close();
});