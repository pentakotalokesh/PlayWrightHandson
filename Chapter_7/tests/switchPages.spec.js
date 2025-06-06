import {test,expect,chromium} from "@playwright/test";

test('Switch between pages',async()=>{

    //1.Launch the Chrome Browser
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //2.Navigate to the url page
    await page.goto("https://demoqa.com/forms");

    //3.refresh page
    await page.reload();

    //4.console url
    console.log(await page.url());
    
    //5.print source of page
    console.log((await page.content()).substring(0,500)+"....");

    //6.print the page title
    console.log(await page.title());

    //7. Navigate to https://demoqa.com/text-box
    await page.goto("https://demoqa.com/text-box");

    //8.Navigate to previous url
    await page.goBack();

    //9.Navigate to forward url
    await page.goForward();

    //10.Launch another browser instances
    const secondBrowser = await chromium.launch();
    const secondContext = await secondBrowser.newContext();
    const secondPage = await secondContext.newPage();
    await secondPage.goto("https://demoqa.com/forms");

    console.log(await secondPage.title());

    await browser.close();
    await secondBrowser.close();

});