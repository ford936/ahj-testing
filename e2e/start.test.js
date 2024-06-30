import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser = null;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: process.env.CI,
      slowMo: 250,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('body');
  });

  afterEach(async () => {
    await browser.close();
  });
});
