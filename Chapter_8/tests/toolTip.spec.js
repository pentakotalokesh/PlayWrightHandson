import { test, chromium } from "@playwright/test";

let browser;
let context;
let page;

test.describe("Print tooltip Content", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://demo.guru99.com/test/tooltip.html");
  });

  test("tooltip", async () => {
    const tooltip = await page.locator(".tooltip");
    console.log(await tooltip.innerHTML());
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
