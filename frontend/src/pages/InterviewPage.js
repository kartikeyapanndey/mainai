import React, { useState, useRef, useEffect } from 'react';
import './InterviewPage.css'; // We'll create this for custom styles

const InterviewPage = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (questions.length > 0) {
      setProgress(((current + 1) / questions.length) * 100);
    }
  }, [current, questions]);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleResumeUpload = async () => {
    if (!resumeFile) {
      setError('Please select a resume file first.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('resume', resumeFile);

    try {
      const response = await fetch('http://localhost:5000/api/mock-interview/generate-questions', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate questions. Please try again.');
      }

      const data = await response.json();
      setQuestions(data.questions || []);
      setProgress(1 / (data.questions.length || 1) * 100);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setAnswers([...answers, { question: questions[current], answer: answer }]);
    setAnswer('');
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Last question answered
      setCurrent(current + 1);
      setProgress(100);
    }
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in your browser.');
      return;
    }
    setListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      setAnswer(event.results[0][0].transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const resetInterview = () => {
    setResumeFile(null);
    setQuestions([]);
    setCurrent(0);
    setAnswers([]);
    setAnswer('');
    setError('');
    setProgress(0);
  };

  if (questions.length > 0 && current < questions.length) {
    return (
      <div className="interview-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="interview-card">
          <div className="question-panel">
            <h2 className="question-title">Question {current + 1}</h2>
            <p className="question-text">{questions[current]}</p>
          </div>
          <div className="answer-panel">
            <textarea
              className="answer-textarea"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer here..."
            />
            <div className="controls">
              <button className="btn-speak" onClick={listening ? stopListening : startListening}>
                {listening ? '🛑 Stop' : '🎤 Speak'}
              </button>
              <button className="btn-next" onClick={handleNext} disabled={!answer.trim()}>
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length > 0 && current >= questions.length) {
    return (
      <div className="summary-container">
        <div className="summary-card">
          <h1 className="summary-title">Interview Complete!</h1>
          <p className="summary-subtitle">Well done! Here's a summary of your responses.</p>
          <div className="answers-list">
            {answers.map((item, idx) => (
              <div key={idx} className="answer-item">
                <h5>{item.question}</h5>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
          <button className="btn-restart" onClick={resetInterview}>
            Start a New Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h1 className="upload-title">AI Mock Interview</h1>
        <p className="upload-subtitle">Upload your resume to begin a tailored interview experience.</p>
        <div className="upload-box">
          <input type="file" id="resume-upload" accept="application/pdf" onChange={handleFileChange} className="upload-input" />
          <label htmlFor="resume-upload" className="upload-label">
            {resumeFile ? resumeFile.name : 'Choose a PDF file'}
          </label>
        </div>
        <button className="btn-start" onClick={handleResumeUpload} disabled={isLoading || !resumeFile}>
          {isLoading ? 'Analyzing...' : 'Start Interview'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default InterviewPage; 