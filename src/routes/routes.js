const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
	res.render("index");
});

router.get("/background-image-slider", (req, res) => {
	res.render("background-image-slider");
});

router.get("/clock", (req, res) => {
	res.render("clock");
});

module.exports = router;
