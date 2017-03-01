Feature: License Registration Elements

    Background: 
        Given I open the url "Login URL"
        And I am logged in as "Valid Email Input" and "Valid Password Input"
        And I pause for 1000ms        

    Scenario: Check register license page and its elements are visible
        When I click on the element "Elementi Menu"
        And I click on the element "Register License Sidebar"
        And I pause for 1000ms        
        Then I expect that element "Register License Page Title" contains the text "Register Licenses Text"