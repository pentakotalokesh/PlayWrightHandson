import {test,chromium} from "@playwright/test";

test('Draw a Circle within a Canvas using JS Executor',async()=>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("C:\\Users\\2414376\\Desktop\\PlayWright Handson\\Chapter_7\\tests\\canvas.html");
    await page.evaluate(() => {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    });
    await browser.close();

})