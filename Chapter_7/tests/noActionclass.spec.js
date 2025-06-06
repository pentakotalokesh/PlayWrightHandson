import { test } from '@playwright/test';

// Playwright does not use any class action like that of selenium
test('Select the option in a single select drop down', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    const cityDropDown = page.locator('#city .css-tlfecz-indicatorContainer');
    const isCityEnabled = await cityDropDown.isEnabled();
    console.log(`City Drop Down is enabled: ${isCityEnabled}`);

    const stateDropDown = page.locator('#state');
    const isStateEnabled = await stateDropDown.isEnabled();
    console.log(`State Drop Down is enabled: ${isStateEnabled}`);

    await stateDropDown.click();
    await page.locator('#react-select-3-option-0').click();

    await cityDropDown.click();
    await page.locator('#react-select-4-option-0').click();

    await browser.close();


});