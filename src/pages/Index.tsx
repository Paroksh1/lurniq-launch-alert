
import React, { useEffect } from 'react';
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignupForm from '@/components/EmailSignupForm';
import FeatureCard from '@/components/FeatureCard';
import SocialLinks from '@/components/SocialLinks';
import MobileBanner from '@/components/MobileBanner';

const Index: React.FC = () => {
  // Set launch date to 15 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 15);

  // Features list
  const features = [
    {
      icon: "🎯",
      title: "Smart Roadmaps",
      description: "Personalized learning paths based on your goals and progress."
    },
    {
      icon: "📘",
      title: "Career & Exam Modes",
      description: "Specialized preparation for job interviews or certification exams."
    },
    {
      icon: "🧠",
      title: "AI Daily Sessions",
      description: "Adaptive learning sessions that focus on what you need most."
    },
    {
      icon: "💬",
      title: "Flashcards & Practice",
      description: "Interactive flashcards and practice quizzes to reinforce your knowledge."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex justify-center">
          <Logo size="medium" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary leading-tight">
            Learning just got smarter — with Lurniq AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The only AI study companion you'll ever need. Personalized roadmaps, daily learning goals, and real support.
          </p>
          <div className="mb-8">
            <EmailSignupForm />
          </div>
          <p className="text-sm text-primary font-medium">Join 300+ learners already signed up!</p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
        <div className="container mx-auto">
          <CountdownTimer endDate={launchDate} />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary">
          Transform Your Learning Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* Social Links Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-primary mb-6">Follow Our Journey</h2>
          <SocialLinks />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-4">Made with 💙 by Team Lurniq</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-sm text-primary hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm text-primary hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Mobile Banner */}
      <MobileBanner />
    </div>
  );
};

export default Index;
