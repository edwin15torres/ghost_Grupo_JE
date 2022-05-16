const Page = require('./page');
const properties = require('../../../properties.json');
const createFolder = require('./utils/createFolder')



class LoginPage extends Page {
  rootPath = '';

  async open(url, driver) {
    this.rootPath = url.includes(properties.BASE_URL_1) ? '4.47.0' : '3.41.1';

    await super.open(url, driver);
  }

  async login(email, password, driver) {
    const emailReference = await driver.$('.email');
    const passwordReference = await driver.$('.password');
    const loginBtn = await driver.$('.login');
    const folder = `screenshots/${this.rootPath}`;

    createFolder(folder)
    driver.saveScreenshot(`${folder}/signing.png`);

    await emailReference.setValue(email);
    await passwordReference.setValue(password);
    await loginBtn.click();
  }
}

module.exports = new LoginPage();
