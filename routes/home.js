const express = require("express");
const router = express.Router();

const { homeController } = require("../controllers");

router.get("/home", homeController.getHome);
router.post("/", homeController.postLogin);

module.exports = router;
