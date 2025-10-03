import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { Code, Zap, Globe, Cpu } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: {
  icon: any;
  title: string;
  description: string;
  delay: number;
}) => {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.normalizedY * 2}deg) rotateY(${mousePosition.normalizedX * 2}deg)`,
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${((mousePosition.normalizedX + 1) * 50)}% ${((mousePosition.normalizedY + 1) * 50)}%, #8B5CF6, #EC4899, transparent)`,
        }}
      />
    </motion.div>
  );
};

const SplitScreen = () => {
  const mousePosition = useMousePosition();

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows industry best practices."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user experiences across all devices."
    },
    {
      icon: Globe,
      title: "Modern Tech",
      description: "Leveraging the latest technologies and frameworks to build cutting-edge solutions."
    },
    {
      icon: Cpu,
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions and algorithmic thinking."
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)`,
        }}
      />
      
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.h2
                  className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  style={{
                    textShadow: `0 0 30px rgba(139, 92, 246, ${0.5 + mousePosition.normalizedX * 0.3})`,
                  }}
                >
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  I'm passionate about creating innovative solutions that bridge the gap between 
                  complex technology and elegant user experiences. From concept to deployment, 
                  I build applications that make a difference.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <span className="text-white font-medium">3+ Years Experience</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <span className="text-white font-medium">20+ Projects</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <span className="text-white font-medium">Full-Stack Developer</span>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.normalizedY * 3}deg) rotateY(${mousePosition.normalizedX * 3}deg)`,
                }}
              >
                <span className="relative z-10">Let's Build Something Amazing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Feature Grid */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider line with animation */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform -translate-x-1/2 hidden lg:block">
        <motion.div
          className="w-2 h-2 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, '100vh'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default SplitScreen;