# Learn Playwright Fundamentals 2x

This repository contains a Playwright test project for learning browser automation fundamentals.

## What is included

- Playwright configuration for Chromium, Firefox, and WebKit
- Example end-to-end tests for a public site
- HTML report output support

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install browser binaries:
   ```bash
   npx playwright install
   ```
3. Run the tests:
   ```bash
   npx playwright test
   ```
4. Open the HTML report:
   ```bash
   npx playwright show-report
   ```

## Project structure

- `tests/` contains the example Playwright specs
- `playwright.config.ts` contains the test configuration
- `playwright-report/` stores generated HTML reports
