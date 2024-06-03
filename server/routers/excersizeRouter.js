const express = require("express");
const {
  addExcersize,
  getExcersises,
  getExcersise,
  updateExcersize,
  deleteExcersize,
} = require("../controllers/excersizeController");

// create excersize router
const router = express.Router();

// get all excersizes
router.get("/", getExcersises);

// get one excersize
router.get("/:id", getExcersise);

// add excersize
router.post("/", addExcersize);

// edit excersize
router.patch("/:id", updateExcersize);

// delete excersize
router.delete("/:id", deleteExcersize);

module.exports = router;
