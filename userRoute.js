const express = require("express");
const { getData } = require("./get_utils");
const updateJson = require("./post-utils");

const router = express.Router();

module.exports = router;

router.get("/new", (req, res) => {
  res.render("create");
});

router.post("/new", (req, res) => {
  let newUser = { ...req.body };
  getData((err, data) => {
    if (err) {
      console.log("There was a problem with getting the data");
    }
    let possibleId = data.users.length + 1;
    let newData = {
      ...data,
      users: [...data.users, { id: possibleId, ...newUser }],
    };
    updateJson(newData, () => {
      console.log("Successfully written");
      res.redirect("/");
    });
  });
});

router.get("/:id", (req, res) => {
  getData((err, content) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    const viewData = {
      profile: content.users,
    };
    console.log(viewData.profile[req.params.id - 1]);
    res.render("details", viewData.profile[req.params.id - 1]);
  });
});
