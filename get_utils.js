const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");

module.exports = {
  getData,
};

function getData(callback) {
  const filepath = path.join(__dirname, "data.json");
  fs.readFile(filepath, "utf8", (err, content) => {
    if (err) {
      console.err(err.message);
      callback(new Error("Unable to load the file"));
      return;
    }
    try {
      const parsedData = JSON.parse(content);
      callback(null, parsedData);
    } catch (parseError) {
      console.error(parseError);
      callback(new Error("Unable to parse the data file"));
    }
  });
}
