import { Link } from 'react-router-dom';
import './LandingPage.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/react.svg';
import aiTutorImage from '../assets/ai-tutor.svg';

function LandingPage() {
  return (
    <section className="landing">
      <div className="landing-content">
        <h2>Welcome to <span className="highlight">AI Tutor</span></h2>
        <p>Your personal AI assistant for STAT 4300, designed to enhance your learning experience with interactive feedback and resources.</p>
        <div className="cta-buttons">
          <Link to="/chat" className="cta-button" aria-label="Get Started with AI Tutor">
            Get Started
          </Link>
          <Link to="/pricing" className="cta-button outline" aria-label="View Pricing Plans">
            Our Plans
          </Link>
        </div>
      </div>
      <div className="landing-image">
        <img src={aiTutorImage} alt="AI Tutor Illustration" className="logo-animation" loading="lazy" />
      </div>
    </section>
  );
}

export default LandingPage; 