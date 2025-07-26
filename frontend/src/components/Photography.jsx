import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Camera, Instagram, ExternalLink, Heart } from 'lucide-react';
import { mockData } from '../data/mock';

const Photography = () => {
  const { photography } = mockData;

  const handleInstagramLink = () => {
    window.open(photography.instagramUrl, '_blank');
  };

  // Mock gallery images - in real implementation, these would be actual photos
  const galleryImages = [
    {
      id: 1,
      title: "Berlin Streets",
      category: "Street Photography",
      description: "Capturing the essence of Berlin's urban landscape"
    },
    {
      id: 2,
      title: "ADAS in Action", 
      category: "Technology Documentation",
      description: "Behind the scenes of autonomous vehicle testing"
    },
    {
      id: 3,
      title: "European Adventures",
      category: "Travel Photography",
      description: "Exploring Europe with the family"
    },
    {
      id: 4,
      title: "Automotive Innovation",
      category: "Automotive Photography", 
      description: "The beauty of modern automotive technology"
    }
  ];

  return (
    <section id="photography" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Photography
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="text-center mb-16">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-950 dark:to-gray-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Visual Storytelling</h3>
                  <p className="text-muted-foreground">Capturing moments beyond engineering</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {photography.description}
              </p>
              <Button 
                onClick={handleInstagramLink}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                <Instagram className="mr-2 h-4 w-4" />
                @thewanderingchubbies
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {photography.featured.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto mb-4 
                              group-hover:scale-110 transition-transform">
                  <Camera className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {category}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Professional and personal work
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mock Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-gray-200 dark:from-blue-900 dark:to-gray-800 
                            relative overflow-hidden">
                {/* Mock Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground font-medium">{image.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 
                              flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Size
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {image.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mt-2">{image.description}</p>
                  </div>
                  <Badge variant="outline" className="ml-4 whitespace-nowrap">
                    {image.category}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 rounded-full">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Follow the Journey</h3>
                  <p className="text-muted-foreground">Adventures with @thewanderingchubbies</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Join us as we explore the world through engineering eyes and creative perspectives. 
                From cutting-edge technology to beautiful landscapes, every moment tells a story.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={handleInstagramLink}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </Button>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Photography;