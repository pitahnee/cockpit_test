import checkIfElementExists from '../lib/checkIfElementExists';
var currentPage = require('../pages/current.page');

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */
module.exports = (action, type, element, done) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    var page_filename = currentPage.getPageFilename(); // returns the filename of the page
    var pagename = require('../pages/'+page_filename+''); // define the page required for the current page

    var new_element = pagename.getElement(element); // get actual selector
    const elem = (type === 'link') ? `=${new_element}` : new_element;

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    checkIfElementExists(elem);

    browser[method](elem);

    done();
};
