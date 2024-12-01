import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Autometed  system using Face Recognition',
      description: 'A full-featured for Attandance managerment system absence of human interaction.',
      image: 'https://machinelearningprojects.net/wp-content/uploads/2023/03/Face-Recognition-based-Attendance-System.png.avif',
      tags: ['Django', 'OpenCV', 'HTML,CSS'],
      github: 'https://github.com/Taruntarwan/Autometed-Attended-system-using-face-detection',
      live: 'https://example.com',
    },
    {
      title: 'Stock Web App',
      description: 'View stocks price and create watch list and portfolio of your favourite stocks.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUL1hlIg5Mr4sOBLmq3i0d18tLZz6b44ogMIHQLUdrEXiSZzsARCBGBnxNGnftkCFLRrs&usqp=CAU',
      tags: ['Django', 'JavaScript', 'Tailwind'],
      github: 'https://github.com/Taruntarwan/Stocks-web-app-using-django',
      live: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with animations and responsive design',
      image: 'https://source.unsplash.com/random/800x600?portfolio',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">
            A collection of my recent work and personal projects
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};