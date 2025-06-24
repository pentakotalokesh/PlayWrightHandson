import {test} from "@playwright/test";

test("print name and path",async({page,context})=>{
    await page.goto("https://demoqa.com/login");
    const cookies = await context.cookies();

    await page.getByPlaceholder("UserName").fill("Lokesh");
    await page.getByRole("textbox",{name:"password"}).fill("Lokesh@123");
        await page.getByRole("button",{name:"Login"}).click();
        const visiblemessage = await page.locator("#name").isVisible();
        if(visiblemessage){
            const message = await page.locator("#name").innerText();
            if(message.includes("Invalid")){
                await page.getByRole("button",{name:"New User"}).click();
                await page.getByRole("textbox",{name:"First Name"}).fill("Lokesh");
                await page.getByRole("textbox",{name:"Last Name"}).fill("Pentakota");
                await page.getByRole("textbox",{name:"UserName"}).fill("Lokesh");
                await page.getByRole("textbox",{name:"Password"}).fill("Lokesh@123");
        
                await page.getByRole("button",{name:"Register"}).click();
                await page.on("dialog",async(message)=>{
                    console.log(message.message);
                })
            }
        }
        else{
            console.log(await page.locator("#userName-value").innerHTML());
            const cookies = await context.cookies();
    
            for (const cookie of cookies) {
                console.log(`Name: ${cookie.name}`);
                console.log(`Value: ${cookie.value}`);
                console.log(`Domain: ${cookie.domain}`);
                console.log(`Path: ${cookie.path}`);
                console.log("----------------------------");
            }
        }
        
        
   
    // console.log(message);
})