const express = require("express");
const hbs = require("express-handlebars");
const updateJson = require("./post-utils");
const routes = require('./userRoute')

const { getData } = require("./get_utils");

const server = express();

//server config
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use('/user', routes)

//handlebars config
server.engine("hbs", hbs({ extname: "hbs" }));
server.set("view engine", "hbs");

server.get("/", (req, res) => {
  getData((err, profiles) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    const viewData = {
      profiles: profiles,
    };

    res.render("home", profiles);
  });
});

module.exports = {
  server,
};
