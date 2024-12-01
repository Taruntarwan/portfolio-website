import React from 'react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, icon, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);