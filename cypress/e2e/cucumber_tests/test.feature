
Feature: Test Sauce demo website
    @TC_001
    Scenario: Login website
        When I visit website
        And I enter username and password
        Then I verify homepage

    Scenario: Logout website
        When I visit website
        And I enter username and password
        Then I verify homepage
        And I click on Hambuger icon menu
        And I click on Logout text
        Then I verify Logout successfully

    Scenario: Verify order the product is successfully
        When I visit website
        And I enter username and password
        Then I verify homepage
        When I order the inventory item as 'Sauce Labs Backpack' with the quantity as '1'
        Then I verify the inventory item as 'Sauce Labs Backpack' is displaying at cart page
        And I click on checkout button
        And I fill in the checkout information form
            | firstName | lastName | postalCode |
            | truong    | thao     | 123        |
        And I click on Continue button
        And I click on Finish button
        Then I verify order the inventory is successfully with message as "Thank you for your order!"










