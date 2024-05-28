const express = require("express");
const excersizeModel = require("../models/excersizeModel");

// create excersize router
const router = express.Router();

// get all excersizes
router.get("/", (req, res) => {
  res.send({ msg: "all excersizes" });
});
// get one excersize
router.get("/:id", (req, res) => {
  res.send({ msg: "one excersize" });
});
// add excersize
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const excersize = await excersizeModel.create({ title, reps, load });
    res.status(200).json(excersize);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// edit excersize
router.patch("/:id", (req, res) => {
  res.send({ msg: "edit exersize" });
});

// delete excersize
router.delete("/:id", (req, res) => {
  res.send({ msg: "delete excersize" });
});

module.exports = router;
