import React from 'react';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Instagram, ExternalLink, Heart } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const { personal } = mockData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Photography', href: '#photography' },
    { name: 'Contact', href: '#contact' }
  ];

  const expertise = [
    'ADAS Systems',
    'Autonomous Driving',
    'Perception Stack',
    'Sensor Fusion',
    'Radar Technology',
    'Computer Vision'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {personal.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lead Engineer specializing in ADAS and Autonomous Driving systems. 
                Passionate about advancing automotive technology and creating safer, 
                smarter transportation solutions.
              </p>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-muted-foreground">{personal.location}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <a 
                  href={`mailto:${personal.email}`}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <a 
                  href={`tel:${personal.phone}`}
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-blue-600" />
                <a 
                  href={`https://instagram.com/${personal.instagram.substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  {personal.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-blue-600 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* External Links */}
            <div className="mt-6 space-y-3">
              <a
                href={personal.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm">Google Scholar</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} {personal.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-sm">in Berlin</span>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-xs">
              ADAS Engineer
            </Badge>
            <Badge variant="outline" className="text-xs">
              Available for Consulting
            </Badge>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted-foreground hover:text-blue-600 transition-colors text-sm hover:-translate-y-0.5 transform duration-200"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;