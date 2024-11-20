import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import ThemeProvider from './contexts/ThemeContext';
import './App.css';

// Lazy-loaded components
const LandingPage = lazy(() => import('./components/LandingPage'));
const Pricing = lazy(() => import('./components/Pricing'));
const ChatWindow = lazy(() => import('./components/ChatWindow'));
const Contact = lazy(() => import('./components/Contact'));
const Team = lazy(() => import('./components/Team'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <DarkModeToggle />
          <main>
            <div className="content-wrapper">
              <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/chat" element={<ChatWindow />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/team" element={<Team />} />
                </Routes>
              </Suspense>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
