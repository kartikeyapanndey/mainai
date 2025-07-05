import React, { useState } from 'react';
import './PlagiarismCheckerPage.css'; // New CSS file for styling

const PlagiarismCheckerPage = () => {
    const [documentFile, setDocumentFile] = useState(null);
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setDocumentFile(e.target.files[0]);
        setResult(null);
    };

    const handleCheckPlagiarism = async () => {
        if (!documentFile) {
            setError('Please upload a document first.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResult(null);

        const formData = new FormData();
        formData.append('document', documentFile);

        try {
            const response = await fetch('http://localhost:5000/api/plagiarism/check', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to check for plagiarism.');
            }

            const data = await response.json();
            setResult(data);

        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="plag-container">
            <div className="plag-card">
                <h1 className="plag-title">Plagiarism Checker</h1>
                <p className="plag-subtitle">Upload your document to check for potential plagiarism against online sources.</p>

                <div className="plag-upload-box">
                    <input type="file" id="doc-upload" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} className="plag-upload-input" />
                    <label htmlFor="doc-upload" className="plag-upload-label">
                        {documentFile ? `📄 ${documentFile.name}` : '📤 Upload Document'}
                    </label>
                </div>

                <button className="btn-plag-check" onClick={handleCheckPlagiarism} disabled={isLoading || !documentFile}>
                    {isLoading ? 'Checking...' : 'Check Plagiarism'}
                </button>

                {error && <p className="plag-error-message">{error}</p>}

                {result && (
                    <div className="plag-result-box">
                        <h2 className="result-title">Analysis Complete</h2>
                        <div className="score-display">
                            <span className="score-value">{result.plagiarismPercentage.toFixed(2)}%</span>
                            <span className="score-label">Plagiarism Detected</span>
                        </div>
                        {result.details && result.details.length > 0 ? (
                            <div className="details-section">
                                <h4>Matched Sources:</h4>
                                <ul>
                                    {result.details.map((detail, index) => (
                                        <li key={index}>
                                            <a href={detail.url} target="_blank" rel="noopener noreferrer">{detail.url}</a> - {detail.matchPercentage.toFixed(2)}% match
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="no-matches">No significant matches found. The document appears to be original.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlagiarismCheckerPage; 