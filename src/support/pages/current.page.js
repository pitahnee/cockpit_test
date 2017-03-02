"use strict";

var Page = require('./page')


class currentPage extends Page {
    
    get pageURL()  { return browser.getUrl(); }

    getPageFilename() {
        var page_filename = 'login.page';
        if(this.pageURL == 'https://cockpit-staging.spinetix.com/') {
            page_filename = 'login.page';
        }
        if(this.pageURL == 'https://cockpit-staging.spinetix.com/licenses/keys/new' || this.pageURL == 'https://cockpit-staging.spinetix.com/licenses/keys') {
            page_filename = 'elementi.page';
        }
        // console.log('current page is: ', page_filename)
        return page_filename;
    }

}

module.exports = new currentPage();