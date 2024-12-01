import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SkillCard } from '../ui/SkillCard';
import { Code, Palette, Terminal } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'Data Science', icon: <Code className="w-6 h-6" />, description: ' Machine learning, CNN, TensorFlow, PyTorch, Computer Vision, OpenCV, RAG using HuggingFace Open source LLM model, LangChain, VectorDB(embedding), OpenAI api' },
    { name: 'DevOps', icon: <Terminal className="w-6 h-6" />, description: 'Kubernetes(K3S), Docker, Jenkins, Terraform, GitLabCI, Grafana, Prometheus, Shell script, Google Cloud Services' },
    { name: 'Backend Development', icon: <Terminal className="w-6 h-6" />, description: 'Python, Fastapi, Cherrypy, Mariadb(mysql), Couchdb, Redis, rabbitmq, celery' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQH518wtH-DfbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695456709277?e=1738195200&v=beta&t=vy5ZhJdTyVnV-PdHU_2ZcDisWwu-jcOq_oIbNIGpz28"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
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
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};