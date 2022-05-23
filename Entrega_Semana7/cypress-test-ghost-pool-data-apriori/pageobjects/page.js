class Page {
    open(path) {
        cy.visit(path);
    }
}

module.exports = Page;
