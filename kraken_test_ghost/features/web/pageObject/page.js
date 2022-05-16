module.exports = class Page {
  open(path, driver) {
    return driver.url(path);
  }
}
