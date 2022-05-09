Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Probando Funcionalidad Miembros(crear, editar, buscar, filtrar, borrar, listar), staff, invitaciones, logout, preview, themes y otros ', ()=>{

    beforeEach(()=>{
        //////////////////////////////
        ////         GIVEN       /////
        //////////////////////////////        
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.get('input[name="identification"]').type('l.padillac2@uniandes.edu.co');
        cy.get('input[name="password"]').type('PadillaMiso257');
        cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click(); 
        cy.url().should('eq', 'http://localhost:2368/ghost/#/dashboard');        
    })

    it('Escenario de Invitación', ()=>{
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        let ns=0;
        cy.get('div[class="flex-auto flex items-center"]').click({force:true});
        cy.get('a[href="#/settings/"]').its(0).click();
        cy.wait(2000);
        cy.get('a[href="#/settings/staff/"]').click();
        cy.wait(1000);
        cy.get('body').then(()=>{
            if (Cypress.$('div[class="apps-grid-cell"]').length){
                cy.get('div[class="apps-grid"]').find('div[class="apps-grid-cell"]').then(($lst)=>{
                    ns=$lst.length;
                })
            }
        })
    
        cy.get('span').contains('Invite people').click();
        cy.get('input[name="email"]').its(0).type('LuisPadilla1250@gmail.com');   
        cy.get('div[class="gh-roles-container"]').find('div[class="gh-radio-content"]').its(0).click();
        cy.get('span').contains('Send invitation now →').click();
        cy.wait(1000);
        cy.get('span').contains('Invite people').click();
        cy.get('input[name="email"]').its(0).type('EduardoCaviedes2105@gmail.com');   
        cy.get('div[class="gh-roles-container"]').find('div[class="gh-radio-content"]').its(1).click();
        cy.get('span').contains('Send invitation now →').click();
        cy.wait(1000);
        cy.get('span').contains('Invite people').click();
        cy.get('input[name="email"]').its(0).type('Caviedes72@gmail.com');   
        cy.get('div[class="gh-roles-container"]').find('div[class="gh-radio-content"]').its(2).click();
        cy.get('span').contains('Send invitation now →').click();
        cy.wait(1000);
        cy.get('span').contains('Invite people').click();
        cy.get('input[name="email"]').its(0).type('Caviedes72@hotmail.com');   
        cy.get('div[class="gh-roles-container"]').find('div[class="gh-radio-content"]').its(3).click();
        cy.get('span').contains('Send invitation now →').click();
        cy.wait(1000);
        cy.get('a[href="#/settings/"]').its(0).click();
        cy.wait(2000);
        cy.get('a[href="#/settings/staff/"]').click();
        cy.wait(2000);
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('div[class="apps-grid"]').find('div[class="apps-grid-cell"]').then(($lst)=>{
           expect($lst).to.have.length(4+ns);
        })
        cy.get('a[href="#/settings/"]').its(0).click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/"]').click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/change-theme/"]').click({force:true});
        cy.get('div[class="theme-directory"] > a').its(7).click({force:true});
        cy.wait(5000);
        cy.get('section[class="view-actions"]').find('span').contains('Use ').click({force:true});
        cy.wait(3000);
        cy.get('div[class="modal-footer"] > div > button').its(1).click({force:true});
        cy.get('div[class="modal-footer"] > div > button').its(0).click({force:true});
        cy.get('a[href="#/settings/"]').click({force:true});
        cy.get('a[href="#/site/"]').click({force:true});
        cy.wait(1000);
        cy.get('div[class="flex-auto flex items-center"]').click({force:true});
        cy.get('#ember-basic-dropdown-wormhole').find('ul').find('li').its(8).click();
        cy.wait(2000);     
        cy.url().should('eq', 'http://localhost:2368/ghost/#/signin');    
        cy.wait(2000);   
    })

    it('Escenario de Temas', ()=>{
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////        
        cy.get('div[class="flex-auto flex items-center"]').click({force:true});
        cy.get('#ember-basic-dropdown-wormhole').find('ul').find('li').its(3).click();
        cy.get('#user-location').focus();
        cy.get('#user-location').type('{selectall}{backspace}', {force:true}).type("Valledupar", {force:true});
        cy.get('#user-website').type('{selectall}{backspace}', {force:true}).type("http://www.sitiopersonal.com.co", {force:true});
        cy.get('#user-facebook').type('{selectall}{backspace}', {force:true}).type("https://www.facebook.com.luispadilla", {force:true});
        cy.get('#user-twitter').type('{selectall}{backspace}', {force:true}).type("https://twitter.com.luispadilla", {force:true});
        cy.get('#user-bio').type('{selectall}{backspace}', {force:true}).type("Resumen de la Biografía.\nNaci en...el...", {force:true});
        cy.get('span').contains('Save').click();
        cy.wait(1000);
        cy.get('a[href="#/settings/"]').its(0).click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/"]').click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/change-theme/"]').click({force:true});
        cy.get('div[class="theme-directory"] > a').its(3).click({force:true});
        cy.wait(5000);
        cy.get('section[class="view-actions"]').find('span').contains('Use ').click({force:true});
        cy.wait(3000);
        cy.get('div[class="modal-footer"] > div > button').its(1).click({force:true});
        cy.get('div[class="modal-footer"] > div > button').its(0).click({force:true});
        cy.get('a[href="#/settings/"]').click({force:true});
        cy.get('a[href="#/site/"]').click({force:true});
        cy.wait(1000);
        cy.get('a[href="#/settings/"]').its(0).click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/"]').click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/change-theme/"]').click({force:true});
        cy.get('div[class="theme-directory"] > a').its(5).click({force:true});
        cy.wait(5000);
        cy.get('section[class="view-actions"]').find('span').contains('Use ').click({force:true});
        cy.wait(3000);
        cy.get('div[class="modal-footer"] > div > button').its(1).click({force:true});
        cy.get('div[class="modal-footer"] > div > button').its(0).click({force:true});
        cy.get('a[href="#/settings/"]').click({force:true});
        cy.get('a[href="#/site/"]').click({force:true});
        cy.wait(1000);
        cy.get('a[href="#/settings/"]').its(0).click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/"]').click();
        cy.wait(2000);
        cy.get('a[href="#/settings/design/change-theme/"]').click({force:true});
        cy.get('div[class="theme-directory"] > a').its(4).click({force:true});
        cy.wait(5000);
        cy.get('section[class="view-actions"]').find('span').contains('Use ').click({force:true});
        cy.wait(3000);
        cy.get('div[class="modal-footer"] > div > button').its(1).click({force:true});
        cy.get('div[class="modal-footer"] > div > button').its(0).click({force:true});
        cy.get('a[href="#/settings/"]').click({force:true});
        cy.get('a[href="#/site/"]').click({force:true});
        cy.get('div[class="flex-auto flex items-center"]').click({force:true});
        cy.get('#ember-basic-dropdown-wormhole').find('ul').find('li').its(8).click();
        cy.wait(2000);     
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/signin');    
        cy.wait(2000);   
    })

    it('Escenario etiquetar Miembros', ()=>{
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre17 de PruebaX', {force: true})
        cy.get('#member-email').type('Email17@Pruebahotmail.com', {force: true})
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('premium\nhot\n', {force: true});
        cy.get('#member-note').type('Nota17 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre18 de PruebaX', {force: true})
        cy.get('#member-email').type('Email18@Pruebahotmail.com', {force: true})
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('regular\nhot\n', {force: true});
        cy.get('#member-note').type('Nota18 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre19 de PruebaX', {force: true})
        cy.get('#member-email').type('Email19@Pruebagmail.com', {force: true})
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('premium\ngm\n', {force: true});
        cy.get('#member-note').type('Nota19 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre20 de PruebaX', {force: true})
        cy.get('#member-email').type('Email20@Pruebagmail.com', {force: true})
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('regular\ngm\n', {force: true});
        cy.get('#member-note').type('Nota20 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre21 de PruebaX', {force: true})
        cy.get('#member-email').type('Email21@Pruebauniandes.edu.co', {force: true})
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('premium\nuniandes\n', {force: true});
        cy.get('#member-note').type('Nota21 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Label');
        cy.get('select[optiontargetpath="name"]').its(1).select(0);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('premium\n');
        cy.get('button[class="gh-btn gh-btn-primary"]').click({force: true})  //Apply
        cy.wait(1000);
        cy.get('#members_svg__Regular').click();
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Label');
        cy.get('select[optiontargetpath="name"]').its(1).select(0);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('{selectall}{backspace}').type('regular\n');
        cy.get('button[class="gh-btn gh-btn-primary"]').click({force: true})  //Apply
        cy.wait(1000);

        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Name');
        cy.get('select[optiontargetpath="name"]').its(1).select('contains');
        cy.get('input[class="gh-input"]').its(0).type("PruebaX");
        cy.get('button[class="gh-btn gh-btn-primary"]').click()  //Apply
        cy.wait(1000);
        cy.get('button[role="button"]').click();
        cy.get('div[class="view-actions-top-row"]').find('ul').find('li').its(3).click();
        cy.get('select[optiontargetpath="id"]').select('uniandes');
        cy.get('div[class="modal-footer"] > button').its(1).click();
        cy.wait(3000);
        cy.get('div[class="modal-footer"] > button').its(0).click();
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('button[class="gh-btn"]').click();   // Reset
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Label');
        cy.get('select[optiontargetpath="name"]').its(1).select(0);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('hot\n');
        cy.get('button[class="gh-btn gh-btn-primary"]').click({force: true})  //Apply
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Label');
        cy.get('select[optiontargetpath="name"]').its(1).select(0);
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type('{selectall}{backspace}').type('uniandes\n');
        cy.get('button[class="gh-btn gh-btn-primary"]').click({force: true})  //Apply
        cy.wait(3000);
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('table[class="gh-list"]').find('tr').then(($lst)=>{
            expect($lst).to.have.length(6);
        });
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Name');
        cy.get('select[optiontargetpath="name"]').its(1).select('contains');
        cy.get('input[class="gh-input"]').its(0).type("PruebaX");
        cy.get('button[class="gh-btn gh-btn-primary"]').click()  //Apply
        cy.wait(1000);
        cy.get('button[role="button"]').click();
        cy.get('div[class="view-actions-top-row"]').find('ul').find('li').its(7).click();
        cy.get('div[class="modal-footer"] > button').its(1).click();
        cy.wait(1000);
        cy.get('div[class="modal-footer"] > button').its(0).click();
        cy.wait(2000);
    })

    it('Escenario Filtrar Miembros', ()=>{
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre17 de PruebaX', {force: true})
        cy.get('#member-email').type('Email17@Pruebahotmail.com', {force: true})
        cy.get('#member-note').type('Nota17 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre18 de PruebaX', {force: true})
        cy.get('#member-email').type('Email18@Pruebahotmail.com', {force: true})
        cy.get('#member-note').type('Nota18 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre19 de PruebaX', {force: true})
        cy.get('#member-email').type('Email19@Pruebagmail.com', {force: true})
        cy.get('#member-note').type('Nota19 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre20 de PruebaX', {force: true})
        cy.get('#member-email').type('Email20@Pruebagmail.com', {force: true})
        cy.get('#member-note').type('Nota20 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Nombre21 de PruebaX', {force: true})
        cy.get('#member-email').type('Email21@Pruebauniandes.edu.co', {force: true})
        cy.get('#member-note').type('Nota21 de Prueba.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

        cy.get('#members_svg__Regular').click();
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Name');
        cy.get('select[optiontargetpath="name"]').its(1).select(1);
        cy.get('input[class="gh-input"]').its(0).type("Nombre");
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-primary"]').click()  //Apply
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('button[class="gh-btn"]').click();   // Reset
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Name');
        cy.get('select[optiontargetpath="name"]').its(1).select(1);
        cy.get('input[class="gh-input"]').its(0).type("PruebaX");
        cy.contains(" Add filter").click();
        cy.get('select[optiontargetpath="name"]').its(2).select('Email');
        cy.get('select[optiontargetpath="name"]').its(3).select('ends with');
        cy.get('input[class="gh-input"]').its(1).type(".co");
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-primary"]').click()  //Apply
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('button[class="gh-btn"]').click();   // Reset
        cy.wait(1000);
        cy.get('div[class="view-actions-top-row"] > div:first-child').click();
        cy.get('select[optiontargetpath="name"]').its(0).select('Name');
        cy.get('select[optiontargetpath="name"]').its(1).select('contains');
        cy.get('input[class="gh-input"]').its(0).type("PruebaX");
        cy.get('button[class="gh-btn gh-btn-primary"]').click()  //Apply
        cy.wait(1000);
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('table[class="gh-list"]').find('tr').then(($lst)=>{
            expect($lst).to.have.length(6);
        });
        cy.get('button[role="button"]').click();
        cy.get('div[class="view-actions-top-row"]').find('ul').find('li').its(7).click();
        cy.get('div[class="modal-footer"] > button').its(1).click();
        cy.wait(1000);
        cy.get('div[class="modal-footer"] > button').its(0).click();
        cy.wait(2000);
    })

    it('Escenario Borrar Miembro', () => {
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////        
        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Luis Padilla', {force: true})
        cy.get('#member-email').type('LuisPadilla1250@gmail.com')
        cy.get('#member-note').type('Nota del Miembro.')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
        cy.get('#members_svg__Regular').click();
        cy.get('body>div>div>main>section>div>header>section>div>div>input').type('Luis Padilla\n');
        cy.wait(1000);
        cy.get('tbody[class="ember-view"]').find('tr').as('filas');
        cy.get('@filas').first().click();
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.get('button[class="mr2"]').contains('Delete member').click();
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').its(0).click({force: true});
        cy.wait(1000);
    })

    it('Escenario Modificar Miembro', () => {
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////        
        cy.get('#members_svg__Regular').click();
        cy.get('a[href*="#/members/new/"]').click()
        cy.url().should('eq', 'http://localhost:2368/ghost/#/members/new');
        cy.get('#member-name').type('Edgardo Cuvides', {force: true})
        cy.get('#member-email').type('EduardoCaviedes2105@hotmail.com', {force: true})
        cy.get('#member-note').type('Nota del Usuario.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
        cy.get('#members_svg__Regular').click();
        cy.get('body>div>div>main>section>div>header>section>div>div>input').type('Edgardo Cuvides\n');
        cy.wait(1000);
        cy.get('tbody[class="ember-view"]').find('tr').as('filas');
        cy.get('@filas').first().click();
        cy.wait(1000);
        cy.get('#member-name').type('{selectall}{backspace}')
        cy.get('#member-name').type('Eduardo Caviedes', {force: true})
        cy.get('#member-email').clear()
        cy.get('#member-email').type('EduardoCaviedes2105@gmail.com', {force: true})
        cy.get('#member-note').clear()
        cy.get('#member-note').type('Nota del Miembro.', {force: true})
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(1000);
        cy.get('#members_svg__Regular').click();
        cy.get('body>div>div>main>section>div>header>section>div>div>input').clear();
        cy.get('body>div>div>main>section>div>header>section>div>div>input').type('Eduardo Caviedes\n');
        cy.wait(3000);
        cy.get('tbody[class="ember-view"]').find('tr').as('filas');
        cy.get('@filas').first().click();
        cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click();
        cy.get('button[class="mr2"]').contains('Delete member').click();
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').its(0).click({force: true});
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////     
    })
    
})