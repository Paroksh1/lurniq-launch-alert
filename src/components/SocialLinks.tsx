
import React from 'react';
import { Instagram, Linkedin, MessageCircle, Book } from "lucide-react";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
      hoverClass: "hover:text-rose-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      hoverClass: "hover:text-blue-600",
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "#",
      hoverClass: "hover:text-indigo-500",
    },
    {
      name: "Blog",
      icon: <Book className="h-5 w-5" />,
      href: "#",
      hoverClass: "hover:text-green-500",
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-gray-500">Stay in the loop — follow us here</h4>
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className={`p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-primary transform hover:scale-110 ${social.hoverClass}`}
            aria-label={`Follow us on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
