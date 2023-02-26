import loginPage  from "../../pages/loginPage"
import homePage from "../../pages/homePage"

const userName = "standard_user"
const password = "secret_sauce"

it('Logout successfully', () => {
    cy.visit('/')
    loginPage.login(userName, password)
    homePage.verifyDisplayHomePage()
    homePage.clickOnHambugerButton()
    homePage.clickOnLogoutTextLink()
})