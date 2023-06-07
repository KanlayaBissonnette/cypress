describe('Iterating', () => {
    it('Iterating over Hair Care Page Elements', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains('Hair Care').click()

        //Iterator element and print out elements (cy.log)
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("index:" + index + ":" + $el.text())
        })
    })

    it('Add specific Product tko the basket', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path']").contains('Hair Care').click()

        //iterator element and give condition to click on element 
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes('Seaweed Conditioner')) {
                cy.wrap($el).click()
            }
        })
    })
})