Feature: Logout
    
    Scenario: Logout Successfully
        Given I open the url "Login URL"
        And I pause for 1000ms
        When I set "Valid Email Input" to the inputfield "Login Email Field"
        And I set "Valid Password Input" to the inputfield "Login Password Field"
        And I click on the button "Login Button"
        And I pause for 1000ms
        Then I expect that element "User Menu" is visible
        When I click on the element "User Menu"
        And I click on the element "Logout Link"
        Then I expect that element "Logout Message Element" contains the text "Logout Valid Message"