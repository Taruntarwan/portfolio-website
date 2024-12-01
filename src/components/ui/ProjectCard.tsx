import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

export const ProjectCard: React.FC<Project> = ({ title, description, image, tags, github, live }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
        >
          <ExternalLink className="w-6 h-6" />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);