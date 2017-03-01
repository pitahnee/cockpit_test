"use strict";
class Page {
	constructor() {
		this.title = 'Cockpit';
	}
	open(path) {
		browser.url('https://cockpit-staging.spinetix.com/' + path);
	}

}
module.exports = Page;