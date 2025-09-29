"use client"; 

import Link from "next/link";
import Image from "next/image";
import React from "react"; // Explicitly import React if using JSX

export default function Navbar() {
  return (
    <nav
      className="fixed flex items-center bg-white shadow-md z-50" // Added z-50 to ensure it's above other content
      style={{
        width: "1284px", 
        height: "50px",  
        top: "19px",     
        left: "80px",    
        gap: "179px",    
      }}
    >
      {/* Logo Image */}
      <div className="flex-shrink-0 ml-4">
        <Link href="/"> 
          <Image
            src="/logo.png" 
            alt="Roosta Logo"
            width={120} 
            height={40} 
            priority 
          />
        </Link>
      </div>

      {/* Links */}
      {/* Using justify-center and gap-8 within flex for spacing. flex-1 allows it to take available space. */}
      <div className="flex flex-1 justify-center gap-8 text-gray-700 font-medium"> 
        <Link href="#home" className="hover:text-amber-600 transition duration-150">Home</Link>
        <Link href="#services" className="hover:text-amber-600 transition duration-150">Services</Link>
        <Link href="#about" className="hover:text-amber-600 transition duration-150">About</Link>
        <Link href="#contact" className="hover:text-amber-600 transition duration-150">Contact</Link>
      </div>

      {/* Brown Button */}
      {/* Replaced 'brown' with a Tailwind amber color for consistency */}
      <button
        className="px-6 py-2 text-white rounded-md mr-4" 
        style={{ backgroundColor: "#8B4513" }} 
      >
        Get Started
      </button>
    </nav>
  );
}