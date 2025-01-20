describe('Knowledge of Restfull API for the technical challenge', () => {
    
    it('Read and analise the response of all objects with property “electronics”', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).then((response) => {

            //Status Code OK
            expect(response.status).to.eq(200)

            //Read the response and filter all objects with property “electronics”
            const filteredList = response.body.filter(item => item.category == 'electronics')
            filteredList.forEach(item => {
                expect(item.category).to.be.eq('electronics')
            });

            //Count the number of times that the property above appears
            const item_lenth = filteredList.length
            console.log(item_lenth)

            //Verify the number of objects with the property above appears with rate bigger than 4
            expect(item_lenth).to.be.above(4)
            expect(filteredList).to.have.length(6)

            //Finally print found objects to console
            console.log(filteredList)
        })
    })
})