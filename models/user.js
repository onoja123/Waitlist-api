const mongoose = require("mongoose");

//userSchema for only email

const User = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }
}, {versionKey: false, timestamps: true});

module.exports = mongoose.model("User", User)