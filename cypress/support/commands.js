/// <reference types="Cypress" />

import { generalSelectors , headerLogin } from '../support/pom_objects/general'
import { login, pageAssertions } from '../fixtures/assertionData'
import { userSelectors } from '../support/pom_objects/userSelectors'

Cypress.Commands.add("login", () => {
    cy.scrollTo('top')
    cy.get(generalSelectors.login).click({ force: true })
})

Cypress.Commands.add("enterValue", (selector, value) => {
    cy.get(selector).focus()
    cy.get(selector)
    .clear()
    .type(value)
})

Cypress.Commands.add("selectAtIndex", (selector, index) => {
    cy.get(selector)
    .eq(index)
    .click({ force : true })
})

Cypress.Commands.add("scrollAndCheckValue", (selector, value) => {
    cy.scrollTo('top')
    cy.get(selector).should('have.value', value)
})

Cypress.Commands.add("scrollAndCheckText", (selector, value) => {
    cy.scrollTo('top')
    cy.get(selector).should('have.text', value)
})

Cypress.Commands.add("flightTravler", (selector) => {
    cy.get(`.dropdown-item.${selector} .la.la-plus`).click( {force: true } )
})
