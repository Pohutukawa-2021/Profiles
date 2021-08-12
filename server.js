const express = require("express");
const hbs = require("express-handlebars");

const server = express();

//server config
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

//handlebars config
server.engine("hbs", hbs({ extname: "hbs" }));
server.set("view engine", "hbs");

server.get("/", (req, res) => {
  res.render("home");
});

module.exports = {
  server,
};
