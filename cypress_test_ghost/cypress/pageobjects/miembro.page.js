class MiembroPage {
    getMenuMiembro() { return cy.get('#members_svg__Regular') }
    getNuevoMiembro() { return cy.get('a[href*="#/members/new/"]').its(0) }

    getNombreMiembro() { return cy.get('#member-name') }
    getEmailMiembro() { return cy.get('#member-email') }
    getLabelMiembro() { return cy.get('input[class="ember-power-select-trigger-multiple-input"]')}
    getNotaMiembro() { return cy.get('#member-note') }
    getBtnSalvarMiembro() {return cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]')}
    getPrimeraFilaMiembro() {return cy.get('tbody[class="ember-view"]').find('tr').first() }
    getBtnConfigMiembro() { return cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]') }
    getMenuBorrarMiembro() { return cy.get('button[class="mr2"]').contains('Delete member') }
    getBtnBorrarMiembro() { return cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').its(0) }
    getBtnFiltrarMiembro() { return cy.get('div[class="view-actions-top-row"] > div:first-child') }
    getListaFiltros(){ return cy.get('select[optiontargetpath="name"]') }
    
    getValorLabel() {return cy.get('input[class="ember-power-select-trigger-multiple-input"]') }
    setValorEtiqueta(valor) {return this.getValorLabel().type(valor) }
    getBtnAplicar() { return cy.get('button[class="gh-btn gh-btn-primary"]') }
    
    getBtn2ConfigMiembroFil() { return cy.get('button[role="button"]') }
    getMenuConfigMiembro() { return cy.get('div[class="view-actions-top-row"]').find('ul').find('li') }
    getSelectEtiquetaAdd() { return this.getMenuConfigMiembro().its(3)}
    getSelectMiembrosElim() { return this.getMenuConfigMiembro().its(7)}
    getValorEtiquetaAdd() { return cy.get('select[optiontargetpath="id"]') }
    setValorEtiquetaAdd(valor) { this.getValorEtiquetaAdd().select(valor) }
    getBtnEjecute() { return  cy.get('div[class="modal-footer"] > button').its(1) }
    getBtnConfirme() { return  cy.get('div[class="modal-footer"] > button').its(0) }
    getBtnResetFiltroMiembros() { return cy.get('button[class="gh-btn"]') }
    getBtnAddFilter() { return cy.contains(" Add filter") }
    getInputBuscar() { return cy.get('body>div>div>main>section>div>header>section>div>div>input') }
    setValorBuscado(valor) { this.getInputBuscar().type(valor)}

    crearMiembro(nombre, email, label, nota){
        this.getMenuMiembro().click()
        this.getNuevoMiembro().click()
        this.getNombreMiembro().type(nombre, {force: true})
        this.getEmailMiembro().type(email, {force: true})
        this.getLabelMiembro().type(label, {force: true})
        this.getNotaMiembro().type(nota, {force: true})
        this.getBtnSalvarMiembro().click()
        cy.wait(3000)
    }

    editarMiembro(nombre, email, label, nota){
        this.getNombreMiembro().type('{selectall}{backspace}', {force: true})
        this.getNombreMiembro().type(nombre, {force: true})
        this.getEmailMiembro().clear({force: true})
        this.getEmailMiembro().type(email, {force: true})
        this.getLabelMiembro().clear({force: true})
        this.getLabelMiembro().type(label, {force: true})
        this.getNotaMiembro().clear({force: true})
        this.getNotaMiembro().type(nota, {force: true})
        this.getBtnSalvarMiembro().click()
        cy.wait(3000)
    }

    selPrimerMiembro(){
        this.getMenuMiembro().click()
        this.getPrimeraFilaMiembro().click()
    }

    borrarMiembro(){
        this.getBtnConfigMiembro().click()
        this.getMenuBorrarMiembro().click()
        this.getBtnBorrarMiembro().click({force: true})
        cy.wait(3000)
    }

    filtrarMiembroPorLabel(valor){
        this.getMenuMiembro().click()
        this.getBtnFiltrarMiembro().click()
        this.setCampoFiltro(1, 'Label')
        this.setCampoOperador(1, 0)
        this.setValorEtiqueta(valor)
        this.getBtnAplicar().click({force: true})
        cy.wait(3000);
    }

    filtrarMiembroPorName(operador, valor){
        this.getMenuMiembro().click()
        this.getBtnFiltrarMiembro().click()
        this.setCampoFiltro(1, 'Name')
        this.setCampoOperador(1, operador)
        this.setValorCampo(1, valor)
        this.getBtnAplicar().click({force: true})
        cy.wait(3000);
    }

    agregarEtiquetaMiembrosSel(valor){
        this.getBtn2ConfigMiembroFil().click()
        this.getSelectEtiquetaAdd().click()
        this.setValorEtiquetaAdd(valor)
        this.getBtnEjecute().click()
        this.getBtnConfirme().click()
        cy.wait(3000);
    }

    resetFiltrarMiembros(){
        this.getBtnFiltrarMiembro().click()
        this.getBtnResetFiltroMiembros().click()
        cy.wait(3000);
    }

    eliminarMiembrosSel(){
        this.getBtn2ConfigMiembroFil().click()
        this.getSelectMiembrosElim().click()
        this.getBtnEjecute().click()
        this.getBtnConfirme().click()
        cy.wait(4000)
    }

    addFiltro(num, campo, operador, valor){
        let indice1, indice2;
        indice1=(num*2)-2
        indice2=(num*2)-1
        this.setCampoFiltro(num, campo)
        this.setCampoOperador(num, operador)
        if (campo!='Label')
           this.setValorCampo(num, Valor)
        else {
            this.setValorEtiqueta(valor)
        }

    }

    getFiltroCampo(num) { 
        let indice = (num*2)-2
        return this.getListaFiltros().its(indice) 
    }

    getFiltroOperador(num) { 
        let indice = (num*2)-1
        return this.getListaFiltros().its(indice) 
    }

    setCampoFiltro(num, valor) { 
        return this.getFiltroCampo(num).select(valor) 
    }

    setCampoOperador(num, valor) { 
        return this.getFiltroOperador(num).select(valor) 
    }

    getValorCampo(num) { 
        return cy.get('input[class="gh-input"]').its(num-1) 
    }

    setValorCampo(num, valor) { 
        this.getValorCampo(num).type(valor) 
    }

    filtrarMiembroDosCampos(){
        this.getMenuMiembro().click()
        this.getBtnFiltrarMiembro().click()
        
        this.setCampoFiltro(1, 'Name')
        this.setCampoOperador(1, 1)
        this.setValorCampo(1, "PruebaX")

        this.getBtnAddFilter().click()

        this.setCampoFiltro(2, 'Email')
        this.setCampoOperador(2, 'ends with')
        this.setValorCampo(2, ".co")

        this.getBtnFiltrarMiembro().click()
    }    
}
export default MiembroPage