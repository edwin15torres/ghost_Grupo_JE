class EtiqPage {

    getEnlaceEtiqNueva(){return cy.get('a[href="#/tags/new/"]') }
    getNombreEtiq(){return cy.get('#tag-name')}
    getSlugEtiq(){return cy.get('#tag-slug')}
    getBtnSalvarEtiq(){return cy.get('span').contains('Save')}

    ingresarMenuEtiqueta(){
        cy.get('ul[class="gh-nav-list gh-nav-manage"]').find('li').as('opciones').then(()=>{
            cy.get('@opciones').its(5).click();
        })  
        cy.wait(2000)
    }

    crearEtiqueta(nombre, slug){
       this.getEnlaceEtiqNueva().then(($a)=>{
            $a.click()
       })
       cy.wait(1000);
       this.getNombreEtiq().type(nombre);
       this.getSlugEtiq().type(slug);
       this.getBtnSalvarEtiq().click(); 
       cy.wait(2000);
    }
}
export default EtiqPage