describe('Select Dropdown', () => {

    it('interact with select tag dropdown', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('[id="dropdowm-menu-1"]').select('python').should('have.value', 'python')
        cy.get('[id="dropdowm-menu-2"]').select(3).contains('JUnit')
        cy.get('[id="dropdowm-menu-3"]').select('javascript')
        
    })
})