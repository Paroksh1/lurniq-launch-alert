
import React, { useState, useEffect } from 'react';
import EmailSignupForm from './EmailSignupForm';

const MobileBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isSmallScreen) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-transform duration-300 z-50 p-3 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-2">
          <p className="text-sm font-medium text-primary">Launching in 15 days — Get notified!</p>
        </div>
        <EmailSignupForm variant="compact" />
      </div>
    </div>
  );
};

export default MobileBanner;
