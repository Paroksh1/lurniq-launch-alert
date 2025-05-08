
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface EmailSignupFormProps {
  variant?: "default" | "compact";
}

interface StoredEmail {
  email: string;
  timestamp: string;
}

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ variant = "default" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Store all emails
  const [allEmails, setAllEmails] = useState<StoredEmail[]>([]);
  
  // Load stored emails on component mount
  useEffect(() => {
    const storedEmails = localStorage.getItem('subscribedEmails');
    if (storedEmails) {
      setAllEmails(JSON.parse(storedEmails));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send to Formspree as before
      const response = await fetch("https://formspree.io/f/xrgwdwkb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Store the email locally
        const newEmail: StoredEmail = {
          email: email,
          timestamp: new Date().toISOString()
        };
        
        const updatedEmails = [...allEmails, newEmail];
        setAllEmails(updatedEmails);
        localStorage.setItem('subscribedEmails', JSON.stringify(updatedEmails));
        
        toast.success("Thanks for signing up! We'll be in touch soon.");
        console.log("Current email list:", updatedEmails);
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // New function to export emails
  const exportEmails = () => {
    if (allEmails.length === 0) {
      toast.error("No emails to export yet");
      return;
    }
    
    const emailsText = allEmails.map(item => `${item.email},${item.timestamp}`).join('\n');
    const blob = new Blob([emailsText], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscribed-emails.csv';
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success(`Exported ${allEmails.length} email addresses`);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 max-w-md mx-auto ${variant === "compact" ? "scale-90 -m-2" : ""}`}>
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`h-12 shadow-sm ${variant === "compact" ? "text-sm" : ""}`}
          disabled={isSubmitting}
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className={`h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium animate-pulse-soft hover:shadow-lg transition-shadow ${
          variant === "compact" ? "text-sm px-4" : ""
        }`}>
        {isSubmitting ? "Please wait..." : "🚀 Notify Me"}
      </Button>
      
      {/* Add hidden export button for admin use - only visible in development */}
      {import.meta.env.DEV && (
        <Button 
          type="button"
          variant="outline"
          onClick={exportEmails}
          className="mt-2 text-xs opacity-50 hover:opacity-100"
        >
          Export Emails (Admin)
        </Button>
      )}
    </form>
  );
};

export default EmailSignupForm;
