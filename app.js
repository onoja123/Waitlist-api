const express = require("express");
const waitlistController = require("./routes/user.js")
const app = express();

app.use(express.json())

// get home page
app.use("/api/waitlist", waitlistController);


module.exports = app;