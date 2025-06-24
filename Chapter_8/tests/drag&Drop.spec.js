import { test, chromium, expect } from "@playwright/test";

let browser;
let context;
let page;

test.describe("Drag & Drop", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://demo.guru99.com/test/drag_drop.html");
  });

  test("drag&drop", async () => {
    const bank = await page.locator("li[id='credit2'] a");
    const sales = await page.locator("li[id='credit1'] a");
    const amount1 = await page.locator("li[id='fourth'] a").first();
    const amount2 = await page.locator("li[id='fourth'] a").nth(1);

    await bank.dragTo(await page.locator("#bank"));
    await sales.dragTo(await page.locator("#loan"));
    await amount1.dragTo(await page.locator("#amt7"));
    await amount2.dragTo(await page.locator("#amt8"));

    // const debitAccount = await page.locator("#bank > li");
    // const creditAccount = await page.locator("#loan > li");
    const debitAmount = await page.locator("#amt7 > li").innerText();
    const creditAmount = await page.locator("#amt8 > li").innerText();

    expect(parseInt(debitAmount)).toBeLessThanOrEqual(
      parseInt(creditAmount)
    );
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
