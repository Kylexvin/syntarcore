import React, { useState } from 'react';
import { Brush, Layout, Palette, PenTool, Smartphone } from 'lucide-react';

const GraphicDesignDetailsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const services = [
    { icon: <Brush className="h-6 w-6 text-blue-500" />, name: 'Brand Identity Design', description: 'Creating a unique and memorable visual identity for brands.' },
    { icon: <Layout className="h-6 w-6 text-teal-400" />, name: 'UI/UX Design', description: 'Designing intuitive user interfaces and experiences.' },
    { icon: <Palette className="h-6 w-6 text-cyan-400" />, name: 'Illustration', description: 'Crafting custom illustrations to enhance visual communication.' },
    { icon: <PenTool className="h-6 w-6 text-indigo-400" />, name: 'Print Design', description: 'Designing brochures, posters, and other print materials.' },
    { icon: <Smartphone className="h-6 w-6 text-yellow-400" />, name: 'Mobile Design', description: 'Designing engaging and user-friendly mobile interfaces.' },
  ];

  const caseStudies = [
    {
      name: 'E-commerce Brand Overhaul',
      description: 'Redesigned the visual identity for an e-commerce brand, resulting in a 50% increase in brand recognition and a 30% increase in user engagement.',
      challenge: 'The brand needed a fresh, modern look to stand out in a crowded market and better connect with its target audience.',
      solution: 'We developed a new logo, color scheme, and visual guidelines that resonated with the target market and elevated the brand’s presence.',
      results: ['50% increase in brand recognition', '30% increase in user engagement', '40% boost in social media following'],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    },
    {
      name: 'Tech Startup UI/UX Design',
      description: 'Created a user-centric UI/UX design for a tech startup’s mobile app, improving user satisfaction and retention.',
      challenge: 'The app needed an intuitive and modern design to attract tech-savvy users and improve overall usability.',
      solution: 'We focused on a clean, modern interface with intuitive navigation and interactive elements to enhance the user experience.',
      results: ['25% increase in user satisfaction', '20% improvement in app retention rates', '30% decrease in user drop-off rates'],
      technologies: ['Sketch', 'InVision', 'Adobe XD'],
    },
    {
      name: 'Event Branding Package',
      description: 'Designed a comprehensive branding package for a large-scale event, including posters, banners, and digital assets.',
      challenge: 'The event required a cohesive visual identity to create a memorable experience and effectively communicate the event’s theme.',
      solution: 'We developed a consistent branding theme across all materials, ensuring a unified look and feel that resonated with attendees.',
      results: ['35% increase in event attendance', '50% more social media mentions', '20% improvement in post-event surveys'],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Canva'],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-100">
      <h1 className="mb-8 text-4xl font-extrabold text-blue-400">Graphic Design Services</h1>

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

export default GraphicDesignDetailsPage;
