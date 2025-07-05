import React, { useState } from 'react';
import axios from 'axios';

const InterviewInterface = () => {
  const [interviewState, setInterviewState] = useState({
    isStarted: false,
    currentQuestion: '',
    answer: '',
    feedback: '',
    role: '',
    experience: '',
    skills: []
  });

  const startInterview = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/mock-interview/start', {
        role: interviewState.role,
        experience: interviewState.experience,
        skills: interviewState.skills
      });
      setInterviewState(prev => ({
        ...prev,
        isStarted: true,
        currentQuestion: response.data.question
      }));
    } catch (error) {
      console.error('Error starting interview:', error);
      alert('Failed to start interview. Please try again.');
    }
  };

  const submitAnswer = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/mock-interview/process-answer', {
        question: interviewState.currentQuestion,
        answer: interviewState.answer
      });
      setInterviewState(prev => ({
        ...prev,
        feedback: response.data.feedback,
        answer: ''
      }));
    } catch (error) {
      console.error('Error processing answer:', error);
      alert('Failed to process answer. Please try again.');
    }
  };

  if (!interviewState.isStarted) {
    return (
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img">
            <img className="img-fluid" src="/ai-human.jpg" alt="Interview" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Start Interview</div>
          <h1 className="mb-4">Prepare for Your Interview</h1>
          <div className="form-group mb-3">
            <label>Role/Position</label>
            <input 
              type="text" 
              className="form-control" 
              value={interviewState.role}
              onChange={(e) => setInterviewState(prev => ({...prev, role: e.target.value}))}
              placeholder="e.g. Frontend Developer"
            />
          </div>
          <div className="form-group mb-3">
            <label>Years of Experience</label>
            <input 
              type="number" 
              className="form-control" 
              value={interviewState.experience}
              onChange={(e) => setInterviewState(prev => ({...prev, experience: e.target.value}))}
              placeholder="e.g. 2"
            />
          </div>
          <div className="form-group mb-3">
            <label>Skills (comma separated)</label>
            <input 
              type="text" 
              className="form-control" 
              onChange={(e) => setInterviewState(prev => ({...prev, skills: e.target.value.split(',').map(s => s.trim())}))}
              placeholder="e.g. React, JavaScript, Node.js"
            />
          </div>
          <button 
            className="btn btn-primary rounded-pill px-4"
            onClick={startInterview}
            disabled={!interviewState.role || !interviewState.experience}
          >
            Start Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Question:</h5>
            <p className="card-text">{interviewState.currentQuestion}</p>
          </div>
        </div>
        <div className="form-group mb-3">
          <label>Your Answer:</label>
          <textarea 
            className="form-control" 
            rows="5"
            value={interviewState.answer}
            onChange={(e) => setInterviewState(prev => ({...prev, answer: e.target.value}))}
          ></textarea>
        </div>
        <button 
          className="btn btn-primary"
          onClick={submitAnswer}
          disabled={!interviewState.answer}
        >
          Submit Answer
        </button>
        {interviewState.feedback && (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Feedback:</h5>
              <p className="card-text">{interviewState.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewInterface; 