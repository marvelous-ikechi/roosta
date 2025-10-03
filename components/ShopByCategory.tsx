"use client";

import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { 
    name: "Fiction", 
    description: "Escape into worlds of imagination & unforgettable characters.", 
    img: "/category-images/secretlove.svg"
  },
  { 
    name: "Non-Fiction", 
    description: "Discover real stories, insights, and knowledge that empower.", 
    img: "/category-images/title.svg"
  },
  { 
    name: "Children's Books", 
    description: "Fun, colorful, and educational stories for young minds.", 
    img: "/category-images/dragon.svg"
  },
  { 
    name: "Biographies", 
    description: "Walk in the footsteps of remarkable lives and journeys.", 
    img: "/category-images/bio.svg"
  },
  { 
    name: "Academics & Study", 
    description: "Trusted books to fuel your learning and success.", 
    img: "/category-images/academy.svg"
  },
  { 
    name: "Poetry & Art", 
    description: "Words and expressions that stir the soul.", 
    img: "/category-images/art.svg"
  },
  { 
    name: "Self-Help & Motivation", 
    description: "Find inspiration, clarity, and growth in every page.", 
    img: "/category-images/love.svg"
  },
];

export default function ShopByCategory() {
  return (
    <section
      className="relative bg-white z-0 pb-12"
      style={{
        width: "1460px",
        margin: "0 auto",
      }}
    >
      <div className="mx-auto" style={{ width: "1277px" }}>
        
        {/* Section Header */}
        <div className="text-center pt-8 mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Well thought out for you, because every reader’s journey is different. 
            No matter what you love to read, ROOSTA has it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-7 gap-[42px]">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col rounded-lg border border-gray-200 hover:shadow-lg transition duration-200"
              style={{
                width: "168px",
                height: "340px",
                borderRadius: "8px",
                padding: "5px 8px",
              }}
            >
              {/* Inner image card */}
              <div className="flex items-center justify-center">
                <div
                  className="relative border rounded-md overflow-hidden"
                  style={{
                    width: "127.6938px",
                    height: "203.7361px",
                    marginTop: "7.89px",
                    marginLeft: "11.28px",
                  }}
                >
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-3 flex flex-col justify-between flex-grow">
                <p className="text-red-700 font-semibold text-base mb-1">
                  {cat.name}
                </p>
                <p className="text-sm text-gray-700 leading-snug">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-12 text-sm text-gray-700 pr-4">
          <p className="mr-4">Go to page 1</p>
          <div className="flex items-center space-x-2">
            <div className="p-1 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </div>
            <span className="font-semibold mr-1">Page</span>
            <span className="font-bold text-gray-900 mr-1">8</span>
            <span className="text-gray-500">of 10</span>
            <div className="p-1 border border-gray-300 rounded-full cursor-pointer bg-amber-600 hover:bg-amber-700 ml-4">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
