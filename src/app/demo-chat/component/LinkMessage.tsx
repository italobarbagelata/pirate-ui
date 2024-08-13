import React from 'react';

interface LinkMessageProps {
  link: string;
}

const LinkMessage: React.FC<LinkMessageProps> = ({ link }) => {
  return (
    <div className="min-w-[100px] text-sm font-medium">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        {link}
      </a>
    </div>
  );
};

export default LinkMessage;