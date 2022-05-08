/// <reference types="Cypress" />

// const user = Cypress.env("user")
// const agent = Cypress.env("agent")

describe('Book a flight', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get('#cookie_stop').click()
    })

    it('click on Flight tab', () => {
        cy.get('.d-none.d-lg-block.d-xl-block .la.la-plane.mx-1').click( {force: true } )
    })

    it('should click on Round trip', () => {
        cy.get('#round-trip').click( {force: true } )
    })

    describe('select place of departure', () => {

        it('should open departure airport', () => {
            cy.get('#autocomplete').click( {force: true } )
        })
    
        it('should enter departure airport name', () => {
            cy.get('#autocomplete')
            .clear()
            .type('Beograd')
        })
    
        it('should select Beograd as departure airport', () => {
            cy.get('.autocomplete-result')
            .eq(0)
            .click( {force: true } )
        })
    
        it('should check if Belgrade airport has been selected', () => {
            cy.scrollTo('top')
            cy.get('#autocomplete').should('have.value', 'BEG - Beograd - Belgrade')
        })

    })

    describe('select place of destination', () => {

        it('should open destination airport', () => {
            cy.get('#autocomplete2').click( {force: true } )
        })
    
        it('should enter destination airport name', () => {
            cy.get('#autocomplete2')
            .clear()
            .type('New York')
        })
    
        it('should select New York JFK as destination airport', () => {
            cy.get('.autocomplete-result')
            .eq(1)
            .click( {force: true } )
        })
    
        it('should check if JFK airport has been selected', () => {
            cy.scrollTo('top')
            cy.get('#autocomplete2').should('have.value', 'JFK - John F Kennedy Intl - New York')
        })
    })

    describe('select the travel date', () => {

        it('click on the departure date picker', () => {
            cy.get('#departure').click( {force: true } )
        })

        it('should go to next month', () => {
            cy.get('.table-condensed .next')
            .eq(6)
            .click( {force: true } )
        })

        it('should select date of departure', () => {
            cy.get('.day')
            .eq(90)
            .click( {force: true } )
        })
        
        it('should select date of arrival', () => {
            cy.get('.day')
            .eq(158)
            .click( {force: true } )
        })

        it('should check the departure date', () => {
            cy.scrollTo('top')
            cy.get('#departure').should('have.value', '04-06-2022')
        })

        it('should check the arrival date', () => {
            cy.scrollTo('top')
            cy.get('#return').should('have.value', '30-06-2022')
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
            cy.get('.sec__title_list').should('have.text', 'BEG  JFK')
        })

    })

})