const fs = require("fs");
const path = require("path");
const dataFile = path.join(__dirname, "data.json");

//This function will accept the new updated file. and a console.log() method to show that it was successful
function updateJson(newFile, cb) {
  let newFileToWrite = JSON.stringify(newFile, null, 2);
  fs.writeFile(dataFile, newFileToWrite, (err) => {
    if (err) {
      console.log("Sorry the file was not written");
    }
    console.log("File has been written successfully");
  });
}

module.exports = updateJson;
