
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type EmailSignupFormProps = {
  variant?: 'default' | 'compact';
  className?: string;
};

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ variant = 'default', className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace with your Formspree form ID
      const formId = 'xrgwdwkb';
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "You'll be notified when we launch. Thank you!",
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center p-4 bg-green-50 rounded-lg ${className}`}>
        <p className="text-green-700">
          <span className="font-bold">Thank you for signing up!</span> We'll notify you when we launch.
        </p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex items-center space-x-2 ${className}`}>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9"
          required
        />
        <Button 
          type="submit" 
          variant="default"
          size="sm"
          disabled={isSubmitting}
          className="bg-secondary hover:bg-secondary-hover"
        >
          {isSubmitting ? "..." : "Notify"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email to get early access"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 px-4"
          required
        />
        <Button 
          type="submit" 
          size="lg"
          disabled={isSubmitting}
          className="h-12 px-6 bg-secondary hover:bg-secondary-hover transition-all duration-200 font-medium"
        >
          {isSubmitting ? "Submitting..." : "🚀 Notify Me"}
        </Button>
      </div>
    </form>
  );
};

export default EmailSignupForm;
