import {test, chromium} from "@playwright/test";

test('get Page Title',async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");

    const documentTitle = await page.evaluate(()=> document.title);
    console.log(documentTitle);

    await browser.close();
})