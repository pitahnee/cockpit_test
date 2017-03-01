"use strict";

var Page = require('./page')

class LoginPage extends Page {

    getValue(value) {
        var new_value = 'https://cockpit-staging.spinetix.com/';
        if(value == 'Login URL') {
            new_value = 'https://cockpit-staging.spinetix.com/';
        }
        if(value == 'Empty Email Input') {
            new_value = '';
        }
        if(value == 'Empty Password Input') {
            new_value = '';
        }
        if(value == 'Invalid Email Input') {
            new_value = 'test1234@testmail.com';
        }
        if(value == 'Invalid Password Input') {
            new_value = 'test1234';
        }
        if(value == 'Valid Email Input') {
            new_value = 't.tomol@arcanys.com';
        }
        if(value == 'Valid Password Input') {
            new_value = 'ttomol0000';
        }
        if(value == 'Login Invalid Message') {
            new_value = 'Invalid email or password.';
        }
        if(value == 'Logout Valid Message') {
            new_value = 'Successfully logged out';
        }
        if(value == 'Registered Players Text') {
            new_value = 'Successfully logged out';
        }
        return new_value;
    }

    getElement(element) {
        var new_element = 'input[type="text"]';
        if(element == 'Login Email Field') {
            new_element = '//input[@type="text" and @id="user_email"]';
        }
        if(element == 'Login Password Field') {
            new_element = '//div[@class="form-group"]/input[@type="password" and @id="user_password"]';
        }
        if(element == 'Cockpit Menu') {
            new_element = '(//a[@href="/players/overview" and text()="Cockpit"])';
        }
        if(element == 'Players Menu') {
            new_element = '(//a[@href="/players" and text()="Players"])';
        }
        if(element == 'Elementi Menu') {
            new_element = '(//a[text()="Elementi"])';
        }
        if(element == 'User Menu') {
            new_element = '(//a[@class="dropdown-toggle"])[2]';
        }
        if(element == 'Login Button') {
            new_element = '//input[@type="submit" and @value="Log in"]';
        }
        if(element == 'Logout Link') {
            new_element = '//a[@href="/users/sign_out" and text()="Logout"]';
        }
        if(element == 'Login Message Element') {
            new_element = '//div[@class="content" and text()="Invalid email or password."]';
        }
        if(element == 'Logout Message Element') {
            new_element = '//div[@class="content" and text()="Successfully logged out"]';
        }
        if(element == 'Register License Sidebar') {
            new_element = '(//a[@href="/licenses/keys/new"])';
        }
        return new_element;
    }

}

module.exports = new LoginPage();