import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import WebDevDetailsPage from './components/WebDevDetailsPage';
import SEODetailsPage from './components/SEODetailsPage';
import GraphicDesignDetailsPage from './components/GraphicDesignDetailsPage';
import BrandingDetailsPage from './components/BrandingDetailsPage';
import ContactUs from './components/ContactUs'; 
import ScrollToTop from './components/ScrollToTop'; 
import AboutUs from './components/AboutUs';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className="pt-[70px]"> {/* Adjust this value based on your navbar height */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductsSection />
              <ContactUs />
              <Footer />
            </>
          } />
          <Route path="/web-development" element={<WebDevDetailsPage />} />
          <Route path="/seo-services" element={<SEODetailsPage />} />
          <Route path="/graphic-design" element={<GraphicDesignDetailsPage />} />
          <Route path="/branding-solutions" element={<BrandingDetailsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cases" element={<CaseStudies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
