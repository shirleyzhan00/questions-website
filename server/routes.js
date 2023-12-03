const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB using mongoose
mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a data model
const Question = mongoose.model("Question", {
  text: String,
  options: [String],
  correctAnswer: Number,
  explanation: String,
});

// Define API routes
app.get("/questions/:topic", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve questions" });
  }
});

// ...other API routes for creating, updating, and deleting data
