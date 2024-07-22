// @ts-check
const { test, expect } = require('@playwright/test');

test("Make screenshots", async ({ page }) => {
    // Open the test page
    await page.goto('http://uitestingplayground.com/sampleapp');
  
    // Screenshot the whole page
    await page.locator("body").screenshot({path: "site.png"})
  
    // Screenshot the auth form
    //await expect(page.locator(".container")).toBeVisible();
    await page.locator(".container").first().screenshot({path: "container.png"})
  });