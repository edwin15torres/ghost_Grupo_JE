Feature: EtiquetasV4

@user2 @web
Scenario: Etiquetas
    Given I navigate to page "http:\\localhost:2368\ghost\"
    And I wait for 5 seconds
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/login.png"
    When I enter ghost email "l.padillac2@uniandes.edu.co"
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/writemail.png"
    And I enter ghost password "PadillaMiso257"
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/writepass.png"
    And I click ghost login
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/ingresar.png"
    And I wait for 2 seconds

    And Yo ingreso a Etiquetas
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/tags.png"
    And Yo adiciono Etiqueta
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/addtag.png"
    And Yo agrego nombre Etiqueta "A) Nueva Etiqueta Tag"
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/addnametag.png"
    And Yo agrego slug Etiqueta "Slug"
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/addslugtag.png"
    And Yo salvo la etiqueta
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/addsavetag.png"
    And Yo ingreso a Etiquetas
    And Yo tomo screenshot "./ScreenShots/Etiquetas/v4_41_1/tags2.png"
    And I wait for 2 seconds
