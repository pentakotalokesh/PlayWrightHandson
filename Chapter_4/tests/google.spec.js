import { test, expect, chromium } from "@playwright/test";

test("Chrome Unique Elements", async () => {
    const browser = await chromium.launch({ channel: 'chrome' });
    const page = await browser.newPage();
    
    await page.goto("https://www.google.com");

    const logoDiv = await page.locator('.lnXdpd'); 
    console.log(await logoDiv.innerHTML());

    const searchBox = await page.locator('textarea[name="q"]');
    console.log(await searchBox.getAttribute("title"));

    const searchButton = await page.getByRole('button',{name:"Google Search"});
    console.log("button",await searchButton.getAttribute('value'));

    await browser.close();
});

