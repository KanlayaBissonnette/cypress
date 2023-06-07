describe('Test WebdriverUni contact us page', () => {

    it('submit contact us form positive test', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.xpath('//input[@name = "first_name"]').type('Kanlaya')
        cy.get('[name="last_name"]').type('Bissonnette')
        cy.get('[name="email"]').type('abcd@gmail.com')
        cy.get('[name="message"]').type('Thank you for your comment')
        cy.get('[type="submit"]').click()

    })
    it('submit contact us form negative test', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Kanlaya')
        cy.get('[name="last_name"]').type('Bissonnette')
        // cy.get('[name="email"]').type('abcd@gmail.com')
        cy.get('[name="message"]').type('Thank you for your comment')
        cy.get('[type="submit"]').click()
        cy.contains('all fields are equired')
    })
})