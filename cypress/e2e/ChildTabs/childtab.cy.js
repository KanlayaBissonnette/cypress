
describe('Test WebdriverUni contact us page', () => {

    it('submit contact us form positive test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="first_name"]').type('Kanlaya')
        cy.get('[name="last_name"]').type('Bissonnette')
        cy.get('[name="email"]').type('abcd@gmail.com')
        cy.get('[name="message"]').type('Thank you for your comment')
        cy.get('[type="submit"]').click()
    })

    it('submit contact us form negative test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('[name="first_name"]').type('Kanlaya')
        cy.get('[name="last_name"]').type('Bissonnette')
        // cy.get('[name="email"]').type('abcd@gmail.com')
        cy.get('[name="message"]').type('Thank you for your comment')
        cy.get('[type="submit"]').click()
        cy.contains('all fields are equired')
    })

    it('the-internet.herokuapp window handle', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('a[href=' / windows / new ']').invoke('removeAttr', 'taget').click()
    })
})