const express = require("express");
const router = express.Router();

const waitlistController = require("./../controller/waitlistController")

router.route("/")
.get(waitlistController.getWaitlistUsers)
.post(waitlistController.addUsersToWailist)


module.exports = router;