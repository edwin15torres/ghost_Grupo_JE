##Pruebas e2e con Kraken

Los 28 escenarios seleccionados para las pruebas con Kraken pertenecen a 16 funcionalidades de Ghost descritas a continuación:

| Nº | Funcionalidad                                  | Escenario                                                                                                      | Tipo de Escenario |
| -- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1  | Iniciar sesión                                 | Incio de sesión con usuario y password correctos.                                                              | Positivo          |
| 2  | Iniciar sesión                                 | Incio de sesión con usuario y password incorrectos.                                                            | Negativo          |
| 3  | Crear Post                                     | Creación de un Post en Ghost.                                                                                  | Positivo          |
| 4  | Editar Post                                    | Edición de un Post en Ghost.                                                                                   | Positivo          |
| 5  | Editar Post                                    | Edición de un Post en Ghost.                                                                                   | Negativo          |
| 6  | Crear Página                                   | Creación de una página en Ghost                                                                                | Positivo          |
| 7  | Editar Perfil de Usuario                       | Edición de los datos del perfil de un usuario en Ghost                                                         | Positivo          |
| 8  | Crear Tag                                      | Creación de un Tag en Ghost                                                                                    | Positivo          |
| 9  | Editar Tag                                     | Edición de los datos de un Tag en Ghost                                                                        | Positivo          |
| 10 | Cerrar Sesión                                  | Cerrar una sesión activa en Ghost                                                                              | Positivo          |
| 11 | Crear Página                                   | Crear una pagina en el sitio, con una fecha de publicación anterior a la actual.                               | Positivo          |
| 12 | Crear Página                                   | Crear una pagina en el sitio, con una fecha de publicación posterior a la actual.                              | Positivo          |
| 13 | Crear Página                                   | Crear una pagina en el sitio, con titulo que tenga más de 255 caracteres.                                      | Negativo          |
| 14 | Ordenar publicaciones                          | Ordenar el listado de las publicaciones/posts de acuerdo con las opciones disponibles.                         | Positivo          |
| 15 | Filtrar publicaciones                          | Ver únicamente las publicaciones con estado publicado/público.                                                 | Positivo          |
| 16 | Gestionar Staff                                | Realizar una invitación a las personas a contribuir en el sitio.                                               | Positivo          |
| 17 | Gestionar Staff                                | Realizar una invitación a las personas a contribuir en el sitio (Sin Ingresar Campos Obligatorios).            | Negativo          |
| 18 | Configuraciones Generales                      | Editar información del titulo y descripción del sitio.                                                         | Positivo          |
| 19 | Eliminar Post                                  | Eliminación de un Post/Publicación                                                                             | Positivo          |
| 20 | Ordenar publicaciones                          | Validar que al momento de ingresar a la vista, el proceso de ordenamiento se cargue por defecto: el más nuevo. | Positivo          |
| 21 | Crear Vista                                    | Crear vista personalizada de acuerdo a la visualización que se tenga en le momento de su creación.             | Positivo          |
| 22 | Crear Vista                                    | Crear vista con un nombre largo, el sistema debe informar la cantidad de caracteres permitidos.                | Positivo          |
| 23 | Editar Vista                                   | Permitir editar la vista, con una nueva visualización de la informaión.                                        | Negativo          |
| 24 | Listar Tags                                    | Consultar el listado de tags creados en el sitio.                                                              | Negativo          |
| 25 | Editar Vista                                   | Editar el nombre de la vista, con 1 caracter valido.                                                           | Positivo          |
| 26 | Eliminar Vista                                 | Ingresar a una vista personalizada y eliminarla.                                                               | Positivo          |
| 27 | Listar Posts                                   | Consultar el listado de Posts/Publicaciones cread(o)as.                                                        | Positivo          |
| 28 | Filtrar Posts por valoración                   | Organizar la lista de Posts creados por valoración.                                                            | Positivo          |

Funcionalidades:
Crear Miembro
Editar Miembro
Eliminar Miembro, Eliminar varios Miembros al tiempo
Asignar labels a varios miembros al tiempo
Buscar Miembro por nombre
Filtrar miembros por Nombre, email y label
Listar Miembros
Login
Logout
Profile
Invitar Staff
Cambiar tema, Visualizar el sitio

Instrucciones Ejecución Pruebas Cypress

Desde una consola PowerShell haga lo siguiente:

1. Instale de forma global a Cypress:  (npm install -g cypress)

2. Cree un nuevo directorio vacío: (MkDir nuevo_dir)

2. Muevase al nuevo directorio: (cd nuevo_dir)

3. Abra Cypress.io: (cypress open)

4. Descargue del repositorio el archivo ghoste2emembers.js al directorio ./nuevo_dir/cypress/integration

5. Desde la interfaz de cypress haga click en ghoste2emembers.js

6. La prueba se ejecutara



Nota: ejecutar sobre chrome
           Las pruebas se hicieron en Ghost versión 4.41.3












Instrucciones Ejecución Pruebas Kraken


Desde una consola PowerShell haga lo siguiente:

1. Instale de forma global a Kraken:  (npm install kraken-node -g)

2. Cree un nuevo directorio vacío: (MkDir nuevo_dir)

2. Muevase al nuevo directorio: (cd nuevo_dir)

3. Crear un proyecto base: (kraken-node gen)

4. Instale de forma local, en el directorio creado en el paso 2 la herramienta kraken-node: (npm install kraken-node)

5. Instale adb segun instrucciones de este enlace: https://www.youtube.com/watch?v=tYY7FTV31vM&ab_channel=IrsealH%26S

6. Instale la herramienta appium: (npm install -g appium)

7. Cree la variable de entorno CHROME_PATH y asignele la ruta al archivo ejecutable de google chrome.

8. Descargue del repositorio los archivos con extension .feature y copielos en el subdirectorio features localizado    en el directorio creado en el paso 2.

9. Siempre que vaya a ejecutar estos archivos de prueba:
   
   - ubiquese el directorio nuevo_dir creado en el paso 2
   
   - ejecute la instrucción: ./node_modules/kraken-node/bin/kraken-node run




Nota: ejecutar sobre chrome
      ejecutar powershell en modo administrador
      Las pruebas se hicieron en Ghost versión 4.41.3
