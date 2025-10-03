"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const firstRowBooks = [
  {
    id: 1,
    title: "The Old Man and The Key",
    category: "Non-Fiction",
    tag: "Pre-order",
    price: "₦7,000.00",
    rating: 4,
    image: "/category-images/book.svg",
  },
  {
    id: 2,
    title: "Marketing Tips with Ease",
    category: "Fiction",
    tag: "Pre-order",
    price: "₦7,000.00",
    rating: 3,
    image: "/category-images/market.svg",
  },
  {
    id: 3,
    title: "Killing Hemingway",
    category: "Non-Fiction",
    tag: "Bestseller",
    price: "₦7,000.00",
    rating: 5,
    image: "/category-images/killing.svg",
  },
  {
    id: 4,
    title: "Reign of Sethra",
    category: "Non-Fiction",
    tag: "Bestseller",
    price: "₦7,000.00",
    rating: 4,
    image: "/category-images/reign.svg",
  },
  {
    id: 5,
    title: "Travel Guide",
    category: "Non-Fiction",
    tag: "New",
    price: "₦7,000.00",
    rating: 4,
    image: "/category-images/travel.svg",
  },
];

const secondRowBooks = [
  {
    id: 6,
    title: "Creative Design Mastery",
    category: "Design",
    tag: "Hot",
    price: "₦6,500.00",
    rating: 4,
    image: "/category-images/book.svg",
  },
  {
    id: 7,
    title: "Business Growth Hacks",
    category: "Business",
    tag: "New",
    price: "₦8,000.00",
    rating: 5,
    image: "/category-images/market.svg",
  },
  {
    id: 8,
    title: "The Code Journey",
    category: "Programming",
    tag: "Bestseller",
    price: "₦10,000.00",
    rating: 5,
    image: "/category-images/killing.svg",
  },
  {
    id: 9,
    title: "Mindful Living",
    category: "Self Help",
    tag: "Pre-order",
    price: "₦7,500.00",
    rating: 4,
    image: "/category-images/reign.svg",
  },
  {
    id: 10,
    title: "History of Tomorrow",
    category: "Non-Fiction",
    tag: "Classic",
    price: "₦9,000.00",
    rating: 5,
    image: "/category-images/travel.svg",
  },
];

export default function BestSellers() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-[1288px] mx-auto py-16 px-6">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 uppercase">Biographies</h2>
        <p className="text-gray-600 mt-2">
          These titles are flying off the shelves,get yours now.
        </p>
      </div>

      {/* --- FIRST ROW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {firstRowBooks.map((book) => (
          <div
            key={book.id}
            className="w-[232px] h-[440px] bg-white shadow-md rounded-lg p-5 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-[204px] bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mb-4">
              <Image
                src={book.image}
                alt={book.title}
                width={185}
                height={175}
                className="rounded-md object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
              <span className="px-2 py-1 bg-gray-100 rounded">{book.category}</span>
              <span className="text-purple-600 font-medium">{book.tag}</span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
              {book.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center text-yellow-500 mb-2">
              {"★".repeat(book.rating)}
              {"☆".repeat(5 - book.rating)}
            </div>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900 mb-3">{book.price}</p>

            {/* Actions */}
            <div className="mt-auto flex justify-between items-center">
              <button className="bg-purple-800 text-white text-xs px-4 py-2 rounded-md hover:bg-purple-900">
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(book.id)}
                className="flex items-center text-gray-500 hover:text-purple-800"
              >
                <Heart
                  className={`w-5 h-5 mr-1 ${
                    wishlist.includes(book.id) ? "fill-purple-800 text-purple-800" : ""
                  }`}
                />
                <span className="text-xs">
                  {wishlist.includes(book.id) ? "Wishlisted" : "Wishlist"}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- SECOND ROW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {secondRowBooks.map((book) => (
          <div
            key={book.id}
            className="w-[232px] h-[440px] bg-white shadow-md rounded-lg p-5 flex flex-col"
          >
            {/* Image (different size for second row) */}
            <div className="w-full h-[175px] bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mb-4">
              <Image
                src={book.image}
                alt={book.title}
                width={185}
                height={175}
                className="rounded-md object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
              <span className="px-2 py-1 bg-gray-100 rounded">{book.category}</span>
              <span className="text-purple-800 font-medium">{book.tag}</span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
              {book.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center text-yellow-500 mb-2">
              {"★".repeat(book.rating)}
              {"☆".repeat(5 - book.rating)}
            </div>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900 mb-3">{book.price}</p>

            {/* Actions */}
            <div className="mt-auto flex justify-between items-center">
              <button className="bg-purple-800 text-white text-xs px-4 py-2 rounded-md hover:bg-purple-900">
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(book.id)}
                className="flex items-center text-gray-500 hover:text-purple-800"
              >
                <Heart
                  className={`w-5 h-5 mr-1 ${
                    wishlist.includes(book.id) ? "fill-purple-800 text-purple-800" : ""
                  }`}
                />
                <span className="text-xs">
                  {wishlist.includes(book.id) ? "Wishlisted" : "Wishlist"}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
