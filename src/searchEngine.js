const puppeteer = require('puppeteer');
const dataInsert = require('./database/dataInsert');

const searchEngine = async (product) => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('https://amazon.com');

    await page.click('#twotabsearchtextbox');
    await page.keyboard.type(product);
    await page.keyboard.press('Enter');

    await page.waitForNavigation();

    const productName = await page.$eval('h2 a span', element => element.textContent);
    const productImage = await page.$eval('div[data-index] img', element => element.src);
    const productPrice = await page.$eval('span .a-offscreen', element => element.textContent);

    const productsData = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    
    dataInsert(productsData);

}

module.exports = searchEngine;