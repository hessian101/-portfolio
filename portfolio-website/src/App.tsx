import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Links from './components/Links';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import MouseTracker from './components/MouseTracker';
import HorizontalScroll from './components/HorizontalScroll';
import SplitScreen from './components/SplitScreen';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import GSAPAnimations from './components/GSAPAnimations';
import { useDeviceCapabilities } from './hooks/useDeviceCapabilities';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const deviceCapabilities = useDeviceCapabilities();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Custom Cursor (only on desktop with WebGL support) */}
      {!isLoading && deviceCapabilities.isDesktop && deviceCapabilities.hasWebGL && !deviceCapabilities.reducedMotion && (
        <CustomCursor />
      )}
      
      <MouseTracker>
        <GSAPAnimations>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <DarkModeToggle />
            
            {/* Add GSAP data attributes for animations */}
            <div data-gsap="reveal">
              <Hero />
            </div>
            
            <div data-gsap="scale">
              <SplitScreen />
            </div>
            
            <div data-gsap="stagger">
              <About />
            </div>
            
            <div data-gsap="reveal">
              <TechStack />
            </div>
            
            <div data-parallax="bg">
              <HorizontalScroll />
            </div>
            
            <div data-gsap="scale">
              <Projects />
            </div>
            
            <div data-gsap="stagger">
              <Links />
            </div>
            
            <div data-gsap="reveal">
              <Contact />
            </div>
            
            {/* Footer */}
            <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-300">
              <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400">
                  © 2024 Your Name. Built with React, TypeScript, Three.js, GSAP, and Tailwind CSS.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Optimized for {deviceCapabilities.performanceLevel}-performance devices
                </p>
              </div>
            </footer>
          </div>
        </GSAPAnimations>
      </MouseTracker>
    </>
  );
}

export default App;