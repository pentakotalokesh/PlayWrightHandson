import {test, expect, chromium} from '@playwright/test';

test('Form Tests get Attribute Properties', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    const currentAddressBox = await page.getByRole('textbox',{ name: 'Current Address' });
    const boxSize = await currentAddressBox.boundingBox();

    console.log(`Width: ${boxSize.width}, Height: ${boxSize.height}`);

    //Locations
    console.log(`X: ${boxSize.x}, Y: ${boxSize.y}`);

    await browser.close();

});