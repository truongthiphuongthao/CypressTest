const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "8fgqrf",
  env: {
    baseUrl: 'https://www.saucedemo.com',
    userName: "standard_user",
    password: "secret_sauce"
  },
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
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
