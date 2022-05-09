###Pruebas e2e con Kraken
Los 28 escenarios seleccionados para las pruebas con Kraken pertenecen a 16 funcionalidades de Ghost descritas a continuación:

| Nº | Funcionalidad                                  | Escenario                                                                                                      | Tipo de Escenario |
| -- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1  | Iniciar sesión en la consola de administración | Incio de sesión con usuario y password correctos.                                                              | Positivo          |
| 2  | Iniciar sesión en la consola de administración | Incio de sesión con usuario y password incorrectos.                                                            | Negativo          |
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