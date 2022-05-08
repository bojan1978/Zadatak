/// <reference types="Cypress" />

import { departure, arrival, flight } from '../fixtures/flightData'
import { generalSelectors , flightSelectors } from '../support/pom_objects/general'

describe('Book a flight', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get(generalSelectors.cookie).click()
    })

    it('click on Flight tab', () => {
        cy.get('.d-none.d-lg-block.d-xl-block .la.la-plane.mx-1').click( {force: true } )
    })

    it('should click on Round trip', () => {
        cy.get('#round-trip').click( {force: true } )
    })

    describe('select place of departure', () => {

        it('should open departure airport', () => {
            cy.get(flightSelectors.departureSelector).click( {force: true } )
        })
    
        it('should enter departure airport name', () => {
            cy.get(flightSelectors.departureSelector)
            .clear()
            .type(departure.city)
        })
    
        it('should select Beograd as departure airport', () => {
            cy.get(flightSelectors.autocompleteSelect)
            .eq(0)
            .click( {force: true } )
        })
    
        it('should check if Belgrade airport has been selected', () => {
            cy.scrollTo('top')
            cy.get(flightSelectors.departureSelector).should('have.value', departure.airport)
        })

    })

    describe('select place of destination', () => {

        it('should open destination airport', () => {
            cy.get(flightSelectors.destinationSelector).click( {force: true } )
        })
    
        it('should enter destination airport name', () => {
            cy.get(flightSelectors.destinationSelector)
            .clear()
            .type(arrival.city)
        })
    
        it('should select New York JFK as destination airport', () => {
            cy.get(flightSelectors.autocompleteSelect)
            .eq(1)
            .click( {force: true } )
        })
    
        it('should check if JFK airport has been selected', () => {
            cy.scrollTo('top')
            cy.get(flightSelectors.destinationSelector).should('have.value', arrival.airport)
        })
    })

    describe('select the travel date', () => {

        it('click on the departure date picker', () => {
            cy.get(flightSelectors.departureDateSelector).click( {force: true } )
        })

        it('should go to next month', () => {
            cy.get('.table-condensed .next')
            .eq(6)
            .click( {force: true } )
        })

        it('should select date of departure', () => {
            cy.get(generalSelectors.daySelector)
            .eq(90)
            .click( {force: true } )
        })
        
        it('should select date of arrival', () => {
            cy.get(generalSelectors.daySelector)
            .eq(158)
            .click( {force: true } )
        })

        it('should check the departure date', () => {
            cy.scrollTo('top')
            cy.get(flightSelectors.departureDateSelector).should('have.value', departure.date)
        })

        it('should check the arrival date', () => {
            cy.scrollTo('top')
            cy.get(flightSelectors.destinationDateSelector).should('have.value', arrival.date)
        })

    })

    describe('select number of travelers', () => {

        it('open the passengers dropdown', () => {
            cy.get('.col-lg-1.pr-0 .dropdown-toggle.dropdown-btn.waves-effect').click( {force: true } )
        })

        it('should increase the number of adultes', () => {
            cy.get('.dropdown-item.adult_qty .la.la-plus').click( {force: true } )
        })

        it('should increase the number of children', () => {
            cy.get('.dropdown-item.child_qty .la.la-plus').dblclick( {force: true } )
        })

        it('should increase the number of infants', () => {
            cy.get('.dropdown-item.infant_qty .la.la-plus').click( {force: true } )
        })

        it('close the passengers dropdown', () => {
            cy.get('.col-lg-1.pr-0 .dropdown-toggle.dropdown-btn.waves-effect').click( {force: true } )
        })

        it('should check if the correct number of pasengers been selected', () => {
            cy.scrollTo('top')
            cy.get('.guest_flights').should('have.text', '5')
        })

    })

    describe('should search for flights', () => {

        it('should click on Search button', () => {
            cy.get('#flights-search').click( {force: true } )
        })

        it('should check if the correct flight is chosen', () => {
            cy.scrollTo('top')
            cy.get('.sec__title_list').should('have.text', flight.booking)
        })

    })

})