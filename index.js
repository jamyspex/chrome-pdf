const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.pdf(
        {
            path: 'output.pdf',
            displayHeaderFooter: false,
            margin: {
                top: '0px',
                left: '0px',
                bottom: '0px',
                right: '0px'
            },
            printBackground: true

        });

    await browser.close();
})();