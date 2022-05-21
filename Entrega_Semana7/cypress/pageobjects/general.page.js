class GeneralPage {
    open() { return cy.visit('http://localhost:2368/ghost/#/signin') }
    getUserMail () { return cy.get('input[name="identification"]') }
    getPassword () { return cy.get('input[name="password"]') }
    getSubmitBtn () { return cy.get('#login > button') }
    getMsgError () { return cy.get('p[class="main-error"]') }

    getCuentaUsuario() { return cy.get('div[class="flex-auto flex items-center"]') }
    getProfile() { return cy.get('#ember-basic-dropdown-wormhole').find('ul').find('li').its(3) }
    getLogOut() { return cy.get('#ember-basic-dropdown-wormhole').find('ul').find('li').its(8) }
    getUserLocation(){ return cy.get('#user-location') }
    getUserWebSite(){ return cy.get('#user-website') }
    getUserFacebook(){ return cy.get('#user-facebook') }
    getUserTwitter(){ return cy.get('#user-twitter') }
    getUserBio(){ return cy.get('#user-bio') }
    getBtnSalvarProfile(){ return cy.get('span').contains('Save') }

    getEnlaceConfiguracion(){ return cy.get('a[href="#/settings/"]').its(0) }
    getEnlaceDesign(){ return cy.get('a[href="#/settings/design/"]') }
    getCambiarTema(){return cy.get('a[href="#/settings/design/change-theme/"]') }
    getDirTemas(indice){ return cy.get('div[class="theme-directory"] > a').its(indice) }
    getAccionUsar(){return cy.get('section[class="view-actions"]').find('span').contains('Use ') }
    getBotonesTema(){return cy.get('div[class="modal-footer"] > div > button')}
    getBotonInstall(){return this.getBotonesTema().its(1)}
    getBotonCerrar(){return this.getBotonesTema().its(0)}
    getPreviewSite(){return cy.get('a[href="#/site/"]')}

    getEnlaceStaff(){ return cy.get('a[href="#/settings/staff/"]')}
    getEnlaceInvitarGente(){return cy.get('span').contains('Invite people')}
    getInvitaMail(){ return cy.get('input[name="email"]').its(0)}
    getRoles(){return cy.get('div[class="gh-roles-container"]').find('div[class="gh-radio-content"]')}
    setRol(rol){ return this.getRoles().its(rol).click()}
    getInvitationNow(){return cy.get('span').contains('Send invitation now →')}
    cerrarStaff(){ return cy.get('a[class="close"]') }

    invitarGente(correo, rol){
      this.getEnlaceInvitarGente().click()
      this.getInvitaMail().type(correo)
      this.setRol(rol)
      this.getInvitationNow().click()
      cy.wait(2000)
    }

    cancelarInvitarGente(correo, rol){
        this.getEnlaceInvitarGente().click()
        this.getInvitaMail().type(correo)
        this.setRol(rol)
        this.cerrarStaff().click()
        cy.wait(2000)
      }

    verSitio(){
        this.getEnlaceConfiguracion().click({force:true})
        this.getPreviewSite().click({force:true})
        cy.wait(3000)
    }

    cambiarTema(indice){
      this.getEnlaceConfiguracion().click()
      this.getEnlaceDesign().click()
      this.getCambiarTema().click({force:true})
      this.getDirTemas(indice).click({force:true})
      cy.wait(5000)
      this.getAccionUsar().click({force:true})
      cy.wait(3000)
      this.getBotonInstall().click({force:true})
      this.getBotonCerrar().click({force:true})
    }

    ghostLogOut(){
        this.getCuentaUsuario().click()
        this.getLogOut().click()
    }

    editarProfile(Ciudad, DirWeb, DirFace, DirTwit, Bio){
        this.getCuentaUsuario().click()
        this.getProfile().click()
        this.getUserLocation().focus()
        this.getUserLocation().type('{selectall}{backspace}', {force:true}).type(Ciudad, {force:true});
        this.getUserWebSite().type('{selectall}{backspace}', {force:true}).type(DirWeb, {force:true});
        this.getUserFacebook().type('{selectall}{backspace}', {force:true}).type(DirFace, {force:true});
        this.getUserTwitter().type('{selectall}{backspace}', {force:true}).type(DirTwit, {force:true});
        this.getUserBio().type('{selectall}{backspace}', {force:true}).type(Bio, {force:true});
        this.getBtnSalvarProfile().click()
        cy.wait(3000)
    }

}
export default GeneralPage

