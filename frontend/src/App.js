import './assets/style.css';
import './assets/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import SearchModal from './components/SearchModal';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResumePage from './pages/ResumePage';
import InterviewPage from './pages/InterviewPage';
import ATSPage from './pages/ATSPage';
import PlagiarismCheckerPage from './pages/PlagiarismCheckerPage';
import FeedbackPage from './pages/FeedbackPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Newsletter />
            <Testimonials />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/ats" element={<ATSPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/plagiarism-checker" element={<PlagiarismCheckerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
      <SearchModal />
    </div>
  );
}

export default App;
