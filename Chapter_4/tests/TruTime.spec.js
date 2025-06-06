import { test,expect,chromium} from "@playwright/test";


test('TruTime', async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    await page.goto("https://onecognizant.cognizant.com/Home");

    await page.fill('input[type="email"]',"2414376@cognizant.com");

    await page.locator('input[type="submit"]').click();

    await page.fill('input[type="password"]',"Naga@8639636393");

    await page.locator('input[type="submit"]').click();

    const Authcode = page.locator('#idRichContext_DisplaySign');
    console.log(await Authcode.innerHTML());

    await page.getByRole('button',{name:'No'}).click();
    
    await page.getByRole('button', { name: 'TruTime' }).click();
    
    const frame= page.frameLocator("#appFrame")
    const monthYear=frame.locator(".month-input-container")
   
    console.log(monthYear)
    const montAvg=frame.locator(".monthAvg.display-inline-block")
    await expect(monthYear).toBeVisible()
    await expect(montAvg).toBeVisible()
    const yearAvg=frame.locator(".yrAvg")
    await expect(yearAvg).toBeVisible()
   
    const swipe=frame.locator(".swipeAvg").first()
    await expect(swipe).toBeVisible()
    const tru=frame.locator(".topUpAvg").last()
    await expect(tru).toBeVisible();
 
})
