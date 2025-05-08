
import React, { useEffect } from 'react';
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignupForm from '@/components/EmailSignupForm';
import FeatureCard from '@/components/FeatureCard';
import SocialLinks from '@/components/SocialLinks';
import MobileBanner from '@/components/MobileBanner';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { toast } from "@/components/ui/sonner";
import { BookOpen, Target, Brain, FileText } from "lucide-react";

const Index: React.FC = () => {
  // Set launch date to 15 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 15);

  // Show toast on page scroll
  useEffect(() => {
    const handleScroll = () => {
      // Only show toast if scrolled more than 300px
      if (window.scrollY > 300) {
        toast("🔥 6 new users just joined! Don't miss early access.", {
          duration: 4000,
          position: "bottom-right",
          className: "bg-white border-l-4 border-primary"
        });
        // Remove scroll listener after showing toast once
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Features list with revised descriptions
  const features = [
    {
      icon: "🎯",
      title: "Smart Roadmaps",
      description: "Your learning, mapped out. Daily, personalized roadmaps — no guesswork, no burnout."
    },
    {
      icon: "📘",
      title: "Exam & Career Modes",
      description: "Exam or skills? You choose. Tailored experiences whether you're prepping for tests or building skills for your future."
    },
    {
      icon: "🧠",
      title: "AI Daily Sessions",
      description: "Smarter study, every day. Daily micro-sessions based on your progress and focus areas."
    },
    {
      icon: "💬",
      title: "Flashcards & Practice",
      description: "Master topics quickly. Quiz yourself with smart flashcards and real-time concept checks."
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

      {/* Hero Section with animated gradient background */}
      <section className="container mx-auto py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full opacity-20">
            {/* Animated gradient background */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-r from-yellow-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary leading-tight">
            Learning just got smarter — with Lurniq AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The only AI study companion you'll ever need. Personalized roadmaps, daily learning goals, and real support.
          </p>
          <div className="mb-4">
            <EmailSignupForm />
          </div>
          <p className="text-sm text-primary font-medium mb-6">Join 300+ learners already signed up!</p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4 border-t border-b border-blue-100">
        <div className="container mx-auto">
          <CountdownTimer endDate={launchDate} />
        </div>
      </section>

      {/* Sneak Peek Section with improved visuals */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold inline-block relative">
            <span className="text-primary">Sneak Peek 👀</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
          </h2>
          <p className="text-gray-600 mt-2">Here's a glimpse of what you'll experience with Lurniq AI</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-3 rounded-xl shadow-md overflow-hidden relative group">
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden border border-transparent transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-lg">
            {/* Blurred dashboard preview with overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
            <div className="text-center p-8 relative z-10">
              <h3 className="text-lg font-semibold text-primary mb-2">Dashboard Preview</h3>
              <p className="text-sm text-gray-500 mb-4">Coming soon - a smarter way to learn</p>
              <div className="py-6">
                <div className="w-32 h-32 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-secondary animate-float" />
                </div>
                <p className="mt-4 text-xs text-blue-500">Your AI learning companion awaits</p>
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 right-0 text-center text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-y-0 translate-y-2">
              Full dashboard reveal on launch day
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

      {/* Social Links Section with improved styles */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-primary mb-6">Follow Our Journey</h2>
          <SocialLinks />
        </div>
      </section>

      {/* Footer with reduced whitespace */}
      <footer className="bg-gray-100 py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-3">Made with 💙 by Team Lurniq</p>
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
