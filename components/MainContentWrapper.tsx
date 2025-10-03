import React from 'react';

 function MainContentWrapper() {
  return (
    <div
      className="absolute bg-white z-0" 
      style={{
        width: "1460px", 
        height: "10359px", 
        top: "787px",    
        left: "-10px",   
        gap: "75px",     
      }}
    >
     
      <div className="flex flex-col space-y-[75px] p-4"> 
          
          <h2 className="text-3xl font-bold text-gray-800">Main Content Starts Here</h2>
          <p className="text-gray-600">
            This fixed-size box will now contain all your small sections: 
            Shop by Category, Best Seller, Biography, etc.
          </p>
          
          {/* PLACEHOLDER FOR FUTURE SECTIONS */}
          <div className="h-48 bg-gray-100 flex items-center justify-center">Shop By Category Section Placeholder</div>
          <div className="h-48 bg-gray-100 flex items-center justify-center">Best Seller Section Placeholder</div>
          <div className="h-48 bg-gray-100 flex items-center justify-center">Biography Section Placeholder</div>
          
      </div>
    </div>
  );
}

export default MainContentWrapper;