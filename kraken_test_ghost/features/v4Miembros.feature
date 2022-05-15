Feature: Staff y MiembrosV4

@user2 @web
Scenario: Adicionar Staff/Miembro
    Given I navigate to page "http:\\localhost:2368\ghost\"
    And I wait for 2 seconds
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/login.png"
    When I enter ghost email "l.padillac2@uniandes.edu.co"
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/writemail.png"
    And I enter ghost password "PadillaMiso257"
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/writepass.png"
    And I click ghost login
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/ingresar.png"
    And I wait for 2 seconds

    And I click link members
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/staffmember.png"
    And I wait for 2 seconds
    
    And I click link new member
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/invitation.png"
    And I wait for 3 seconds
    And I enter member name "Staff Prueba"
    And I wait for 1 seconds
    And I enter member email "caviedes72@hotmail.com"
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/esc_correo.png"
    And I wait for 1 seconds
    And I click member save
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/sendinvitation.png"
    And I wait for 3 seconds
    And I click link members
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/staffmember2.png"
    And I wait for 2 seconds

    Then I verify number members
    And Yo tomo screenshot "./ScreenShots/Miembros/v4_41_1/verifica.png"
    And I wait for 3 seconds