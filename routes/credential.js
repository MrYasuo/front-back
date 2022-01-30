const express = require("express");
const router = express.Router();

const { credentialController } = require("../controllers");

router.post("/credential", credentialController.postCredential);

module.exports = router;
