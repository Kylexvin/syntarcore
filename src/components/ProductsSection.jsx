import React from 'react';
import ProductCard from './ProductCard';
import { Brain, Cpu, Network } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    { title: "AI Assistant", description: "Advanced AI-powered virtual assistant for seamless task management.", icon: Brain },
    { title: "Quantum Processor", description: "Next-gen quantum computing chip for unprecedented processing power.", icon: Cpu },
    { title: "Neural Network", description: "Scalable neural network solution for complex data analysis.", icon: Network },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;