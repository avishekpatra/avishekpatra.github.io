import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { mockData } from '../data/mock';

const Education = () => {
  const { education } = mockData;

  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <Card key={edu.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{edu.period}</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{edu.location}</span>
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Grade</span>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      {edu.grade}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Specialization</p>
                    <p className="text-foreground font-medium">{edu.specialization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievement Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-950 dark:to-gray-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Academic Excellence</h3>
                  <p className="text-muted-foreground">Consistent high performance across institutions</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Maintained exceptional academic standards with a 1.5 GPA (German system) in Master's 
                and 8.7/10 in Bachelor's degree, demonstrating strong analytical and research capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;