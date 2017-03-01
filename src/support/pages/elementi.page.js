"use strict";

var Page = require('./page')

class ElementiPage extends Page {

    getValue(value) {
        var new_value = 'https://cockpit-staging.spinetix.com/';
        if(value == 'Empty Email Input') {
            new_value = '';
        }
        if(value == 'Register Licenses Text') {
            new_value = 'Register Licenses';
        }
        if(value == 'All Licenses Text') {
            new_value = 'All Licenses';
        }
        if(value == 'Invalid License Block 0 Input') {
            new_value = 'VQ7P2a';
        }
        if(value == 'Invalid License Block 1 Input') {
            new_value = 'BVYNYa';
        }
        if(value == 'Invalid License Block 2 Input') {
            new_value = '87V9Fa';
        }
        if(value == 'Invalid License Block 3 Input') {
            new_value = '496CDa';
        }
        if(value == 'Invalid License Block 4 Input') {
            new_value = '8VBADa';
        }      
        if(value == 'Registered License Block 0 Input') {
            new_value = 'VQ7P2';
        }
        if(value == 'Registered License Block 1 Input') {
            new_value = 'BVYNY';
        }
        if(value == 'Registered License Block 2 Input') {
            new_value = '87V9F';
        }
        if(value == 'Registered License Block 3 Input') {
            new_value = '496CD';
        }
        if(value == 'Registered License Block 4 Input') {
            new_value = '8VBAD';
        }   
        if(value == 'License Not Recognized Message') {
            new_value = 'License key not recognized. Double-check that the license key you entered is correct.';
        }   
        if(value == 'License Key Already Registered Message') {
            new_value = 'License key already registered';
        }  
         
        return new_value;
    }

    getElement(element) {
        var new_element = 'input[type="text"]';
        if(element == 'Elementi Menu') {
            new_element = '(//a[text()="Elementi"])';
        }
        if(element == 'Register License Sidebar') {
            new_element = '(//a[@href="/licenses/keys/new"])';
        }
        if(element == 'Register License Page Title') {
            new_element = '(//h2[text()="Register Licenses"])';
        }
        if(element == 'All Licenses Page Title') {
            new_element = '(//h2[@class="page_title"])';
        }
        if(element == 'License Block 0 Field') {
            new_element = '(//input[@id="license_0_0"])';
        }
        if(element == 'License Block 1 Field') {
            new_element = '(//input[@id="license_0_1"])';
        }
        if(element == 'License Block 2 Field') {
            new_element = '(//input[@id="license_0_2"])';
        }
        if(element == 'License Block 3 Field') {
            new_element = '(//input[@id="license_0_3"])';
        }
        if(element == 'License Block 4 Field') {
            new_element = '(//input[@id="license_0_4"])';
        }
        if(element == 'Register License Continue Button') {
            new_element = '(//button[@type="submit"])';
        }
        if(element == 'Register License Invalid Flash Element') {
            new_element = '(//div[@id="flash-notification-danger"]/div[@class="content"])';
        }
         if(element == 'Register License Valid Flash Element') {
            new_element = '(//div[@id="flash-notification-info"]/div[@class="content"])';
        }
        console.log('current element is ', element)
        console.log('current element is ', new_element)
        return new_element;
    }

}

module.exports = new ElementiPage();