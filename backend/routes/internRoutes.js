const express = require("express");
const router = express.Router();
const { registerIntern, loginIntern, getDashboardData } = require("../controllers/internController");

router.post("/register", registerIntern);
router.post("/login", loginIntern);
router.get("/dashboard/:email", getDashboardData);

module.exports = router;
