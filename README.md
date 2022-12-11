# Cypress e2e

We are using Cypress to run our e2e tests.

Go take a look at the
documentation: [https://docs.cypress.io/](https://docs.cypress.io/) - It will give you all the keys to start adding
e2e tests to our codebase!

## Setup env

- Copy `cypress/.env.example` to `cypress/.env`
- Setup `DEFAULT_BASE_URL` ,`ENV` variables
  Those variables define the environment agianst wich we launcg tests and the url of each environment

By default, we target the dev environment. If you want to target another environment, add a (key,value) entry in cypress/urls.json file and set the `ENV` env variable with the new key.

## Install dependencies

`npm use` (will read .nvmrc file to select relevant node version )
`npm i` (install dependencies on packages.json)

## HowTo run tests locally

Locally, it's very easy to run the tests:

- interactive mode (best mode for dev):
  `npm run e2e:cypress:open` (alias for `cypress open`)
- ci mode headless :
  `npm run e2e:cypress:smoke` (alias for `cypress run`)

## Run Test and Generate Reports

`npm run e2e:cypress:smoke && npm run report`

### Reporting

Two type of reporting are set in this Project :

- a json report generated formatted with cucumber-json-formatter see https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md

- html report generated (to report/) with "multiple-cucumber-html-reporter" from the previous json report via this command (after a test run is completed and jsonlogs/log.json file is generated) see https://github.com/wswebcreation/multiple-cucumber-html-reporter/blob/main/README.MD#pageTitle
  `npm run report`

## HowTo write new tests

You will create your new tests in `./e2e`
