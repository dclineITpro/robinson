import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WhyRobinsonPage from './pages/WhyRobinsonPage';
import VisionPage from './pages/VisionPage';
import DigitalThreadPage from './pages/DigitalThreadPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-robinson" element={<WhyRobinsonPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/digital-thread" element={<DigitalThreadPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




