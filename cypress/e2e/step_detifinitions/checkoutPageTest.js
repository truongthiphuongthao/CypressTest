import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import checkoutPage from "../../pages/checkoutPage"

And("I fill in the checkout information form", (datatable) => {
    datatable.hashes().forEach((element) => {
        checkoutPage.checkOutInformation(element.firstName, element.lastName, element.postalCode)
    })
})

And("I click on Continue button", () => {
    checkoutPage.clickOnContinueButton()
})

And("I click on Finish button", () => {
    checkoutPage.clickOnFinishButton()
})


And("I verify order the inventory is successfully with message as {string}", (message) => {
    checkoutPage.verifyMessageCheckoutSuccessfully(message)
})
