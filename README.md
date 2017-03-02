# Cockpit Test Files

====================

# How to setup test environment

1. Clone this git repo `git clone https://github.com/tiffanytomol/cockpit_test` 
2. Install dependencies. Type `npm install`

# How to run single test

In order to run a single test, just type `npm run <script name>`

You can try to run either of these:

- `npm run login`
- `npm run logout`
- `npm run licenseRegistrationElements`
- `npm run licenseRegistrationInvalid`
- `npm run licenseRegistrationValid`

# How to run multiple tests

In order to run multiple test suites at a time, just type `npm run login,logout`

# How to create shortcut to run a test

1. In package.json file, just add your newly created test under scripts section, just like below.

    "scripts": {
        "new test name": "node_modules\\.bin\\wdio wdio.conf.js --spec path to feature file/licenseRegistrationValid.feature & node report_processor.js"
    },

# How to create new test

1. Create new feature file in `src/feature`
2. Create a new page file in `src/support/pages` to set the variable names in your feature file with their actual value and element selectors.
3. Add your new test in scripts to create a shortcut
4. Run the new test