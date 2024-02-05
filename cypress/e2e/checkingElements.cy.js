/// <reference types="cypress" />


describe('HTML Elements',()=>{

    it('Checkin HTML elements', ()=>{
       // cy.visit('/index.html')
        cy.visit("./Profile test/index.html")
        cy.get('.home-content > a').should('have.text', 'Hire Me')
        cy.get('.navbar').each(($el) =>{
            cy.wrap($el).click()
            cy.wrap($el).should('have.length.greaterThan', 0).its(length)
            console.log($el)
        })
    })
})