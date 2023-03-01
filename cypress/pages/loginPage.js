class loginPage {
    elements = {
        userNameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get("#password"),
        loginButton: () => cy.get("#login-button"),
        userNameInputText: () => cy.get("input[placeholder='Username']"),
        passwordInputText: () => cy.get("input[placeholder='Password']")
    }
    // action
    login(userName, password) {
        this.elements.userNameInput().type(userName)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }

    verifyLogoutSuccessfully() {
        this.elements.userNameInputText().should('be.visible')
        this.elements.passwordInputText().should('be.visible')
        this.elements.loginButton().should('have.value', 'Login')
    }

    getUserNameInput() {
        return this.elements.userNameInput()
    }

    getPasswordInput() {
        return this.elements.passwordInput()
    }

    getLoginButton() {
        return this.elements.loginButton()
    }
}

module.exports = new loginPage()