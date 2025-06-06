import {test,expect,chromium} from '@playwright/test';


test('Tab List Tests', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoqa.com/selectable');

    // Locate the tab list
    const tabList = await page.locator('#verticalListContainer li');
    console.log(await tabList.count());

    // Iterate through each tab and og its text
    for (let i = 0; i < await tabList.count(); i++) {
        const tabText = await tabList.nth(i).innerText();
        console.log(`Tab ${i + 1}: ${tabText}`);
    }

    // Close the browser
    await browser.close();
})