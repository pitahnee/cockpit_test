var currentPage = require('../pages/current.page');

/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (element, falseCase, done) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    var page_filename = currentPage.getPageFilename(); // returns the filename of the page
    var pagename = require('../pages/'+page_filename+''); // define the page required for the current page

    var new_element = pagename.getElement(element); // get actual selector
    
    const isVisible = browser.isVisible(new_element);

    if (falseCase) {
        expect(isVisible).to.not
            .equal(true, `Expected element "${new_element}" not to be visible`);
    } else {
        expect(isVisible).to
            .equal(true, `Expected element "${new_element}" to be visible`);
    }

    done();
};
