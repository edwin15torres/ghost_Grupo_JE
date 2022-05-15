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

When('I enter ghost email {string}', async function (email) {
    let element = await this.driver.$('input[name="identification"]');
    return await element.setValue(email);
});

When('I enter ghost password {string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

When('I click ghost login', async function() {
    let element = await this.driver.$('#login > button');
    return await element.click();
});

When('I click link members', async function() {
    let element = await this.driver.$('#members_svg__Regular');
    return await element.click();
});

When('I click link new member', async function() {
    let element = await this.driver.$('a[href*="#/members/new/"]');
    return await element.click();
});

When('I enter member name {string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter member email {string}', async function (email) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(email);
});

When('I enter member label {string}', async function (etiq) {
    let element = await this.driver.$('//body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[1]/ul/input');
    return await element.addValue(etiq, false);
});

When('I add member label', async function () {
    let element = await this.driver.$('//body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[2]/div/ul/li');
    return await element.click();
});

When('I enter member note {string}', async function (note) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

When('I click member save', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click();
});

When('I click first member', async function() {
    let element = await this.driver.$('table[class="gh-list"] tbody tr');
    return await element.click();
});

When('I click config member', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]');
    return await element.click();
});

When('I click delete member', async function() {
    let element = await this.driver.$('span=Delete member');
    return await element.click();
});

When('I click confirm delete member', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]:nth-child(2)');
    return await element.click();
});

When('I click search text', async function() {
    let element = await this.driver.$('//body/div/div/main/section/div/header/section/div/div/input');
    return await element.click();
});

When('I write search text {string}', async function (texto) {
    let element = await this.driver.$('//body/div/div/main/section/div/header/section/div/div/input');
    return await element.setValue(texto, false);
});

When('I click button confirm close', async function(){
    let element = await this.driver.$('//body/div[5]/div/div/div[2]/button');
    return await element.click();
});

When('I click button backup delete', async function(){
    let element = await this.driver.$('//body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});

When('I click button delete selected members', async function(){
    let element = await this.driver.$('//body/div/div/main/section/div/header/section/div[2]/span/ul').$$('li')[7];
    return await element.click();
});

When('I click button add label selected miembros', async function(){
    let element = await this.driver.$('//body/div/div/main/section/div/header/section/div[2]/span/ul').$$('li')[3];
    return await element.click();
});

When('I select label uniandes1', async function(){
    let element = await this.driver.$('//body/div[5]/div/div/div[1]/span/select');
    await element.click();
    return await element.selectByVisibleText('uniandes');
});

When('I click button add label selected member', async function(){
    let element = await this.driver.$('//body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});

When('I click button close dialog add label selected member', async function(){
    let element = await this.driver.$('//body/div[5]/div/div/div[2]/button');
    return await element.click();
});

When('I click button config list member', async function(){
    let element = await this.driver.$('//body/div/div/main/section/div/header/section/div[2]/span/button');
    return await element.click();
});

When('I click button filter clase', async function(){
    let element = await this.driver.$('div[class="view-actions-top-row"]').$('div:first-child');
    return await element.click();
});

When('I click button reset filter clase', async function(){
    let element = await this.driver.$('span=Reset all');
    return await element.click();
});

When('I click button filter', async function(){
    let element = await this.driver.$('//body/div/div/main/section/div/header/section/div/div/span');
    return await element.click();
});

When('I click button2 filter', async function(){
    let element = await this.driver.$('//body/div[2]/div/main/section/div/header/section/div[2]/div[1]');
    return await element.click();
});

When('I click add filter', async function() {
    let element = await this.driver.$('//body/div/div/section/div[2]/button/span');
    return await element.click();
});

When('I click button reset filter', async function() {
    let element = await this.driver.$('//body/div/div/div/button[1]');
    return await element.click();//body/div[1]/div/div/button[1]
});

When('I click button2 reset filter', async function() {
    let element = await this.driver.$('//body/div[1]/div/div/button[1]');
    return await element.click();
});

When('I click button apply filter', async function() {
    let element = await this.driver.$('//body/div/div/div/button[2]');
    return await element.click();
});

When('I click select field {int}', async function(indice) {
    let element = await this.driver.$('//body/div/div/section/div/div/div/span[1]/select');
    return await element.selectByIndex(indice);
});

When('I click select operator {int}', async function(indice) {
    let element = await this.driver.$('//body/div/div/section/div/div/div/span[2]/select');
    return await element.selectByIndex(indice);
});

When('I click field value', async function() {
    let element = await this.driver.$('//body/div/div/section/div/div/div/input');
    return await element.click();
});

When('I click field value label', async function() {
    let element = await this.driver.$('//body/div[1]/div/section/div[1]/div/div/div/div[1]/ul/input');
    return await element.click();
});  

When('I click before value label', async function() {
    let element = await this.driver.$('//body/div[1]/div/section/div[1]/div/div/div/div[1]');
    return await element.click();
});

When('I click before2 value label', async function() {
    let element = await this.driver.$('//body/div[1]/div/section/div[1]/div/div/div/div[1]/ul/input');
    return await element.click();
});

When('I write2 value label', async function() {
    let element = await this.driver.$('//body/div[1]/div/section/div[1]/div/div/div/div[1]/ul/input');
    return await element.setValue("uniandes\n");
});

When('I select label uniandes2', async function() {
    let element = await this.driver.$('//body/div[1]/div/section/div[1]/div/div/div/div[2]/div/ul');
    //.$$('li:last-child');
    return await element.click();
});

When('I click select2 field {int}', async function(indice) {
    let element = await this.driver.$('//body/div/div/section/div[2]/div/div/span[1]/select');
    return await element.selectByIndex(indice);
});

When('I click select2 operator {int}', async function(indice) {
    let element = await this.driver.$('//body/div/div/section/div[2]/div/div/span[2]/select');
    return await element.selectByIndex(indice);
});

When('I click field2 value', async function() {
    let element = await this.driver.$('//body/div/div/section/div[2]/div/div/input');
    return await element.click();
});

When('I write field value {string}', async function(valor) {
    let element = await this.driver.$('//body/div/div/section/div/div/div/input');
    return await element.setValue(valor);
});

When('I write field2 value {string}', async function(valor) {
    let element = await this.driver.$('//body/div/div/section/div[2]/div/div/input');
    return await element.setValue(valor);
});

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#email');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#pass');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#loginbutton');
    return await element.click();
});

Then('I click on the first conversation', async function () {
    let element = await this.driver.$(".i224opu6 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)");
    return await element.click();
});

Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$("p.kvgmc6g5");
    return await element.click();
});

Then('I send the message', async function () {
    let element = await this.driver.$("span.tojvnm2t:nth-child(3) > div:nth-child(1)");
    return await element.click();
});

When('Yo ingreso a configuracion', async function() {
    let element = await this.driver.$('a[href="#/settings/"]');
    return await element.click();
});

When('Yo visito al staff', async function() {
    let element = await this.driver.$('a[href="#/settings/staff/"]');
    return await element.click();
});

When('Yo invito gente', async function() {
    let element = await this.driver.$('//body/div[2]/div/main/section/div/header/section/button');
    return await element.click();
});

When('Yo escribo email', async function() {
    let element = await this.driver.$('#new-user-email');
    return await element.setValue("LuisPadilla1250@gmail.com");
});

When('Yo envio invitacion', async function() {
    let element = await this.driver.$('//body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button');
    return await element.click();
});

When('Yo ingreso a los temas', async function() {
    let element = await this.driver.$('a[href="#/settings/design/"]');
    return await element.click();
});

When('Yo salgo de ghost', async function() {
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
});

When('Yo ingreso a cuenta', async function() {
    let element = await this.driver.$('div[class="pe-all"]');
    return await element.click();
});

When('Yo elijo el primer miembro', async function() {
    let element = await this.driver.$('//body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]');
    return await element.click();
});

When('Yo ingreso a Etiquetas', async function() {
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('Yo adiciono Etiqueta', async function() {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
});

When('Yo agrego nombre Etiqueta {string}', async function(name) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name);
});

When('Yo agrego slug Etiqueta {string}', async function(slug) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(slug);
});

When('Yo salvo la etiqueta', async function() {
    let element = await this.driver.$('span=Save');
    return await element.click();
});

When('Prueba Page Object', async function() {
    await loginPage.open()
    let element = await this.driver.$('span=Save');
    return await element.click();
});

When('Yo ingreso a cuenta de usuario', async function () {
    let element = await this.driver.$('div[class="flex-auto flex items-center"]');
    return await element.click();
});

When('Yo hago click en profile', async function () {
    let element = await this.driver.$('a*=rofile');
    return await element.click();
});

When('Yo ingreso lugar {string}', async function (dato) {
    let element = await this.driver.$('#user-location');
    return await element.setValue(dato);
});

When('Yo ingreso sitio web {string}', async function (dato) {
    let element = await this.driver.$('#user-website');
    return await element.setValue(dato);
});  

When('Yo ingreso facebook {string}', async function (dato) {
    let element = await this.driver.$('#user-facebook');
    return await element.setValue(dato);
});

When('Yo ingreso twitter {string}', async function (dato) {
    let element = await this.driver.$('#user-twitter');
    return await element.setValue(dato);
});

When('Yo ingreso la biografia {string}', async function (dato) {
    let element = await this.driver.$('#user-bio');
    return await element.setValue(dato);
});

When('Yo salvo datos del profile', async function () {
    let element = await this.driver.$('span*=Save');
    return await element.click();
});

Then('I verify number members', async function () {
    await this.driver.saveScreenshot('./members_count.png')
})

Then('Yo tomo screenshot {string}', async function (nombrefoto) {
    await this.driver.saveScreenshot(nombrefoto)
})