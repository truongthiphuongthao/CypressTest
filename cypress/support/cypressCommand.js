import cypressPage from "../pages/cypressExamplePage"

Cypress.Commands.add("loginWithNoAuth", (value) => {
    cypressPage.elementHasValue()
        .should('be.visible')
        .contains(value).click()
})

Cypress.Commands.add("verifyQueringPage", () => {
    // implicit assertion
    cypressPage.getButtonElement()
        .should('contain', 'Button')
        .should('have.class', "query-btn")
        .and('be.visible')
        .invoke('attr', 'id').should('equal', 'query-btn')
    // .should('be.disabled')

    // explicit assertion
    expect(true).to.be.true
    expect('Cypress').to.be.equal('Cypress')

    // assert
    assert.equal(4, 5, 'Not equal')
})