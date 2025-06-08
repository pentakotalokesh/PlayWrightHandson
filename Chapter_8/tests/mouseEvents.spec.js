import { test, chromium, expect } from "@playwright/test";
let browser;
let context;
let page;
test.describe("Copy & Paste Using Mouse Events and Keyboard", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(
      "https://www.tutorialspoint.com/selenium/practice/register.php"
    );
  });

  test("copy and paste", async () => {
    const firstname = await page.getByRole("textbox", { name: "First Name" });
    await firstname.fill("Selenium");
    const lastname = await page.getByRole("textbox", { name: "lastname" });
    await lastname.fill("Test123456");
    firstname.dblclick();
    await page.keyboard.press("Control+c");
    const username = await page.getByRole("textbox", { name: "UserName" });
    await username.click();
    await page.keyboard.press("Control+v");
    await lastname.dblclick();
    await page.keyboard.press("Control+c");
    const password = await page.getByRole("textbox", { name: "Password" });
    await password.click();
    await page.keyboard.press("Control+v");

    const registerButton = await page.getByRole("button", { name: "Register" });
    await registerButton.click();

    expect(await firstname.inputValue()).toBe("");
    expect(await lastname.inputValue()).toBe("");
    expect(await username.inputValue()).toBe("");
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
