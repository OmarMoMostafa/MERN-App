const excersizeModel = require("../models/excersizeModel");
const mongoose = require("mongoose");

// add excersize
const addExcersize = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const excersize = await excersizeModel.create({ title, reps, load });
    res.status(200).json(excersize);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all excersizes
const getExcersises = async (req, res) => {
  try {
    const excersizes = await excersizeModel.find({}).sort({ createdAt: -1 });

    res.status(200).json(excersizes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get one excersize
const getExcersise = async (req, res) => {
  const id = req.params.id;
  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "id is not valid" });
  }

  try {
    const excersize = await excersizeModel.findById(id);
    if (!excersize) {
      return res.status(404).json({ error: "Excersize not found" });
    }
    res.status(200).json(excersize);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update excersize
const updateExcersize = async (req, res) => {
  const id = req.params.id;
  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "id is not valid" });
  }
  try {
    const excersize = await excersizeModel.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!excersize) {
      return res.status(404).json({ error: "Excersize not found" });
    }
    res.status(200).json(excersize);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete excersize
const deleteExcersize = async (req, res) => {
  const id = req.params.id;
  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "id is not valid" });
  }
  try {
    const excersize = await excersizeModel.findOneAndDelete({ _id: id });
    if (!excersize) {
      return res.status(404).json({ error: "Excersize not found" });
    }
    res.status(200).json(excersize);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addExcersize,
  getExcersises,
  getExcersise,
  updateExcersize,
  deleteExcersize,
};
