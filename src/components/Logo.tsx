
import React from 'react';

type LogoProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const Logo: React.FC<LogoProps> = ({ className = "", size = 'medium' }) => {
  const sizes = {
    small: "h-8",
    medium: "h-16",
    large: "h-24"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`text-center ${sizes[size]}`}>
        <span className="text-primary font-bold text-2xl md:text-4xl">Lurniq</span>
        <span className="text-secondary font-bold text-2xl md:text-4xl">AI</span>
        <div className="flex items-center justify-center mt-1">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse-soft mr-1"></div>
          <p className="text-xs text-primary">Your AI Study Companion</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
