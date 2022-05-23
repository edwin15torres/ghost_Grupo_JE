const Page = require('./page');
const ghostAuthUrl = 'http://localhost:2368/ghost/#/setup';

class SetupPage extends Page {
    get inputSiteTitle() { return cy.get('input[placeholder="The Daily Awesome"]') };
    get inputFullName() { return cy.get('input[placeholder="Jamie Larson"]') };
    get inputEmail() { return cy.get('input[placeholder="jamie@example.com"]') };
    get inputPassword() { return cy.get('input[type="password"]')};
    get setupButton() { return cy.get('button>span:contains("Create account & start publishing →")')};
    get errorTitle() { return cy.get('p:contains("Title is too long")')};
    get errorEmail() { return cy.get('p:contains("Invalid Email")')};
    get errorPassword() { return cy.get('p:contains("Password must be at least 10 characters long.")')};

    open = () => super.open(ghostAuthUrl);

    async setup(siteTitle, fullName, email, password) {
        this.inputSiteTitle.type(siteTitle, { parseSpecialCharSequences: false });
        this.inputFullName.type(fullName, { parseSpecialCharSequences: false });
        this.inputEmail.type(email, { parseSpecialCharSequences: false });
        this.inputPassword.type(password, { parseSpecialCharSequences: false });

        //this.setupButton.click();
    }
}

module.exports = new SetupPage();