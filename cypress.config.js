const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
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
    },
    specPattern: "**/*.feature",
    watchForFileChanges: true,
    pageLoadTimeout: 150000,
    defaultCommandTimeout: 5000,
    video: true,
  }
});
