class homePage {
    elements = {
        shoppingCartIcon: () => cy.get("div#shopping_cart_container"),
        quantityOfCart: () => cy.get("span.shopping_cart_badge"),
        hambugerMenuButton: () => cy.get("button#react-burger-menu-btn"),
        logoutTextLink : () => cy.get("a#logout_sidebar_link"),
        productName: (inventoryItemLabel) => cy.xpath(`//div[contains(text(), "${inventoryItemLabel}")]/ancestor::div[@class="inventory_item_label"]//following-sibling::div//button`)
    }

    verifyDisplayHomePage(){
        cy.url().should('include', '/inventory.html')
        this.elements.shoppingCartIcon().should('be.visible')
    }
    
    orderInventoryItem(inventoryItemLabel, quantity){
        this.elements.productName(inventoryItemLabel).click()
        this.elements.quantityOfCart().should('have.text', quantity)
        this.elements.quantityOfCart().click()
    }

    clickOnHambugerButton(){
        this.elements.hambugerMenuButton().click()
    }

    clickOnLogoutTextLink(){
        this.elements.logoutTextLink().should('have.text', 'Logout')
        this.elements.logoutTextLink().click()
    }
}

module.exports = new homePage()
require("cypress-xpath")