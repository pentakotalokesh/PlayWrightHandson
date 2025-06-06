import {test, expect,chromium} from '@playwright/test';

test('Dropdown Multi Select', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/select-menu');
    // Locate the multi-select dropdown element
    const multiSelectDropdown = page.locator('#cars');
    await multiSelectDropdown.isEnabled();
    

    // Select multiple options
    await multiSelectDropdown.selectOption(['volvo', 'Opel', 'audi']);

    await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(1).click();
    await page.locator('#react-select-4-option-3').click();
    await page.locator('#react-select-4-option-1').click();
    await page.locator('#react-select-4-option-2').click();



})