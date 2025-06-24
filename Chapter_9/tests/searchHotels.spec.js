import {test,expect} from "@playwright/test";

test("Hotels in EaseMyTrip app",async({page})=>{
    await page.goto("https://www.easemytrip.com/");
    await page.locator("a[href='/hotels/']").click();
    await page.locator(".hp_inputBox.selectHtlCity").click();
    await page.locator("#txtCity").fill("Pune");
    await page.locator(".hp_inputBox.ht-dates").nth(0).click();
    await page.locator(".dp-highlight.ui-datepicker-current-day").click();
    await page.locator('td[data-month="4"]',{hasText:"6"}).first().click();
    await page.locator(".hp_inputBox.roomGuests").click();
    await page.locator("//div[@id='field1']/a[2]").click();
    await page.locator("//div[@id='field2']/a[2]").click();
    await page.locator("#btnSearch").click()

    console.log(await page.locator('.htl_ttl').first().textContent());


})