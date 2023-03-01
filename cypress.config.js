const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "8fgqrf",
  env: {
    baseUrl: 'https://www.saucedemo.com',
    userName: "standard_user1",
    password: "secret_sauce1"
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
      allureWriter(on, config)
      return config
    },
    specPattern: "**/*.feature",
    watchForFileChanges: true,
    pageLoadTimeout: 150000,
    defaultCommandTimeout: 5000
  }
});
