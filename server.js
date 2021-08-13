const express = require("express");
const hbs = require("express-handlebars");
const updateJson = require("./post-utils");
<<<<<<< HEAD
const userRouter = require("./userRoute");
=======
const routes = require('./userRoute')
>>>>>>> 8fdd67c675ae7a8728f97be9cd79c7a139c3136d

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

server.use("/user", userRouter);

module.exports = {
  server,
};
