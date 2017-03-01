var currentPage = require('../pages/current.page');
/**
 * User will be logged in
 * @param  {String}   email username of the user
 * @param  {String}   password password of the user
 * @param  {Function} done Function to execute when finished
 */
module.exports = (email, password, done) => {
    
    // email = 't.tomol@arcanys.com';
    // password = 'ttomol0000';
    email = 'bams@mailinator.com';
    password = 'qwertyuiop';
    browser['setValue']('//input[@type="text" and @id="user_email"]', email);
    browser['setValue']('//div[@class="form-group"]/input[@type="password" and @id="user_password"]', password);

    browser.click('//input[@type="submit" and @value="Log in"]');

    done();
};
