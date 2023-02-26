class checkoutPage {
    elements = {
        firstNameInput: () => cy.get("input#first-name"),
        lastNameInput: () => cy.get("input#last-name"),
        postalCodeInput: () => cy.get("input#postal-code"),
        continueInput: () => cy.get("input#continue"),
        finishButton: () => cy.get("button#finish"),
        messageCheckOutSuccess: () => cy.get("h2.complete-header"),
        backHomeButton: () => cy.get("button#back-to-products"),        
    }

    // checkout information
    checkOutInformation(firstName, lastName, postalCode){
        this.elements.firstNameInput().type(firstName)
        this.elements.lastNameInput().type(lastName)
        this.elements.postalCodeInput().type(postalCode)
    }

    clickOnContinueButton(){
        this.elements.continueInput().click()
    }

    clickOnFinishButton(){
        this.elements.finishButton().click()
    }

    clickOnBackHomeButton(){
        this.elements.backHomeButton().click()
    }

    verifyMessageCheckoutSuccessfully(message){
        this.elements.messageCheckOutSuccess().should('have.text', message)
    }
}

module.exports = new checkoutPage()