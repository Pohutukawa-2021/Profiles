const updateJson = require("./post-utils");
const fs = require("fs");
const path = require("path");
const dataFolder = path.join(__dirname, "data.json");
const { getData } = require("./get_utils");
const data = {
  users: [
    {
      id: 1,
      name: "Alex",
      image: "/images/alex/jpg",
      "place of birth": "Auckland, NZ",
      Bio: "suppppp <3",
    },
    {
      id: 2,
      name: "Caleb",
      image: "",
      "place of birth": "Wellington, NZ",
      Bio: "TP 420",
    },
  ],
};

test("check if update JSON method is working well", (done) => {
  updateJson(data, () => {
    getData((err, newData) => {
      if (err) {
        console.log("Error on getting data");
      }
      console.log(newData);
      done();
    });
  });
});
