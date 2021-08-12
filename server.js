const express = require("express");
const hbs = require("express-handlebars");
const updateJson = require("./post-utils");

const { getData } = require('./get_utils')

const server = express();

//server config
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

//handlebars config
server.engine("hbs", hbs({ extname: "hbs" }));
server.set("view engine", "hbs");

server.get("/", (req, res) => {
<<<<<<< HEAD
  updateJson();
  res.render("home");
=======
  getData((err, profiles) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const viewData = {
      profiles: profiles
    }

    res.render("home", profiles);
  })
>>>>>>> f984bbeace90e1fc90c8ba05f412e8dac6bdccaa
});

module.exports = {
  server,
};
