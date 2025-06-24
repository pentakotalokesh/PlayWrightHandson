import { test, expect } from "@playwright/test";

test("First paragraph of the SQL cheat sheet", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/demo-%20%20%20site/frames-and-windows/#iFrame");

    const frame = page.frameLocator("iframe");

    await frame.locator("#mobile_menu_toggler").click();
    const li = frame.locator("#mobile_menu > ul > li");
    await li.nth(1).click();

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), // Detect new tab
        await page.locator('iframe[name="globalSqa"]').contentFrame().getByRole('link', { name: 'SQL Cheat Sheet' }).click()
    ]);
    
    
    const p = await newPage.locator("p").first();
    console.log(await p.innerHTML());
    
    await newPage.close(); // Close new tab

    await frame.locator("#mobile_menu_toggler").click();
    const lis = frame.locator("#mobile_menu > ul > li");
    await lis.nth(0).click();

    //print mystory in console
    const mystory = frame.locator(".e-con-inner");
    console.log(await mystory.innerHTML());


    
    
});
