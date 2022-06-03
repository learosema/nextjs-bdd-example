import { Then } from "cypress-cucumber-preprocessor/steps";
import { pages } from "../helpers";

Then(/^the "([^"]*)" page is visible$/, function (page) {
  cy.url().should("include", pages[page]);
});

Then(`the title includes {string}`, function (title) {
  cy.title().should("include", title);
});
