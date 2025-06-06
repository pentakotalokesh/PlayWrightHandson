import {test,expect, chromium} from "@playwright/test";

test('values for textbox',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/text-box");

    await page.fill('input[placeholder="Full Name"]', 'Lokesh');
    await page.fill('input[type="email"]', 'lokesh@gmail.com');
    console.log(await page.inputValue('input[placeholder="Full Name"]'));

    await page.getByRole('button',{name:'Submit'}).click();


    await context.close();
    await browser.close();
   

   
})