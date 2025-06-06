import { test, expect, chromium } from "@playwright/test";

// test("Google Search", async () => {
//   const browser = await chromium.launch({ headless: false });

//   const page = await browser.newPage();

//   await page.goto("https://www.google.com");
//   const logoDiv = await page.locator(".lnXdpd");
//   await expect(logoDiv).toBeVisible();

//   console.log("Google Logo is Present");
//   //start timer
//   const startTimer = performance.now();
//   //Filling the search box with "Cognizant query" and submit the query
//   await page.fill('textarea[name="q"]', "Cognizant");

//   // await page.locator('input[name="btnK"]').click();
//   // await page.getByRole('button',{name:"Google Search"}).click();
//   await page.keyboard.press("Enter");
//   await page.pause();

//   await page.waitForSelector(".tF2Cxc");

//   //end timer
//   const endTimer = performance.now();
//   const transactionTime = (endTimer - startTimer).toFixed(2);

//   // Count search results
//   const resultCount = await page.locator(".tF2Cxc").count();
//   console.log(`Search Results Count: ${resultCount}`);
//   console.log(`Transaction Time: ${transactionTime} ms`);

//   await browser.close();
// });

test("searching & count", async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto("https://www.google.com");
  const logoDiv = await page.locator(".lnXdpd");
  await expect(logoDiv).toBeVisible();

  console.log("Google Logo is Present");
  //start timer
  const startTimer = performance.now();
  //Filling the search box with "Cognizant query" and submit the query
  await page.fill('textarea[name="q"]', "Cognizant");

  // await page.locator('input[name="btnK"]').click();
  // await page.getByRole('button',{name:"Google Search"}).click();
  await page.keyboard.press("Enter");
  await page.pause();

  await page.waitForSelector(".tF2Cxc");

  //end timer
  const endTimer = performance.now();
  const transactionTime = (endTimer - startTimer).toFixed(2);

  // Count search results
  const resultCount = await page.locator(".tF2Cxc").count();
  console.log(`Search Results Count: ${resultCount}`);
  console.log(`Transaction Time: ${transactionTime} ms`);

  await browser.close();
});
