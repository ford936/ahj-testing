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

  test('form rendered on  start page', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.form__widget');
  });

  test('visa', async () => {
    await page.goto('http://localhost:9000');

    const form = await page.$('.form__widget');
    const input = await form.$('.input__widget');
    await input.type('4008962776974474');
    const submit = await form.$('.btn');

    await submit.click();
    await page.waitForSelector('.card_visa.active');
  }, 30000);

  test('invalid', async () => {
    await page.goto('http://localhost:9000');

    const form = await page.$('.form__widget');
    const input = await form.$('.input__widget');
    await input.type('4008962776974473');
    const submit = await form.$('.btn');

    await submit.click();
    await page.waitForSelector('.invalid');
  }, 30000);

  afterEach(async () => {
    await browser.close();
  });
});
