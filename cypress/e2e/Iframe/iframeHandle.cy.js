import 'cypress-iframe'
describe('Handling Iframe', () => {
    it('Interact with iframe', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Hello Cypress{ctrl+a}')
        cy.get('[title="Bold"]').click()
        
    });
});