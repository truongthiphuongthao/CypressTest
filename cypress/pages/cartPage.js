class cartPage {
    elements = {
        checkoutButton: () => cy.get("button#checkout"),
        inventoryItemName:() => cy.get("div.inventory_item_name"),
    }
    verifyCartPageIsDisplaying(){
        cy.url().should('include', '/cart.html')
    }

    verifyInventoryNameIsDisplay(inventoryName){
        this.elements.inventoryItemName().should('have.text', inventoryName)
    }
    
    clickOnCheckoutButton(){
        this.elements.checkoutButton().click()
    }
}

module.exports = new cartPage()