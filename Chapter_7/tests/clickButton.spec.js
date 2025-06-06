import {test,chromium} from "@playwright/test";

test('Click an element using JS Executor',async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.evaluate(()=>{
        const submitButton = document.querySelector("#submit");
        submitButton.click();
    });
    await browser.close();
})