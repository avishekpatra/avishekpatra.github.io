import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { User, Globe, Heart } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const { about, personal } = mockData;

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {about.summary}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.highlight}
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Personal</p>
                      <p className="font-medium">
                        {personal.nationality} • {personal.family}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Languages</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {personal.languages.map((lang, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Interests</p>
                      <p className="font-medium">
                        Photography • Travel • Autonomous Systems • Innovation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-gray-200 dark:from-blue-900 dark:to-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Abstract Tech Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-16 h-16 border-2 border-blue-600 rounded-full"></div>
                <div className="absolute bottom-16 right-12 w-12 h-12 border-2 border-gray-600 rounded-lg rotate-45"></div>
                <div className="absolute top-1/2 right-16 w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="absolute bottom-32 left-16 w-6 h-6 bg-gray-600 rounded-full"></div>
              </div>
              
              {/* Central Focus */}
              <div className="text-center z-10">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform duration-300">
                  <User className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-2">7+ Years</h3>
                <p className="text-muted-foreground">ADAS & Autonomous Driving Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;