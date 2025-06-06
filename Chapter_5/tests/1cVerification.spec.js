import {test, expect} from "@playwright/test";

test('verify & get Tru time data',async({page})=>{
    await page.goto("https://onecognizant.cognizant.com/Home");

    await page.fill('input[type="email"]',"2414376@cognizant.com");

    await page.locator('input[type="submit"]').click();

    await page.fill('input[type="password"]',"Naga@8639636393");

    await page.locator('input[type="submit"]').click();

    const Authcode = page.locator('#idRichContext_DisplaySign');
    console.log(await Authcode.innerHTML());

    await page.getByRole('button',{name:'No'}).click();


    // const pageTitle = await page.getByRole('link', { name: 'OneCognizant Beta' })

    // await expect(pageTitle).toContainText("OneCognizant Beta");

    const searchBox = await page.locator('input[type="text"]');
    await searchBox.fill("TruTime");
    await page.keyboard.press("Enter");
    const frame= page.frameLocator("#appFrame")
    const monthYear=frame.locator(".month-input-container")
   
    console.log((await monthYear.innerText()).split(" ")[0]);
    const montAvg=frame.locator(".monthAvg.display-inline-block")
    await expect(monthYear).toBeVisible()
    await expect(montAvg).toBeVisible()
    const yearAvg=frame.locator(".yrAvg")
    await expect(yearAvg).toBeVisible()






/* 
3    Verify the Logo "OneCognizant" in the homepage
4	 Search for "TruTime" in the search box and click Search button
5	 Click on the TruTime app link from the search results window
6	 Retrive the Monthly & Yearly Avg of Trutime and store in the variable
7	 Capture the current month(Ex: April 2024) displayed in the TruTime app
8	 Close the browser and the session 
*/





})