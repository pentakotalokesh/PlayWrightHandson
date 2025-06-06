import { test, expect, chromium } from "@playwright/test";

test("using JavaScript Executor", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://demoqa.com/automation-practice-form");

  const dropdownState = await page.evaluate(() => {
    const statedropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");
    return {
      statedropdownisEnabled: !statedropdown.disabled, // Check if enabled state dropdown
      cityDropdownisEnabled: !cityDropdown.disabled, // Check if enabled city dropdown
      // isVisible: dropdown.offsetWidth > 0 && dropdown.offsetHeight > 0,
      // selectedValue: dropdown.querySelector('input')?.value || 'None'
    };
  });
  console.log("State Dropdown:", dropdownState);

  const cityDropdown = page.locator("#city");
  const stateDropdown = page.locator("#state");

  await stateDropdown.click();

  await page.evaluate(() => {
    document.querySelector("#react-select-3-option-0").click(); // Adjust selector
  });

  await cityDropdown.click();

  await page.evaluate(() => {
    document.querySelector("#react-select-4-option-0").click(); // Adjust selector
  });

  await browser.close();


});
