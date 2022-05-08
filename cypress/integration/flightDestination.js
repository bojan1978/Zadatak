/// <reference types="Cypress" />

describe('Select a top flight destination', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get('#cookie_stop').click()
    })

    it('should select Emirates Airlines', () => {
        cy.get('a[href="https://www.phptravels.net/flights/en/usd/dxb/kwi/oneway/economy/12-05-2022/1/0/0"].waves-effect').click( { force: true })
    })

    it('should check if the correct destination is chosen', () => {
        cy.scrollTo('top')
        cy.get('.sec__title_list').should('have.text', 'DXB  KWI')
    })

    it('should select the a flight', () => {
        cy.get('[type="submit"]')
        .eq(9)
        .click( { force: true } )
    })

    it('should check if user has landed on flights bookings page', () => {
        cy.url().should('include', 'flights/booking')
    })
    
    it('accept cookies', () => {
        cy.get('#cookie_stop').click()
    })

    describe('Add personal information', () => {

        it('should enter the First name', () => {
            cy.get('[name="firstname"]').focus()
            cy.get('[name="firstname"]').type('User First Name')
        })
    
        it('should enter the Last name', () => {
            cy.get('[name="lastname"]').focus()
            cy.get('[name="lastname"]').type('User Last Name')
        })
    
        it('should enter the users email', () => {
            cy.get('[name="email"]').focus()
            cy.get('[name="email"]').type('test@test.com')
        })
    
        it('should enter the users phone', () => {
            cy.get('[name="phone"]').focus()
            cy.get('[name="phone"]').type(1234567890)
        })
        
        it('should enter the users address', () => {
            cy.get('[name="address"]').focus()
            cy.get('[name="address"]').type('123 Test')
        })
    
        it('should open the country dropdown', () => {
            cy.get(':nth-child(6) > .input-box > .form-group > .input-items > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click({force:true})
        })
    
        it('should enter autocomplete text', () => {
            cy.get('.select2-search__field').type('Serbia')
        })
    
        it('should select the country', () => {
            cy.get('.select2-results__option.select2-results__option--highlighted').click({force:true})
        })
    
        it('should open the Nationality dropdown', () => {
            cy.get(':nth-child(7) > .input-box > .form-group > .input-items > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click({force:true})
        })
    
        it('should enter autocomplete text', () => {
            cy.get('.select2-search__field').type('Ser')
        })
    
        it('should select the country', () => {
            cy.get('.select2-results__option')
            .eq(1)
            .click({force:true})
        })
    })

    describe('Add travellers information', () => {

        it('should enter the First name', () => {
            cy.get('[name="firstname_1"]').focus()
            cy.get('[name="firstname_1"]').type('User First Name')
        })
    
        it('should enter the Last name', () => {
            cy.get('[name="lastname_1"]').focus()
            cy.get('[name="lastname_1"]').type('User Last Name')
        })
    
        it('should open the country dropdown', () => {
            cy.get('[name="nationality_1"]').select("RS", {force: true})
        })

        it('should select month of birth', () => {
            cy.get('[name="dob_month_1"]').select("06", {force: true})
        })

        it('should select day of birth', () => {
            cy.get('[name="dob_day_1"]').select("21", {force: true})
        })

        it('should select year of birth', () => {
            cy.get('[name="dob_year_1"]').select("1970", {force: true})
        })

        it('should enter the users passport number', () => {
            cy.get('[name="passport_1"]').focus()
            cy.get('[name="passport_1"]').type(1234567890)
        })

        it('should select passport issue month', () => {
            cy.get('[name="passport_issuance_month_1"]').select("01", {force: true})
        })

        it('should select passport issue day', () => {
            cy.get('[name="passport_issuance_day_1"]').select("10", {force: true})
        })

        it('should select passport issue year', () => {
            cy.get('[name="passport_issuance_year_1"]').select("2020", {force: true})
        })

        it('should select passport expiry month', () => {
            cy.get('[name="passport_month_1"]').select("01", {force: true})
        })

        it('should select passport expiry day', () => {
            cy.get('[name="passport_day_1"]').select("10", {force: true})
        })

        it('should select passport expiry year', () => {
            cy.get('[name="passport_year_1"]').select("2030", {force: true})
        })

    })


})