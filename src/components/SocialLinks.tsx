import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: 'https://github.com/raxeraditya',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={24} />,
      url: 'https://likedin.com/in/raxeraditya1',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter size={24} />,
      url: 'https://twitter.com',
      label: 'Twitter',
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;