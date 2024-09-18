Feature: Sauce demo basic sanity
Verify the basic login of the Sauce demo page

  Scenario: Verify user is able to login with valid credentials
        Given User navigates to sauce demo page with url "https://www.saucedemo.com/"
        When User enters username as "standard_user"
        And User enters password as "secret_sauce"
        Then User clicks on Login 

        
