const { test, expect } = require('@playwright/test');
const { DarazPage } = require('../pages/DarazPage');

test('Automate Daraz electronics shopping flow', async ({ page }) => {
  const darazPage = new DarazPage(page);

  // Open Daraz website
  await darazPage.navigateToDaraz();

  // Search for the required product category
  await darazPage.search('electronics');

  // Apply the required filters
  await darazPage.selectBrand();
  await darazPage.setPriceRange(500, 5000);

  // Validate that products are displayed
  const totalProducts = await darazPage.countProducts();

  console.log(`Products found: ${totalProducts}`);
  expect(totalProducts).toBeGreaterThan(0);

  // Open the first available product
  await darazPage.viewFirstProduct();

  // Verify that the product details page is opened
  await expect(page).toHaveURL(/product/i);

  // Check free-shipping availability
  const shippingStatus = await darazPage.checkFreeShipping();

  console.log(
    shippingStatus
      ? 'Free Shipping is available'
      : 'Free Shipping is not available for this product'
  );
});
