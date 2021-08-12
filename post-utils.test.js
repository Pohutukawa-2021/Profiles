const updateJson = require("./post-utils");
const fs = require("fs");
const path = require("path");
const dataFolder = path.join(__dirname, "data.json");
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
      Bio: "FTP 420",
    },
  ],
};

test("check if update JSON method is working well", (done) => {
  updateJson(data, () => {
    console.log("File written successfully");
    fs.readFile(dataFolder, "utf8", (err, updatedData) => {
      console.log(updatedData);
    });
  });
}, 20000);
