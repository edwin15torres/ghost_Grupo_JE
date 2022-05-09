Feature: Ghost members labels

@user1 @web
Scenario: Manejar Etiquetas
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
    And I wait for 5 seconds
    And I enter member name "Nombre17 de PruebaX"
    And I wait for 1 seconds
    And I enter member email "Email17@Pruebahotmail.com"
    And I wait for 1 seconds
    And I enter member label "uniandes"
    And I wait for 1 seconds
    And I add member label
    And I wait for 1 seconds
    And I enter member note "Nota17 de Prueba"
    And I wait for 1 seconds
    And I click member save
    And I wait for 2 seconds

    And I click link members
    And I wait for 7 seconds

    And I click link new member
    And I wait for 5 seconds
    And I enter member name "Nombre18 de PruebaX"
    And I wait for 1 seconds
    And I enter member email "Email18@Pruebahotmail.com"
    And I wait for 1 seconds
    And I enter member label "uniandes"
    And I wait for 1 seconds
    And I add member label
    And I wait for 1 seconds
    And I enter member note "Nota18 de Prueba"
    And I wait for 1 seconds
    And I click member save
    And I wait for 2 seconds

    And I click link members
    And I wait for 7 seconds

    And I click link new member
    And I wait for 5 seconds
    And I enter member name "Nombre19 de PruebaX"
    And I wait for 1 seconds
    And I enter member email "Email19@Pruebagmail.com"
    And I wait for 1 seconds
    And I enter member label "impar"
    And I wait for 1 seconds
    And I add member label
    And I wait for 1 seconds
    And I enter member note "Nota19 de Prueba"
    And I wait for 1 seconds
    And I click member save
    And I wait for 2 seconds

    And I click link members
    And I wait for 7 seconds

    And I click link new member
    And I wait for 5 seconds
    And I enter member name "Nombre20 de PruebaX"
    And I wait for 1 seconds
    And I enter member email "Email20@Pruebagmail.com"
    And I wait for 1 seconds
    And I enter member label "gm"
    And I wait for 1 seconds
    And I add member label
    And I wait for 1 seconds
    And I enter member note "Nota20 de Prueba"
    And I wait for 1 seconds
    And I click member save
    And I wait for 2 seconds

    And I click link members
    And I wait for 7 seconds

    And I click link new member
    And I wait for 5 seconds
    And I enter member name "Nombre21 de PruebaX"
    And I wait for 1 seconds
    And I enter member email "Email21@Pruebauniandes.edu.co"
    And I wait for 1 seconds
    And I enter member label "uniandes"
    And I wait for 1 seconds
    And I add member label
    And I wait for 1 seconds
    And I enter member note "Nota21 de Prueba"
    And I wait for 1 seconds
    And I click member save
    And I wait for 2 seconds

    And I click link members
    And I wait for 7 seconds

    And I click button filter
    And I wait for 5 seconds
    And I click select field 2
    And I wait for 5 seconds
    And I click select operator 0
    And I wait for 5 seconds
    And I click before value label
    
    And I wait for 5 seconds
    And I write2 value label
    And I wait for 5 seconds
    
    And I click button apply filter
    And I wait for 7 seconds

    And I click button filter
    And I wait for 1 seconds
    And I click select field 0
    And I wait for 1 seconds
    And I click select operator 1
    And I wait for 5 seconds
    And I click field value
    And I wait for 1 seconds
    And I write field value "PruebaX"
    And I wait for 1 seconds
    And I click button apply filter
    And I wait for 7 seconds

    And I click button backup delete
    And I wait for 2 seconds
    And I click button confirm close
    And I wait for 7 seconds