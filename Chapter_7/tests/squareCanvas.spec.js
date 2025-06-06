import {chromium, test} from "@playwright/test";

test('Draw a square',async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("C:\\Users\\2414376\\Desktop\\PlayWright Handson\\Chapter_7\\tests\\canvas.html");
    await page.evaluate(() => {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillRect(200,200,200,200);
        ctx.fillStyle = 'red';
    });
    await browser.close();
})