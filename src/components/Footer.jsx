import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">VINTACORE</h3>
            <p className="text-gray-400">Revolutionizing the future with cutting-edge tech services.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yourprofile" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f h-6 w-6"></i>
              </a>
              <a href="https://wa.me/yourphonenumber" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp h-6 w-6"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 VINTACORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
