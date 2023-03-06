it('File upload test', () => {
    cy.visit("https://trytestingthis.netlify.app/")
    cy.get('#myfile').attachFile('image.jpg')
})

it('File download test', () => {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'downloads', 'example.jpg')
})