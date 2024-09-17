import React, { useState } from 'react';
import { Badge, Box, PenTool, Activity, Target } from 'lucide-react'; // Replaced Tachometer with Activity

const BrandingDetailsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const services = [
    { icon: <Badge className="h-6 w-6 text-blue-500" />, name: 'Brand Strategy', description: 'Developing strategic plans to enhance brand positioning and market presence.' },
    { icon: <Box className="h-6 w-6 text-teal-400" />, name: 'Visual Identity', description: 'Creating logos, color schemes, and visual elements to define a brand’s identity.' },
    { icon: <PenTool className="h-6 w-6 text-indigo-400" />, name: 'Creative Direction', description: 'Guiding the overall creative vision to ensure brand consistency and impact.' },
    { icon: <Activity className="h-6 w-6 text-cyan-400" />, name: 'Performance Metrics', description: 'Analyzing and optimizing brand performance through key metrics and feedback.' }, // Updated icon
    { icon: <Target className="h-6 w-6 text-yellow-400" />, name: 'Market Research', description: 'Conducting research to understand target audiences and market trends.' },
  ];

  const caseStudies = [
    {
      name: 'Tech Startup Brand Launch',
      description: 'Developed a comprehensive branding strategy for a tech startup, including a new logo, brand guidelines, and marketing materials.',
      challenge: 'The startup needed a strong brand identity to enter a competitive market and establish credibility.',
      solution: 'Created a cohesive brand identity that communicated innovation and reliability, and developed a suite of marketing materials to support the launch.',
      results: ['40% increase in brand recognition', '30% growth in initial user base', '20% improvement in social media engagement'],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Brandwatch'],
    },
    {
      name: 'Retail Brand Revamp',
      description: 'Revamped the visual identity of a retail brand, including a new logo, color scheme, and store design to enhance customer experience.',
      challenge: 'The brand needed a fresh look to appeal to a modern audience and improve in-store experiences.',
      solution: 'Designed a modern, attractive brand identity and revamped the store layout to create a more engaging shopping experience.',
      results: ['25% increase in foot traffic', '35% boost in sales', '40% improvement in customer satisfaction'],
      technologies: ['Sketch', 'Figma', 'InDesign'],
    },
    {
      name: 'Non-Profit Campaign Branding',
      description: 'Developed a branding strategy for a non-profit organization’s campaign, including visual assets and messaging to drive engagement and donations.',
      challenge: 'The campaign required a compelling brand identity to resonate with donors and increase visibility.',
      solution: 'Created a vibrant, emotionally engaging brand identity and produced marketing materials to effectively communicate the campaign’s mission.',
      results: ['50% increase in donations', '60% rise in campaign awareness', '30% more social media interactions'],
      technologies: ['Adobe XD', 'Illustrator', 'Canva'],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-100">
      <h1 className="mb-8 text-4xl font-extrabold text-blue-400">Branding Services</h1>

      {/* Services Section */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-gray-700">
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold ml-2 text-blue-300">{service.name}</h3>
            </div>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h3 className="mb-4 text-2xl font-semibold text-gray-100">Ready to elevate your brand?</h3>
        <a href="/contact" className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default BrandingDetailsPage;
