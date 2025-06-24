import {test,expect} from "@playwright/test";

test("Button Color Verification",async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/");

    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        await page.getByRole("link",{name:"Click Here"}).click()
    ]);

    const buttonColor =  await page.getByRole("link",{name:"Click Here"}).evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log(buttonColor);

    await page.getByRole("link",{name:"Click Here"}).hover();

    const newBtnColor = await page.getByRole("link",{name:"Click Here"}).evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log(newBtnColor);


   



})