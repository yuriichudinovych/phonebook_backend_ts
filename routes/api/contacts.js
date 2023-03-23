const express = require("express");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/", ctrl.addContact);

module.exports = router;
