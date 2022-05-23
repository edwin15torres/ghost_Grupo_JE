const Page = require('./page');
const ghostAuthUrl = 'http://localhost:2368/ghost/#/signin';

class LoginPage extends Page {
    get inputEmail() { return cy.get('input[name="identification"]') };
    get inputPassword() { return cy.get('input[name="password"]') };
    get SubmitBtn() { return cy.get('.login') }
    get error() { return cy.get('p[class="main-error"]') }

    open = (path) => super.open(path);

    async login(email, password) {
        super.open(ghostAuthUrl);

        email && this.inputEmail.type(email, { parseSpecialCharSequences: false });
        password && this.inputPassword.type(password, { parseSpecialCharSequences: false });
        this.SubmitBtn.click();
    }
}

module.exports = new LoginPage();