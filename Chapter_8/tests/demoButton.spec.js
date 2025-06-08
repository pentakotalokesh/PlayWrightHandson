import { test, expect, chromium } from "@playwright/test";

let page;
let browser;
let context;

test.describe("", () => {
  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await browser.newPage();
  });

  //   test();

  test.afterAll(async () => {
    await browser.close();
  });
});
