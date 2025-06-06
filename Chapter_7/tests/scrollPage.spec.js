import {test,chromium} from "@playwright/test";

test('Scroll Page Using Js Executor',async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");

    await page.evaluate(()=> window.scrollBy(0,500));

    await browser.close();
})