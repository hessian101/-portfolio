import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import { useMousePosition } from '../hooks/useMousePosition';
import OptimizedThreeJSHero from './OptimizedThreeJS';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

const InteractiveButton = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}: { 
  children: React.ReactNode; 
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}) => {
  const mousePosition = useMousePosition();

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-300 group ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-2xl'
          : 'border-2 border-white text-white hover:bg-white hover:text-purple-600'
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.normalizedY * 5}deg) rotateY(${mousePosition.normalizedX * 5}deg)`,
      }}
    >
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${((mousePosition.normalizedX + 1) * 50)}% ${((mousePosition.normalizedY + 1) * 50)}%, rgba(255,255,255,0.2) 0%, transparent 70%)`,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.button>
  );
};

const Hero = () => {
  const mousePosition = useMousePosition();
  const deviceCapabilities = useDeviceCapabilities();

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Three.js Background - Only on devices with WebGL support */}
      {deviceCapabilities.hasWebGL && !deviceCapabilities.reducedMotion && (
        <OptimizedThreeJSHero />
      )}
      
      {/* Fallback gradient background for low-end devices */}
      {(!deviceCapabilities.hasWebGL || deviceCapabilities.reducedMotion) && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20" />
      )}
      
      {/* Dynamic overlay that responds to mouse */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.2) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Avatar with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.normalizedY * 10}deg) rotateY(${mousePosition.normalizedX * 10}deg)`,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse" />
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-40 h-40 mx-auto rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Name with dynamic glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.normalizedY * 2}deg)`,
              textShadow: `0 0 50px rgba(139, 92, 246, ${0.5 + mousePosition.normalizedX * 0.3})`,
            }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-2xl md:text-3xl text-purple-200 font-light max-w-4xl mx-auto mb-8"
          >
            <span className="relative">
              {personalInfo.title}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-pink-400"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <InteractiveButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </InteractiveButton>
            <InteractiveButton
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </InteractiveButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Creative scroll indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center text-white/60 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.normalizedY * 5}deg)`,
          }}
        >
          <span className="text-sm mb-3 font-light group-hover:text-white/80 transition-colors">
            Discover More
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full blur-md opacity-50" />
            <ChevronDown className="relative w-8 h-8 group-hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;