/// <reference types="Cypress" />

import { flight } from '../fixtures/flightData'
import { user1 } from '../fixtures/userData'
import { pageAssertions } from '../fixtures/assertionData'
import { generalSelectors } from '../support/pom_objects/general'
import { userSelectors, formSelectors } from '../support/pom_objects/userSelectors'


describe('Select a top flight destination', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click()
    })

    it('should select Emirates Airlines', () => {
        cy.get('#myTabContent4 a.waves-effect')
        .eq(7)
        .click( { force: true })
    })

    it('should check if the correct destination is chosen', () => {
        cy.scrollTo('top')
        cy.get('.sec__title_list').should('have.text', flight.destination)
    })

    it('should select the a flight', () => {
        cy.get(generalSelectors.submit)
        .eq(9)
        .click( { force: true } )
    })

    it('should check if user has landed on flights bookings page', () => {
        cy.url().should('include', pageAssertions.bookingPage)
    })
    
    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click()
    })

    describe('Add personal information', () => {

        it('should enter the First name', () => {
            cy.get(userSelectors.firstNameSelector).focus()
            cy.get(userSelectors.firstNameSelector).type(user1.firstName)
        })
    
        it('should enter the Last name', () => {
            cy.get(userSelectors.lastNameSelector).focus()
            cy.get(userSelectors.lastNameSelector).type(user1.lastName)
        })
    
        it('should enter the users email', () => {
            cy.get(userSelectors.emailSelector).focus()
            cy.get(userSelectors.emailSelector).type(user1.email)
        })
    
        it('should enter the users phone', () => {
            cy.get(userSelectors.phoneSelector).focus()
            cy.get(userSelectors.phoneSelector).type(user1.email)
        })
        
        it('should enter the users address', () => {
            cy.get(userSelectors.addressSelector).focus()
            cy.get(userSelectors.addressSelector).type(user1.address)
        })
    
        it('should open the country dropdown', () => {
            cy.get(userSelectors.countryDropdown).click({force:true})
        })
    
        it('should enter autocomplete text', () => {
            cy.get(userSelectors.autocompleteSelector).type(user1.country)
        })
    
        it('should select the country', () => {
            cy.get(userSelectors.countryDefaultSelect).click({force:true})
        })
    
        it('should open the Nationality dropdown', () => {
            cy.get(userSelectors.nationalityDropdown).click({force:true})
        })
    
        it('should enter autocomplete text', () => {
            cy.get(userSelectors.autocompleteSelector).type(user1.autocomplete)
        })
    
        it('should select the country', () => {
            cy.get(userSelectors.countryOptionSelect)
            .eq(1)
            .click({force:true})
        })
    })

    describe('Add travellers information', () => {

        it('should enter the First name', () => {
            cy.get(formSelectors.firstNameSelector).focus()
            cy.get(formSelectors.firstNameSelector).type(user1.firstName)
        })
    
        it('should enter the Last name', () => {
            cy.get(formSelectors.lastNameSelector).focus()
            cy.get(formSelectors.lastNameSelector).type(user1.lastName)
        })
    
        it('should open the country dropdown', () => {
            cy.get(formSelectors.nationalitySelector).select(user1.countryCode, {force: true})
        })

        it('should select month of birth', () => {
            cy.get(formSelectors.birthmonth).select(user1.birthmonth, {force: true})
        })

        it('should select day of birth', () => {
            cy.get(formSelectors.birthday).select(user1.birthday, {force: true})
        })

        it('should select year of birth', () => {
            cy.get(formSelectors.birthyear).select(user1.birthyear, {force: true})
        })

        it('should enter the users passport number', () => {
            cy.get(formSelectors.passportNumber).focus()
            cy.get(formSelectors.passportNumber).type(user1.passport)
        })

        it('should select passport issue month', () => {
            cy.get(formSelectors.passportIssueMonth).select(user1.issueMonth, {force: true})
        })

        it('should select passport issue day', () => {
            cy.get(formSelectors.passportIssueDay).select(user1.issueDay, {force: true})
        })

        it('should select passport issue year', () => {
            cy.get(formSelectors.passportIssueYear).select(user1.issueYear, {force: true})
        })

        it('should select passport expiry month', () => {
            cy.get(formSelectors.passportExpiryMonth).select(user1.expiryMonth, {force: true})
        })

        it('should select passport expiry day', () => {
            cy.get(formSelectors.passportExpiryDay).select(user1.expiryDay, {force: true})
        })

        it('should select passport expiry year', () => {
            cy.get(formSelectors.passportExpiryYear).select(user1.expiryYear, {force: true})
        })

    })


})