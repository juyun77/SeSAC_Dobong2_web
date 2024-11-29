const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
router.get("/", controller.getUser);

//POST /user/login
// router.post('/login', controller.login)
// router.post("login", controller.login);

module.exports = router;
