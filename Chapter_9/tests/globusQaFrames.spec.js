import { test, chromium } from '@playwright/test';


test('Visit the GlobusQA frames page, Navigate to Free Ebooks and print all the books displayed	',async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Enter the URL
await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');

  // Click Menu bar and navigate to Free Ebooks page
await page.click('text=Free eBooks');

  // Print all the displayed ebooks
  const ebooks = await page.$$eval('#wrapper ul li a', elements => elements.map(el => el.textContent));
  console.log('--- Free eBooks ---');
  ebooks.forEach(ebook => console.log(ebook));

  // Click Menu bar and navigate to Home page
await page.click('text=Home');

  // Print Tools & Training web tables in console
  console.log('\n--- Tools & Training Tables ---');
  const tables = await page.$$('.entry-content table');
  for (const table of tables) {
  const rows = await table.$$('tr');
  const tableData = [];
  for (const row of rows) {
  const cells = await row.$$('th, td');
  const rowData = await Promise.all(cells.map(cell => cell.textContent()));
  tableData.push(rowData);
  }
  console.table(tableData);
  }

  await browser.close();
});
