import { test, chromium } from "@playwright/test";
import path from "path";
let browser;
let context;
let page;

test.describe("Uploading File", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://demo.guru99.com/test/upload/");
  });

  test("upload file", async () => {
    const uploadFile = await page.locator('input[type="file"]');
    const filePath = path.resolve("test-file.txt");
    await uploadFile.setInputFiles(filePath);
    await page.check("#terms");
    try {
      await page.click("#submitbutton");
      console.log("File Uploaded Successfully");
    } catch (e) {
      console.log(e.message);
    }
  });

  test.afterAll(async () => {
    await browser.close();
  });
});
