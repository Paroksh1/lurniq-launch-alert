
import React from 'react';
import { Brain, Target, Book, FlaskConical } from "lucide-react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  // Map icons based on title for better visual appeal
  const getIcon = () => {
    switch (icon) {
      case "🎯":
        return <Target className="w-8 h-8 text-secondary" />;
      case "📘":
        return <Book className="w-8 h-8 text-secondary" />;
      case "🧠":
        return <Brain className="w-8 h-8 text-secondary" />;
      case "💬":
        return <FlaskConical className="w-8 h-8 text-secondary" />;
      default:
        return <div className="text-3xl">{icon}</div>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:border-secondary border border-gray-100 group">
      <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
