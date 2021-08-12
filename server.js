eaconst express = require("express");
const hbs = require("express-handlebars");

const server = express();

//server config
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

//handlebars config
server.engine("handlebars", hbs({ extname: "hbs" }));
server.set("view engine", "handlebars");

server.get("/", (req, res) => {
  res.render("copy");
});

module.exports = {
  server,
};
