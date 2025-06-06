import {test, expect, chromium} from '@playwright/test';

test('Form Tests', async () => {
    // Step 1: Launch the browser and create a new page
    const browser=await chromium.launch({});
    // Step 2: Create a new context and page
    const context = await browser.newContext();
    const page = await context.newPage();
     // Step 1: Navigate to the URL
    await page.goto('https://demoqa.com/automation-practice-form');

    // Step 2: Locate the 'Submit' button
    const submitButton = page.locator('button[type="submit"]');

    // Step 3: Get the background color
    const backgroundColor = await submitButton.evaluate(el => window.getComputedStyle(el).getPropertyValue('background-color'));
    console.log(`Background color: ${backgroundColor}`);

    // Step 4: Get the tag name
    const tagName = await submitButton.evaluate(el => el.tagName);
    console.log(`Tag name: ${tagName}`);

    // Step 5: Get the class attribute value
    const classValue = await submitButton.getAttribute('class');
    console.log(`Class attribute value: ${classValue}`);

    // Step 6: Close the browser
    await browser.close();


});