import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </a>
);