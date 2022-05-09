const { faker } = require('@faker-js/faker');

describe('Posts Feature', () => {
    const title = faker.name.findName()

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    });

    it('should create a draft post', () => {

        cy.get('[id="login"]').within(() => {
            cy.get('input[type="email"]').type('email')
            cy.get('input[type="password"]').type('password')
            cy.get('.login').click()
        });
        cy.wait(1000)

        cy.get('a[href="#/posts/?type=draft"]').click()
        cy.get('a > span:contains("New post")').click()
        cy.get('textarea[placeholder="Post Title"]').type(title)
        cy.get('div[data-placeholder="Begin writing your post..."]').type(faker.datatype.string(50))

        cy.wait(1000)

        cy.get('.blue.link.fw4.flex.items-center.ember-view').click()

        cy.get(`h3:contains("${title}")`).click()

        cy.wait(1000)

        cy.get('textarea[placeholder="Post Title"]').then(($text) => {
            expect($text[0].value).to.equal(title)
        });

    });

    it('should publish post', () => {
        cy.get('[id="login"]').within(() => {
            cy.get('input[type="email"]').type('email')
            cy.get('input[type="password"]').type('password')
            cy.get('.login').click()
        });
        cy.wait(1000)

        cy.get('a[href="#/posts/?type=draft"]').click()
        cy.get(`h3:contains("${title}")`).click()
        cy.get('div > span:contains("Publish")').click()
        cy.get('button > span:contains("Publish")').click()

        cy.wait(2000)

        cy.get('.gh-notification-title').then(($text) => {
            expect($text[0].textContent).to.equal('Published')
        });

    });

});
