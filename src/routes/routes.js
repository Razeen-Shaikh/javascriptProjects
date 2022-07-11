const express = require("express");
const router = express.Router();
const projects_router = express.Router();

router.get("/", (req, res) => {
	res.redirect("/projects")
});

router.get("/projects", (req, res) => {
	res.render("index");
});

projects_router.get("/bg-img-slider", (req, res) => {
	res.render("background-image-slider");
});

projects_router.get("/clock", (req, res) => {
	res.render("clock");
});

projects_router.get("/color-flipper", async (req, res) => {
	res.render("color-flipper/simple");
});

projects_router.get("/hex", async (req, res) => {
	res.render("color-flipper/hex");
});

projects_router.get("/counter", async (req, res) => {
	res.render("counter");
});

projects_router.get("/drum-kit", async (req, res) => {
	res.render("drum-kit");
});

projects_router.get("/menu", async (req, res) => {
	res.render("menu");
});

projects_router.get("/modal", async (req, res) => {
	res.render("modal");
});

projects_router.get("/navbar", async (req, res) => {
	res.render("navbar");
});

projects_router.get("/pass-the-message", async (req, res) => {
	res.render("pass-the-message");
});

projects_router.get("/questions", async (req, res) => {
	res.render("questions");
});

projects_router.get("/reviews", async (req, res) => {
	res.render("reviews");
});

projects_router.get("/scroll", async (req, res) => {
	res.render("scroll");
});

projects_router.get("/sidebar", async (req, res) => {
	res.render("sidebar");
});

projects_router.get("/video", async (req, res) => {
	res.render("video");
});

module.exports = { router, projects_router };
