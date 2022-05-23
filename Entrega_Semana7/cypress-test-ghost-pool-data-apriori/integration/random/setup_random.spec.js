const faker = require('faker');

const SetupPage = require('../../../pageobjects/setup.page');

describe('Setup With Random Data', () => {
    beforeEach(() => {
        SetupPage.open();
    });

    it('Setup With 1 Character On Tittle', () => {
        const title = faker.datatype.string(1);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorTitle.should('not.exist')
        )
    });

    it('Setup With 150 Characters On Tittle', () => {
        const title = faker.datatype.string(150);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorTitle.should('not.exist')
        )
    });

    it('Setup With 151 Characters On Tittle', () => {
        const title = faker.datatype.string(151);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorTitle.should('be.visible')
        )
    });

    it('Setup With 1 Character On Full Name', () => {
        const title = faker.datatype.string(50);
        const name = faker.datatype.string(1);
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorTitle.should('not.exists')
        )
    });

    it('Setup With 500 Character On Full Name', () => {
        const title = faker.datatype.string(50);
        const name = faker.datatype.string(500);
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorTitle.should('not.exists')
        )
    });

    it('Setup With 1 Character On Email', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const email = faker.datatype.string(1);
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorEmail.should('be.visible')
        )
    });

    it('Setup With 500 Character On Email', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const email = faker.datatype.string(500);
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorEmail.should('be.visible')
        )
    });

    it('Setup With same email and password', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const password = faker.datatype.string(10);
        const email = password

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorEmail.should('be.visible')
        )
    });

    it('Setup With 1 character on password', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(1);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorPassword.should('be.visible')
        )
    });

    it('Setup With 9 characters on password', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(9);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorPassword.should('be.visible')
        )
    });

    it('Setup With 10 characters on password', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(10);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorPassword.should('not.exists')
        )
    });

    it('Setup With 500 characters on password', () => {
        const title = faker.datatype.string(50);
        const name = faker.name.firstName();
        const email = faker.internet.email();
        const password = faker.datatype.string(500);

        SetupPage.setup(title, name, email, password).then(
            SetupPage.errorPassword.should('not.exists')
        )
    });

});
