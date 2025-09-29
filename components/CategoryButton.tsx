"use client";

import React from "react";
import { Menu } from "lucide-react"; // A common React icon library (Feather icons via lucide)

function CategoryButton() {
  return (
    <div
      className="absolute flex items-center justify-start bg-white rounded-lg shadow-md z-50 cursor-pointer"
      style={{
        width: "222px",
        height: "41px",
        top: "97px",
        left: "81px",
        gap: "16px", // Space between the icon and text
      }}
    >
      {/* Hamburger Icon 
        The 'mr-auto' pushes the text to the right, aligning the items based on the overall gap.
      */}
      <div
        className="flex items-center justify-center p-2 rounded-l-lg"
        style={{ backgroundColor: "#f0f0f0", height: "100%" }}
      >
        <Menu className="w-5 h-5 text-gray-700" />
      </div>

      {/* Text Label */}
      <span className="text-sm font-semibold text-gray-800">All Category</span>
    </div>
  );
}
export default CategoryButton;
