import {test,chromium} from "@playwright/test";

test('Scroll to end of page',async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");

    await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight));

    await browser.close();
})