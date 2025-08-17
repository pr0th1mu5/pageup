import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import all sections
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InsightsSection from '@/components/InsightsSection';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    // Add smooth scrolling to the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <InsightsSection />
        <TeamSection />
        <ServicesSection />
        <FAQSection />
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;