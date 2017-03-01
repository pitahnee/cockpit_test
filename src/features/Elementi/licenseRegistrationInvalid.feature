Feature: License Registration is invalid

    Scenario: License Key should not be registered successfully if it is invalid
        Given I open the url "Login URL"
        And I am logged in as "Valid Email Input" and "Valid Password Input"
        And I pause for 1000ms        
        When I click on the element "Elementi Menu"
        And I click on the element "Register License Sidebar"
        And I pause for 1000ms
        Then I expect that element "Register License Page Title" contains the text "Register Licenses Text"
        When I set "Invalid License Block 0 Input" to the inputfield "License Block 0 Field"           
        And I set "Invalid License Block 1 Input" to the inputfield "License Block 1 Field"      
        And I set "Invalid License Block 2 Input" to the inputfield "License Block 2 Field"      
        And I set "Invalid License Block 3 Input" to the inputfield "License Block 3 Field"      
        And I set "Invalid License Block 4 Input" to the inputfield "License Block 4 Field"
        And I pause for 1000ms
        And I click on the button "Register License Continue Button"
        Then I expect that element "Register License Invalid Flash Element" is visible

    Scenario: License Key should not be registered successfully if it is already registered
        When I set "Registered License Block 0 Input" to the inputfield "License Block 0 Field"           
        And I set "Registered License Block 1 Input" to the inputfield "License Block 1 Field"      
        And I set "Registered License Block 2 Input" to the inputfield "License Block 2 Field"      
        And I set "Registered License Block 3 Input" to the inputfield "License Block 3 Field"      
        And I set "Registered License Block 4 Input" to the inputfield "License Block 4 Field"
        And I pause for 1000ms
        And I click on the button "Register License Continue Button"
        Then I expect that element "Register License Invalid Flash Element" is visible