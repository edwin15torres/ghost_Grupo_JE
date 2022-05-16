Feature: ProfileV4

@user2 @web
Scenario: Editar Profile
    Given I navigate to page "http:\\localhost:2368\ghost\"
    And I wait for 2 seconds
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/login.png"
    When I enter ghost email "l.padillac2@uniandes.edu.co"
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/writemail.png"
    And I enter ghost password "PadillaMiso257"
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/writepass.png"
    And I click ghost login
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/ingresar.png"
    And I wait for 5 seconds
    
    And Yo ingreso a cuenta de usuario
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/cuenta.png"
    And I wait for 5 seconds
    And Yo hago click en profile
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/profile.png"
    And I wait for 5 seconds
    And Yo ingreso lugar "Valledupar"
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/lugar.png"
    And I wait for 2 seconds
    And Yo ingreso sitio web "http://www.sitiopersonal.com.co"
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/web.png"
    And I wait for 2 seconds
    And Yo ingreso facebook "https://www.facebook.com/luispadilla"
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/facebook.png"
    And I wait for 2 seconds
    And Yo ingreso twitter "https://twitter.com/luispadilla"
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/twitter.png"
    And I wait for 2 seconds
    And Yo ingreso la biografia "Resumen de la Biografía. Naci en...el..."
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/biografia.png"
    And I wait for 2 seconds
    And Yo salvo datos del profile
    And Yo tomo screenshot "./ScreenShots/Profile/v4_41_1/salvar.png"
    And I wait for 2 seconds