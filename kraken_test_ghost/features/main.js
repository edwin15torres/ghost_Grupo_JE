const compareImages = require("resemblejs/compareImages");
const fs = require("fs");
const directory = "../screenshots/";
let resultInfo = {};
let arrJ = [];
let html = "";
let compare = "compare";

let now = new Date().toISOString().replace(/:/g, ".");

async function executeTest() {
  let resultInfo = {};

  fs.readdir(directory, (err, files) => {
    let field='lname';
    files.sort( compare );
    console.log( files.sort( compare ))
    files.forEach((file) => {
      if (file != undefined) {
        fs.readdir(directory + "/" + file, (err, files) => {
          files.forEach((file1) => {
            fs.readdir(directory + "/" + file + "/" + file1, (err, files2) => {
              if (files2 != undefined) {
                arrJ = files2;
                prueba(files2, file1, file);
              }
            });
          });
        });
      }
    });
  });

  async function compare( a, b ) {
    if ( a.nameFile < b.nameFile ){
      return -1;
    }
    if ( a.nameFile > b.nameFile ){
      return 1;
    }
    return 0;
  }

  
  async function prueba(nameFile, folder, folderScenario) {
    const data = await compareImages(
      fs.readFileSync(
        `../screenshots/${folderScenario}/${folder}/${nameFile[0]}`
      ),
      fs.readFileSync(
        `../screenshots/${folderScenario}/${folder}/${nameFile[1]}`
      )
    );

    var dir = `../screenshots/${folderScenario}/${folder}/`+ "compare";

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(
      `../screenshots/${folderScenario}/${folder}/compare/compare-${folder}.png`,
      data.getBuffer()
    );

    resultInfo = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime,
    };

    let datetime = new Date()
    let formatted_date = datetime.getFullYear() + "-" + (datetime.getMonth() + 1) + "-" + datetime.getDate() + " " + datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds() 

    html += browser(
      formatted_date,
      resultInfo,
      `../screenshots/${folderScenario}/${folder}/${nameFile[0]}`,
      `../screenshots/${folderScenario}/${folder}/${nameFile[1]}`,
      `../screenshots/${folderScenario}/${folder}/compare/compare-${folder}.png`,
      folderScenario,
      folder
    );

    fs.writeFileSync(`../results/report.html`, createReport(html));
    //fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
  }
}
(async () =>
  console.log(
    await executeTest().catch((e) => {
      console.log(e);
    })
  ))();

function browser(
  datetime,
  info,
  imagenOrigen,
  imagenReferencia,
  imagenCompare,
  folderScenario,
  folder
) {
  return `
        
        <div class="card me-4">
            <div class="card-header">
                <h4>Scenario: ${folderScenario}</h4>
            </div>
            <div class="card-body">
                <div class="post-meta"><span class="date">${folder}</span> <span class="mx-1">&bullet;</span> <span>${datetime}</span></div>
                <div class="card">
                <p>${JSON.stringify(info)}</p>
                </div>
            </div>  
            <div class="card-body d-md-flex post-entry-2 half">
                <div class="card col-ml-4 me-4">
                    <div class="card-header">
                        Version 3.41.1
                    </div>
                    <div class="card-body">
                    <a href="single-post.html" class="thumbnail">
                        <img src="${imagenReferencia}" alt="" class="img-fluid zoom">
                    </a>
                    </div>
                </div>
                <div class="card col-ml-4 me-4">
                    <div class="card-header">
                        Version 4.47.0
                    </div>
                    <div class="card-body">
                    <a href="single-post.html" class="thumbnail">
                        <img src="${imagenOrigen}" alt="" class="img-fluid  zoom">
                    </a>
                    </div>
                </div>
                <div class="card col-ml-4 me-4">
                    <div class="card-header">
                        Compare Result
                    </div>
                    <div class="card-body">
                        
                    <a href="single-post.html" class="thumbnail">
                        <img src="${imagenCompare}" alt="" class="img-fluid zoom">
                    </a>
                    </div>
                </div>
        </div>
      </div>`;
}

function createReport(html) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Pruebas de Regresión Visual </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="assets/css/variables.css" rel="stylesheet">
    <link href="assets/css/main.css" rel="stylesheet">
</head>
<body>

  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="#" class="logo d-flex align-items-center">
        <h1>Resemblejs-Report Visual Regression Testing</h1>
      </a>
    </div>
  </header>

    <main id="main">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12" data-aos="fade-up">
              <h3 class="category-title">Application: Ghost</h3>
               ${html}
              </div>
            </div>
          </div>
        </section>
    </main>
</body>
</html>`;
}
