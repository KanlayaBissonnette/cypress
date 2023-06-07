///<reference types ="cypress"/>
describe('My first Test', () => {
    it('verify title positive test', () => {
        cy.visit('https://google.com/')
        cy.get('textarea.gLFyf').type('cypress.io')
        cy.contains('Google Search').click()
        cy.get('a[href="https://www.cypress.io/"]').click()
    })
})