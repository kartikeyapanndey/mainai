const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Configure multer to store files in memory
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    }
});

// Initialize Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const aiPatterns = [
  "As an AI language model",
  "I am an AI assistant",
  "I do not have personal experiences",
  "I don't have access to real-time information",
  "I'm a large language model",
  "As a language model",
  "I don't have personal opinions",
  "I don't have access to current events",
  "I'm not able to browse the internet",
  "I don't have real-time information",
];

function checkForAIPatterns(text) {
  const lowercaseText = text.toLowerCase();
  const foundPatterns = aiPatterns.filter(pattern =>
    lowercaseText.includes(pattern.toLowerCase())
  );
  return foundPatterns;
}

async function analyzePDF(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    const text = data.text;

    console.log(`PDF text: ${text}`);

    const foundPatterns = checkForAIPatterns(text);

    if (foundPatterns.length > 0) {
      return {
        message: "This resume appears to contain AI-generated content.",
        patterns: foundPatterns
      };
    } else {
      return {
        message: "This resume does not appear to contain AI-generated content."
      };
    }
  } catch (error) {
    console.error(`Error analyzing PDF: ${error}`);
    throw new Error(`Failed to analyze PDF: ${error.message}`);
  }
}

router.post('/upload', upload.single('resume'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    console.log('File uploaded:', req.file);
    const result = await analyzePDF(req.file.path);
    console.log('Analysis result:', result);
    res.json(result);
  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ message: 'Error analyzing resume: ' + error.message });
  } finally {
    // Clean up: delete the uploaded file
    fs.unlink(req.file.path, (err) => {
      if (err) console.error('Error deleting file:', err);
    });
  }
});

router.post('/check', upload.single('document'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Document file is required.' });
        }

        if (!GEMINI_API_KEY) {
            return res.status(500).json({ message: 'Plagiarism checker is not properly configured.' });
        }

        // Parse the PDF from the buffer in memory
        const data = await pdf(req.file.buffer);
        const documentText = data.text;

        if (documentText.length < 50) { // Basic check for meaningful content
            return res.json({ plagiarismPercentage: 0, details: [] });
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const prompt = `
            Analyze the following document for plagiarism. Identify sentences or paragraphs that are likely copied from online sources.
            For each potential match, provide the URL of the source and a percentage of how much of the document matches that source.
            
            Return the response as a valid JSON object with two keys:
            1. "plagiarismPercentage": A single number representing the overall percentage of plagiarism detected.
            2. "details": An array of objects, where each object has "url" and "matchPercentage" keys.
            
            If no plagiarism is found, return 0 for "plagiarismPercentage" and an empty array for "details".

            Document Text:
            ---
            ${documentText}
            ---
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let plagiarismResult;
        
        try {
            const jsonResponse = response.text().trim().replace(/```json/g, '').replace(/```/g, '');
            plagiarismResult = JSON.parse(jsonResponse);
        } catch (parseError) {
            console.error('Error parsing Gemini response:', parseError);
            return res.status(500).json({ message: 'Error processing plagiarism check results.' });
        }

        res.json(plagiarismResult);

    } catch (error) {
        console.error('Error checking plagiarism:', error);
        if (error.status === 429) {
            return res.status(429).json({ message: 'You have exceeded your API quota for the day. Please try again later or check your Google AI plan.' });
        }
        res.status(500).json({ message: 'An error occurred while checking for plagiarism. ' + error.message });
    }
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'publiic', 'index.html'));
});

router.get('/checker', (req, res) => {
  res.sendFile(path.join(__dirname, 'publiic', 'checker.html'));
});

module.exports = router;