Feature: Login

@user1 @web
Scenario: Login Successfully
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When  I enter email 'rd.ortizr1@uniandes.edu.co'
  When  I enter password '@CruelSun1802'
  And   I click "login"
  And   I wait for 5 seconds
  Then  I see admin site

@user2 @web
Scenario: Login Failed
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When  I enter email 'wrong_email'
  When  I enter password 'wrong_password'
  And   I click "login"
  And   I wait for 5 seconds
  Then  I see login error