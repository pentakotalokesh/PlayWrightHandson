const {test} = require("@playwright/test");

test("neated iframes",async({page})=>{
   await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php");
   const frame1 = await page.frameLocator("iframe").nth(0);
    console.log(await frame1.locator("header").innerText());
    console.log(await frame1.locator("body").innerHTML());

    const frame2 = await page.frameLocator("iframe").nth(1);
    console.log(await frame2.locator("header").innerText());
    console.log(await frame2.locator("body").innerHTML());

})