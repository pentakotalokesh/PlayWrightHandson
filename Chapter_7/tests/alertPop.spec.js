import {chromium, test} from "@playwright/test";

test("Generate Alert Pop Window using JS Executor",async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");
    await page.evaluate(()=> alert('Alert Testing'));

    await browser.close();
})