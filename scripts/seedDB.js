const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/auth"
);

const TextSeed = [
  {
    text: "Text",
  },
];

db.Text.remove({})
  .then(() => db.Text.collection.insertMany(TextSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
