const express = require("express");

const waitlistController = require("./../controller/waitlistController")
const router = express.Router();



router.route("/")
.get(waitlistController.getWaitlistUsers)
.post(waitlistController.addUsersToWailist)


module.exports = router;