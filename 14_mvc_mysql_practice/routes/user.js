// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.getSignup);
router.post("/signup", controller.postSignup);
router.get("/signin", controller.getSignin);
router.post("/signin", controller.postSignin);
router.post("/profile", controller.profile);
router.patch("/profile/edit", controller.profileEdit);
router.delete("/profile/delete", controller.profileDelete);

module.exports = router;
