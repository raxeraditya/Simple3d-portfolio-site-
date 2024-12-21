import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import AnimatedText from '../components/AnimatedText';
import BackgroundAnimation from '../components/BackgroundAnimation';
import InteractiveSphere from '../components/3D/InteractiveSphere';
import InteractiveTechTree from '../components/TechTree/InteractiveTechTree';

const Home = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen pt-16">
      <BackgroundAnimation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <InteractiveSphere />

          <motion.div className="mb-6">
            <AnimatedText
              text="Hi, I'm"
              className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-2"
            />
            <AnimatedText
              text="Aditya Kushwah"
              className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-transparent bg-clip-text"
            />
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Full Stack Developer specializing in Java/Spring Boot and MERN stack development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <SocialLinks />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              <FileDown size={20} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          <InteractiveTechTree />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;