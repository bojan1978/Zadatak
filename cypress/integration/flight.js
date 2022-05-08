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
            cy.enterValue(flightSelectors.departureSelector, departure.city)
        });
    
        it('should select Beograd as departure airport', () => {
            cy.selectAtIndex(flightSelectors.autocompleteSelect, 0)
        });
    
        it('should check if Belgrade airport has been selected', () => {
            cy.scrollAndCheckValue(flightSelectors.departureSelector, departure.airport)
        });

    })

    describe('select place of destination', () => {

        it('should open destination airport', () => {
            cy.get(flightSelectors.destinationSelector).click( {force: true } )
        });
    
        it('should enter destination airport name', () => {
            cy.enterValue(flightSelectors.destinationSelector, arrival.city)
        });
    
        it('should select New York JFK as destination airport', () => {
            cy.selectAtIndex(flightSelectors.autocompleteSelect, 1)
        });
    
        it('should check if JFK airport has been selected', () => {
            cy.scrollAndCheckValue(flightSelectors.destinationSelector, arrival.airport)
        });
    })

    describe('select the travel date', () => {

        it('click on the departure date picker', () => {
            cy.get(flightSelectors.departureDateSelector).click( {force: true } )
        });

        it('should go to next month', () => {
            cy.selectAtIndex('.table-condensed .next', 6)
        });

        it('should select date of departure', () => {
            cy.selectAtIndex(generalSelectors.daySelector, 90)
        });
        
        it('should select date of arrival', () => {
            cy.selectAtIndex(generalSelectors.daySelector, 158)
        });

        it('should check the departure date', () => {
            cy.scrollAndCheckValue(flightSelectors.departureDateSelector, departure.date)
        });

        it('should check the arrival date', () => {
            cy.scrollAndCheckValue(flightSelectors.destinationDateSelector, arrival.date)
        });

    });

    describe('select number of travelers', () => {

        it('open the passengers dropdown', () => {
            cy.get('.col-lg-1.pr-0 .dropdown-toggle.dropdown-btn.waves-effect').click( {force: true } )
        });

        it('should increase the number of adultes', () => {
            cy.flightTravler(flightSelectors.adultNumber)
        });

        it('should increase the number of children', () => {
            cy.flightTravler(flightSelectors.childNumber)
            cy.flightTravler(flightSelectors.childNumber)
        });

        it('should increase the number of infants', () => {
            cy.flightTravler(flightSelectors.infantNumber)
        });

        it('close the passengers dropdown', () => {
            cy.get('.col-lg-1.pr-0 .dropdown-toggle.dropdown-btn.waves-effect').click( {force: true } )
        });

        it('should check if the correct number of pasengers been selected', () => {
            cy.scrollAndCheckText('.guest_flights', '5')
        });

    });

    describe('should search for flights', () => {

        it('should click on Search button', () => {
            cy.get('#flights-search').click( {force: true } )
        });

        it('should check if the correct flight is chosen', () => {
            cy.scrollAndCheckText('.sec__title_list', flight.booking)
        });

    });

});