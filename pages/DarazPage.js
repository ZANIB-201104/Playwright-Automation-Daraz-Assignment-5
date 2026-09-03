class DarazPage {
  constructor(page) {
    this.page = page;

    // Search
    this.searchInput = page
      .locator('input[placeholder*="Search"]')
      .first();

    // Filters
    this.brandOption = page
      .getByText('Brand', { exact: true })
      .first();

    this.minimumPrice = page.getByPlaceholder('Min').first();
    this.maximumPrice = page.getByPlaceholder('Max').first();

    // Products
    this.productLinks = page.locator('a[href*="/products/"]');

    // Shipping
    this.shippingLabel = page
      .getByText(/Free Shipping/i)
      .first();
  }

  async navigateToDaraz() {
    await this.page.goto('https://www.daraz.pk/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');

    await this.page.waitForTimeout(5000);
  }

  async selectBrand() {
    await this.brandOption.click();

    const firstBrand = this.page
      .locator('input[type="checkbox"]')
      .first();

    await firstBrand.check();
  }

  async setPriceRange(minimum, maximum) {
    await this.minimumPrice.fill(String(minimum));
    await this.maximumPrice.fill(String(maximum));
    await this.maximumPrice.press('Enter');

    await this.page.waitForTimeout(3000);
  }

  async countProducts() {
    return await this.productLinks.count();
  }

  async viewFirstProduct() {
    await this.productLinks.first().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async checkFreeShipping() {
    return await this.shippingLabel
      .isVisible()
      .catch(() => false);
  }
}

module.exports = { DarazPage };
