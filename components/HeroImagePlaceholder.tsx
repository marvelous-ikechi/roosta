import Image from 'next/image'; // Import the Next.js Image component
import React from 'react';

export default function HeroImagePlaceholder() {
  // Define the common style properties for reuse
  const styleProps = {
    width: "1441px",
    height: "560px",
    top: "162px",
    left: "-1px",
  };

  return (
    <div
      className="absolute z-10" // Container for the positioned element
      style={styleProps}
    >
      <Image
        // 1. Set the correct path to your image in the /public folder
        src="/hero-banner.svg" 
        alt="Roosta Hero Banner"
        
        // 2. Use the exact dimensions from your Figma design
        width={1441}
        height={560}
        
        // 3. Ensure priority loading since this is a critical element
        priority
        
        // Optional: Apply any remaining styles if needed (like object-fit)
        className="w-full h-full object-cover" 
      />
    </div>
  );
}