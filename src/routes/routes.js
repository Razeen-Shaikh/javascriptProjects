const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
	res.render("index");
});

router.get("/background-image-slider", (req, res) => {
	res.render("background-image-slider");
});

module.exports = router;
