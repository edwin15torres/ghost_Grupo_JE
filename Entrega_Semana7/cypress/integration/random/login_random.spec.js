const faker = require('faker');

const LoginPage = require('../../../pageobjects/login.page');

describe('Login with random data', () => {
    it('Normal Login', () => {
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login Without email', () => {
        const email = undefined;
        const password = faker.datatype.string(10);

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login Without password', () => {
        const email = faker.internet.email();
        const password = undefined;

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login Without data', () => {
        const email = undefined;
        const password = undefined;

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login with numbers', () => {
        const email = faker.datatype.number();
        const password = faker.datatype.number();

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login with long strings', () => {
        const email = faker.datatype.string(500);
        const password = faker.datatype.string(500);

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login with small strings', () => {
        const email = faker.datatype.string(1);
        const password = faker.datatype.string(1);

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login with only numbers in email', () => {
        const email = faker.datatype.number();
        const password = faker.datatype.string();

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

    it('Login with only numbers in password', () => {
        const email = faker.datatype.string();
        const password = faker.datatype.unmber();

        LoginPage.login(email, password).then(
            LoginPage.error.should('be.visible')
        );
    });

});