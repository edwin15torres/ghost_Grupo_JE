const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('.email');

    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('.password');

    return await element.setValue(password);
});

Then('I click {string}', async function (string) {
    let element = await this.driver.$('.' + string);

    return await element.click();
});

Then('I see admin site', async function () {
    let element = await this.driver.$('.ember-application');

   return await element
});

Then('I see login error', async function () {
    let element = await this.driver.$('.main-error');

   return await element
});