const express = require("express");
const hbs = require("express-handlebars");

const { getData } = require("./get_utils");

const server = express();

//const routes
const userRoutes = require("./userRoute");

//server config
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

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

server.use("/user", userRoutes);

module.exports = {
  server,
};
