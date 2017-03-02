# Changelog

## [1.1.0] - 2017-03-01
### Added 
- Action `loggedIn` - this function will accept username and password and will login to the site.
- Applied WebdriverIO Page Object Pattern
- Added `pages/` directory in support to store page object files
- Used WebdriverIO junit reporter and junit-viewer to convert reports in HTML format
- Added `report_processor` file that will process junit xml to html, create and archive html file

### Changed
- Added `browser.windowHandleSize({width: 1200, height: 1000});` 
in `openWebsite` to resize window
- Updated action and check js files with the following line of codes to get the 
current page name and get the exact value of input and elements.
    - `var currentPage = require('../pages/current.page');` 
    - `var page_filename = currentPage.getPageFilename();` returns the filename of the page
    - `var pagename = require('../pages/'+page_filename+'');` define the page required for the current page
    - `var new_value = pagename.getValue(value);` get actual value
    - `var new_element = pagename.getElement(element);` get actual selector

### Fixed

### Removed
