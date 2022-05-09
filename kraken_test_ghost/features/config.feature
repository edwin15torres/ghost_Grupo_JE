Feature: Ghost configuration

@user1 @web
Scenario: Configuracion
    Given I navigate to page "http:\\localhost:2368\ghost\"
    And I wait for 1 seconds
    When I enter ghost email "l.padillac2@uniandes.edu.co"
    And I wait for 1 seconds
    And I enter ghost password "PadillaMiso257"
    And I wait for 1 seconds
    And I click ghost login
    And I wait for 2 seconds

    And Yo ingreso a configuracion
    And I wait for 2 seconds
    And Yo visito al staff
    And I wait for 2 seconds
    And Yo invito gente
    And I wait for 2 seconds
    And Yo escribo email
    And I wait for 2 seconds
    And Yo envio invitacion
    And I wait for 3 seconds

    And Yo ingreso a configuracion
    And I wait for 2 seconds
    And Yo ingreso a los temas
    And I wait for 2 seconds