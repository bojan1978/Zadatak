/// <reference types="Cypress" />

const user = Cypress.env("user")
const agent = Cypress.env("agent")

describe('Log in to the application', () => {

    describe('Login as a user', () => {
        it('land on the application', () => {
            cy.visit('/')
        })
        it('should click on login button', () => {
            cy.get('.theme-btn.theme-btn-small.theme-btn-transparent.ml-1.waves-effect').click()
        })
        it('accept cookies', () => {
             cy.get('#cookie_stop').click()
            })
        it('should check if the Login page has opened', () => {
            cy.get('.modal-content .modal-title.title').should('have.text', 'Login')
        })
        it('should enter username', () => {
            cy.get('.input-box [name="email"').focus()
            // cy.get('.input-box [name="email"]').type("user@phptravels.com")
            cy.get('.input-box [name="email"]').type(user.username)
        })
        it('should enter password', () => {
            cy.get('.input-box [name="password"').focus()
            cy.get('.input-box  [name="password"]').type(user.password)
        })
        it('should click on Login button', () => {
            cy.scrollTo('top')
            cy.get('.btn-box > .btn-default').click({ force: true })
        })

        it('should check if user has landed on dashboard page', () => {
            cy.url().should('include', 'account/dashboard')
        })
        it('should logut from the application', () => {
            cy.get('.la.la-power-off.mr-2.text-color-6').click()
        })
        it('should check if we are back on login page', () => {
            cy.get('.modal-content .modal-title.title').should('have.text', 'Login')
        })
    })

    describe('Login as a agent', () => {
        it('land on the application', () => {
            cy.visit('/')
        })
        it('should click on login button', () => {
            cy.get('.theme-btn.theme-btn-small.theme-btn-transparent.ml-1.waves-effect').click()
        })
        it('accept cookies', () => {
             cy.get('#cookie_stop').click()
            })
        it('should check if the Login page has opened', () => {
            cy.get('.modal-content .modal-title.title').should('have.text', 'Login')
        })
        it('should enter username', () => {
            cy.get('.input-box [name="email"').focus()
            cy.get('.input-box [name="email"]').type(agent.username)
        })
        it('should enter password', () => {
            cy.get('.input-box [name="password"').focus()
            cy.get('.input-box  [name="password"]').type(agent.password)
        })
        it('should click on Login button', () => {
            cy.scrollTo('top')
            cy.get('.btn-box > .btn-default').click({ force: true })
        })

        it('should check if user has landed on dashboard page', () => {
            cy.url().should('include', 'account/dashboard')
        })
        it('should logut from the application', () => {
            cy.get('.la.la-power-off.mr-2.text-color-6').click()
        })
        it('should check if we are back on login page', () => {
            cy.get('.modal-content .modal-title.title').should('have.text', 'Login')
        })
    })
})