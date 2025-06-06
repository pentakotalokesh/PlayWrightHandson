import { test, expect, chromium } from '@playwright/test';

test('Radio Button Tests', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/radio-button');



    const yesRadioButton = await page.getByLabel('Yes');
    const noRadioButton = await page.getByLabel('No');

    await expect(noRadioButton).toBeVisible();
    
    await noRadioButton.isEnabled();

    if(!(await yesRadioButton.isChecked())) {
        await yesRadioButton.check({force: true});
    }

    const radiobuttons = page.locator('input[type="radio"]');

    //for first button iam checking
    await radiobuttons.nth(0).check({force: true});

    for (let i = 0; i < await radiobuttons.count(); i++) {
        const radioButton = radiobuttons.nth(i);
        const isChecked = await radioButton.isChecked();
        if (i === 0) {
            expect(isChecked).toBeTruthy();
        } else {
            expect(isChecked).toBeFalsy();
        }
    }

    //for second button iam checking
    await radiobuttons.nth(1).check({force: true});
    for (let i = 0; i < await radiobuttons.count(); i++) {
        const radioButton = radiobuttons.nth(i);
        const isChecked = await radioButton.isChecked();
        if (i === 1) {
            expect(isChecked).toBeTruthy();
        } else {
            expect(isChecked).toBeFalsy();
        }
    }
    //for third button iam checking
    await expect(await radiobuttons.nth(2).isEnabled()).toBeFalsy();
    await browser.close();
});