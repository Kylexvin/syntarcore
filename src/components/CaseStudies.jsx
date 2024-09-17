import React, { useState } from 'react';

// Sample data for case studies with detailed steps
const caseStudies = [
    {
      title: "Nkosira Organic Farm Branding",
      description: "Developed a comprehensive branding suite for Nkosira Organic Farm, including logos, signage, and online presence to enhance brand visibility and community engagement.",
      image: "/path-to-branding-image.jpg",
      overview: "Nkosira Organic Farm needed a cohesive branding strategy to establish a strong market presence. This included designing a logo, creating signage for the farm, and optimizing their Google Business profile for better local visibility.",
      challenges: [
        "Creating a memorable logo that reflects the farm's sustainable and organic focus.",
        "Designing clear and effective signposts for on-site navigation and marketing.",
        "Optimizing the Google Business profile to improve local search visibility and attract potential visitors."
      ],
      solutions: [
        "Designed a logo incorporating elements of nature and sustainability, using green tones to emphasize the farm's eco-friendly practices.",
        "Developed signposts with clear, eco-themed graphics and easy-to-read fonts to guide visitors around the farm and highlight key areas.",
        "Optimized the Google Business profile with accurate information, high-quality images, and engaging descriptions to attract local searchers and provide essential farm details."
      ],
      implementationSteps: [
        "Conducted branding workshops with the farm to understand their vision and values.",
        "Created several logo concepts and refined the chosen design to align with the farm's ethos.",
        "Designed and produced on-site signage that reflects the farm's commitment to sustainability.",
        "Set up and optimized the Google Business profile, including adding photos, descriptions, and updated contact information.",
        "Monitored and adjusted the profile based on performance analytics and user feedback."
      ],
      technologies: ["Adobe Illustrator", "Google My Business"],
      results: "The new branding elements significantly enhanced Nkosira Organic Farm's visibility and community engagement. The logo and signage effectively communicated the farm's values, while the optimized Google Business profile improved local search presence and attracted more visitors.",
      visuals: ["/path-to-logo-image.jpg", "/path-to-signpost-image.jpg", "/path-to-google-business-image.jpg"]
    },
    {
      title: "Sustainable Farming Solutions for Nkosira Organic Farm",
      description: "Developed a comprehensive website for Nkosira Organic Farm that increased community engagement and visibility.",
      image: "/path-to-image1.jpg",
      overview: "Nkosira Organic Farm needed a website to showcase its sustainable farming practices, promote its produce, and engage with the local community. The goal was to provide an informative platform with interactive features to attract farmers, tourists, and investors.",
      challenges: [
        "Creating an engaging and informative website to highlight various aspects of sustainable farming.",
        "Ensuring the website effectively communicated the farm's mission and services.",
        "Implementing interactive features for tours, training, and product showcases."
      ],
      solutions: [
        "Designed a user-friendly and visually appealing website with a green color theme to reflect the farm's sustainable ethos.",
        "Implemented sections for farm tours, training programs, and produce showcases using a dynamic layout.",
        "Added interactive elements like booking systems for tours and a gallery for showcasing farm activities and produce."
      ],
      implementationSteps: [
        "Conducted initial consultations to understand the farm’s goals and requirements.",
        "Developed wireframes and mockups to visualize the website's structure and design.",
        "Built the frontend using modern web technologies to ensure responsiveness and ease of navigation.",
        "Set up a backend system to manage content, bookings, and user interactions.",
        "Integrated a booking system for farm tours and interactive galleries for showcasing farm activities.",
        "Tested the website for usability, performance, and cross-device compatibility.",
        "Launched the website and provided ongoing support for maintenance and updates."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      results: "The website successfully increased community engagement and visibility for Nkosira Organic Farm, providing a robust platform for showcasing sustainable practices and connecting with stakeholders.",
      visuals: ["/path-to-visual1.jpg", "/path-to-visual2.jpg"]
    }
    // Add more case studies as needed
  ];
  

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-nasalization">
      {/* Hero Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold leading-tight text-teal-400">Our Case Studies</h1>
          <p className="mt-4 text-lg text-gray-400">Explore our successful projects and see how we deliver results that matter.</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105" onClick={() => openModal(caseStudy)}>
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-teal-400">{caseStudy.title}</h3>
                  <p className="mt-2 text-gray-300">{caseStudy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Detailed View */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto p-4">
          <div className="bg-gray-900 p-8 rounded-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button className="absolute top-4 right-4 text-teal-400 text-2xl" onClick={closeModal}><i className="fas fa-times"></i></button>
            <img src={selectedCase.image} alt={selectedCase.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-3xl font-bold text-teal-400 mt-6">{selectedCase.title}</h2>
            <p className="mt-4 text-gray-300"><strong>Overview:</strong> {selectedCase.overview}</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-teal-400">Challenges</h3>
              <ul className="mt-2 list-disc list-inside text-gray-400">
                {selectedCase.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-teal-400">Solutions</h3>
              <ul className="mt-2 list-disc list-inside text-gray-400">
                {selectedCase.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-teal-400">Implementation Steps</h3>
              <ol className="mt-2 list-decimal list-inside text-gray-400">
                {selectedCase.implementationSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-teal-400">Technologies Used</h3>
              <ul className="mt-2 list-disc list-inside text-gray-400">
                {selectedCase.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-teal-400">Results & Impact</h3>
              <p className="mt-2 text-gray-300">{selectedCase.results}</p>
            </div>
            {selectedCase.visuals && selectedCase.visuals.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-teal-400">Visuals</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {selectedCase.visuals.map((visual, index) => (
                    <img key={index} src={visual} alt={`Visual ${index + 1}`} className="w-full md:w-1/2 lg:w-1/3 h-32 object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
