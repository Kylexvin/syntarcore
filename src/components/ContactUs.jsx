import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_0asjebk', 'template_fk69twi', formData, 'joophENQToE06le8Q')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-100"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-gray-300">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
