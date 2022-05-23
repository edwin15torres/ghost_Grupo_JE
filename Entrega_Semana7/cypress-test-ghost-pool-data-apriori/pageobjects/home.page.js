class HomePage {
    open() { return cy.visit('http://localhost:2368/ghost/#/signin') }
    getUserMail () { return cy.get('input[name="identification"]') }
    getPassword () { return cy.get('input[name="password"]') }
    getSubmitBtn () { return cy.get('#login > button') }
    getMsgError () { return cy.get('p[class="main-error"]') }

    login(usuario, clave){
       this.open();
       this.getUserMail().type(usuario);
       this.getPassword().type(clave);
       this.getSubmitBtn().click();
       cy.wait(3000)
    }
}
export default HomePage