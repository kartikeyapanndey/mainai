const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const mockAIModule = require('./mockai');
const { generateResponse } = mockAIModule;

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aiMockInterviewDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes directly from existing files
const loginRoutes = require('./login.js');
const feedbackRoutes = require('./feedback.js');
const atsRoutes = require('./atss.js');
const plagiarismRoutes = require('./plagiarismchecker.js');
const newsletterRoutes = require('./newsletter.js');

// Routes
app.use('/api/auth', loginRoutes);
app.use('/api/mock-interview', mockAIModule.router);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/ats', atsRoutes);
app.use('/api/plagiarism', plagiarismRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Gemini API endpoint
app.post('/api/gemini', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, error: 'Prompt is required' });
        }
        
        const response = await generateResponse(prompt);
        res.json({ success: true, data: response });
    } catch (error) {
        console.error('Error in Gemini API:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 