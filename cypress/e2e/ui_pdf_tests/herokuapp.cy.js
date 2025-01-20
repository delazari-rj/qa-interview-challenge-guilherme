
const path = require('path');

describe('Knowledge of download and read a pdf file for the technical challenge', () => {

    it('Download and read a pdf file', () => {
        //const fileName = '20250110_171832.pdf'
        const fileName = '1nt22cs049-db1.pdf'

        //Go to https://the-internet.herokuapp.com/download
        //Download the file 20250110_171832.pdf
        cy.request({
            url: 'https://the-internet.herokuapp.com/download/' + fileName,
            encoding: 'binary',
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.writeFile('./downloads/' + fileName, response.body, 'binary')
        })
   
    })

})