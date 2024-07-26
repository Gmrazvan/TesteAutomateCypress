describe('On Linkedin', () => {

    it('I can login', () => {

        cy.visit('https://linkedin.com');
        cy.get('[action-type="ACCEPT"]').click();
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('gmrazvan07@gmail.com');
        cy.get('#password').type('!Herobrine07200212');
        cy.get('.btn__primary--large').click();
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.get('#ember16').should('exist');
    })


})