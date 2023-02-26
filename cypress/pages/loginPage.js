class loginPage {
    elements = {
        userNameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get( "#password"),
        loginButton: () => cy.get("#login-button")
    }
    // action
    login(userName, password) {
        this.elements.userNameInput().type(userName)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }
}

module.exports = new loginPage()