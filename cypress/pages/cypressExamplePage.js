class cypressExamplePage {
    elements = {
        urlPage: (value) => cy.get("a[href='/commands/querying']"),
        button: () => cy.get("#query-btn", { timeout: 7000 })
    }

    elementHasValue() {
        return this.elements.urlPage()
    }

    getButtonElement() {
        return this.elements.button()
    }
}

module.exports = new cypressExamplePage()