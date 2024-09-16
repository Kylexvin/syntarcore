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

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ProductsSection />
            <Footer />
          </>
        } />
        <Route path="/web-development" element={<WebDevDetailsPage />} />
        <Route path="/seo-services" element={<SEODetailsPage />} />
        <Route path="/graphic-design" element={<GraphicDesignDetailsPage />} />
        <Route path="/branding-solutions" element={<BrandingDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
