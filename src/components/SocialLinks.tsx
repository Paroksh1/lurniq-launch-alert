
import React from 'react';
import { Instagram, Linkedin, MessageCircle, Book } from "lucide-react";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: <Book className="h-5 w-5" />,
      href: "#",
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-primary hover:text-secondary"
          aria-label={`Follow us on ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
