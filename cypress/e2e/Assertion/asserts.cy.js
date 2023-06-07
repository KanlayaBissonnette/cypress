describe('Assertions Demo', () => {
    it('Implicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        )
        /* key words for implicit assertion should , and
    common assertions supported by should is
    eq
    contains
    include
    have.length
    exist
    have.value
    etc..
    */
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contains', 'orangehrmlive')
        cy.url().should('include', 'orangehrmlive')

        cy.title().should('eq', 'OrangeHRM')
            .and('contains', 'Orange')
            .and('include', 'HRM')

        cy.get('.orangehrm-login-branding >img').should('be.visible')
        //cy.xpath("//a").should('have.length', 5)
        cy.get('input[placeholder="Username"][name="username"]').type('Admin').should('have.value', 'Admin')

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = 'Paul Collings'
        cy.get('.oxd-userdropdown-name').then((x) => {
            let actName = x.text()
            //BDD Assertion
            expect(actName).to.equal(expName)
            // expect(actName).not.to.equal(expName)

            //TDD Assertion
            assert.equal(actName, expName)
            // assert.notEqual(actName, expName)
        })
    })
})