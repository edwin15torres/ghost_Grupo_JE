Feature: Ghost members delete

@user3 @web
Scenario: Eliminar Miembro
    Given I navigate to page "http:\\localhost:2368\ghost\"
    And I wait for 3 seconds
    When I enter ghost email "l.padillac2@uniandes.edu.co"
    And I wait for 1 seconds
    And I enter ghost password "PadillaMiso257"
    And I wait for 1 seconds
    And I click ghost login
    And I wait for 5 seconds

    And I click link members
    And I wait for 7 seconds
    
    And I click link new member
    And I wait for 3 seconds
    And I enter member name "Nombre16 de Prueba"
    And I wait for 1 seconds
    And I enter member email "Email16@Prueba.com"
    And I wait for 1 seconds
    And I enter member note "Nota16 de Prueba"
    And I wait for 1 seconds
    And I click member save
    And I wait for 2 seconds
    And I click link members
    And I wait for 7 seconds

    And I write search text "Nombre16"
    And I wait for 3 seconds
    And I click first member
    And I wait for 2 seconds

    And I click config member
    And I wait for 2 seconds
    And I click delete member
    And I wait for 2 seconds
    And I click confirm delete member
    And I wait for 2 seconds