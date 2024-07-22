// @ts-check
import { test } from '@playwright/test';

test("Make screenshots", async ({ page }) => {
    // Open the test page
    await page.goto('http://uitestingplayground.com/sampleapp');
  
    // Screenshot the whole page
    await page.locator("body").screenshot({path: "site.png"})
  
    // Screenshot the auth form
    await page.locator(".container").first().screenshot({path: "container.png"})
  });