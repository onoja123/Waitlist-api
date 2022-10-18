const express = require("express");
const waitlistController = require("./routes/user.js")
const app = express();

app.use(express.json())

// Get url
app.use("/api/waitlist", waitlistController);

app.use("*", (req, res, next)=>{
    res.status(404).json({
        status: "404 Not Found"
    })
})

module.exports = app;