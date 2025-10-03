import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { techStack } from '../data/portfolio-data';
import { useMousePosition } from '../hooks/useMousePosition';
import TiltCard from './TiltCard';

const TechCard = ({ tech, index }: { tech: any; index: number }) => {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <TiltCard
        intensity={15}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
      >
        {/* Dynamic background gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${((mousePosition.normalizedX + 1) * 50)}% ${((mousePosition.normalizedY + 1) * 50)}%, #8B5CF6, #EC4899, transparent)`,
          }}
        />
        
        <div className="relative text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mb-4"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
              style={{
                filter: 'brightness(1) contrast(1)',
              }}
            />
          </motion.div>
          
          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {tech.name}
          </h4>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {tech.description}
          </p>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      </TiltCard>
    </motion.div>
  );
};

const TechSection = ({ title, technologies, sectionIcon }: { title: string; technologies: any[]; sectionIcon: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-3">
          <img src={sectionIcon} alt={title} className="w-8 h-8" />
          {title}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-16">
          <TechSection
            title="Frontend Development"
            technologies={techStack.frontend}
            sectionIcon="https://cdn.simpleicons.org/react/61DAFB"
          />
          
          <TechSection
            title="Backend Development"
            technologies={techStack.backend}
            sectionIcon="https://cdn.simpleicons.org/nodedotjs/339933"
          />
          
          <TechSection
            title="Tools & DevOps"
            technologies={techStack.tools}
            sectionIcon="https://cdn.simpleicons.org/docker/2496ED"
          />
        </div>

        {/* Interactive background element */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;