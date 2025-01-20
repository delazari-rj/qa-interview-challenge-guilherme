class InventoryPage{

    sort_combobox_visible(){
        cy.get('[data-test="product-sort-container"]')
            .should('be.visible')
    }

    selectZASortCombobox(){
        cy.get('[data-test="product-sort-container"]')
            .select('Name (Z to A)')
    }

    verifySortedItemsAZ(){
        const itemsASC = 'Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-ShirtSauce Labs Fleece JacketSauce Labs OnesieTest.allTheThings() T-Shirt (Red)'
    
        cy.get('[data-test="inventory-item-name"]').invoke('text').then((text) => {
            expect(itemsASC).to.be.equal(text)    
        })
    }
    
    verifySortedItemsZA(){
        const itemsDESC = 'Test.allTheThings() T-Shirt (Red)Sauce Labs OnesieSauce Labs Fleece JacketSauce Labs Bolt T-ShirtSauce Labs Bike LightSauce Labs Backpack'
    
        cy.get('[data-test="inventory-item-name"]').invoke('text').then((text) => {
            expect(itemsDESC).to.be.equal(text)    
        })
    }

}

export default InventoryPage