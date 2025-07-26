import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Wrench, Target } from 'lucide-react';
import { mockData } from '../data/mock';

const Skills = () => {
  const { skills } = mockData;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'technical',
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      description: 'Programming languages and frameworks'
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      description: 'Development and project management tools'
    },
    {
      id: 'competencies',
      title: 'Core Competencies',
      icon: Target,
      skills: skills.competencies,
      description: 'Methodologies and domain expertise'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-12">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center space-x-2 text-sm font-medium"
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-semibold">{category.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(`${category.id}-${index}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`w-full justify-center py-3 px-4 text-sm font-medium cursor-pointer
                            hover:scale-105 hover:shadow-md transition-all duration-200 group-hover:bg-blue-100 
                            dark:group-hover:bg-blue-900 group-hover:text-blue-700 dark:group-hover:text-blue-300
                            ${hoveredSkill === `${category.id}-${index}` ? 'ring-2 ring-blue-500' : ''}
                          `}
                        >
                          {skill}
                        </Badge>
                        
                        {/* Skill proficiency indicator */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 
                                      group-hover:w-full transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Skill Distribution Visual */}
                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-8 p-6 bg-gradient-to-r from-blue-50 to-gray-50 
                                  dark:from-blue-950 dark:to-gray-950 rounded-xl">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {category.skills.length}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {category.title.split(' ')[0]} Skills
                        </div>
                      </div>
                      <div className="w-px h-12 bg-border"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-1">7+</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Years Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.id} className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto mb-4 
                              group-hover:scale-110 transition-transform">
                  <category.icon className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-blue-600">{category.skills.length}</div>
                <div className="text-xs text-muted-foreground uppercase">Skills</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;