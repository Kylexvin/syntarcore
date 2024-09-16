import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    { title: "Web Development", description: "Custom web solutions with responsive design and user-friendly interfaces.", iconClass: "fas fa-code" },
    { title: "SEO Services", description: "Optimize your website to rank higher in search engines and attract more traffic.", iconClass: "fas fa-search" },
    { title: "Graphic Design", description: "Unique and visually appealing designs for logos, branding, and more.", iconClass: "fas fa-paint-brush" },
    { title: "Branding Solutions", description: "Create a strong and memorable brand identity that stands out.", iconClass: "fas fa-tag" },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} title={product.title} description={product.description} iconClass={product.iconClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
