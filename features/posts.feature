Feature: Posts

@user1 @web
Scenario: Create Draft Post
    # Login
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When  I enter email "<USERNAME>"
    When  I enter password "<PASSWORD>"
    And   I click on element having class "login"
    And   I wait for 7 seconds
    # Draft Post
    And   I wait for 2 seconds
    When  I click on element having attribute 'a[href="#/posts/?type=draft"]'
    When  I click on element having attribute 'a[href="#/editor/post/"]'
    When  I enter random string into attribute 'textarea[placeholder="Post Title"]'
    When  I enter random string into attribute 'div[data-placeholder="Begin writing your post..."]'
    And   I wait for 2 seconds
    When  I click on element having attribute 'a[href="#/posts/?type=draft"]'
    And   I wait for 2 seconds
    Then  I validate draft post list item

@user2 @web
Scenario: Publish Post
    # Login
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When  I enter email "<USERNAME>"
    When  I enter password "<PASSWORD>"
    And   I click on element having class "login"
    And   I wait for 12 seconds
    # Publish Post
    And   I wait for 1 seconds
    When  I click on element having attribute 'a[href="#/posts/?type=draft"]'
    When  I click on element having attribute 'a[title="Edit this post"]:first-child'
    When  I click on element having class "gh-publishmenu"
    When  I click on element having class "gh-publishmenu-button"
    And   I wait for 2 seconds
    Then  I validate exists class element "gh-notification-title"

@user3 @web
Scenario: Unpublish Post
    # Login
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When  I enter email "<USERNAME>"
    When  I enter password "<PASSWORD>"
    And   I click on element having class "login"
    And   I wait for 15 seconds
    # Unpublish Post
    And   I wait for 1 seconds
    When  I click on element having attribute 'a[href="#/posts/?type=published"]'
    When  I click on element having attribute 'a[title="Edit this post"]:first-child'
    When  I click on element having class "gh-publishmenu"
    When  I click on element having class 'gh-publishmenu-radio-button'
    When  I click on element having class "gh-publishmenu-button"
    And   I wait for 2 seconds
    Then  I validate exists class element "gh-notification-title"
