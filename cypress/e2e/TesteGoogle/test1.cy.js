describe('Site Google.com', () => {

    //testul numarul 1
    it('functioneaza cu o cautare basic', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}');
        
    })
 

})