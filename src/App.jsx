import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Concept from './components/Concept';
import Amenities from './components/Amenities';
import Sustainability from './components/Sustainability';
import USP from './components/USP';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import CTA from './components/CTA';
import Footer from './components/Footer';
import EnquirySidebar from './components/EnquirySidebar';
import SocialSidebar from './components/SocialSidebar';
import MobileActionFooter from './components/MobileActionFooter';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Scroll management component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLanding = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Highlights />
      <About />
      <Concept />
      <Amenities />
      <Sustainability />
      <FloorPlans />
      <Location />
      <USP />
      <CTA />
    </main>
    <Footer />
    <EnquirySidebar />
    <SocialSidebar />
    <MobileActionFooter />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
