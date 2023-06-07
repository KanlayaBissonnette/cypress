describe('Auto Suggestion Dropdown', () => {

    it.skip('popup alert test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button1').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    })
    it('Alert Confirm Test', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', (str)=>{
            return false
            expect(str).to.equal('Press a button!')

        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')


    })

    it.skip('Prompt Alert Test', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('Hello Cypress')
            cy.get('button[onclick="jsPrompt()"]').click()
            
            cy.get('#result').should('have.text', 'You entered: Hello Cypress')
        })
    })

    it('Alert Authentication Test', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth',
        {auth:{
            username:"admin",
            password:"admin"
        }
        })
        cy.get('#content > div > p').should('contain','Congratulations!')



    })

})