import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  {
    name: 'Java/Spring Boot',
    level: 90,
    description: 'Expert in building enterprise-grade applications with Spring Boot, implementing RESTful APIs, microservices, and handling complex business logic with clean architecture principles.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop'
  },
  {
    name: 'MERN Stack',
    level: 88,
    description: 'Proficient in full-stack JavaScript development using MongoDB, Express.js, React, and Node.js. Experienced in building scalable web applications with modern architecture patterns.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
  },
  {
    name: 'Next.js/Nest.js',
    level: 85,
    description: 'Skilled in server-side rendering and API development using Next.js for frontend and Nest.js for backend, creating performant and maintainable applications.',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=300&h=200&fit=crop'
  },
  {
    name: 'PostgreSQL',
    level: 85,
    description: 'Advanced knowledge of database design, optimization, and management using PostgreSQL. Experienced in handling complex queries, transactions, and data modeling.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop'
  },
  {
    name: 'Python/Django',
    level: 82,
    description: 'Proficient in Python development with Django framework, building robust web applications with emphasis on security and scalability.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=200&fit=crop'
  },
  {
    name: 'Docker',
    level: 85,
    description: 'Expert in containerization using Docker, creating efficient deployment workflows and managing containerized applications in production environments.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=300&h=200&fit=crop'
  },
  {
    name: 'AWS',
    level: 83,
    description: 'Experienced in cloud infrastructure management using AWS services including EC2, S3, Lambda, and ECS. Skilled in implementing serverless architectures.',
    image: 'https://images.unsplash.com/photo-1549605659-32d82da3a059?w=300&h=200&fit=crop'
  },
  {
    name: 'Linux',
    level: 88,
    description: 'Strong command of Linux systems administration, shell scripting, and deployment automation. Experienced in managing production servers and DevOps practices.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&h=200&fit=crop'
  }
];

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">
        Technical Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-48">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {tech.name}
                </h3>
              </div>
              
              <AnimatePresence>
                {selectedTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4"
                  >
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {tech.description}
                    </p>
                    <div className="mt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium dark:text-white">Proficiency</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1 }}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;