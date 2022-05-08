/// <reference types="Cypress" />

import { user1 , user2 } from '../fixtures/userData'
import { destination } from '../fixtures/destination'
import { pageAssertions } from '../fixtures/assertionData'
import { generalSelectors , paymentSelectors, tourSelectors} from '../support/pom_objects/general'
import { userSelectors, formSelectors , otherTravellersSelectors } from '../support/pom_objects/userSelectors'


describe('Select a Tour', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click()
    })

    it('should select Hurgada tour', () => {
        cy.get('.card-item.destination-card')
        .eq(3)
        .click( { force: true })
    })

    it('should check if the correct hotel is chosen', () => {
        cy.scrollTo('top')
        cy.get(generalSelectors.hotelSelection).should('have.text', destination.tour)
    })

    it('should open calendar', () => {
        cy.get(tourSelectors.datePickerSelector).click({force:true})
    })

    it('should select tour date', () => {
        cy.get(generalSelectors.daySelector)
        .eq(37)
        .click( {force: true } )
    })
    
    it('should check the tour date', () => {
        cy.scrollTo('top')
        cy.get(tourSelectors.datePickerSelector).should('have.value', destination.tourDate)
    })

    it('should select the number of adults', () => {
        cy.get(tourSelectors.adultsTour).select(destination.tourAdults, {force: true})
    })

    it('should select the number of children', () => {
        cy.get(tourSelectors.clidrenTour).select(destination.tourChildren, {force: true})
    })

    it('should select the number of infants', () => {
        cy.get(tourSelectors.infantsTour).select(destination.tourInfants, {force: true})
    })

    it('should book the tour', () => {
        cy.get(generalSelectors.submit).click( { force: true } )
    })

    it('should check if user has landed on hotel bookings page', () => {
        cy.url().should('include', pageAssertions.toursPage)
    })

    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click( {force: true})
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

        describe('Add Adult Traveller 1', () => {

            it('should enter the First name', () => {
                cy.get(formSelectors.firstNameSelector).focus()
                cy.get(formSelectors.firstNameSelector).type(user1.firstName)
            })
        
            it('should enter the Last name', () => {
                cy.get(formSelectors.lastNameSelector).focus()
                cy.get(formSelectors.lastNameSelector).type(user1.lastName)
            })
        })

        describe('Add Adult Traveller 2', () => {

            it('should select the traveller 2 title', () => {
                cy.get(otherTravellersSelectors.secondAdultTitleSelector).select(user2.title, {force: true})
            })
            
            it('should enter the First name', () => {
                cy.get(otherTravellersSelectors.secondAdultFirstNameSelector).focus()
                cy.get(otherTravellersSelectors.secondAdultFirstNameSelector).type(user2.firstName)
        
            })
        
            it('should enter the Last name', () => {
                cy.get(otherTravellersSelectors.secondAdultLastNameSelector).focus()
                cy.get(otherTravellersSelectors.secondAdultLastNameSelector).type(user2.lastName)
            })
        })

    })

    describe('Paying and continuing forward', () => {

        it('should select the Pay Later option', () => {
            cy.get(paymentSelectors.paylaterSelector).click({force:true})
        })

        it('should select Terms and Conditions checkbox', () => {
            cy.get(paymentSelectors.termsSelector).click({force:true})
        })

        it('should check if the confirmation button is enabled', () => {
            cy.get(paymentSelectors.confirmationSelection).should('not.be.disabled')
        })
    })

})