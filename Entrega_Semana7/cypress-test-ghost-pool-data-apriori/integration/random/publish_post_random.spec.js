const faker = require('faker');

const email = 'rd.ortizr1@uniandes.edu.co';
const password = '@CruelSun1802';
const LoginPage = require('../../../pageobjects/login.page');
const PostPage = require('../../../pageobjects/post.page');

describe('Publish Post With Random Data', () => {
    it('Publish Post Without Tittle', () => {
        const title = undefined;
        const content = faker.datatype.string(100);

        LoginPage.login(email, password);

        PostPage.createPost(title, content);
        PostPage.publishPost();
        cy.wait(2000);
        PostPage.publishNotification.should('not.exist');
    });

    it('Publish Post Without Content', () => {
        const title = faker.name.firstName();
        const content = undefined;

        LoginPage.login(email, password);

        PostPage.createPost(title, content);

        cy.wait(2000);

        PostPage.publishSpan.should('not.exist');        
    });

    it('Publish Post With Long title', () => {
        const title = faker.datatype.string(500);
        const content = faker.datatype.string(100);

        LoginPage.login(email, password);

        PostPage.createPost(title, content);

        cy.wait(2000);

        PostPage.publishSpan.should('not.exist');        
    });

    it('Publish Post With Long content', () => {
        const title = faker.datatype.string(50);
        const content = faker.datatype.string(1000);

        LoginPage.login(email, password);

        PostPage.createPost(title, content);

        cy.wait(2000);

        PostPage.publishPost();
        cy.wait(3000);
        PostPage.publishNotification.should('be.visible');
    });

    it('Publish Post With Long data', () => {
        const title = faker.datatype.string(500);
        const content = faker.datatype.string(500);

        LoginPage.login(email, password);

        PostPage.createPost(title, content);

        cy.wait(2000);

        PostPage.publishSpan.should('not.exist');        
    });

    it('Publish Post With small title', () => {
        const title = faker.datatype.string(1);
        const content = faker.datatype.string(100);

        LoginPage.login(email, password);

        PostPage.createPost(title, content);

        cy.wait(2000);

        PostPage.publishPost();
        cy.wait(3000);
        PostPage.publishNotification.should('be.visible');      
    });

    it('Publish Post With same title and content', () => {
        const title = faker.datatype.string(100);
        const content = title;

        LoginPage.login(email, password);

        PostPage.createPost(title, content);

        cy.wait(2000);

        PostPage.publishPost();
        cy.wait(3000);
        PostPage.publishNotification.should('be.visible');
    });

});

