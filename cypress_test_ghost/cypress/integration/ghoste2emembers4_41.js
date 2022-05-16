Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

import GeneralPage from '../pageobjects/general.page'
import HomePage from '../pageobjects/home.page'
import MiembroPage from '../pageobjects/miembro.page'
import EtiqPage from '../pageobjects/etiqueta.page'

describe('Probando Funcionalidad Miembros(crear, editar, buscar, filtrar, borrar, listar), staff, invitaciones, logout, preview, themes y otros ', ()=>{

    beforeEach(()=>{
        const homePage=new HomePage();
        homePage.login('l.padillac2@uniandes.edu.co', 'PadillaMiso257');
    })
    
    it.skip('Escenario Incidencia3: conteo despues de eliminar miembro', ()=>{
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        const homePage=new HomePage();

        cy.screenshot('Incidencia3/postlogin')
        miembroPage.crearMiembro('Incidencia3', 'Incidencia3@incidencia.com', 'Incidencia3\n', 'nota');
        cy.screenshot('Incidencia3/postCrearMiembro')
        genPage.ghostLogOut();
        cy.screenshot('Incidencia3/postLogout')
        homePage.login('l.padillac2@uniandes.edu.co', 'PadillaMiso257');
        cy.screenshot('Incidencia3/postLogin2')
        miembroPage.selPrimerMiembro()
        cy.screenshot('Incidencia3/selPrimero')
        miembroPage.borrarMiembro()
        cy.screenshot('Incidencia3/borrarMiembro')

        cy.get('table[class="gh-list"] > thead > tr > th:first').then(($obj)=>{
            let m = $obj.text();
            m = m.substring(0, m.indexOf(" "));
            // Foto
            cy.get('a[href="#/members/"]').find('span').invoke('text').should('eq', m);
        })
    })

    it.skip('Escenario Incidencia2: conteo despues de agregar miembro', ()=>{
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        
        cy.screenshot('Incidencia2/postlogin')
        ///////////////////   WHEN   /////////////////////
        miembroPage.crearMiembro('Incidencia2', 'Incidencia2@incidencia.com', 'Incidencia2\n', 'nota2');
        cy.screenshot('Incidencia2/postCrearMiembro')
        ///////////////////   THEN   /////////////////////
        cy.get('#members_svg__Regular').click().then(()=>{
            cy.get('table[class="gh-list"] > thead > tr > th:first').then(($obj)=>{
                let m = $obj.text();
                m = m.substring(0, m.indexOf(" "));
                // Foto
                cy.get('a[href="#/members/"]').find('span').invoke('text').should('eq', m);
            })
        })
    })

    it.skip('Escenario Incidencia 4: Campo slug de etiquetas no es mostrado.', ()=>{

        const etiqPage=new EtiqPage()
        cy.screenshot('Incidencia4/postlogin')
        etiqPage.ingresarMenuEtiqueta()
        cy.screenshot('Incidencia4/postIngresoMenuEtiq')
        cy.url().should('eq', 'http://localhost:2368/ghost/#/tags');  
        etiqPage.crearEtiqueta('Etiqueta de Prueba Incidencia4', 'Slug4')
        cy.screenshot('Incidencia4/postCrearEtiq')
        etiqPage.ingresarMenuEtiqueta()  
        cy.screenshot('Incidencia4/postIngresoMenuEtiq2')
        cy.wait(3000);
    })

    it.skip('Escenario Incidencia1: botones solapados. Browser Edge.', ()=>{
        const genPage=new GeneralPage();
        const homePage=new HomePage();

        cy.screenshot('Incidencia1/postlogin')
        genPage.ghostLogOut()
        cy.screenshot('Incidencia1/postlogout')
        cy.visit('http://localhost:2368/ghost/#/signin');
        homePage.getUserMail().type('l.padillac2@uniandes.edu.co');
        homePage.getPassword().type('PadillaMiso257');
        cy.screenshot('Incidencia1/signin')
    })

    it.skip('Escenario de Invitación', ()=>{
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        let ns=0;
        //genPage.getCuentaUsuario().click({force:true});
        cy.screenshot('Invitacion/postlogin')
        genPage.getEnlaceConfiguracion().click()
        cy.screenshot('Invitacion/postConfig')
        genPage.getEnlaceStaff().click()
        cy.screenshot('Invitacion/postStaff')

        cy.get('body').then(()=>{
            if (Cypress.$('div[class="apps-grid-cell"]').length){
                cy.get('div[class="apps-grid"]').find('div[class="apps-grid-cell"]').then(($lst)=>{
                    ns=$lst.length;
                })
            }
        })
    
        genPage.invitarGente('LuisPadilla1250@gmail.com', 0)
        cy.screenshot('Invitacion/invita1')
        genPage.invitarGente('EduardoCaviedes2105@gmail.com', 0)
        cy.screenshot('Invitacion/invita2')
        genPage.invitarGente('Caviedes72@gmail.com', 0)
        cy.screenshot('Invitacion/invita3')
        genPage.invitarGente('Caviedes72@hotmail.com', 0)
        cy.screenshot('Invitacion/invita4')
        genPage.cancelarInvitarGente('xyz@hotmail.com', 0)
        cy.screenshot('Invitacion/invitaX')

        genPage.cambiarTema(7)
        cy.screenshot('Invitacion/cambiatema')
        genPage.verSitio()
        cy.screenshot('Invitacion/postversitio')

        genPage.getEnlaceConfiguracion().click()
        cy.screenshot('Invitacion/postConfig2')
        genPage.getEnlaceStaff().click()
        cy.screenshot('Invitacion/postStaff2')
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('div[class="apps-grid"]').find('div[class="apps-grid-cell"]').then(($lst)=>{
           expect($lst).to.have.length(4+ns);
        })
        
        genPage.ghostLogOut()
        cy.screenshot('Invitacion/postLogout')
        cy.url().should('eq', 'http://localhost:2368/ghost/#/signin');    
        cy.wait(2000);   
    })

    it.skip('Escenario de Temas', ()=>{
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////   
        cy.screenshot('Temas/postlogin')     
        genPage.editarProfile('Valledupar', 'http://www.sitiopersonal.com.co', 'https://www.facebook.com/luispadilla', 'https://twitter.com/luispadilla', 'Resumen de la Biografía. Naci en...el...')
        cy.screenshot('Temas/postprofile') 
        genPage.cambiarTema(3)
        cy.screenshot('Temas/tema1') 
        genPage.verSitio()
        cy.screenshot('Temas/versitio1') 
        genPage.cambiarTema(5)
        cy.screenshot('Temas/tema2') 
        genPage.verSitio()
        cy.screenshot('Temas/versitio2') 
        genPage.cambiarTema(4)
        cy.screenshot('Temas/tema3') 
        genPage.verSitio()
        cy.screenshot('Temas/versitio3') 
        genPage.ghostLogOut()
        cy.screenshot('Temas/logout') 
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/signin');    
        cy.wait(2000);   
    })

    it.skip('Escenario etiquetar Miembros', ()=>{
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        cy.screenshot('EtiqMiembros/postlogin') 
        miembroPage.crearMiembro('Nombre17 de PruebaX', 'Email17@Pruebahotmail.com', 'premium\nhot\n', 'Nota17 de Prueba');
        cy.screenshot('EtiqMiembros/creamiembro1') 
        miembroPage.crearMiembro('Nombre18 de PruebaX', 'Email18@Pruebahotmail.com', 'regular\nhot\n', 'Nota18 de Prueba');
        cy.screenshot('EtiqMiembros/creamiembro2') 
        miembroPage.crearMiembro('Nombre19 de PruebaX', 'Email19@Pruebagmail.com', 'premium\ngm\n', 'Nota19 de Prueba');
        cy.screenshot('EtiqMiembros/creamiembro3') 
        miembroPage.crearMiembro('Nombre20 de PruebaX', 'Email20@Pruebagmail.com', 'regular\ngm\n', 'Nota20 de Prueba');
        cy.screenshot('EtiqMiembros/creamiembro4') 
        miembroPage.crearMiembro('Nombre21 de PruebaX', 'Email21@Pruebauniandes.edu.co', 'premium\nuniandes\n', 'Nota21 de Prueba');
        cy.screenshot('EtiqMiembros/creamiembro5') 

        miembroPage.filtrarMiembroPorLabel('premium\n')
        cy.screenshot('EtiqMiembros/filtrolabel1') 
        miembroPage.filtrarMiembroPorLabel('{selectall}{backspace}regular\n')
        cy.screenshot('EtiqMiembros/filtrolabel2') 
        miembroPage.filtrarMiembroPorName('contains', 'PruebaX')
        cy.screenshot('EtiqMiembros/filtroname1') 

        miembroPage.agregarEtiquetaMiembrosSel('uniandes')
        cy.screenshot('EtiqMiembros/postaddetiq') 
        miembroPage.resetFiltrarMiembros()
        cy.screenshot('EtiqMiembros/postresetfiltros') 

        miembroPage.filtrarMiembroPorLabel('hot\n')
        cy.screenshot('EtiqMiembros/filtrolabel3') 
        miembroPage.filtrarMiembroPorLabel('{selectall}{backspace}uniandes\n')
        cy.screenshot('EtiqMiembros/filtrolabel4') 
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('table[class="gh-list"]').find('tr').then(($lst)=>{
            expect($lst).to.have.length(6);
        });
        miembroPage.filtrarMiembroPorName('contains', 'PruebaX')
        cy.screenshot('EtiqMiembros/filtroname2') 
        miembroPage.eliminarMiembrosSel()
        cy.screenshot('EtiqMiembros/posteliminar') 
        
    })

    it.skip('Escenario Filtrar Miembros', ()=>{
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        cy.screenshot('FiltraMiembros/postlogin') 
        miembroPage.crearMiembro('Nombre17 de PruebaX', 'Email17@Pruebahotmail.com', 'premium\nhot\n', 'Nota17 de Prueba');
        cy.screenshot('FiltraMiembros/creamiembro1') 
        miembroPage.crearMiembro('Nombre18 de PruebaX', 'Email18@Pruebahotmail.com', 'regular\nhot\n', 'Nota18 de Prueba');
        cy.screenshot('FiltraMiembros/creamiembro2') 
        miembroPage.crearMiembro('Nombre19 de PruebaX', 'Email19@Pruebagmail.com', 'premium\ngm\n', 'Nota19 de Prueba');
        cy.screenshot('FiltraMiembros/creamiembro3') 
        miembroPage.crearMiembro('Nombre20 de PruebaX', 'Email20@Pruebagmail.com', 'regular\ngm\n', 'Nota20 de Prueba');
        cy.screenshot('FiltraMiembros/creamiembro4') 
        miembroPage.crearMiembro('Nombre21 de PruebaX', 'Email21@Pruebauniandes.edu.co', 'premium\nuniandes\n', 'Nota21 de Prueba');
        cy.screenshot('FiltraMiembros/creamiembro5') 

        miembroPage.filtrarMiembroPorName('contains', 'Nombre')
        cy.screenshot('FiltraMiembros/postfiltroporname1') 
        miembroPage.resetFiltrarMiembros()
        cy.screenshot('FiltraMiembros/postresetfiltros1') 
        miembroPage.filtrarMiembroDosCampos()
        cy.screenshot('FiltraMiembros/postfiltrardosmiembros') 
        miembroPage.resetFiltrarMiembros()
        cy.screenshot('FiltraMiembros/postresetfiltros2') 
        miembroPage.filtrarMiembroPorName('contains', 'PruebaX')
        cy.screenshot('FiltraMiembros/postfiltroporname2') 
        
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('table[class="gh-list"]').find('tr').then(($lst)=>{
            expect($lst).to.have.length(6);
        });
        miembroPage.eliminarMiembrosSel()
        cy.screenshot('FiltraMiembros/posteliminar') 
    })

    it.skip('Escenario Borrar Miembro', () => {
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////   
        cy.screenshot('BorraMiembro/postlogin')      
        miembroPage.crearMiembro('Luis Padilla', 'LuisPadilla1250@gmail.com', 'prueba\n', 'Nota del Miembro.');
        cy.screenshot('BorraMiembro/postcrearmiembro')  

        miembroPage.getMenuMiembro().click()
        cy.screenshot('BorraMiembro/postmenumiembro')  
        miembroPage.setValorBuscado('Luis Padilla\n')
        cy.screenshot('BorraMiembro/postbuscar')  
        miembroPage.selPrimerMiembro()
        cy.screenshot('BorraMiembro/postsel1')  
        miembroPage.borrarMiembro()
        cy.screenshot('BorraMiembro/borramiembro')  
    })

    it.skip('Escenario Modificar Miembro', () => {
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////       
        cy.screenshot('ModificaMiembro/postlogin') 
        miembroPage.crearMiembro('Edgardo Cuvides', 'EduardoCaviedes2105@hotmail.com', 'prueba\n', 'Nota del Usuario.'); 
        cy.screenshot('ModificaMiembro/postcrearmiembro') 
        miembroPage.getMenuMiembro().click()
        cy.screenshot('ModificaMiembro/postmenumiembro') 
        miembroPage.setValorBuscado('Edgardo Cuvides\n')
        cy.screenshot('ModificaMiembro/postbuscar') 
        miembroPage.selPrimerMiembro()
        cy.screenshot('ModificaMiembro/postsel1') 
        miembroPage.editarMiembro('Eduardo Caviedes', 'EduardoCaviedes2105@gmail.com', 'prueba\n', 'Nota del Miembro.'); 
        cy.screenshot('ModificaMiembro/posteditar') 
        miembroPage.getMenuMiembro().click()
        cy.screenshot('ModificaMiembro/postmenumiembro2') 
        miembroPage.getInputBuscar().clear()
        cy.screenshot('ModificaMiembro/postlimpiabuscar') 
        miembroPage.setValorBuscado('Eduardo Caviedes\n')
        cy.screenshot('ModificaMiembro/postbuscar2') 
        miembroPage.selPrimerMiembro()
        cy.screenshot('ModificaMiembro/postsel12') 
        miembroPage.borrarMiembro()
        cy.screenshot('ModificaMiembro/postborrarmiembro') 
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////     
    })
    
})