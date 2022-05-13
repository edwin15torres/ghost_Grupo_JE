#!/bin/bash

echo -e "\n**** Inicio de ejecución de pruebas E2E en la versión 3.41.1 de Ghost ****\n"
echo -e "./node_modules/.bin/cypress run -C cypress-ghost-3.41.1.json -b chrome\n"
./node_modules/.bin/cypress run -C cypress-ghost-3.41.1.json -b chrome

echo -e "\n**** Inicio de ejecución de pruebas E2E en la versión 4.47.0cd.. de Ghost ****\n"
echo -e "./node_modules/.bin/cypress run -C cypress-ghost-4.47.0.json -b chrome \n"
./node_modules/.bin/cypress run -C cypress-ghost-4.47.0.json -b chrome

echo -e "\n**** Análisis de resultados con ResembleJS **** \n"
echo -e "node cypress/integration/main.js\n"
cd cypress
cd integration
node main.js