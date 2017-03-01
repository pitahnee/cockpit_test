import checkIfElementExists from '../lib/checkIfElementExists';
var currentPage = require('../pages/current.page');

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */
module.exports = (method, value, element, done) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */

    var page_filename = currentPage.getPageFilename(); // returns the filename of the page
    var pagename = require('../pages/'+page_filename+''); // define the page required for the current page

    var new_value = pagename.getValue(value); // get actual value
    var new_element = pagename.getElement(element); // get actual selector

    const command = (method === 'add') ? 'addValue' : 'setValue';

    checkIfElementExists(new_element, false, 1);

    if (!new_value) {
        browser[command](new_element, '');
    } else {
        browser[command](new_element, new_value);
    }

    done();
};
