import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { mockData } from '../data/mock';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600/30"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-background z-10 hover:scale-125 transition-transform"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-blue-600">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground mb-2">
                            {exp.position}
                          </CardTitle>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Briefcase className="h-4 w-4 text-blue-600" />
                              <span className="text-blue-600 font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;