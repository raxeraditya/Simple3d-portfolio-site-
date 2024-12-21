import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'SQL', 'Git', 'AWS'
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg text-gray-600 mb-12"
          >
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating user-friendly applications. With several years of
              experience in the field, I've worked on various projects that have helped me
              develop a deep understanding of both frontend and backend development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-lg shadow-sm p-4 text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;