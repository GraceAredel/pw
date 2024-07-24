const { test, expect } = require('@playwright/test');

test('check count', async ({page}) =>{
    await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=120');
    await expect(page.locator('.srp-river-results.clearfix .s-item__image-section')).toHaveCount(120);

    await page.goto('https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=240')
    await expect(page.locator('.srp-river-results.clearfix .s-item__image-section')).toHaveCount(240);
})