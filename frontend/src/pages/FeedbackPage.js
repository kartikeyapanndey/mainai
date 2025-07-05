import React, { useState } from 'react';
import './FeedbackPage.css';

const FeedbackPage = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [feedback, setFeedback] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setError('');

        if (!email || !feedback) {
            setError('Email and feedback fields are required.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/feedback/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, mobile, feedback }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit feedback.');
            }

            setMessage('Thank you for your feedback!');
            setEmail('');
            setMobile('');
            setFeedback('');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="feedback-container">
            <div className="feedback-card">
                <h1 className="feedback-title">Submit Feedback</h1>
                <p className="feedback-subtitle">We would love to hear your thoughts, suggestions, or concerns.</p>
                
                <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="input-group">
                        <label htmlFor="email">Email Address <span className="required">*</span></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="feedback">Your Feedback <span className="required">*</span></label>
                        <textarea
                            id="feedback"
                            rows="6"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-submit-feedback" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                </form>

                {message && <p className="feedback-success-message">{message}</p>}
                {error && <p className="feedback-error-message">{error}</p>}
            </div>
        </div>
    );
};

export default FeedbackPage; 