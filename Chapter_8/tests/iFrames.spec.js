const {test} = require("@playwright/test");

test("read data from different iframes",async ({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php")
    const frame1 = await page.frame({url:"https://www.tutorialspoint.com/selenium/practice/new-tab-sample.php"});
})