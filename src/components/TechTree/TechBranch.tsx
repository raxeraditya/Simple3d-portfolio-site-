import React from 'react';
import { motion } from 'framer-motion';

interface TechBranchProps {
  title: string;
  skills: string[];
  delay: number;
}

const TechBranch = ({ title, skills, delay }: TechBranchProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative mb-8"
    >
      <div className="flex items-center mb-4">
        <div className="w-4 h-4 rounded-full bg-blue-500" />
        <div className="ml-4 text-xl font-bold text-gray-900 dark:text-white">{title}</div>
      </div>
      <div className="ml-2 pl-8 border-l-2 border-blue-500">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="mb-4 last:mb-0"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="ml-4 text-gray-700 dark:text-gray-300">{skill}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechBranch;