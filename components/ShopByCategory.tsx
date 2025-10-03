"use client";

import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Fiction",
    description: "Escape into worlds of imagination & unforgettable characters.",
    img: "/category-images/secretlove.svg",
  },
  {
    name: "Non-Fiction",
    description: "Discover real stories, insights, and knowledge that empower.",
    img: "/images/the-book-title.jpg",
  },
  {
    name: "Children's Books",
    description: "Fun, colorful, and educational stories for young minds.",
    img: "/images/dragon-knights.jpg",
  },
  {
    name: "Biographies",
    description: "Walk in the footsteps of remarkable lives and journeys.",
    img: "/images/scout-is-lost.jpg",
  },
  {
    name: "Academics & Study",
    description: "Trusted books to fuel your learning and success.",
    img: "/images/soulmate.jpg",
  },
  {
    name: "Poetry & Art",
    description: "Words and expressions that stir the soul.",
    img: "/images/nightbooks.jpg",
  },
  {
    name: "Self-Help & Motivation",
    description: "Find inspiration, clarity, and growth in every page.",
    img: "/images/a-love-story.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white w-full py-16">
      <div className="mx-auto" style={{ width: "1277px" }}>
        {/* 1. Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Well thought out for you, because every reader’s journey is different. 
            No matter what you love to read, ROOSTA has it.
          </p>
        </div>

        {/* 2. Cards */}
        <div className="grid grid-cols-7 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-200"
              style={{ height: "340px", width: "168px" }}
            >
              {/* Image */}
              <div className="relative w-full h-[60%]">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-3 flex flex-col justify-between h-[40%]">
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

        {/* 3. Pagination */}
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
