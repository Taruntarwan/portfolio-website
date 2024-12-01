import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Code, Palette, Terminal } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code className="w-6 h-6" />, description: 'React, Vue, TypeScript' },
    { name: 'UI/UX Design', icon: <Palette className="w-6 h-6" />, description: 'Figma, Adobe XD' },
    { name: 'Backend Development', icon: <Terminal className="w-6 h-6" />, description: 'Node.js, Python, SQL' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://source.unsplash.com/random/400x400?portrait"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-lg text-gray-600 mb-6">
                I've worked with DevOps tools to bring microservices including data science and ML project to end users and have almost
4 years of expertise in the field of Data science specific in healthcare and OCR domain and Python back-end programming.

              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, I am exploring new technologis like MLOPS and Cloud Computing etc.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Senior Developer @ Company {item}</h3>
                <p className="text-gray-500 mb-4">2020 - Present</p>
                <p className="text-gray-600">
                  Led development of multiple high-impact projects, improving performance and user experience.
                  Mentored junior developers and implemented best practices across the team.
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};