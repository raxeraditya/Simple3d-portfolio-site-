import React from 'react';
import { motion } from 'framer-motion';
import TechBranch from './TechBranch';

const techCategories = [
  {
    title: 'Backend Development',
    skills: ['Java/Spring Boot', 'Node.js/Express', 'NestJS', 'Python/Django'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Database & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Linux', 'Git', 'CI/CD', 'Kubernetes'],
  },
];

const InteractiveTechTree = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        {techCategories.map((category, index) => (
          <TechBranch
            key={category.title}
            title={category.title}
            skills={category.skills}
            delay={index * 0.3}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveTechTree;