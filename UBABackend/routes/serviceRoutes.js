const express = require("express");
const { createService, getAllServices } = require("../controllers/ServiceController.js");

const router = express.Router();

router.post("/services", createService);
router.get("/services", getAllServices);

module.exports = router;
