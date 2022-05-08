/// <reference types="Cypress" />

describe('Select a Hotel', () => {

    it('should land on homepage', () => {
        cy.visit('/')
    })

    it('accept cookies', () => {
        cy.get('#cookie_stop').click()
    })

    it('should move to the next hotel slide', () => {
        cy.get('.owl-dots .owl-dot')
        .eq(1)
        .click({force:true})
    })

    it('should select Malmaison Manchester Hotel', () => {
        cy.get('a[href="https://www.phptravels.net/hotel/en/usd/dubai/malmaison-manchester/34/10-05-2022/11-05-2022/1/2/0/1/IN/IN/0"].d-block.waves-effect')
        .eq(1)
        .click( { force: true })
    })

    it('should check if the correct hotel is chosen', () => {
        cy.scrollTo('top')
        cy.get('.single-content-item.my-4 .title.font-size-26').should('have.text', 'Malmaison Manchester        \n        \n        \n        ')
    })

    it('should select one bedroom', () => {
        cy.get('[type="submit"]')
        .eq(0)
        .click( { force: true } )
    })

    it('should check if user has landed on hotel bookings page', () => {
        cy.url().should('include', 'hotels/booking')
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

        describe('Add Child Traveller 1', () => {

            it('should select the child traveller 1 age', () => {
                cy.get('[name="child_age_1"]').select("5", {force: true})
            })
            
            it('should enter the child traveller 1 First name', () => {
                cy.get('[name="child_firstname_1"]').focus()
                cy.get('[name="child_firstname_1"]').type('First Child First Name')
            })
        
            it('should enter the Last name', () => {
                cy.get('[name="child_lastname_1"]').focus()
                cy.get('[name="child_lastname_1"]').type('First Child Last Name')
            })
        })
    
        describe('Add Child Traveller 2', () => {

            it('should select the child traveller 1 age', () => {
                cy.get('[name="child_age_2"]').select("7", {force: true})
            })
            
            it('should enter the child traveller 1 First name', () => {
                cy.get('[name="child_firstname_2"]').focus()
                cy.get('[name="child_firstname_2"]').type('Second Child First Name')
            })
        
            it('should enter the Last name', () => {
                cy.get('[name="child_lastname_2"]').focus()
                cy.get('[name="child_lastname_2"]').type('Second Child Last Name')
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