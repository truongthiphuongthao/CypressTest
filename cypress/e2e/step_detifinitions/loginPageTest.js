import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../pages/loginPage"
import homePage from "../../pages/homePage"

When("I visit website", () => {
    cy.visit(Cypress.env('baseUrl'))
})

And("I enter username and password", () => {
    cy.login()
})

Then("I verify homepage", () => {
    homePage.verifyDisplayHomePage()
})

Then("I verify Logout successfully", () => {
    loginPage.verifyLogoutSuccessfully()
})