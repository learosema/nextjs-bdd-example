import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('the user opens the Google page', () => {
  cy.visit(url)
})
