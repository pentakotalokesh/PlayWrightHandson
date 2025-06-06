import {test,chromium} from "@playwright/test";

test("Scroll to a particular element",async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/automation-practice-form");

    await page.evaluate(()=>{
        document.getElementById("subjectsContainer").scrollIntoView({behavior:"smooth",block:"center"});
    })
    await browser.close();
})