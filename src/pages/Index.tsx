
import React, { useEffect } from 'react';
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignupForm from '@/components/EmailSignupForm';
import FeatureCard from '@/components/FeatureCard';
import SocialLinks from '@/components/SocialLinks';
import MobileBanner from '@/components/MobileBanner';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Index: React.FC = () => {
  // Set launch date to 15 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 15);

  // Features list with updated descriptions
  const features = [
    {
      icon: "🎯",
      title: "Smart Roadmaps",
      description: "No more guesswork. Get personalized learning plans that adjust daily based on your progress and goals."
    },
    {
      icon: "📘",
      title: "Exam & Career Modes",
      description: "Choose how you learn – whether you're prepping for an exam or building long-term skills. Lurniq adapts to your goals, timeline, and syllabus."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto flex justify-center">
          <Logo size="medium" />
        </div>
      </header>

      {/* Hero Section with enhanced background */}
      <section className="container mx-auto py-12 px-4 relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full opacity-20">
            {/* Abstract wave pattern - purely CSS */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-r from-yellow-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
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
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 border-t border-b border-blue-100">
        <div className="container mx-auto">
          <CountdownTimer endDate={launchDate} />
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold inline-block relative">
            <span className="text-primary">Sneak Peek 👀</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
          </h2>
          <p className="text-gray-600 mt-2">Here's a glimpse of what you'll experience with Lurniq AI</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-3 rounded-xl shadow-md">
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-lg font-semibold text-primary mb-2">Dashboard Preview</h3>
              <p className="text-sm text-gray-500 mb-4">Coming soon - a smarter way to learn</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="secondary">See more details</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Personalized AI Learning</h4>
                    <p className="text-xs">Our AI analyzes your learning patterns to create the perfect study path just for you.</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with improved cards */}
      <section className="container mx-auto py-16 px-4 bg-gradient-to-br from-white to-blue-50 rounded-3xl mx-4 md:mx-8 lg:mx-auto">
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
            <a href="#" className="text-sm text-primary hover:underline hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-primary hover:underline hover:text-secondary transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Mobile Banner */}
      <MobileBanner />
    </div>
  );
};

export default Index;
