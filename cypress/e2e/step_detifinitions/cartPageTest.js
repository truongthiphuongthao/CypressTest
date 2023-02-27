import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import cartPage from "../../pages/cartPage"

Then("I verify the inventory item as {string} is displaying at cart page", (inventoryName) => {
    cartPage.verifyInventoryNameIsDisplay(inventoryName)
})

And("I click on checkout button", () => {
    cartPage.clickOnCheckoutButton()
})

