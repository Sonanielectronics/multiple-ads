const HTTP = require("../../constant/response.constant");
const fs = require("fs");

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/:id", class1.b);
router.post("/:id", class1.c);

router.get("/:id/data", class1.d);

module.exports = router;
