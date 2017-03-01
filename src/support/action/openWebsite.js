var currentPage = require('../pages/current.page');

/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 * @param  {Function} done Function to execute when finished
 */
module.exports = (type, page, done) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    var page_filename = currentPage.getPageFilename(); // returns the filename of the page    
    var pagename = require('../pages/'+page_filename+''); // define the page required for the current page    
    var new_page = pagename.getValue(pagename);
    const url = (type === 'url') ? new_page : browser.options.baseUrl + new_page;

    browser.windowHandleSize({width: 1200, height: 1000});
    browser.url(url);

    done();
};
