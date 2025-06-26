const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Feedback Schema/*jjhjhjh*/
const userFeedbackSchema = new mongoose.Schema({
  email: { type: String, required: true },
  mobile: { type: String },
  feedback: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const UserFeedback = mongoose.model('UserFeedback', userFeedbackSchema);

// Submit feedback
router.post('/submit', async (req, res) => {
  try {
    const { email, mobile, feedback } = req.body;

    if (!email || !feedback) {
        return res.status(400).json({ message: "Email and feedback are required."});
    }

    const newFeedback = new UserFeedback({ email, mobile, feedback });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully", id: newFeedback._id });
  } catch (error) {
    console.error("Error processing feedback:", error);
    res.status(500).json({ message: "Error storing feedback" });
  }
});

// Get all feedback (optional, for admin purposes)
router.get('/', async (req, res) => {
  try {
    const feedbacks = await UserFeedback.find().sort({ timestamp: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

module.exports = router;