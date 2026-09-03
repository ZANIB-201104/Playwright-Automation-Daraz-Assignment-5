
Daraz Playwright Automation

Project Overview

This project automates UI testing of the Daraz.pk e-commerce website using Playwright and JavaScript.

The project follows the Page Object Model (POM) approach to keep the automation code organized, reusable, and maintainable.

Technologies Used

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

Project Structure

daraz-playwright/
├── pages/
│   └── DarazPage.js
├── e2e/
│   └── example.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

File Description

File| Description
"DarazPage.js"| Contains Daraz page locators and reusable automation methods
"example.spec.js"| Contains the Playwright test scenarios
"playwright.config.js"| Contains Playwright test configuration
"package.json"| Contains project dependencies and scripts
"package-lock.json"| Records the installed dependency versions
"README.md"| Project documentation
".gitignore"| Specifies files that should not be uploaded to GitHub

Automated Test Scenario

The automation performs the following steps:

1. Open Daraz.pk
2. Search for a product/category
3. Apply the required brand filter
4. Apply the required price filter
5. Validate the displayed products
6. Open the first available product
7. Verify the product details page
8. Check whether Free Shipping is available

Page Object Model

The project uses the Page Object Model (POM) design pattern.

The "DarazPage" class contains reusable methods for:

- Website navigation
- Product searching
- Applying filters
- Validating product results
- Opening product details
- Verifying Free Shipping

Installation

Install the project dependencies:

npm install

Install Playwright browsers:

npx playwright install

Running the Tests

To run the tests on Chromium:

npx playwright test --project=chromium

Expected Result

The test should successfully navigate through the Daraz shopping flow, perform the required search and filtering actions, validate the available products, open a product details page, and check the Free Shipping status.

Note

Daraz.pk is a live e-commerce website, so product availability, filters, shipping information, and page elements may change over time.
