import {chromium, test} from "@playwright/test";

test('Draw a line within Canvas using Actions Class',async ()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://sketchtoy.com/");
     // Move to starting point and press mouse down
     await page.mouse.move(100, 200);
     await page.mouse.down();
 
     // Draw a line by moving the mouse
     await page.mouse.move(300, 400);
 
     // Release the mouse
     await page.mouse.up();
 
     await browser.close();
})