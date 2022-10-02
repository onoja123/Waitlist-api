const express = require("express");
const bodyParser = require("body-parser");
const waitlistController = require("./routes/user.js")
const app = express();


//Db config

//Routes which should handle requets


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// get home page
app.use("/api/users/email", waitlistController);


module.exports = app;