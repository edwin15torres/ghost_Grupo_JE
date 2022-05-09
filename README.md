
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
