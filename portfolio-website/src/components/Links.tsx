import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { externalLinks } from '../data/portfolio-data';

const LinkCard = ({ link, index }: { link: any; index: number }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotateX: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`block p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group ${link.color}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl"
          >
            {link.icon}
          </motion.div>
          <motion.div
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="w-6 h-6" />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-white/90 transition-colors">
          {link.name}
        </h3>
        
        <p className="text-white/80 group-hover:text-white/90 transition-colors leading-relaxed">
          {link.description}
        </p>
        
        {/* Hover effect shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
      </div>
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
    </motion.a>
  );
};

const Links = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="links" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Connect With Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Find me on various platforms where I share my work, solve problems, and connect with the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {externalLinks.map((link, index) => (
            <LinkCard key={link.name} link={link} index={index} />
          ))}
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🎯 Competitive Programming Stats
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I actively participate in competitive programming contests and enjoy solving algorithmic challenges
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="font-bold text-purple-600 dark:text-purple-400 text-lg">500+</div>
                <div className="text-gray-500 dark:text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-purple-600 dark:text-purple-400 text-lg">Expert</div>
                <div className="text-gray-500 dark:text-gray-400">AtCoder Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-purple-600 dark:text-purple-400 text-lg">50+</div>
                <div className="text-gray-500 dark:text-gray-400">Contests Participated</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Links;