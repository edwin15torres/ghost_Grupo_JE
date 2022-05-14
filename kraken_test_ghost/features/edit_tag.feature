Feature: User create a tag with only name


  @user1 @web
  Scenario: User is login with user y password correct
	Given I navigate to page "http://localhost:3001/ghost/#/signin"
	Then I enter email "<USERNAME>" 
	Then I enter password "<PASSWORD>" 
	Then I click on element having class "login"
	Then I wait for 2 seconds
	Given I navigate to page "http://localhost:3001/ghost/#/tags"
	Given I navigate to page "http://localhost:3001/ghost/#/tags/new"
	Then I enter "tag-name" into value "prueba-name-tag"
	Then I enter "tag-slug" into value "prueba-slug-tag"
	Then I enter "tag-description" into value "prueba-description-tag"
	Then I wait for 2 seconds
	Then I click on element having id "ember28"