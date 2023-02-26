const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://www.saucedemo.com"
  }
});
