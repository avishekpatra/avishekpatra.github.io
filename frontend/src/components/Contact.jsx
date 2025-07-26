import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Send, Instagram, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

const Contact = () => {
  const { personal } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      action: () => window.location.href = `mailto:${personal.email}`,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      action: () => window.location.href = `tel:${personal.phone}`,
      color: 'bg-green-100 dark:bg-green-900 text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      action: () => window.open('https://maps.google.com/?q=Berlin,Germany', '_blank'),
      color: 'bg-red-100 dark:bg-red-900 text-red-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: personal.instagram,
      action: () => window.open(`https://instagram.com/${personal.instagram.substring(1)}`, '_blank'),
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's discuss ADAS technologies, autonomous driving innovations, or potential collaborations. 
            I'm always excited to connect with fellow engineers and industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're interested in discussing cutting-edge ADAS technologies, exploring 
                collaboration opportunities, or simply want to connect with a fellow engineer, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  onClick={method.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${method.color} group-hover:scale-110 transition-transform`}>
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium text-foreground group-hover:text-blue-600 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Info */}
            <Card className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-950 dark:to-gray-950 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Quick Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <Badge variant="secondary">Within 24 hours</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <div className="flex space-x-1">
                      {personal.languages.map((lang, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {lang.split(' ')[0]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Time Zone</span>
                    <Badge variant="secondary">CET (UTC+1)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="transition-all focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="ADAS Collaboration Opportunity"
                      required
                      className="transition-all focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can collaborate..."
                      rows={6}
                      required
                      className="transition-all focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg hover:scale-105 transition-all duration-200"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Links */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Or connect with me on</p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => window.open(personal.googleScholar, '_blank')}
                  className="hover:bg-blue-50 dark:hover:bg-blue-950"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Google Scholar
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(`https://instagram.com/${personal.instagram.substring(1)}`, '_blank')}
                  className="hover:bg-purple-50 dark:hover:bg-purple-950"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;