import React from 'react';
import { Outlet } from 'react-router-dom';
import headerImage from '../Images/nedladdning (2).jpg'; 

const Layout = () => {
  return (
    // Gradient container (full viewport height)
    <div className="min-h-screen bg-[linear-gradient(45deg,#ff6b6b_0%,#4ecdc4_33.33%,#45b7d1_50%,#96ceb4_66.66%,#ffeead_100%)] bg-fixed">
      
      {/* Content wrapper (flex column) */}
      <div className="flex flex-col min-h-screen bg-white/90 backdrop-blur-sm">
        {/* Header */}
       <header className="max-w-7xl mx-auto px-6 py-4 w-full flex items-center gap-4">
  {/* Image */}
  <img 
    src={headerImage} 
    alt="Gallgångscancer information header"
    className="w-[124px] h-[54px] object-cover rounded-lg shadow-md flex-shrink-0"
  />

  {/* Title and Navigation */}
  <div className="flex-1">
    <h2 className="text-2xl font-bold text-gray-800">Allt du behöver veta om gallgångscancer</h2>
    <nav className="mt-2 space-x-4">
      <a href="/" className="text-gray-600 hover:text-blue-600">Hem</a>
      <a href="/about" className="text-gray-600 hover:text-blue-600">Om oss</a>
      <a href="/contact" className="text-gray-600 hover:text-blue-600">Kontakta</a>
    </nav>
  </div>

  {/* Search Bar */}
  <div className="flex-1 max-w-[100px] important!">
    <input
      type="text"
      placeholder="Sök..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
</header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-6 py-8 w-full">
          {/* Cookie Consent Section */}
          <div className="border-b border-gray-200 pb-4 mb-8">
            {/* Your cookie content here */}
          </div>

          {/* Rest of your footer content */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {/* Footer columns */}
            <div>
              <h3 className="font-semibold mb-4">Professionals</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Medical Specialties</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Reimbursement</a></li>
              </ul>
            </div>
            {/* Other footer sections */}
          </div>

          {/* Mission statement and legal */}
          <div className="my-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm">
              Boston Scientific is dedicated to transforming lives through innovative medical solutions
              that improve the health of patients around the world.
            </p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Use</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Copyright Notice</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Site Map</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Notice For Adverse Events</a>
            </div>
            <p className="text-center text-gray-500 text-sm">
              ©2025 Boston Scientific Corporation or its affiliates. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;