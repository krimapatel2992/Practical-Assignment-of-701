const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function extractZip(zipFilePath, destinationFolder) {
  const zip = new AdmZip(zipFilePath);
  zip.extractAllTo(destinationFolder, true);
  console.log(`Zip file '${zipFilePath}' extracted to '${destinationFolder}'.`);
}

const zipFilePath = 'Html Zip'; // Replace this with the path of your zip file
const destinationFolder = 'unzip'; // Replace this with the folder where you want to extract the files

extractZip(zipFilePath, destinationFolder);
