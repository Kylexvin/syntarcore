import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const ProductCard = ({ title, description, iconClass }) => {
  // Determine where to link based on the title
  const getLink = () => {
    switch (title) {
      case "Web Development":
        return "/web-development";
      case "SEO Services":
        return "/seo-services";
      case "Graphic Design":
        return "/graphic-design";
      case "Branding Solutions":
        return "/branding-solutions";
      default:
        return "#";  // Default link for any other services
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
      <i className={`h-12 w-12 text-blue-500 mb-4 ${iconClass}`} style={{ fontSize: '2rem' }}></i>
      <h3 className="text-xl font-semibold text-white mb-2 product-card-title">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link to={getLink()} className="learn-more-button text-blue-500 flex items-center hover:underline">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ProductCard;
