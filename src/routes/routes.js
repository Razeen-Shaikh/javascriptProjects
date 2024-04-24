const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/bg-img-slider", (req, res) => {
  res.render("bg-img-slider");
});

router.get("/clock", (req, res) => {
  res.render("clock");
});

router.get("/color-flipper", async (req, res) => {
  res.render("color-flipper/simple");
});

router.get("/hex", async (req, res) => {
  res.render("color-flipper/hex");
});

router.get("/counter", async (req, res) => {
  res.render("counter");
});

router.get("/drum-kit", async (req, res) => {
  res.render("drum-kit");
});

router.get("/menu", async (req, res) => {
  res.render("menu");
});

router.get("/modal", async (req, res) => {
  res.render("modal");
});

router.get("/navbar", async (req, res) => {
  res.render("navbar");
});

router.get("/pass-the-message", async (req, res) => {
  res.render("pass-the-message");
});

router.get("/questions", async (req, res) => {
  res.render("questions");
});

router.get("/reviews", async (req, res) => {
  res.render("reviews");
});

router.get("/scroll", async (req, res) => {
  res.render("scroll");
});

router.get("/sidebar", async (req, res) => {
  res.render("sidebar");
});

router.get("/video", async (req, res) => {
  res.render("video");
});

module.exports = { router, router };
