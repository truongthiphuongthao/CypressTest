import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../pages/loginPage"
import homePage from "../../pages/homePage"

When("I visit website", () => {
    console.log("hello")
    cy.visit('/')
})

And("I enter username as {string} and password as {string}", (userName, password) => {
    loginPage.login(userName, password)
})

Then("I verify homepage", () => {
    homePage.verifyDisplayHomePage()
})

Then("I verify Logout successfully", () => {
    loginPage.verifyLogoutSuccessfully()
})