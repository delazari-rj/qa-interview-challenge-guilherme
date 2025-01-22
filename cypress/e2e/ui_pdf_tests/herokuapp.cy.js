describe('Knowledge of download and read a pdf file for the technical challenge', () => {


    it('Download and read a pdf file', () => {
        const fileName = 'testing.pdf'

        //Go to https://the-internet.herokuapp.com/download
        //Download the file 20250110_171832.pdf
        cy.request({
            url: 'https://the-internet.herokuapp.com/download/' + fileName,
            encoding: 'binary',
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.writeFile('./downloads/' + fileName, response.body, 'binary')
        })

        //Verify that the file has been downloaded with the correct name
        cy.readFile('./downloads/testing.pdf')
            .should('exist')

        //Check if the text "Explanation of the Keys on a Windows QWERTY Keyboard" 
        //exists as content in the PDF.
        cy.task('readPdf', './downloads/testing.pdf').then(function (data) {
            expect(data.text).to.contain('Explanation of the Keys on a Windows QWERTY Keyboard')
        })
    })

})