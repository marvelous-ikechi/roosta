"use client";

import React from 'react';
// Importing necessary icons
import { Settings, Search, Heart, ShoppingCart, Bell } from 'lucide-react'; 

function ActionBar() {
  return (
    <div
      className="absolute flex items-center bg-white shadow-md z-50 rounded-lg p-2"
      style={{
        width: "388px", 
        height: "40px", 
        top: "98px",    
        left: "971px",   
        gap: "16px",     // Space between the main items (icons and search)
      }}
    >
      
      {/* 1. Settings Icon */}
      <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-amber-600 transition" />

      {/* 2. Search Area (Flexible item to take up space) */}
      <div className="flex items-center flex-grow bg-gray-100 rounded-md h-full px-2"
           style={{ gap: "4px" }}>
        
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search Book, Authors, or title"
          className="bg-gray-100 text-sm w-full h-full focus:outline-none"
        />
      </div>

      {/* 3. Love/Heart Icon */}
      <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-500 transition" />
      
      {/* 4. Cart Icon */}
      <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-amber-600 transition" />
      
      {/* 5. Bell/Notification Icon */}
      <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-amber-600 transition" />
      
    </div>
  );
}
export default ActionBar;