Feature: Delete Tag

  @user1 @web
  Scenario: Delete Tag ghost:4.47.0
    Given I signin to "<BASE_URL_1>" with credentials "<USERNAME>" "<PASSWORD>"
    And   I wait for 5 seconds
    When  I delete tag for "<BASE_URL_1>"
    And   I wait for 5 seconds

  @user2 @web
  Scenario: Delete Tag ghost:3.41.1
    Given I signin to "<BASE_URL_2>" with credentials "<USERNAME>" "<PASSWORD>"
    And   I wait for 5 seconds
    When  I delete tag for "<BASE_URL_2>"
    And   I wait for 5 seconds
