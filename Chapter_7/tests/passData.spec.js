import {test,expect, chromium} from "@playwright/test";

test('pass data to the Current Address',async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");

    //JS Executor
    await page.evaluate(()=>{
        document.querySelector("#currentAddress").value="My Current Address";
    })

    await browser.close();
})