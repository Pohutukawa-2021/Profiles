const express = require("express");
const hbs = require("express-handlebars");
const updateJson = require("./post-utils");

const server = express();

//server config
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

//handlebars config
server.engine("hbs", hbs({ extname: "hbs" }));
server.set("view engine", "hbs");

server.get("/", (req, res) => {
  updateJson();
  res.render("home");
});

module.exports = {
  server,
};
