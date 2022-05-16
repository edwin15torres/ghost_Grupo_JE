const Page = require('./page');
const properties = require('../../../properties.json');
const createFolder = require('./utils/createFolder')


class TagPage extends Page {
    rootPath = '';

    async open(url, driver) {
        this.rootPath = url.includes(properties.BASE_URL_1) ? '4.47.0' : '3.41.1';

        await super.open(url, driver);
    }

    async createTag(name, slug, description, driver) {
        const nameReference = driver.$('#tag-name');
        const slugReference = driver.$('#tag-slug');
        const descriptionReference = driver.$('#tag-description');
        const saveButton = driver.$('.view-actions')
        const folder = `screenshots/${this.rootPath}`;

        await nameReference.setValue(name);
        await slugReference.setValue(slug);
        await descriptionReference.setValue(description);
        createFolder(folder);
        await driver.saveScreenshot(`${folder}/new-tag.png`);
        await saveButton.click()
    }

    async deleteTag(name, slug, driver) {
        const tagReference = driver.$(`a[href="#/tags/${name.toLowerCase()}${slug.toLowerCase()}/"]`);
        const deleteButton = driver.$('.gh-btn.gh-btn-red.gh-btn-icon');
        const confirmDeleteButton = driver.$('.modal-body>.modal-footer>.gh-btn-red>span:nth-child(1)');
        const folder = `screenshots/${this.rootPath}`;


        await tagReference.click();
        createFolder(folder);
        driver.saveScreenshot(`${folder}/delete-tag.png`);
        await deleteButton.click();
        await confirmDeleteButton.click();
    }
}

module.exports = new TagPage();
