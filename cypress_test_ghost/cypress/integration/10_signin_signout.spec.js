const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test Sign in and Sign out with Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  it("Sign out", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    if (appVersion == "4.47.0") cy.get(".ember-view.ember-basic-dropdown-trigger.outline-0.pointer").click(); 
    else cy.get("div.gh-nav-bottom").click();
    cy.wait(1000);
    cy.screenshot(`step_1/${appReference}-signin-signout`, {
      capture: "fullPage",
    });
    if (appVersion == "4.47.0")cy.get("a.ember-view.dropdown-item.user-menu-signout").click();
    else cy.get("a.dropdown-item.user-menu-signout.ember-view").click();
    
  });
});

Cypress.Commands.add("login", () => {
  // 1. Send log in API call
  return cy
    .request({
      url: ghostAuthUrl,
      method: "POST",
      headers: {
        Referer: baseUrl,
      },
      body: {
        username: email,
        password: password,
      },
    })
    .then(({ body }) => {
      console.log(body);
      // Save received auth token to local storage
      window.localStorage.setItem("authToken", body.authToken);
      return body.data;
    });
});
