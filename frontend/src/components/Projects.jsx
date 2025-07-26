import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Award, PlayCircle, Github, BookOpen } from 'lucide-react';
import { mockData } from '../data/mock';

const Projects = () => {
  const { projects, certifications } = mockData;

  const handleVideoDemo = (url) => {
    // Mock video demo - in real implementation, would open video in modal or new tab
    alert(`Opening video demo: ${url}`);
  };

  const handleScholarLink = () => {
    window.open(mockData.personal.googleScholar, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Projects & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 h-12">
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Achievements</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </CardTitle>
                      <Badge variant="outline" className="ml-2 whitespace-nowrap">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-3">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      {project.videoUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleVideoDemo(project.videoUrl)}
                          className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-950"
                        >
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Publications Section */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-950 dark:to-gray-950 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="p-3 bg-blue-600 rounded-full">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">Research Publications</h3>
                      <p className="text-muted-foreground">Academic contributions and peer-reviewed papers</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Published research in wireless sensor networks, radio tomography, and localization systems. 
                    Contributing to the advancement of sensing technologies and autonomous systems.
                  </p>
                  <Button 
                    onClick={handleScholarLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Google Scholar Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <Card key={cert.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto mb-4 
                                  group-hover:scale-110 transition-transform">
                      <Award className="h-8 w-8 text-blue-600 mx-auto" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Badge 
                        variant={cert.status === 'Ongoing' ? 'outline' : 'default'}
                        className={cert.status === 'Ongoing' ? 'border-orange-500 text-orange-600' : 'bg-green-100 text-green-700'}
                      >
                        {cert.status}
                      </Badge>
                      <span className="text-muted-foreground text-sm">{cert.year}</span>
                    </div>
                    
                    {cert.status === 'Ongoing' && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">In Progress</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Companies</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Awards</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;