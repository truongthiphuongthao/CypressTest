import { When, And, Then } from "cypress-cucumber-preprocessor/steps"
import cartPage from "../../pages/cartPage"
import homePage from "../../pages/homePage"

When("I order the inventory item as {string} with the quantity as {string}", (inventoryName, quantity) => {
    homePage.orderInventoryItem(inventoryName, quantity)
})

And("I click on Hambuger icon menu", () => {
    homePage.clickOnHambugerButton()
})

And("I click on Logout text", () => {
    homePage.clickOnLogoutTextLink()
})

Then("I verify Logout successfully", () => {

})