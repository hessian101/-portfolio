import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, skills } from '../data/portfolio-data';

const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
          <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skillList, categoryIcon }: { title: string; skillList: any[]; categoryIcon: string }) => {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        <img src={categoryIcon} alt={title} className="w-6 h-6" />
        {title}
      </h4>
      <div className="space-y-3">
        {skillList.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    { title: 'Frontend', skills: skills.filter(s => s.category === 'frontend'), categoryIcon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { title: 'Backend', skills: skills.filter(s => s.category === 'backend'), categoryIcon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { title: 'Languages', skills: skills.filter(s => s.category === 'languages'), categoryIcon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { title: 'Tools', skills: skills.filter(s => s.category === 'tools'), categoryIcon: 'https://cdn.simpleicons.org/git/F05032' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse" />
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                {personalInfo.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
                {personalInfo.bio}
              </p>
              
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  📍 {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  ✅ {personalInfo.availability}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <SkillCategory
                      title={category.title}
                      skillList={category.skills}
                      categoryIcon={category.categoryIcon}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;