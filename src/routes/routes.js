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

router.get("/simple", async (req, res) => {
	res.render("color-flipper/simple");
});

router.get("/hex", async (req, res) => {
	res.render("color-flipper/hex");
});

router.get("/counter", async (req, res) => {
	res.render("counter");
});

module.exports = router;
