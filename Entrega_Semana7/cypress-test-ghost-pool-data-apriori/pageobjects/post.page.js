const Page = require('./page');

class Post extends Page {
    get postNav() { return cy.get('a[href="#/posts/"]')};
    get newPostButton() { return cy.get('a>span:contains("New post")')};
    get postTitle() { return cy.get('textarea[placeholder="Post title"]')};
    get editorArea() { return cy.get('div[data-placeholder="Begin writing your post..."]')};
    get publishSpan() { return cy.get('span:contains("Publish")')};
    get publishButton() { return cy.get('button>span:contains("Publish")')};
    get publishButtonModal() { return cy.get('.modal-footer>button>span:contains("Publish")')};
    get publishNotification() { return cy.get('span:contains("Published")')};

    open = (path) => super.open(path);

    createPost(title, content) {
        cy.wait(2000);
        this.postNav.click({force: true});

        cy.wait(1000);
        this.newPostButton.click({force: true});

        title && this.postTitle.type(title, {parseSpecialCharSequences: false});
        content && this.editorArea.type(content, { parseSpecialCharSequences: false });
    }

    async publishPost() {
        this.publishSpan.click();
        this.publishButton.click();
        this.publishButtonModal.click();
    }
}



module.exports = new Post();