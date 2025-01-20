import LoginPage from '../../pages/loginPage'
import InventoryPage from '../../pages/inventoryPage'

describe('Knowledge of frontend page for the technical challenge', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    it('Basic login and Verify that the items are sorted', () => {
        //Go to https://www.saucedemo.com/
        loginPage.visit()

        //Log in to the site. 
        loginPage.fillUsername('standard_user')
        loginPage.fillPassword('secret_sauce')
        loginPage.loginSubmmit()

        //Verify that the items are sorted by Name ( A -> Z ).
        inventoryPage.verifySortedItemsAZ()
        
        //Change the sorting to Name ( Z -> A).
        inventoryPage.sort_combobox_visible()
        inventoryPage.selectZASortCombobox()

        //Verify that the items are sorted correctly.
        inventoryPage.verifySortedItemsZA()
    })
})