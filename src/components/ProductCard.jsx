import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, description, iconClass }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
      <i className={`h-12 w-12 text-blue-500 mb-4 ${iconClass}`} style={{ fontSize: '2rem' }}></i>
      <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Nasalization', sans-serif" }}>{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href="#" className="text-blue-500 flex items-center hover:underline">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default ProductCard;
