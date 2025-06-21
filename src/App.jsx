import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import PageLoader from './components/PageLoader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageCarousel from './components/ImageCarousel';
import TokenomicsSection from './components/TokenomicsSection';
import CommunitySection from './components/CommunitySection';
import BuyGuideSection from './components/BuyGuideSection';
import RoadmapSection from './components/RoadmapSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return <PageLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ImageCarousel />
        <TokenomicsSection />
        <CommunitySection />
        <BuyGuideSection />
        <RoadmapSection />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
