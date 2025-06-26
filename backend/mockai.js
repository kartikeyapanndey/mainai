const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const mongoose = require('mongoose');
const multer = require('multer');
const pdf = require('pdf-parse');
const fs = require('fs');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const ResponseSchema = new mongoose.Schema({
    question: String,
    response: String,
    timestamp: { type: Date, default: Date.now }
});

const Response = mongoose.model('Response', ResponseSchema);

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle resume upload and generate questions
router.post('/generate-questions', upload.single('resume'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No resume file uploaded.' });
    }

    try {
        // Parse the PDF buffer
        const data = await pdf(req.file.buffer);
        const resumeText = data.text;

        // Use AI to generate questions from resume text
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const prompt = `Based on the following resume text, generate 5 relevant interview questions. Return them as a JSON array of strings.

Resume:
---
${resumeText}
---

Questions:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let questionsText = response.text();
        
        // Clean up the response to get a valid JSON array
        questionsText = questionsText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const questions = JSON.parse(questionsText);

        res.json({ questions });

    } catch (error) {
        console.error('Error generating questions:', error);
        res.status(500).json({ message: 'Failed to generate questions from resume.' });
    }
});

// Save interview response
router.post('/save-response', async (req, res) => {
    const { question, response } = req.body;
    try {
        const newResponse = new Response({
            question,
            response
        });
        await newResponse.save();
        res.json({ message: 'Response saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving response to database' });
    }
});

// Start interview
router.post('/start', async (req, res) => {
    try {
        const { role, experience, skills } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `You are an interviewer conducting a technical interview for a ${role} position. 
                       The candidate has ${experience} years of experience and skills in ${skills.join(', ')}.
                       Ask a relevant technical question.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        res.json({ question: response.text() });
    } catch (error) {
        console.error("Error starting interview:", error);
        res.status(500).json({ error: 'Error starting interview' });
    }
});

// Process answer
router.post('/process-answer', async (req, res) => {
    try {
        const { question, answer } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `As an interviewer, evaluate this answer to the question: "${question}"
                       Candidate's answer: "${answer}"
                       Provide constructive feedback.`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        res.json({ feedback: response.text() });
    } catch (error) {
        console.error("Error processing answer:", error);
        res.status(500).json({ error: 'Error processing answer' });
    }
});

async function generateResponse(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating response:', error);
        throw error;
    }
}

module.exports = {
    router: router,
    generateResponse: generateResponse,
};

