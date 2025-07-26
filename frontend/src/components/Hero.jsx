import React from 'react';
import { Button } from './ui/button';
import { Download, MapPin, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const { personal } = mockData;

  const handleDownloadCV = () => {
    // Mock CV download - in real implementation, this would download actual PDF
    const mockCV = new Blob(['Mock CV Content for Avishek Patra'], { type: 'text/plain' });
    const url = URL.createObjectURL(mockCV);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Avishek_Patra_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-gray-600 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-6 tracking-tight">
            {personal.name}
          </h1>
          
          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            {personal.title}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 mb-12">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-muted-foreground">{personal.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 text-lg hover:scale-105 transition-all duration-200 border-2"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;