const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  displayName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;
