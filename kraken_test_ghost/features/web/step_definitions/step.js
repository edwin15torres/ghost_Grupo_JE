const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

//Login
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('.email');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('.password');
    return await element.setValue(password);
});

Then('I see admin site', async function () {
    let element = await this.driver.$('.ember-application');
   return await element
});

Then('I see login error', async function () {
    let element = await this.driver.$('.main-error');
   return await element
});

Then('I click on element having class {string}', async function (string) {
    let element = await this.driver.$('.' + string);
    return await element.click();
});

Then('I click on element having id {string}', async function (string) {
    let element = await this.driver.$('#' + string);
    return await element.click();
});

//Posts
Then('I enter {string} into value {string}', async function (string1, string2) {
    let element = await this.driver.$('#' + string1);
    return await element.setValue(string2);
});

Then('I click on element having attribute {string}', async function (string) {
    let element = await this.driver.$(string);
    return await element.click();
});

Then('I enter random string into attribute {string}', async function (id) {
    let element = await this.driver.$(id);
    return await element.setValue(faker.datatype.string());
});


Then('I validate draft post list item', async function () {
    let element = await this.driver.$('.gh-posts-list-item');
    return await element;
});

Then('I validate exists class element {string}', async function (string) {
    let element = await this.driver.$('.' + string);
    return await element;
});

