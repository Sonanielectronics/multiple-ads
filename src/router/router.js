const HTTP = require("../../constant/response.constant");
const fs = require('fs');

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/:id", class1.a)
router.post("/:id", class1.b)

router.get("/:id/data", class1.c)

module.exports = router;
