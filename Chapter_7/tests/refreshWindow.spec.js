import {test, expect, chromium} from '@playwright/test';


test('refresh window', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');

    const state = await page.locator('#state');
    await state.click()
    await page.keyboard.press('Enter');

    await page.evaluate(()=>{
        location.reload();
    })
    await browser.close();
});