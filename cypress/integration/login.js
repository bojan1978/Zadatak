/// <reference types="Cypress" />

import { generalSelectors , headerLogin } from '../support/pom_objects/general'
import { login, pageAssertions } from '../fixtures/assertionData'
import { userSelectors } from '../support/pom_objects/userSelectors'


const user = Cypress.env("user")
const agent = Cypress.env("agent")

describe('Log in to the application', () => {

    describe('Login as a user', () => {
        it('land on the application', () => {
            cy.visit('/')
        })
        it('should click on login button', () => {
            cy.get(headerLogin).click()
        })
        it('accept cookies', () => {
             cy.get(generalSelectors.cookie).click()
            })
        it('should check if the Login page has opened', () => {
            cy.get(generalSelectors.login).should('have.text', login.pageTitle)
        })
        it('should enter username', () => {
            cy.get(userSelectors.emailSelector).focus()
            cy.get(userSelectors.emailSelector).type(user.username)
        })
        it('should enter password', () => {
            cy.get(userSelectors.passwordSelector).focus()
            cy.get(userSelectors.passwordSelector).type(user.password)
        })
        it('should click on Login button', () => {
            cy.scrollTo('top')
            cy.get(generalSelectors.login).click({ force: true })
        })

        it('should check if user has landed on dashboard page', () => {
            cy.url().should('include', pageAssertions.dashboardPage)
        })
        it('should logut from the application', () => {
            cy.get(generalSelectors.logout).click()
        })
        it('should check if we are back on login page', () => {
            cy.get(generalSelectors.login).should('have.text', login.pageTitle)

        })
    })

    describe('Login as a agent', () => {
        it('land on the application', () => {
            cy.visit('/')
        })
        it('should click on login button', () => {
            cy.get(headerLogin).click()
        })
        it('accept cookies', () => {
            cy.get(generalSelectors.cookie).click()
        })
        it('should check if the Login page has opened', () => {
            cy.get(generalSelectors.login).should('have.text', login.pageTitle)
        })
        it('should enter username', () => {
            cy.get(userSelectors.emailSelector).focus()
            cy.get(userSelectors.emailSelector).type(agent.username)
        })
        it('should enter password', () => {
            cy.get(userSelectors.passwordSelector).focus()
            cy.get(userSelectors.passwordSelector).type(agent.password)
        })
        it('should click on Login button', () => {
            cy.scrollTo('top')
            cy.get(generalSelectors.login).click({ force: true })
        })

        it('should check if user has landed on dashboard page', () => {
            cy.url().should('include', pageAssertions.dashboardPage)
        })
        it('should logut from the application', () => {
            cy.get(generalSelectors.logout).click()
        })
        it('should check if we are back on login page', () => {
            cy.get(generalSelectors.login).should('have.text', login.pageTitle)
        })
    })
})