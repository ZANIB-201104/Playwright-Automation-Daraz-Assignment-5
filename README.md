# Daraz Playwright Automation

## Project Overview

This project automates UI testing of the Daraz.pk e-commerce website using Playwright and JavaScript.

The project follows the Page Object Model (POM) approach to make the automation code reusable, organized, and maintainable.

## Technologies Used

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

## Project Structure

```text
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
```

## File Description

| File | Description |
|---|---|
| DarazPage.js | Contains Daraz page locators and reusable automation methods |
| example.spec.js | Contains the main Playwright test scenario |
| playwright.config.js | Playwright test configuration |
| package.json | Project dependencies and scripts |
| package-lock.json | Records installed dependency versions |
| README.md | Project documentation |
| .gitignore | Specifies files that should not be uploaded to GitHub |

## Automated Test Scenario

The automation performs the following steps:

1. Open Daraz.pk
2. Search for Electronics
3. Apply the Brand filter
4. Apply the Price Range filter from 500 PKR to 5000 PKR
5. Validate the product count
6. Open the first available product
7. Verify the product details page
8. Check whether Free Shipping is available

## Page Object Model

The project uses the Page Object Model (POM) design pattern.

The DarazPage class contains reusable methods for:

- Website navigation
- Product searching
- Brand filtering
- Price filtering
- Product counting
- Opening product details
- Free Shipping verification

## Installation

npm install

npx playwright install

## Running the Tests

npx playwright test --project=chromium

## Expected Result

The test should successfully navigate through the Daraz shopping flow, apply the required filters, validate available products, open a product details page, and check the Free Shipping status.

## Note

Daraz.pk is a live website, so product availability, filters, shipping information, and page elements may change over time.

## Author

- ZANIB ASLAM
