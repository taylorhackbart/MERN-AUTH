const mongoose = require("mongoose");

const Schema = mongoose.Schema

const TextSchema = new Schema({
  text: {
    type: String
  },
})
const Text = mongoose.model("Text", TextSchema)

module.exports = Text;