import React, { useState } from 'react';
import { Globe, BarChart, Search, Link, ShieldCheck } from 'lucide-react';

const SEODetailsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const services = [
    { icon: <Search className="h-6 w-6 text-green-500" />, name: 'Keyword Research', description: 'Identifying high-value keywords to target for improved search rankings.' },
    { icon: <BarChart className="h-6 w-6 text-orange-400" />, name: 'Performance Analytics', description: 'Analyzing website performance metrics to track and improve SEO efforts.' },
    { icon: <Globe className="h-6 w-6 text-blue-400" />, name: 'Global SEO', description: 'Optimizing your website to rank well in international search engines.' },
    { icon: <Link className="h-6 w-6 text-teal-400" />, name: 'Link Building', description: 'Creating high-quality backlinks to increase your website’s authority and ranking.' },
    { icon: <ShieldCheck className="h-6 w-6 text-red-400" />, name: 'SEO Audit', description: 'Conducting comprehensive audits to identify and rectify SEO issues.' },
  ];

  const caseStudies = [
    {
      name: 'E-commerce SEO Revamp',
      description: 'Revamped SEO strategy for an e-commerce site, resulting in a significant increase in organic traffic and sales.',
      challenge: 'The client’s site had poor visibility and low search engine rankings, affecting their sales and online presence.',
      solution: 'Implemented a targeted keyword strategy, optimized on-page SEO, and developed a link-building campaign.',
      results: ['70% increase in organic traffic', '45% growth in sales', '50% improvement in search engine rankings'],
      technologies: ['Google Analytics', 'Ahrefs', 'SEMrush'],
    },
    {
      name: 'Local Business SEO Enhancement',
      description: 'Enhanced local SEO for a service-based business, improving local search visibility and customer acquisition.',
      challenge: 'The business struggled to attract local customers and had low visibility in local search results.',
      solution: 'Optimized local search listings, improved local keyword targeting, and managed online reviews.',
      results: ['60% increase in local search traffic', '30% boost in local inquiries', '40% improvement in local search rankings'],
      technologies: ['Google My Business', 'Moz Local', 'Yelp'],
    },
    {
      name: 'Tech Blog SEO Optimization',
      description: 'Optimized a technology blog’s SEO strategy, leading to increased readership and engagement.',
      challenge: 'The blog had inconsistent traffic and struggled with search engine visibility in a competitive niche.',
      solution: 'Revamped content strategy, performed technical SEO fixes, and enhanced internal linking.',
      results: ['80% increase in organic traffic', '50% rise in engagement metrics', '35% improvement in search rankings'],
      technologies: ['Yoast SEO', 'Screaming Frog', 'Google Search Console'],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-100">
      <h1 className="mb-8 text-4xl font-extrabold text-green-400">SEO Services</h1>

      {/* Services Section */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-gray-700">
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold ml-2 text-green-300">{service.name}</h3>
            </div>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

   

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h3 className="mb-4 text-2xl font-semibold text-gray-100">Ready to boost your search rankings?</h3>
        <a href="/contact" className="py-2 px-6 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-colors">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default SEODetailsPage;
