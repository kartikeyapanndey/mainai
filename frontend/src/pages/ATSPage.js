import React, { useState } from 'react';
import './ATSPage.css'; // Creating a new CSS file for styling

const ATSPage = () => {
    const [resumeFile, setResumeFile] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [score, setScore] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleCalculateATS = async () => {
        if (!resumeFile || !jobDescription) {
            setError('Please upload a resume and provide a job description.');
            return;
        }

        setIsLoading(true);
        setError('');
        setScore(null);

        const formData = new FormData();
        formData.append('resume', resumeFile);
        formData.append('jobDescription', jobDescription);

        try {
            const response = await fetch('http://localhost:5000/api/ats/calculate', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to calculate ATS score.');
            }
            
            setScore(data.score);

        } catch (err) {
            // Check if the error is due to non-JSON response
            if (err instanceof SyntaxError) {
                setError('Received an invalid response from the server. Please ensure the backend is running correctly.');
            } else {
                setError(err.message || 'An unexpected error occurred.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="ats-container">
            <div className="ats-card">
                <h1 className="ats-title">ATS Score Checker</h1>
                <p className="ats-subtitle">See how well your resume matches a job description.</p>

                <div className="ats-input-group">
                    <div className="ats-upload-box">
                        <input type="file" id="resume-upload-ats" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="ats-upload-input" />
                        <label htmlFor="resume-upload-ats" className="ats-upload-label">
                            {resumeFile ? `📄 ${resumeFile.name}` : '📤 Upload Resume'}
                        </label>
                    </div>

                    <textarea
                        className="ats-textarea"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="📋 Paste the job description here..."
                    />
                </div>

                <button className="btn-calculate" onClick={handleCalculateATS} disabled={isLoading}>
                    {isLoading ? 'Calculating...' : 'Calculate ATS Score'}
                </button>

                {error && <p className="ats-error-message">{error}</p>}
                
                {score !== null && (
                    <div className="ats-result-box">
                        <h2 className="result-title">Your ATS Score</h2>
                        <div className="score-circle">
                            <span className="score-number">{score}%</span>
                        </div>
                        <p className="result-feedback">
                            {score > 80 ? "Excellent match! Your resume is well-optimized." : "Good start, but there's room for improvement."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ATSPage; 