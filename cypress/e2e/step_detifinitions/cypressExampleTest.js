import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import cypressExamplePage from "../../pages/cypressExamplePage"

When("I visit Cypress Example Page", () => {
    cy.visit("https://example.cypress.io/")
})

And("I click on Querying as {string}", (value) => {
    cy.loginWithNoAuth(value)
})

Then("I verify to navigate successfully", () => {
    cy.url().should('include', '/commands/querying')
    cy.verifyQueringPage()
})