var faker = require("faker");
const baseUrl = Cypress.config("baseUrl");
const ghostUrl = Cypress.config("ghostUrl");
const ghostAuthUrl = Cypress.config("ghostAuthUrl");
const email = Cypress.config("email");
const password = Cypress.config("password");
const appReference = Cypress.config("appReference");
const appVersion = Cypress.config("appVersion");

describe("Test edit user profile in Ghost", () => {
  beforeEach(() => {
    cy.login().then((user) => {
      cy.visit(ghostUrl);
      cy.wait(2000);
    });
  });
  it("Edit user profile", () => {
    if (appVersion == "4.47.0") cy.visit("/ghost/#/settings/staff");
    else cy.get(".gh-nav-top").contains("Staff").click();

    cy.wait(2000);
    cy.screenshot(`step_1/${appReference}-edit-profile`);
    
    if (appVersion == "4.47.0") {
          cy.get(".ember-view.ember-basic-dropdown-trigger.outline-0.pointer").click();
          cy.get("h4.gh-user-name")
          .invoke("text")
          .then((userName) => {
                cy.get("div.apps-grid-cell.tooltip-centered > a").each(($el, index, $list) => {
                  console.log("each: " + $el.find("h3").text());
                  if ($el.find("h3").text() == userName) {
                    cy.wrap($el)
                      .invoke("attr", "href")
                      .then((href) => {
                        cy.visit(ghostUrl + href);
                        cy.wait(2000);
                        cy.screenshot(`step_2/${appReference}-edit-profile`);
                        cy.get(".gh-main").scrollTo("center");
                        cy.screenshot(`step_3/${appReference}-edit-profile`);
                        cy.get(".gh-main").scrollTo("bottom");
                        cy.screenshot(`step_4/${appReference}-edit-profile`);
                        cy.get(".gh-main").scrollTo("top");

                        cy.get("#user-name").clear({ force: true });
                
                        const name = faker.name.findName();
                        cy.get("#user-name").type(name, { force: true });

                        cy.get(".gh-btn.gh-btn-primary.gh-btn-icon.ember-view").click({
                          force: true,
                        });
                      
                        cy.visit("/ghost/#/settings/staff");
                        cy.contains(name);
                      });
                  }
                });
              });
            
        } else { 
          cy.get("span.gh-user-name.mb1")
          .invoke("text")
          .then((userName) => {
            cy.get("div.apps-grid-cell.tooltip-centered > a").each(
              ($el, index, $list) => {
                console.log("each: " + $el.find("h3").text());
                if ($el.find("h3").text() == userName) {
                  cy.wrap($el)
                    .invoke("attr", "href")
                    .then((href) => {
                      cy.visit(ghostUrl + href);
                      cy.wait(1000);
                      cy.screenshot(`step_2/${appReference}-edit-profile`);
                      cy.get(".gh-main").scrollTo("center");
                      cy.screenshot(`step_3/${appReference}-edit-profile`);
                      cy.get(".gh-main").scrollTo("bottom");
                      cy.screenshot(`step_4/${appReference}-edit-profile`);
                      cy.get(".gh-main").scrollTo("top");
                      cy.get("#user-name").clear({ force: true });
                      const name = faker.name.findName();
                      cy.get("#user-name").type(name, { force: true });
                      cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({
                        force: true,
                      });
                     
                      cy.get(".gh-nav-top").contains("Staff").click();
                      cy.contains(name);
                    });
              }
            }
          );
        });
    }
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
