const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config(); // To access GEMINI_API_KEY from .env

// Configure multer for memory storage to avoid saving files to disk
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Initialize GoogleGenerativeAI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.use(express.static('ats'));

router.post('/calculate', upload.single('resume'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Resume file is required.' });
        }
        if (!req.body.jobDescription) {
            return res.status(400).json({ message: 'Job description is required.' });
        }

        const resumeBuffer = req.file.buffer;
        const jobDescription = req.body.jobDescription;

        // Parse resume text from the PDF buffer
        const data = await pdfParse(resumeBuffer);
        const resumeText = data.text;
        console.log("--- Extracted Resume Text (First 200 chars): ---");
        console.log(resumeText.substring(0, 200) + '...');
        console.log("-------------------------------------------------");

        // Use AI to get the ATS score
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const prompt = `
            Analyze the following resume against the provided job description and return a percentage score representing the match.
            The score should be based on the presence of relevant skills, experience, and keywords from the job description in the resume.
            Return ONLY a single number for the percentage score, without the percentage sign or any other text.

            Job Description:
            ---
            ${jobDescription}
            ---

            Resume:
            ---
            ${resumeText}
            ---

            Score:
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let scoreText = response.text().trim();
        
        console.log("--- Raw AI Response: ---");
        console.log(scoreText);
        console.log("--------------------------");

        // Ensure the result is a number
        let score = parseInt(scoreText, 10);
        if (isNaN(score)) {
            // If the model returns extra text, try to find a number in it
            const match = scoreText.match(/\d+/);
            score = match ? parseInt(match[0], 10) : 0;
        }

        res.json({ score: Math.min(score, 100) }); // Cap score at 100

    } catch (error) {
        console.error('Error calculating ATS score:', error);
        res.status(500).json({ message: 'Error processing your request.' });
    }
});

module.exports = router;