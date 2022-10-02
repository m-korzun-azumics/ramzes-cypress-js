const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    }
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1200,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Quality Sharks: ramzes-cypress-js",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  video: true,
  screenshotOnRunFailure: true,
  projectId: "1gi575",
});