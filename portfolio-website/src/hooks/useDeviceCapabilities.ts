import { useState, useEffect } from 'react';

interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasWebGL: boolean;
  hasHighDPR: boolean;
  hasTouch: boolean;
  reducedMotion: boolean;
  performanceLevel: 'low' | 'medium' | 'high';
}

export const useDeviceCapabilities = (): DeviceCapabilities => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasWebGL: false,
    hasHighDPR: false,
    hasTouch: false,
    reducedMotion: false,
    performanceLevel: 'medium'
  });

  useEffect(() => {
    const checkCapabilities = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // WebGL detection
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const hasWebGL = !!gl;
      
      // High DPR detection
      const hasHighDPR = window.devicePixelRatio > 1;
      
      // Touch detection
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Performance level estimation
      let performanceLevel: 'low' | 'medium' | 'high' = 'medium';
      
      if (isMobile || !hasWebGL) {
        performanceLevel = 'low';
      } else if (hasHighDPR && isDesktop && hasWebGL) {
        // Additional checks for high-end devices
        const memory = (navigator as any).deviceMemory;
        const cores = navigator.hardwareConcurrency;
        
        if (memory >= 8 || cores >= 8) {
          performanceLevel = 'high';
        }
      }
      
      setCapabilities({
        isMobile,
        isTablet,
        isDesktop,
        hasWebGL,
        hasHighDPR,
        hasTouch,
        reducedMotion,
        performanceLevel
      });
    };

    checkCapabilities();
    
    // Re-check on resize
    window.addEventListener('resize', checkCapabilities);
    
    return () => {
      window.removeEventListener('resize', checkCapabilities);
    };
  }, []);

  return capabilities;
};