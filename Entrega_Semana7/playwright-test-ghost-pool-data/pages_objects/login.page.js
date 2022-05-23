const Page = require('./page');

class LoginPage extends Page {

  get emailInput() { return 'input[type="email"]' }
  get passwInput() { return 'input[type="password"]' }
  get signInButton() { return 'button.js-login-button[type=submit]' }
  get dashboardHeader() { return 'header>h2' }

}

module.exports = new LoginPage()