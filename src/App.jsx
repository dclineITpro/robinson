import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhyRobinsonPage from './pages/WhyRobinsonPage';
import VisionPage from './pages/VisionPage';
import DigitalThreadPage from './pages/DigitalThreadPage';
import AboutMePage from './pages/AboutMePage';

const RedirectRestorer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const redirect = sessionStorage.getItem('spa-redirect');
    if (redirect) {
      sessionStorage.removeItem('spa-redirect');
      // Only navigate if we're still at root after reload to avoid loops
      if (location.pathname === '/' || location.pathname === '/robinson/') {
        navigate(redirect.replace('/robinson', '') || '/', { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return null;
};

function App() {
  return (
    <Router basename="/robinson">
      <ScrollToTop />
      <RedirectRestorer />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-robinson" element={<WhyRobinsonPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/digital-thread" element={<DigitalThreadPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




