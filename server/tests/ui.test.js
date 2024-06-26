const { test, expect } = require("@playwright/test");

test('Verify "All Books" link is visible', async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.waitForSelector("nav.navbar");

  const allBooksLink = await page.$('a[href="/catalog"]');

  const isLinkVisible = await allBooksLink.isVisible();
  expect(isLinkVisible).toBe(true);
});

test('Verify "Login" button is vissible', async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForSelector("nav.navbar");

  const loginButton = await page.$('a[href="/login"]');
  const isLogginButtonVissible = await loginButton.isVisible();

  expect(isLogginButtonVissible).toBe(true);
});
