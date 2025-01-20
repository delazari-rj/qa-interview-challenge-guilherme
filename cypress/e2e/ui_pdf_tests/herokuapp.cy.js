
const path = require('path');

describe('--', () => {

    it('---', () => {
        const fileName = '20250110_171832.pdf'

        //Go to https://the-internet.herokuapp.com/download
        //Download the file 20250110_171832.pdf
        cy.downloadFile('https://the-internet.herokuapp.com/download/{fileName}','downloads', fileName)

        //Verify that the file has been downloaded with the correct name
        const filePath = './downloads/{fileName}' 
        let fileNameAUX = path.basename(filePath)
        expect(fileNameAUX).to.be.equal('20250110_171832.pdf')

        //
    })

})