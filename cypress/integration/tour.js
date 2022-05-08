/// <reference types="Cypress" />

describe('Select a Tour', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get('#cookie_stop').click()
    })

    it('should select Hurgada tour', () => {
        cy.get('.card-item.destination-card')
        .eq(3)
        .click( { force: true })
    })

    it('should check if the correct hotel is chosen', () => {
        cy.scrollTo('top')
        cy.get('.single-content-item.pb-4 .title.font-size-26').should('have.text', 'hurghada sunset desert safari')
    })

    it('should open calendar', () => {
        cy.get('[name="date"]').click({frce:true})
    })

    it('should select tour date', () => {
        cy.get('.day')
        .eq(37)
        .click( {force: true } )
    })
    

    it('should check the tour date', () => {
        cy.scrollTo('top')
        cy.get('[name="date"]').should('have.value', '31-05-2022')
    })

    it('should select the number of adults', () => {
        cy.get('#adults').select("2", {force: true})
    })

    it('should select the number of children', () => {
        cy.get('#childs').select("2", {force: true})
    })

    it('should select the number of infants', () => {
        cy.get('#infants').select("1", {force: true})
    })

    it('should book the tour', () => {
        cy.get('[type="submit"]').click( { force: true } )
    })

    it('should check if user has landed on hotel bookings page', () => {
        cy.url().should('include', 'tours/booking')
    })

    it('accept cookies', () => {
        cy.get('#cookie_stop').click({ force: true })
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

        describe('Add Adult Traveller 1', () => {

            it('should enter the First name', () => {
                cy.get('[name="firstname_1"]').focus()
                cy.get('[name="firstname_1"]').type('User First Name')
            })
        
            it('should enter the Last name', () => {
                cy.get('[name="lastname_1"]').focus()
                cy.get('[name="lastname_1"]').type('User Last Name')
            })
        })

        describe('Add Adult Traveller 2', () => {

            it('should select the traveller 2 title', () => {
                cy.get('[name="title_2"]').select("MRS", {force: true})
            })
            
            it('should enter the First name', () => {
                cy.get('[name="firstname_2"]').focus()
                cy.get('[name="firstname_2"]').type('Second User First Name')
            })
        
            it('should enter the Last name', () => {
                cy.get('[name="lastname_2"]').focus()
                cy.get('[name="lastname_2"]').type('Second User Last Name')
            })
        })

    })

    describe('Paying and continuing forward', () => {

        it('should select the Pay Later option', () => {
            cy.get('#gateway_pay-later').click({force:true})
        })

        it('should select Terms and Conditions checkbox', () => {
            cy.get('#agreechb').click({force:true})
        })

        it('should check if the confirmation button is enabled', () => {
            cy.get('#booking').should('not.be.disabled')
        })
    })

})