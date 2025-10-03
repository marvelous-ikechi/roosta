"use client"; // Keep this if you want interactive elements like the form

import React from 'react';

export default function Footer() {
  return (
    // Replaced custom style with standard Tailwind for a full-width footer
    <footer className="bg-gray-800 text-white mt-12 w-full">
      {/* Container for content - use max-width to center and constrain content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Grid: Responsive layout for the first three sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Section 1: About Us (Takes 2 columns on medium screens) */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-white">Roosta</h2>
            <p className="text-gray-400">
              This is some random footer content. You can replace it with real
              company information about our product or service.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-150">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-150">Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-150">About</a></li>
              <li><a href="#" className="hover:text-white transition duration-150">Contact</a></li>
            </ul>
          </div>

          {/* Section 3: Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                // Using a brighter, more prominent color, like an amber/brown for 'Roosta'
                className="px-4 py-2 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition duration-150"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Section 4: Copyright (Centered and below the border) */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Roosta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}