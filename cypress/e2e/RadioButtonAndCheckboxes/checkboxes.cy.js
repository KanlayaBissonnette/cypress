
describe('Check and validate checkboxes', () => {
    before(()=>{      //it will execute only once before starting it blocks
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    
    })

    it('Checkboxes Test', () => {
       // cy.visit('http://www.webdriveruniversity.com/')
       // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.xpath('//*[@id="checkboxes"]//input[@value="option-1"]').check()
        cy.xpath('//*[@id="checkboxes"]//input[@value="option-3"]').uncheck()   
    })

    it.skip('Check all Checkboxes Test', () => {
       // cy.visit('http://www.webdriveruniversity.com/')
       // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('input[type="checkbox"]').uncheck()
        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').uncheck()
        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').last().check()
        cy.get('input[type="checkbox"]').eq(2).check()
        

    })
    it('radioButton Test', () => {
        //cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#radio-buttons').find('[type="radio"]').first().check().should('be.checked')
        cy.get('#radio-buttons').find('[type="radio"]').last().check().should('be.checked')
        cy.get('[value="lettuce"]').check()
    })

    
})