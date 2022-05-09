Feature: Login

  @user1 @web
  Scenario: Login Successfully
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When  I enter email "<USERNAME>"
    When  I enter password "<PASSWORD>"
    And   I click on element having class "login"
    And   I wait for 7 seconds
    Then  I see admin site

  @user2 @web
  Scenario: Login Failed
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When  I enter email "<PASSWORD>"
    When  I enter password "<USERNAME>"
    And   I click on element having class "login"
    And   I wait for 7 seconds
    Then  I see login error

  @user3 @web
  Scenario: Logout
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When  I enter email "<USERNAME>"
    When  I enter password "<PASSWORD>"
    And   I click on element having class "login"
    And   I wait for 7 seconds
    When  I see admin site
    And   I wait for 2 seconds
    And   I click on element having class "gh-user-avatar"
    And   I click on element having class "user-menu-signout"
    And   I wait for 1 seconds
    Then  I validate exists class element "gh-signin"