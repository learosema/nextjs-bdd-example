Feature: Google Main Page

  As a user,
  I want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given the user opens the Google page
    Then the title includes "Google"
