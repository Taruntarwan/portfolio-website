import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { SocialLink } from '../ui/SocialLink';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
        >
          Hi, I'm <span className="text-purple-600">Tarun Tarwan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          Data Science & DevOps/MLOps Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <SocialLink href="https://github.com/taruntarwan" icon={<Github className="w-6 h-6" />} />
          <SocialLink href="https://www.linkedin.com/in/taruntarwan/" icon={<Linkedin className="w-6 h-6" />} />
          <SocialLink href="mailto:taruntarwan98@gmail.com" icon={<Mail className="w-6 h-6" />} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-purple-600 cursor-pointer" />
        </motion.div>
      </div>
    </section>
  );
};