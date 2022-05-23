Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

import HomePage from '../../pageobjects/home.page'
import MiembroPage from '../../pageobjects/miembro.page'
import GeneralPage from '../../pageobjects/general.page'

const miembroPage=new MiembroPage();

const faker = require("faker");
let datapool = [];
let ObjMember
//uniandes, regular, premium, paypal, admin, editor, autor, contributor, member, ejemplo

function crearMiembrosDesdeDataPoolApriori(memberLeft) {
    var memberLeft=memberLeft;
    if (memberLeft>0){
        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember)
        memberLeft=memberLeft-1;
        cy.wait(1000);
        crearMiembrosDesdeDataPoolApriori(memberLeft);
    }
 }

 const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

 function generaObjMiembro(){
    let indice=getRandomInt(0, 1000)
    let obj=datapool[indice]
    let obj2 = {
        nombre: obj.first_name+" "+obj.last_name,
        email: obj.email,
        label: obj.label,
        nota: obj.note,
    };
    return obj2
}

function generaObjMiembroId(indice){
    let obj=datapool[indice]
    let obj2 = {
        nombre: obj.first_name+" "+obj.last_name,
        email: obj.email,
        label: obj.label,
        nota: obj.note,
    };
    return obj2
}

 describe('Creación de Miembros con Pool Apriori', ()=>{
    datapool = require('../../fixtures/MOCK_DATA_MEMBERS.json')

    beforeEach(()=>{
        const homePage=new HomePage();
        homePage.login('l.padillac2@uniandes.edu.co', 'PadillaMiso257');
    })

    it('1. Prueba creación miembro, todos los campos en blanco', function() {
        ObjMember=generaObjMiembroId(1000);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Please enter an email.').should('be.visible')
    })

    it('2. Prueba creación miembro, email en blanco', function() {
        ObjMember=generaObjMiembroId(1001);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Please enter an email.').should('be.visible')
    })

    it('3. Prueba creación miembro, email con formato invalido', function() {
        ObjMember=generaObjMiembroId(1002);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('4. Prueba creación miembro, email con formato valido, etiq no vacia y los demas en blanco', function() {
        ObjMember=generaObjMiembroId(1003);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('5. Prueba creación miembro, longitud nombre menor por 1 a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1004);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('6. Prueba creación miembro, longitud nombre igual a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1005);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('7. Prueba creación miembro, longitud nombre mayor a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1006);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Name cannot be longer than 191 characters.').should('be.visible')
    })

    it('8. Prueba creación miembro, valor etiqueta: espacio en blanco', function() {
        ObjMember=generaObjMiembroId(1007);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Value in [labels.name] cannot be blank').should('be.visible')
    })

    it('9. Prueba creación miembro, longitud de email menor por 1 a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1008);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('10. Prueba creación miembro, longitud de email igual a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1009);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('11. Prueba creación miembro, longitud de email mayor a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1010);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Email cannot be longer than 191 characters.').should('be.visible')
    })

    it('12. Prueba creación miembro, longitud de nombre de email menor en 1 a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1014);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('13. Prueba creación miembro, longitud de nombre de email igual a la longitud máxima: 64', function() {
        ObjMember=generaObjMiembroId(1015);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('14. Prueba creación miembro, longitud de nombre de email mayor en 1 a la longitud máxima: 64', function() {
        ObjMember=generaObjMiembroId(1016);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('15. Prueba creación miembro, email sin nombre', function() {
        ObjMember=generaObjMiembroId(1017);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('16. Prueba creación miembro, email sin dominio', function() {
        ObjMember=generaObjMiembroId(1018);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('17. Prueba creación miembro, nombre email con solo simbolos incluido parentesis', function() {
        ObjMember=generaObjMiembroId(1019);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('18. Prueba creación miembro, nombre email con solo simbolos sin parentesis', function() {
        ObjMember=generaObjMiembroId(1020);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('19. Prueba creación miembro, nombre email empieza en letra siguen simbolos incluido parentesis', function() {
        ObjMember=generaObjMiembroId(1021);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('20. Prueba creación miembro, nombre email empieza en letra siguen simbolos sin parentesis', function() {
        ObjMember=generaObjMiembroId(1022);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('21. Prueba creación miembro, nombre email con el simbolo corchete', function() {
        ObjMember=generaObjMiembroId(1023);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('22. Prueba creación miembro, nombre email con: menor que o mayor que', function() {
        ObjMember=generaObjMiembroId(1024);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('23. Prueba creación miembro, nombre email con: dos puntos', function() {
        ObjMember=generaObjMiembroId(1025);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('24. Prueba creación miembro, nombre email con: punto y coma', function() {
        ObjMember=generaObjMiembroId(1026);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('25. Prueba creación miembro, nombre email con: coma', function() {
        ObjMember=generaObjMiembroId(1027);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('26. Prueba creación miembro, nombre email con: un punto', function() {
        ObjMember=generaObjMiembroId(1028);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('27. Prueba creación miembro, nombre email con: dos puntos seguidos', function() {
        ObjMember=generaObjMiembroId(1029);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })

    it('28. Prueba creación miembro, email con: dos @', function() {
        ObjMember=generaObjMiembroId(1030);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Invalid Email.').should('be.visible')
    })    

    it('29. Prueba creación miembro, longitud nota menor por 1 a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1011);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('30. Prueba creación miembro, longitud nota igual a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1012);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Retry').should('not.exist')
        miembroPage.borrarMiembro()
    })

    it('31. Prueba creación miembro, longitud nota mayor por 1 a la longitud máxima', function() {
        ObjMember=generaObjMiembroId(1013);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Note is too long.').should('be.visible')
    })

    it('32. Crea diez Miembros de DataPool Apriori', function() {
        crearMiembrosDesdeDataPoolApriori(10);
    })

    it('33. Prueba creación miembro repetido', function() {
        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember);
        miembroPage.crearMiembroObj(ObjMember);
        cy.contains('Validation error, cannot save member. Member already exists.').should('be.visible')
        //miembroPage.verificaCreacionMiembro(ObjMember);
    })

    it('34. Escenario Incidencia2: conteos no coinciden despues de agregar miembro', ()=>{
        const miembroPage=new MiembroPage();
        
        ///////////////////   WHEN   /////////////////////
        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        ///////////////////   THEN   /////////////////////
        cy.get('#members_svg__Regular').click().then(()=>{
            cy.get('table[class="gh-list"] > thead > tr > th:first').then(($obj)=>{
                let m = $obj.text();
                m = m.substring(0, m.indexOf(" "));
                cy.get('a[href="#/members/"]').find('span').invoke('text').should('eq', m);
            })
        })
    })

    it('35. Escenario Incidencia3: conteos no coinciden despues de eliminar miembro', ()=>{
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        const homePage=new HomePage();

        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember);

        genPage.ghostLogOut();
        homePage.login('l.padillac2@uniandes.edu.co', 'PadillaMiso257');
        miembroPage.selPrimerMiembro()
        miembroPage.borrarMiembro()

        cy.get('table[class="gh-list"] > thead > tr > th:first').then(($obj)=>{
            let m = $obj.text();
            m = m.substring(0, m.indexOf(" "));
            cy.get('a[href="#/members/"]').find('span').invoke('text').should('eq', m);
        })
    })

    it('36. Escenario Modificar Miembro', () => {
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember);       
        miembroPage.getMenuMiembro().click()
        miembroPage.setValorBuscado(ObjMember.email+'\n')
        miembroPage.getPrimeraFilaMiembro().click()
        cy.wait(2000)

        let ObjMember2=generaObjMiembro();
        miembroPage.editarMiembroObj(ObjMember2); 
        miembroPage.verificaCreacionMiembro(ObjMember); 

        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////         
        miembroPage.getMenuMiembro().click()
        miembroPage.getInputBuscar().clear()
        miembroPage.setValorBuscado(ObjMember.email+'\n')
        cy.contains(ObjMember.email).should('not.exist')
        cy.get('table[class="gh-list"]').should('not.exist')

        miembroPage.getMenuMiembro().click()
        miembroPage.getInputBuscar().clear()
        miembroPage.setValorBuscado(ObjMember2.email+'\n')   
        cy.get('table[class="gh-list"] > tbody').find('tr').then(($lst)=>{
            expect($lst).to.have.length(1);
        }); 
        cy.contains(ObjMember2.email).should('exist')
    })

    it('37. Escenario Borrar Miembro', () => {
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////      
        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember); 

        miembroPage.getMenuMiembro().click()
        miembroPage.setValorBuscado(ObjMember.email+'\n')
        miembroPage.getPrimeraFilaMiembro().click()
        miembroPage.borrarMiembro()
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////    
        cy.contains(ObjMember.email).should('not.exist')
        cy.get('table[class="gh-list"]').should('not.exist')      
    })

    it('38. Escenario Verifica Creación de Miembros', () => {
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        ObjMember=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember);      
        
        let ObjMember2=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember2); 
        miembroPage.verificaCreacionMiembro(ObjMember2); 

        let ObjMember3=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember3); 
        miembroPage.verificaCreacionMiembro(ObjMember3); 
        //////////////////////////////
        ////         THEN        /////
        ////////////////////////////// 
        miembroPage.getMenuMiembro().click()
        miembroPage.getInputBuscar().clear()
        miembroPage.setValorBuscado(ObjMember.email+'\n')
        cy.get('table[class="gh-list"] > tbody').find('tr').then(($lst)=>{
            expect($lst).to.have.length(1);
        }); 
        cy.contains(ObjMember.email).should('exist')
        cy.wait(2000)

        miembroPage.getInputBuscar().clear()
        miembroPage.setValorBuscado(ObjMember2.email+'\n')
        cy.get('table[class="gh-list"] > tbody').find('tr').then(($lst)=>{
            expect($lst).to.have.length(1);
        }); 
        cy.contains(ObjMember2.email).should('exist')
        cy.wait(2000)

        miembroPage.getInputBuscar().clear()
        miembroPage.setValorBuscado(ObjMember3.email+'\n')
        cy.get('table[class="gh-list"] > tbody').find('tr').then(($lst)=>{
            expect($lst).to.have.length(1);
        }); 
        cy.contains(ObjMember3.email).should('exist')
        cy.wait(2000)
    })

    it.only('39. Escenario etiquetar Miembros', ()=>{
        const miembroPage=new MiembroPage();
        const genPage=new GeneralPage();
        const homePage=new HomePage();
        //////////////////////////////
        ////         WHEN        /////
        //////////////////////////////
        ObjMember=generaObjMiembro();    
        miembroPage.crearMiembroObj(ObjMember);
        miembroPage.verificaCreacionMiembro(ObjMember);      
        
        let ObjMember2=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember2); 
        miembroPage.verificaCreacionMiembro(ObjMember2); 

        let ObjMember3=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember3); 
        miembroPage.verificaCreacionMiembro(ObjMember3); 

        let ObjMember4=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember4); 
        miembroPage.verificaCreacionMiembro(ObjMember4); 

        let ObjMember5=generaObjMiembro();
        miembroPage.crearMiembroObj(ObjMember5); 
        miembroPage.verificaCreacionMiembro(ObjMember5); 
        //miembroPage.getMenuMiembro.click()

        miembroPage.cambiarLabel(ObjMember.email, "qwerty")
        miembroPage.cambiarLabel(ObjMember2.email, "qwerty")
        miembroPage.cambiarLabel(ObjMember3.email, "qwerty")
        miembroPage.cambiarLabel(ObjMember4.email, "qwerty")
        miembroPage.cambiarLabel(ObjMember5.email, "qwerty")
        //miembroPage.getInputBuscar().clear()

        genPage.ghostLogOut();
        homePage.login('l.padillac2@uniandes.edu.co', 'PadillaMiso257');
        miembroPage.filtrarMiembroPorLabel('{selectall}{backspace}'+'qwerty\n')
        cy.wait(1000)
        //////////////////////////////
        ////         THEN        /////
        //////////////////////////////
        cy.get('table[class="gh-list"] > tbody').find('tr').then(($lst)=>{
           expect($lst).to.have.length(5);
        });
        //miembroPage.filtrarMiembroPorLabel('{selectall}{backspace}qwerty\n')
        miembroPage.eliminarMiembrosSel()
        
    })

})

