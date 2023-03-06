const link = "https://reqres.in/api"
context("GET /users", () => {
    let id = 0
    it("get a list users", () => {
        cy.request({
            method: 'GET',
            url: `${link}/users?page=2`,
            failOnStatusCode: false
        }).as('get a list users')
        // validate status code
        cy.get('@get a list users').its('status').should('eq', 200)
        cy.get('@get a list users').then(res => {
            cy.log(JSON.stringify(res.body))
        })
    })

    it("get a single user", () => {
        cy.request({
            method: 'GET',
            url: `${link}/users?page=2`,
            failOnStatusCode: false
        }).as('get a single user')
        // validate status code
        cy.get('@get a single user').its('status').should('eq', 200)
        cy.get('@get a single user').then(res => {
            cy.log(JSON.stringify(res.body))
        })
    })

    it("get single user not found", () => {
        cy.request({
            method: 'GET',
            url: `${link}/users/23`,
            failOnStatusCode: false
        }).as('get single user not found')
        // validate status code
        cy.get('@get single user not found').its('status').should('eq', 404)
        cy.get('@get single user not found').then(res => {
            cy.log(JSON.stringify(res.body))
        })
    })

    it("login - successful", () => {
        cy.request({
            method: 'POST',
            url: `${link}/login`,
            failOnStatusCode: false,
            body: {
                'email': 'eve.holt@reqres.in',
                'password': 'cityslicka'
            }
        }).as('login successful')
        // validate status code
        cy.get('@login successful').its('status').should('eq', 200)
        // get response
        cy.get('@login successful').then((res) => {
            cy.log("data: ", JSON.stringify(res.body.token))
        })
    })

    it("login - unsuccessful", () => {
        cy.request({
            method: 'POST',
            url: `${link}/login`,
            failOnStatusCode: false,
            body: {
                'email': 'peter@klaven'
            }
        }).as('login unsuccessful')
        // validate status code
        cy.get('@login unsuccessful').its('status').should('eq', 400)
        // get response
        cy.get('@login unsuccessful').then((res) => {
            cy.log("data: ", JSON.stringify(res.body.error))
        })
    })

    it("register - successful", () => {
        cy.request({
            method: 'POST',
            url: `${link}/register`,
            failOnStatusCode: false,
            body: {
                'email': 'eve.holt@reqres.in',
                'password': 'pistol'
            }
        }).as('register successful')
        // validate status code
        cy.get('@register successful').its('status').should('eq', 200)
        // get response
        cy.get('@register successful').then((res) => {
            cy.log("data: ", JSON.stringify(res.body))
        })
    })

    it("register - unsuccessful", () => {
        cy.request({
            method: 'POST',
            url: `${link}/register`,
            failOnStatusCode: false,
            body: {
                'email': 'sydney@fife',
            }
        }).as('register unsuccessful')
        // validate status code
        cy.get('@register unsuccessful').its('status').should('eq', 400)
        // get response
        cy.get('@register unsuccessful').then((res) => {
            cy.log("data: ", JSON.stringify(res.body))
        })
    })

    it("create users", () => {
        cy.request({
            method: 'POST',
            url: `${link}/users?`,
            failOnStatusCode: false,
            body: {
                'name': 'morpheus',
                'job': 'leader'
            }
        }).as('create users')
        // validate status code
        cy.get('@create users').its('status').should('eq', 201)
        // get response
        cy.get('@create users').then((res) => {
            id = res.body.id
            cy.log("id", res.body.id)
            cy.log("data: ", JSON.stringify(res.body))
        })
    })

    it("delete users", () => {
        cy.request({
            method: 'DELETE',
            url: `${link}/users/${id}`,
        }).as('delete user')
        cy.get('@delete user').its('status').should('eq', 204)
        cy.get('@delete user').then(res => {
            cy.log(JSON.stringify(res.body))
        })
    })

    it("update users use PUT", () => {
        cy.request({
            method: 'PUT',
            url: `${link}/users/2`,
            failOnStatusCode: false,
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).as('update user')
        cy.get('@update user').its('status').should('eq', 200)
        cy.get('@update user').then(res => {
            cy.log(JSON.stringify(res.body))
        })
    })

    it("update users use PATH", () => {
        cy.request({
            method: 'PATCH',
            url: `${link}/users/2`,
            failOnStatusCode: false,
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).as('update user')
        cy.get('@update user').its('status').should('eq', 200)
        cy.get('@update user').then(res => {
            cy.log(JSON.stringify(res.body))
        })
    })


})