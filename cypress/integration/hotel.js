/// <reference types="Cypress" />

import { user1 , user2 , child1, child2 } from '../fixtures/userData'
import { destination } from '../fixtures/destination'
import { pageAssertions } from '../fixtures/assertionData'
import { generalSelectors , paymentSelectors} from '../support/pom_objects/general'
import { userSelectors, formSelectors , otherTravellersSelectors } from '../support/pom_objects/userSelectors'


describe('Select a Hotel', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click()
    })

    it('should move to the next hotel slide', () => {
        cy.selectAtIndex('.owl-dots .owl-dot', 1)
    })

    it('should select Malmaison Manchester Hotel', () => {
        cy.selectAtIndex('.owl-stage a.d-block.waves-effect', 9)
    })

    it('should check if the correct hotel is chosen', () => {
        cy.scrollAndCheckText(generalSelectors.hotelSelection, destination.hotel)
    })

    it('should select one bedroom', () => {
        cy.selectAtIndex(generalSelectors.submit, 0)
    })

    it('should check if user has landed on hotel bookings page', () => {
        cy.url().should('include', pageAssertions.hotelsPage)
    })


    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click( {force: true})
    })

    describe('Add personal information', () => {

        it('should enter the First name', () => {
            cy.enterValue(userSelectors.firstNameSelector, user1.firstName)
        })
    
        it('should enter the Last name', () => {
            cy.enterValue(userSelectors.lastNameSelector, user1.lastName)
        })
    
        it('should enter the users email', () => {
            cy.enterValue(userSelectors.emailSelector, user1.email)
        })
    
        it('should enter the users phone', () => {
            cy.enterValue(userSelectors.phoneSelector, user1.phone)
        })
        
        it('should enter the users address', () => {
            cy.enterValue(userSelectors.addressSelector, user1.address)
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
            cy.selectAtIndex(userSelectors.countryOptionSelect, 1)
        })
    })

    describe('Add travellers information', () => {

        describe('Add Adult Traveller 1', () => {

            it('should enter the First name', () => {
                cy.enterValue(formSelectors.firstNameSelector, user1.firstName)
            })
        
            it('should enter the Last name', () => {
                cy.enterValue(formSelectors.lastNameSelector, user1.lastName)
            })
        })

        describe('Add Adult Traveller 2', () => {

            it('should select the traveller 2 title', () => {
                cy.get(otherTravellersSelectors.secondAdultTitleSelector).select(user2.title, {force: true})
            })
            
            it('should enter the First name', () => {
                cy.enterValue(otherTravellersSelectors.secondAdultFirstNameSelector, user2.firstName)
            })
        
            it('should enter the Last name', () => {
                cy.enterValue(otherTravellersSelectors.secondAdultLastNameSelector, user2.lastName)
            })
        })

        describe('Add Child Traveller 1', () => {

            it('should select the child traveller 1 age', () => {
                cy.get(otherTravellersSelectors.firstChildAgeSelector).select(child1.age, {force: true})
            })
            
            it('should enter the child traveller 1 First name', () => {
                cy.enterValue(otherTravellersSelectors.firstChildFirstNameSelector, child1.firstName)
            })
        
            it('should enter the Last name', () => {
                cy.enterValue(otherTravellersSelectors.firstChildLastNameSelector, child1.lastName)
            })
        })
    
        describe('Add Child Traveller 2', () => {

            it('should select the child traveller 1 age', () => {
                cy.get(otherTravellersSelectors.secondChildAgeSelector).select(child2.age, {force: true})
            })
            
            it('should enter the child traveller 1 First name', () => {
                cy.enterValue(otherTravellersSelectors.secondChildFirstNameSelector, child2.firstName)
            })
        
            it('should enter the Last name', () => {
                cy.enterValue(otherTravellersSelectors.secondChildLastNameSelector, child2.lastName)
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