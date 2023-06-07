describe('Auto Suggestion Dropdown', () => {

    it('select item with one autosuggestion dropdown', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.get('#myInput').type('gar')
        cy.get('#myInputautocomplete-list').click()
        cy.get('#submit-button').click()
        cy.url().should('contain', 'Gar')

    })
    it('Iteration autosuggestion dropdown', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('#myInput').type('g')
        cy.get('#myInputautocomplete-list').each(($el, index, $list) => {

            let item = $el.text()
            let productSelect = 'Grapes'
            if (item === productSelect) {
                cy.wrap($el).click()

                cy.get('#submit-button').click()
                cy.url().should('contain', productSelect)
            }

            //Actively use then and try with later other keyword
        }).then(() => {
            cy.get('#myInput').type('a')

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Almond';

                if (prod === productToSelect) {
                    cy.wrap($el).click();

                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        })
    })
})
