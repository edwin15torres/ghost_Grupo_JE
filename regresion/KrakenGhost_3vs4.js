const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;
const dirCypGhost3_4="./results/Cypress/ghoste2emembers3_41_1.js";
const dirCypGhost4_41="./results/Cypress/ghoste2emembers4_41.js";
const dirCypGhost4_47="./results/Cypress/ghoste2emembers4_47.js";
const nombrever3_41="ghoste2emembers3_41_1.js"
const nombrever4_41="ghoste2emembers4_41.js"
const nombrever4_47="ghoste2emembers4_47.js"

const krakenDir="./results/Kraken"

let resultInfo = {};
let html = "";
let datetime = new Date().toISOString().replace(/:/g,".");

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    fs.readdir(krakenDir, (err, files) => {
      //console.log(files)
      files.forEach((file) => {
        if (file != undefined) {
          fs.readdir(krakenDir + "/" + file + "/v3_41_1", (err, files2) => {
            //console.log(files2)
            if (!fs.existsSync(`${krakenDir}/${file}/compare/`)){
              fs.mkdirSync(`${krakenDir}/${file}/compare/`, { recursive: true });
            }
            html = ""
            files2.forEach((file2) => {
              valida(krakenDir, file, "/v3_41_1", file2, "/v4_41_1")
            })
            fs.copyFileSync('./index.css', `${krakenDir}/${file}/compare/index.css`)
          })
        }
      })
    })

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

async function valida(dirKraken, subdir, v1, archivo, v2) {
  const data = await compareImages(
    fs.readFileSync(`${dirKraken}/${subdir}/${v1}/${archivo}`),
    fs.readFileSync(`${dirKraken}/${subdir}/${v2}/${archivo}`),
    options
  );
  resultInfo = {
    isSameDimensions: data.isSameDimensions,
    dimensionDifference: data.dimensionDifference,
    rawMisMatchPercentage: data.rawMisMatchPercentage,
    misMatchPercentage: data.misMatchPercentage,
    diffBounds: data.diffBounds,
    analysisTime: data.analysisTime
  }
  fs.writeFileSync(`${dirKraken}/${subdir}/compare/${archivo}`, data.getBuffer());
  
  html = html + browser(
    datetime,
    resultInfo,
    `../v3_41_1/${archivo}`,
    `../v4_41_1/${archivo}`,
    `./${archivo}`
  );
  
  fs.writeFileSync(`./results/Kraken/${subdir}/compare/report.html`, createReport(datetime, html));
  
}

function browser(b, info, img1, img2, img1_img2){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: CHROME(${b})</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${img1}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${img2}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${img1_img2}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
               ${resInfo}
            </div>
        </body>
    </html>`
}
