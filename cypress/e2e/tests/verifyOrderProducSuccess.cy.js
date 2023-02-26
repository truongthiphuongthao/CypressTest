import loginPage  from "../../pages/loginPage"
import homePage from "../../pages/homePage"
import cartPage from "../../pages/cartPage"
import checkoutPage from "../../pages/checkoutPage"

const userName = "standard_user"
const password = "secret_sauce"

it('Verify order the product successfully', () => {
    cy.visit('/')
    loginPage.login(userName, password)
    homePage.verifyDisplayHomePage()
    homePage.orderInventoryItem('Sauce Labs Backpack', 1)
    cartPage.verifyInventoryNameIsDisplay('Sauce Labs Backpack')
    cartPage.clickOnCheckoutButton()
    checkoutPage.checkOutInformation("truong", "thao", "123")
    checkoutPage.clickOnContinueButton()
    checkoutPage.clickOnFinishButton()
    checkoutPage.verifyMessageCheckoutSuccessfully("THANK YOU FOR YOUR ORDER")
    checkoutPage.clickOnBackHomeButton()
})