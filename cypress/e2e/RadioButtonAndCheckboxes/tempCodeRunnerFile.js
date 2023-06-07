describe('Check and validate checkboxes', () => {

    it('radioButton Test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#radio-buttons').find('[type="radio"]').first().check().should('be.checked')
        cy.get('#radio-buttons').find('[type="radio"]').last().check().should('be.checked')
        cy.get('[value="lettuce"]').check()
    })
})