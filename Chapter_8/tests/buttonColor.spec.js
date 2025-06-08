import { test, expect, chromium } from "@playwright/test";

let browser;
let context;
let page;

test.describe("Visit the Browserstack home page and click on the Get Started Free button.", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://www.browserstack.com/");
  });

  test("Color of Get Started Free", async () => {
    const button = await page.locator("#signupModalProductButton");
    const color = await button.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    console.log(color);
  });

  test("scroll and get into view", async () => {
    const viewPricing = await page.getByRole("link", { name: " View Pricing" });
    await viewPricing.scrollIntoViewIfNeeded();
    console.log(await viewPricing.innerText());
    await viewPricing.click();
    const priceElement = await page.locator(
      "div.best-value-plan > div.plan-pricing-info > div.plan-price-section > div.plan-price-details > .amount"
    );
    const amount = await priceElement.first().textContent();
    console.log(`$${amount}`);
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
