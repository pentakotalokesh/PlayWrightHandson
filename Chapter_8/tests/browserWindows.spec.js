import { chromium, test } from "@playwright/test";

let browser;
let context;
let page;

test.describe("Read Data from the browser new window", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(
      "https://www.tutorialspoint.com/selenium/practice/browser-windows.php"
    );
  });

  test("read data from new tab", async () => {
    const [newTab] = await Promise.all([
      context.waitForEvent("page"),
      await page.getByRole("button", { name: "New Tab" }).click(),
    ]);

    await newTab.waitForLoadState();
    console.log(await newTab.locator(".header > div > h1").textContent());
  });

  test("read data from new window", async () => {
    const [newWindow] = await Promise.all([
      context.waitForEvent("page"),
      await page
        .getByRole("button", { name: "New Window", exact: true })
        .click(),
    ]);

    await newWindow.waitForLoadState();
    console.log(await newWindow.locator(".header > div > h1").textContent());
  });

  test("read message from message Window", async () => {
    const [newMessageWindow] = await Promise.all([
      context.waitForEvent("page"),
      page
        .getByRole("button", { name: "New Window Message", exact: true })
        .click(),
    ]);
    await newMessageWindow.waitForLoadState();
    console.log(await newMessageWindow.locator(".row").textContent());
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
