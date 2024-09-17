import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-nasalization">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-background-image.jpg")' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold leading-tight">About Vintacore</h1>
          <p className="mt-4 text-lg font-light">Revolutionizing the future with cutting-edge tech services.</p>
          <div className="mt-8">
            <a href="#learn-more" className="bg-teal-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition">Learn More</a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center">Company Overview</h2>
          <p className="mt-4 text-center text-lg leading-relaxed">
            Vintacore stands at the forefront of technological innovation, dedicated to delivering top-tier AI solutions and groundbreaking tech services. Our expert team is committed to advancing the boundaries of technology and shaping the future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-center text-teal-400">Our Mission</h3>
              <p className="mt-4 text-center text-lg">
                To drive innovation and deliver exceptional tech solutions that empower businesses and enhance lives globally.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-center text-teal-400">Our Vision</h3>
              <p className="mt-4 text-center text-lg">
                To be a global leader in technology, renowned for our excellence, innovation, and positive societal impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center">Our History</h2>
          <div className="mt-8 relative border-l-2 border-teal-500">
            <div className="absolute -left-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-calendar-day"></i>
            </div>
            <div className="pl-12 mb-8">
              <h4 className="text-xl font-semibold text-teal-400">Founded in 2020</h4>
              <p className="mt-2">
                Vintacore was established with a vision to redefine technology through innovation and excellence.
              </p>
            </div>
            <div className="absolute -left-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-calendar-week"></i>
            </div>
            <div className="pl-12 mb-8">
              <h4 className="text-xl font-semibold text-teal-400">Expansion and Growth</h4>
              <p className="mt-2">
                Over the years, we have expanded our services and grown our team, continuously advancing our technology.
              </p>
            </div>
            <div className="absolute -left-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="pl-12 mb-8">
              <h4 className="text-xl font-semibold text-teal-400">Present Day</h4>
              <p className="mt-2">
                Today, Vintacore stands as a leading tech company, committed to delivering cutting-edge solutions and fostering innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-teal-400">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-lightbulb text-4xl text-teal-400"></i>
              <h3 className="text-xl font-semibold mt-4">Innovation</h3>
              <p className="mt-2">
                We strive to push the boundaries of technology and creativity.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-handshake text-4xl text-teal-400"></i>
              <h3 className="text-xl font-semibold mt-4">Integrity</h3>
              <p className="mt-2">
                We maintain the highest standards of ethics and transparency.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <i className="fas fa-users text-4xl text-teal-400"></i>
              <h3 className="text-xl font-semibold mt-4">Customer-Centric</h3>
              <p className="mt-2">
                Our clients are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-teal-400">Our Achievements</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <i className="fas fa-trophy text-4xl text-teal-500"></i>
              <h3 className="text-xl font-semibold mt-4">Top Tech Company</h3>
              <p className="mt-2">
                Ranked as one of the top tech companies in the industry by TechReview.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <i className="fas fa-star text-4xl text-teal-500"></i>
              <h3 className="text-xl font-semibold mt-4">Best Workplace</h3>
              <p className="mt-2">
                Awarded for our outstanding workplace culture and employee satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-teal-400">Meet Our Team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img src="/path-to-team-member-photo.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-400">CEO</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="mailto:johndoe@example.com" className="text-teal-400 hover:text-teal-500"><i className="fas fa-envelope"></i></a>
                <a href="https://linkedin.com/in/johndoe" className="text-teal-400 hover:text-teal-500"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            {/* Repeat for other team members */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
