// Information to access the website
const baseUrl = "https://www.saucedemo.com"
const userName = "standard_user"
const password = "secret_sauce"
// 123@Abcd
// Css selector
// login page
const usernameInput = "#user-name"
const passwordInput = "#password"
const loginButton = "#login-button"
// home page
const shoppingCartIcon = "div#shopping_cart_container"
const quantityOfCart = "span.shopping_cart_badge"
// cart page
const buttonCheckout = "button#checkout"
// checkout page
const firstNameInput = "input#first-name"
const lastNameInput = "input#last-name"
const postalCodeInput = "input#postal-code"
const continueInput = "input#continue"
const finishButton = "button#finish"
const messageCheckOutSuccess = "h2.complete-header"
const backHomeButton = "button#back-to-products"
const hambugerMenuButton = "button#react-burger-menu-btn"
const logoutTextLink = "a#logout_sidebar_link"

before(() => {
  cy.visit(baseUrl)
  cy.url().should('include', baseUrl)
})

describe('Login', () => {
    it('Login and add to cart successfully', () => {
        // Fill login form
        cy.get(usernameInput).type(userName)
        cy.get(passwordInput).type(password)
        cy.get(loginButton).click()
        // Verify login successfully
        cy.get("span.title").should('have.text', 'Products')
        cy.get(shoppingCartIcon).should('be.visible')
        cy.xpath('//div[contains(text(), "Sauce Labs Backpack")]/ancestor::div[@class="inventory_item_label"]//following-sibling::div//button').click()
      // Verify cart at home page
        cy.get(quantityOfCart).should('have.text', '1')
        cy.get(quantityOfCart).click()
        // verify product name at cart page
        cy.url().should('include', baseUrl + "/cart.html")
        cy.get("div.inventory_item_name").should('have.text', 'Sauce Labs Backpack')
        cy.get(buttonCheckout).click()
        // Checkout information
        cy.url().should('include', '/checkout-step-one.html')
        cy.get("span.title").should('have.text', 'Checkout: Your Information')
        cy.get(firstNameInput).type("Truong")
        cy.get(lastNameInput).type("Thao")
        cy.get(postalCodeInput).type("123456")
        cy.get(continueInput).click()
        cy.get(finishButton).click()
        // Verify message when ordering the product successfully
        cy.get(messageCheckOutSuccess).should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get(backHomeButton).click()
        // Verify home page
        cy.url().should('include', baseUrl)
    })
})

after(() => {
  cy.get(hambugerMenuButton).click()
  cy.get(logoutTextLink).click()
})