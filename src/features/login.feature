Feature: Login

    Background:
        Given I open the url "Login URL"
        And I pause for 1000ms
        
    Scenario: Check login page and its elements are visible
        Then I expect that element "Login Email Field" is visible
        And I expect that element "Login Password Field" is visible
        And I expect that element "Login Button" is visible
    
    Scenario: Login with empty credentials
        When I set "Empty Email Input" to the inputfield "Login Email Field"
        And I set "Empty Password Input" to the inputfield "Login Password Field"
        And I click on the button "Login Button"
        Then I expect that element "Login Message Element" contains the text "Login Invalid Message"

    Scenario: Username and password are invalid
        When I set "Invalid Email Input" to the inputfield "Login Email Field"
        And I set "Invalid Password Input" to the inputfield "Login Password Field"
        And I click on the button "Login Button"
        And I pause for 1000ms
        Then I expect that element "Login Message Element" contains the text "Login Invalid Message"

    Scenario: Username and password are valid
        When I set "Valid Email Input" to the inputfield "Login Email Field"
        And I set "Valid Password Input" to the inputfield "Login Password Field"
        And I click on the button "Login Button"
        And I pause for 1000ms
        Then I expect that element "User Menu" is visible