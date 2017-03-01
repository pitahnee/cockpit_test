Feature: License Registration is Valid

        Background: 
            Given I open the url "Login URL"
            And I am logged in as "Valid Email Input" and "Valid Password Input"
            And I pause for 1000ms        
            When I click on the element "Elementi Menu"
            And I click on the element "Register License Sidebar"
            And I pause for 1000ms
            Then I expect that element "Register License Page Title" contains the text "Register Licenses Text"

        Scenario: License Registration is valid
            When I set "License Block 0 Input" to the inputfield "License Block 0 Field"           
            And I set "License Block 1 Input" to the inputfield "License Block 1 Field"      
            And I set "License Block 2 Input" to the inputfield "License Block 2 Field"      
            And I set "License Block 3 Input" to the inputfield "License Block 3 Field"      
            And I set "License Block 4 Input" to the inputfield "License Block 4 Field"
            And I pause for 1000ms
            And I click on the button "Register License Continue Button"
            And I pause for 1000ms
            Then I expect that element "Register License Valid Flash Element" is visible       