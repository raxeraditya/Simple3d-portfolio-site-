import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0.3 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className={`
            absolute 
            ${i === 0 ? 'top-1/4 -left-1/4' : i === 1 ? 'top-1/2 -right-1/4' : 'bottom-1/4 left-1/3'} 
            w-96 h-96 
            rounded-full 
            ${i === 0 ? 'bg-purple-300' : i === 1 ? 'bg-blue-300' : 'bg-pink-300'} 
            blur-3xl
          `} />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;