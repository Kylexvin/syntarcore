import React, { useState } from 'react';
import { Code, Layout, Smartphone, Server, Users, Zap } from 'lucide-react';

const WebDevDetailsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const services = [
    { icon: <Layout className="h-6 w-6 text-blue-500" />, name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces.' },
    { icon: <Code className="h-6 w-6 text-cyan-400" />, name: 'Frontend Development', description: 'Building responsive and interactive web applications.' },
    { icon: <Server className="h-6 w-6 text-teal-500" />, name: 'Backend Development', description: 'Developing robust server-side applications and APIs.' },
    { icon: <Smartphone className="h-6 w-6 text-indigo-400" />, name: 'Mobile-First Approach', description: 'Ensuring optimal performance on all devices.' },
    { icon: <Zap className="h-6 w-6 text-yellow-400" />, name: 'Performance Optimization', description: 'Maximizing speed and efficiency of web applications.' },
    { icon: <Users className="h-6 w-6 text-blue-300" />, name: 'User-Centric Development', description: 'Focusing on user needs and experiences throughout the development process.' },
  ];

  const caseStudies = [
    {
      name: 'E-commerce Platform Overhaul',
      description: 'Redesigned and rebuilt a major e-commerce platform, resulting in a 40% increase in conversion rates and a 25% decrease in bounce rates.',
      challenge: 'The client\'s existing platform was outdated, slow, and not mobile-friendly, leading to poor user engagement and sales.',
      solution: 'We implemented a responsive design, optimized the checkout process, and integrated a robust product recommendation system.',
      results: ['40% increase in conversion rates', '25% decrease in bounce rates', '50% improvement in page load times', '30% increase in average order value'],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      name: 'FinTech Dashboard Application',
      description: 'Developed a comprehensive dashboard for a fintech startup, enabling real-time financial data visualization and analysis.',
      challenge: 'The client needed a secure, scalable solution to handle large volumes of sensitive financial data with real-time updates.',
      solution: 'We created a modular, component-based architecture using React for the frontend and implemented WebSocket connections for real-time data streaming.',
      results: ['Reduced data latency by 90%', 'Increased user engagement by 60%', 'Enabled handling of 1M+ daily transactions', 'Achieved 99.99% uptime'],
      technologies: ['React', 'D3.js', 'Node.js', 'WebSocket', 'PostgreSQL'],
    },
    {
      name: 'AI-Powered Content Management System',
      description: 'Built a next-generation CMS incorporating AI for content optimization, personalization, and automated tagging.',
      challenge: 'The client wanted to streamline their content creation process and improve content discoverability and engagement.',
      solution: 'We integrated natural language processing and machine learning algorithms to analyze, categorize, and optimize content automatically.',
      results: ['50% reduction in content tagging time', '35% improvement in content engagement', '20% increase in organic traffic', 'Personalized content recommendations for users'],
      technologies: ['Python', 'TensorFlow', 'React', 'GraphQL', 'Elasticsearch'],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-100">
      <h1 className="mb-8 text-4xl font-extrabold text-blue-400">Web Development Services</h1>

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
        <h3 className="mb-4 text-2xl font-semibold text-gray-100">Ready to start your project?</h3>
        <a href="/contact" className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default WebDevDetailsPage;
