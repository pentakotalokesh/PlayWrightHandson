import {test,expect,chromium} from '@playwright/test';

test('sendKeys Tests', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    const cityDropdown = page.locator('#city');
    await cityDropdown.isEnabled();

    const stateDropdown = page.locator('#state');
    await stateDropdown.isEnabled();

    await stateDropdown.click();
    await page.keyboard.press('Enter');

    await cityDropdown.click();
    await page.keyboard.press('Enter');

    await browser.close();



})