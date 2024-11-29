const express = require("express");
const controller = require("../controller/Cmain.js");
const router = express.Router();

router.get("/", controller.main);
router.post("/axios1", controller.getUser);

module.exports = router;
