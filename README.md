PlaywrightAutomation
A robust end-to-end test automation framework utilizing Microsoft Playwright, integrated with Cucumber for Behavior-Driven Development (BDD), and enhanced with Allure reporting.

🚀 Overview
This project aims to automate web application testing using Playwright, providing:

Cross-browser testing capabilities (Chromium, Firefox, WebKit)

BDD approach with Cucumber

Structured Page Object Model (POM) for maintainability

Detailed test reports via Allure

📁 Project Structure

PlaywrightAutomation/
├── .github/workflows/       # GitHub Actions workflows
├── allure-report/           # Generated Allure reports
├── allure-results/          # Allure results directory
├── features/                # Cucumber feature files
├── pageobjects/             # JavaScript Page Object Models
├── pageobjects_ts/          # TypeScript Page Object Models
├── tests/                   # Test scripts
├── tests-examples/          # Example test scripts
├── utils/                   # Utility functions (JavaScript)
├── utils_ts/                # Utility functions (TypeScript)
├── playwright.config.js     # Playwright configuration
├── playwright.config1.js    # Alternative Playwright configuration
├── playwright.service.config.js # Service-specific Playwright config
├── cucumber.js              # Cucumber configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project metadata and dependencies
└── ...                      # Other files and assets


🛠️ Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
# Clone the repository
git clone https://github.com/rishikeshyadav735/PlaywrightAutomation.git
cd PlaywrightAutomation

# Install dependencies
npm install
# or
yarn install

Running Tests
# Execute all tests
npx playwright test

# Run tests with a specific configuration
npx playwright test --config=playwright.config1.js

# Run Cucumber tests
npx cucumber-js

Generating Allure Reports
# Run tests and generate Allure results
npx playwright test

# Generate the Allure report
npx allure generate allure-results --clean -o allure-report

# Open the Allure report in a browser
npx allure open allure-report
🧪 Writing Tests
Define feature files in the features/ directory using Gherkin syntax.

Implement step definitions corresponding to the feature steps.

Utilize Page Object Models from pageobjects/ or pageobjects_ts/ to interact with web elements.

📸 Screenshots
The repository includes sample screenshots (screenshot.png, screenshot1.png, partialScreenshot.png) demonstrating test results and application states.

