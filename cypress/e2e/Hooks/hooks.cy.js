//HOOKS
// these are used for avoiding repetition of code
// There are 4 types of hooks available in cypress for pre-requisites
//before.......// before starting it block before block is executed
// after...... is excecuted after completion of all it blocks

//beforeEach...... executed multiple times before each and every it block.... for example for 
//login we can create that block ... it will execute three times before each it block

// afterEach... is e.g .....if we want to log out after each search we use this... afterf completeion of each block 


//TAGS
//THERE ARE DIFFERENT TAGS FOR EXAMPLE IT.SKIP.... TO SKIP A IT BLOCK AND RUN THE REST
//...IT.ONLY.....MEANS ONLY THIS PARTICULAR BLOCK WILL BE EXCUTED
//=======================================================================
describe('MyTestSuites', () => {

    before(()=>{      //it will execute only once before starting it blocks
        cy.log("************launch app********")
    
    })
     
    after(()=>{   //it will execute only once after execution of it block
        cy.log("********    close    app*********")
    })
    
    beforeEach(()=>{  // will execute 3 times i.e. before every it block 
    
        cy.log(" ****  login  ***********")
    })
    
    afterEach(()=>{  // will execute 3 times i.e. after every it block 
    cy.log("*******  logout *********")
    
    })
    
    
        it('Search', () => {
            cy.log("*******Search********")
    
            
        });
    
    
        it('Advance Search', () => {
            cy.log("******* Advance Search ********")
            
            
    
        });
    
        it('Listed products', () => {
    
            cy.log("******* Listed products ********")
            
        });
    
    
    });

    //ACTIVITY TIME
//Use beforeEach Hook to cut off the 
//repetition and navigate to correct page for each and individual test
