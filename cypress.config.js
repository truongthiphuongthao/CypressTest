const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    watchForFileChanges: true,
    pageLoadTimeout: 150000,
    defaultCommandTimeout: 5000,
    video: true
  }
});
