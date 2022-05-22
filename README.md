# Proyecto Pruebas automatizadas 
***
## Integrantes

| Nombre                          | Correo                      |
| ------------------------------- | --------------------------- |
| Edwin Adolfo Torres Leguizamon | ea.torresl1@uniandes.edu.co |
| Jadir Hernan Acosta Hernandez   | jh.acosta@uniandes.edu.co   |
| Rafael Ortiz | rd.ortizr1@uniandes.edu.co |
| Luis Eduardo Padilla Caviedes    | l.padillac2@uniandes.edu.co  |

## Pruebas e2e con Kraken

Los 18 escenarios seleccionados para las pruebas con Kraken pertenecen a 10 funcionalidades de Ghost descritas a continuación:

| Nº | Funcionalidad                                  | Escenario                                                                                                      | Tipo de Escenario |
| -- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1  | Iniciar sesión                                 | Incio de sesión con usuario y password correctos.                                                              | Positivo          |
| 2  | Iniciar sesión                                 | Incio de sesión con usuario y password incorrectos.                                                            | Negativo          |
| 3  | Crear Post                                     | Creación de un Post en Ghost.                                                                                  | Positivo          |
| 4  | Editar Post                                    | Edición de un Post en Ghost.                                                                                   | Positivo          |
| 5  | Editar Post                                    | Edición de un Post en Ghost.                                                                                   | Negativo          |
| 8  | Crear Tag                                      | Creación de un Tag en Ghost                                                                                    | Positivo          |
| 9  | Editar Tag                                     | Edición de los datos de un Tag en Ghost                                                                        | Positivo          |
| 10 | Cerrar Sesión                                  | Cerrar una sesión activa en Ghost                                                                              | Positivo          |
| 11 | Crear Página                                   | Crear una pagina en el sitio, con una fecha de publicación anterior a la actual.                               | Positivo          |
| 12 | Creacion de Miembro                            | Realizar una invitación a las personas a contribuir en el sitio.                                               | Positivo          |
| 13 | Gestionar Staff                                | Realizar una invitación a las personas a contribuir en el sitio (Sin Ingresar Campos Obligatorios).            | Negativo          |
| 14 | Crear Miembro                                  | Crea un miembro en Ghost.                                                                                      | Positivo          |
| 15 | Eliminar Miembro                               | Elimina un miembro en Ghost.                                                                                   | Positivo          |
| 16 | Buscar Miembro                                 | Buscar un miembro por nombre en Ghost.                                                                         | Positivo          |
| 17 | Filtrar Miembro                                | Filtrar miembros por nombre en Ghost.                                                                          | Positivo          |
| 18 | Listar Miembro                                 | Listar miembros  en Ghost.                                                                                     | Positivo          |


## Pruebas e2e con Cypress

Los 22 escenarios seleccionados a las funcionalidades de Ghost descritas a continuación:

| Nº | Funcionalidad                                  | Escenario                                                                                           | Tipo de Escenario |
| -- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------- |
| 1  | Iniciar sesión                                 | Incio de sesión con usuario y password correctos.                                                   | Positivo          |
| 2  | Iniciar sesión                                 | Incio de sesión con usuario y password incorrectos.                                                 | Negativo          |
| 3  | Crear Post                                     | Creación de un Post en Ghost.                                                                       | Positivo          |
| 4  | Editar Post                                    | Edición de un Post en Ghost.                                                                        | Positivo          |
| 5  | Editar Post                                    | Edición de un Post en Ghost.                                                                        | Negativo          |
| 6  | Crear Página                                   | Creación de una página en Ghost                                                                     | Positivo          |
| 7  | Editar Perfil de Usuario                       | Edición de los datos del perfil de un usuario en Ghost                                              | Positivo          |
| 8  | Crear Tag                                      | Creación de un Tag en Ghost                                                                         | Positivo          |
| 9  | Editar Tag                                     | Edición de los datos de un Tag en Ghost                                                             | Positivo          |
| 10 | Cerrar Sesión                                  | Cerrar una sesión activa en Ghost                                                                   | Positivo          |
| 11 | Listar Post                                    | Consultar el listado de Posts/Publicaciones creado(a)s.                                             | Positivo          |
| 12 | Crear Página                                   | Crear una pagina en el sitio, con configuraciones adicionales, tags, autores, titulo y descripción. | Positivo          |
| 13 | Listar Páginas                                 | Consultar el listado de Páginas creado(a)s.                                                         | Positivo          |
| 14 | Crear Miembro                                  | Crea un miembro en Ghost.                                                                           | Positivo          |
| 15 | Eliminar Miembro                               | Elimina un miembro en Ghost.                                                                        | Positivo          |
| 16 | Eliminar Miembros al Tiempo                    | Eminina varios miembos en Ghost.                                                                    | Positivo          |
| 17 | Asignar Labels a varios Miembros               | Adicionar varios labeles a varios Miembros al tiempo.                                               | Positivo          |
| 18 | Buscar Miembro                                 | Buscar un miembro por nombre en Ghost.                                                              | Positivo          |
| 19 | Filtrar Miembro                                | Filtrar miembros por nombre en Ghost.                                                               | Positivo          |
| 20 | Listar Miembro                                 | Listar miembros  en Ghost.                                                                          | Positivo          |
| 21 | Inviatr Staff                                  | Invitar miembros al staff  en Ghost.                                                                | Positivo          |
| 22 | Cambiar tema                                   | Cambiar tema de la página en Ghost.                                                                 | Positivo          |

## Instrucciones Ejecución Pruebas Cypress

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



## Instrucciones Ejecución Pruebas Kraken


Desde una consola PowerShell haga lo siguiente:

1. Instale de forma global a Kraken:  (npm install kraken-node -g)

2. Cree un nuevo directorio vacío: (MkDir nuevo_dir)

2. Muevase al nuevo directorio: (cd nuevo_dir)

3. Crear un proyecto base: (kraken-node gen)

4. Instale de forma local, en el directorio creado en el paso 2 la herramienta kraken-node: (npm install kraken-node)

5. Instale adb segun instrucciones de este enlace: https://www.youtube.com/watch?v=tYY7FTV31vM&ab_channel=IrsealH%26S

6. Instale la herramienta appium: (npm install -g appium)

7. Cree la variable de entorno CHROME_PATH y asignele la ruta al archivo ejecutable de google chrome.

8. Descargue del repositorio los archivos con extension .feature y copielos en el subdirectorio features localizado en el directorio creado en el paso 2.

9. Siempre que vaya a ejecutar estos archivos de prueba:
   
   - Cambiar en el archivo properties.json los valores del username y el password que usará para las pruebas

   - ubiquese el directorio nuevo_dir creado en el paso 2
   
   - ejecute la instrucción: ./node_modules/kraken-node/bin/kraken-node run


Nota: ejecutar sobre chrome
      ejecutar powershell en modo administrador
      Las pruebas se hicieron en Ghost versión 4.41.3

## Pruebas de regresión visual

Los 10 escenarios seleccionados para las pruebas de regresión visual pertenecen a 10 funcionalidades de Ghost descritas a continuación:

|Nº| Funcionalidad | Escenario | Tipo de Escenario |
|-| ------------- | ------------- | ------------- |
|1| Listar Posts/Publicaciones | Mostrar el listado de publicaciones creada en el sitio. | Positivo |
|2| Listar Páginas | Mostrar el listado de páginas creadas en el sitio. | Positivo |
|3| Listar Tags | Mostrar el listado de tags creados en el sitio. | Positivo |
|4| Ver Staff | Mostrar usuarios creados en el sitio. | Positivo |
|5| Crear Post/Publicación | Crear un Post/Publicación en Ghost. | Positivo |
|6| Crear Página | Creación de una página en Ghost | Positivo |
|7| Crear Tag | Creación de un Tag en Ghost | Positivo |
|8| Editar Perfil de Usuario | Edición de los datos del perfil de un usuario en Ghost | Positivo |
|9| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password correctos. | Positivo |
|10| Cerrar Sesión | Cerrar una sesión activa en Ghost. | Positivo |

El código de los escenarios de pruebas de extremo a extremo implementados con Cypress y la regresión visual implementada con ResembleJS se encuentran en el directorio [cypress-test-ghost](cypress-test-ghost).

#### Prerequisitos

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Descargar las imangenes de docker para las versiones 4.47.0 y 3.41.1 de Ghost en la siguiente url: https://hub.docker.com/_/ghost/

#### Docker

- Instalar Docker desktop https://www.docker.com/products/docker-desktop/
- Descargar la imagen 1 con la siguiente instrucción desde terminal  
  ` $ docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1  -- La configuración sobre el puerto 3001 en la instrucción anterior se puede cambiar por el que deseen.`
- Descargar la imagen 2 con la siguiente instruccion desde terminal 
 ` $ docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.47.0 ghost:4.47.0  --La configuración sobre el puerto 3002 en la instrucción anterior se puede cambiar por el que deseen.`
- Ejecutar la aplicación Docker Desktop y debe aparecer las dos imágenes descargadas y enseguida dar en la opción "play" para ejecutarlas y se pueda ingresar desde cualquier navengador.

## CYPRESS
#### Instalar librerías

- Clone el repositorio de pruebas en su máquina utilizando uno de los siguientes comandos:

`git clone git@github.com/edwin15torres/ghost_Grupo_JE.git`

ó

`git clone https://github.com/edwin15torres/ghost_Grupo_JE.git`


- Ahora navegue hasta al directorio `cypress-test-ghost` con el siguiente comando:

`cd cypress-test-ghost/`

- Finalmente instale las librerías requeridas:

`npm install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `cypress-test-ghost` y abra los archivos `cypress-vtr-ghost-3.41.1.json` y `cypress-vtr-ghost-4.47.0.json` en el editor de texto de su preferencia. Estos archivos tienen varios parámetros de configuración que se utilizarán para ejecutar las pruebas sobre cada una de las versiones instaladas de Ghost. El archivo `cypress-vtr-ghost-3.41.1.json` contiene los parámetros de configuración de la instancia con la versión `3.41.1` de Ghost y el archivo `cypress-vtr-ghost-4.47.0.json` contiene los parámetros de configuración de la instancia con la versión `4.47.0` de Ghost. Establezca el valor de los siguientes parámetros en cada uno de los archivos de acuerdo con el valor que corresponda:

- `baseUrl`
- `ghostUrl`
- `ghostAuthUrl`
- `email`
- `password`

#### Ejecución de las pruebas en Cypress

En una terminal ubíquese en el directorio `cypress-test-ghost` y ejecute el siguiente comando para correr las pruebas de extremo a extremo, recopilar las evidencias durante la ejecución de cada paso, comparar las diferencias entre las imágenes recopiladas de cada versión y obtener un reporte consolidado con el resultado:

`./execute-regresion.sh`

Cuando finalice la ejecución del script vaya al directorio `cypress/results` y abra el archivo `report.html` para ver el resultado de la regresión visual.

![resemble-cypress-report](https://user-images.githubusercontent.com/99263583/168408666-6a92010f-1501-4f30-bfd6-6fe5129b065a.png)

## KRAKEN

- Ahora navegue hasta al directorio `kraken-test-ghost` con el siguiente comando:

`cd kraken-test-ghost/`

- Finalmente instale las librerías requeridas:

`npm install`

- Reemplaze la carpeta results de kraken con el contenido de este directorio.`results/kraken` Esta contiene 
   las imágenes resultantes de las ejecuiones de las pruebas de kraken.

- Copie todos los demas archivos de este directorio en la carpeta de su proyecto.

- Ejecutar por terminal la pruebas de regresion:

- `node Ghost3_1v4_1.js`  pruebas de regresion 3.41.1 vs 4.41.0 
- `node Ghost4_41v4_47.js` pruebas de regresion 4.41.1 vs 4.47.0 
- `node KrakenGhost_3vs4.js`  pruebas de regresion 3.41.1 vs 4.47.0 



#### Reporte de 5 diferencias halladas con Resemblejs

Para el registro de incidencias, el cual esta disponible en la siguiente URL(https://github.com/edwin15torres/ghost_Grupo_JE/issues)


#### Pros y Contras
Para el registro de pros y contras de la herramienta Resemblejs, el cual esta disponible en la siguiente URL (https://github.com/edwin15torres/ghost_Grupo_JE/wiki/pros_contras_regresion)


## Pruebas E2E con generación de datos

Para la generación de pruebas se usaron las siguientes estrategias:

- Pool de datos a-priori.
- Pool de datos (pseudo) aleatorio dinámico.
- Escenario aleatorio. 

Para esto se tuvieron en cuenta parte de los escenarios construidos con kraken y cypress.

### Pool de datos (pseudo) aleatorio dinámico

Para la implementación de esta estrategia se crearon API's de prueba desde Mockaroo partiendo de la definición de esquemas para los escenarios de prueba seleccionados. Para ver el detalle de los esquemas y API's utilizados se debe crear una cuenta en Mockaroo utilizando el siguiente enlace [Create a Free Account](https://mockaroo.com/mock_apis).

En la siguiente tabla se detallan las funcionalidades seleccionadas de Ghost para la prueba, el link del esquema, el link con datos de ejemplo retornados por el API y la cantidad de escenarios generados:

| Funcionalidad | Esquema | API example | Escenarios |
| ------------- | ------------- | ------------- |-------|
| Crear Tag | https://mockaroo.com/schemas/415388 | https://my.api.mockaroo.com/tags.json?key=b36b1320 | 20 |
| Editar perfil de usuario | https://mockaroo.com/schemas/415392 | https://my.api.mockaroo.com/users.json?key=b36b1320 | 20 |

#### Instrucciones de ejecución

##### Prerequisitos

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Instalar la versión 3.41.1 de Ghost en su máquina local desde Docker Desktop, descargue la imagen con la siguiente instrucción desde terminal  
  ` $ docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1  -- La configuración sobre el puerto 3001 en la instrucción anterior se puede cambiar por el que tenga disponible en su maquina.`
- Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

##### Instalar librerías

- Clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com/edwin15torres/ghost_Grupo_JE.git`

ó

`git clone https://github.com/edwin15torres/ghost_Grupo_JE.git`


- Ahora navegue hasta el subdirectorio `Entrega_Semana7/cypress-test-ghost-dynamic-data` con el siguiente comando:

`cd Entrega_Semana7/cypress-test-ghost-dynamic-data/`

- Finalmente instale las librerías requeridas:

`npm install`

##### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `Entrega_Semana7/cypress-test-ghost-dynamic-data` y abra el archivo `cypress.json` en el editor de texto de su preferencia. Establezca el valor de las variables `ghostUrl`, `ghostAuthUrl`, `email` y `password` con los valores de configuración de la instancia de Ghost instalada.

##### Ejecución de las pruebas E2E con pool de datos (pseudo) aleatorio dinámico

En una terminal ubíquese en el directorio `Entrega_Semana7/Entrega_Semana7/cypress-test-ghost-dynamic-data` y ejecute el siguiente comando para probar todos los escenarios:

`./node_modules/.bin/cypress run -C cypress.json`

### Escenario aleatorio

Para esta estrategia se utilizaron los escenarios de pruebas de extremo-a-extremo de cypress. Los datos se generaron en cada escenario definiendo un esquema en faker, el cual se solicita la tupla que se necesita para escenario.
El contenido de la tupla se puede encontrar en el archivo cypress\plugins\index.js, en donde se encuentran las tareas para escenario ejecutado, los cuales están conformados 20 escenarios para creación de tags, 50 escenarios edición de la cuenta, 20 escenarios creación de post negativo. Para cambiar los datos usados para el esquema o la cantidad de escenarios, se puede dirigir al archivo anteriormente mencionado y realizar dicha configuración.

### Instrucciones de ejecución

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Instalar la versión 3.41.1 de Ghost en su máquina local desde Docker Desktop, descargue la imagen con la siguiente instrucción desde terminal  
  ` $ docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1  -- La configuración sobre el puerto 3001 en la instrucción anterior se puede cambiar por el que tenga disponible en su máquina.`
- Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).


#### Instalar librerías

- Clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com/edwin15torres/ghost_Grupo_JE.git`

ó

`git clone https://github.com/edwin15torres/ghost_Grupo_JE.git`


- Ahora navegue hasta el subdirectorio `Entrega_Semana7/ghost-cypress-pool-data-random` con el siguiente comando:

`cd Entrega_Semana7/ghost-cypress-pool-data-random/`

- Finalmente instale las librerías requeridas:

`npm install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `Entrega_Semana7/ghost-cypress-pool-data-random` y abra el archivo `cypress.json` en el editor de texto de su preferencia. Establezca el valor de las variables `email` y `password` con los valores que utilizó cuando creó la cuenta de usuario en Ghost.

#### Ejecución de las pruebas E2E con generación de datos faker

En una terminal ubíquese en el directorio `Entrega_Semana7/ghost-cypress-pool-data-random` y ejecute el siguiente comando para probar todos los escenarios:

`./node_modules/.bin/cypress run -C cypress.json`