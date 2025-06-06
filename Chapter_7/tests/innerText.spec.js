import {chromium, test} from "@playwright/test";

test('get innerText',async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");
    const innertext = await page.evaluate(()=> document.body.innerText);
    console.log(innertext);

    await browser.close();
})