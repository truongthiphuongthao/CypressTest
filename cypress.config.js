const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  projectId: "8fgqrf",
  env: {
    baseUrl: 'https://www.saucedemo.com',
    userName: "standard_user",
    password: "secret_sauce"
  },
  retries: {
    runMode: 0,
    openMode: 0
  },
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    screenshotsFolder: "cypress/screenshot",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      on('task', { downloadFile })
      allureWriter(on, config)
      return config
    },
    //specPattern: "**/*.feature",
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.js"],
    // watchForFileChanges: true,
    pageLoadTimeout: 150000,
    defaultCommandTimeout: 5000
  }
});
