describe('Login Feature', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    });

    it('should login successfully', () => {
        cy.get('[id="login"]').within(() => {
            cy.get('input[type="email"]').type('rd.ortizr1@uniandes.edu.co')
            cy.get('input[type="password"]').type('@CruelSun1802')
            cy.get('.login').click()
        });
        cy.wait(1000)

        cy.get('.gh-user-email').then(($text) => {
            expect($text[0].innerText).to.equal('rd.ortizr1@uniandes.edu.co')
        });
    });

    it('should login fail', () => {
        cy.get('[id="login"]').within(() => {
            cy.get('input[type="email"]').type('email')
            cy.get('input[type="password"]').type('password')
            cy.get('.login').click()
        });
        cy.wait(1000)

        cy.get('.main-error').then(($text) => {
            expect($text[0].innerText.trim()).to.equal('Please fill out the form to sign in.')
        });
    });

    it('should logout successfully', () => {
        cy.get('[id="login"]').within(() => {
            cy.get('input[type="email"]').type('rd.ortizr1@uniandes.edu.co')
            cy.get('input[type="password"]').type('@CruelSun1802')
            cy.get('.login').click()
        });
        cy.wait(1000)

        cy.get('#ember47').click()
        cy.get('.user-menu-signout').click()
        cy.wait(2000)

        cy.url().should('include', '/signin')
    });
});