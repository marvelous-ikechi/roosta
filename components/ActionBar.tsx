"use client";
import { Menu, Search, Heart, ShoppingCart, User } from "lucide-react"; // icons

export default function ActionBar() {
  return (
    <div className="w-full bg-white shadow z-40">
      <div className="max-w-[1284px] mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Left: Hamburger + ALL CATEGORIES */}
        <div className="flex items-center gap-3 text-gray-800 font-semibold">
          <Menu className="w-6 h-6" />
          <span>ALL CATEGORIES</span>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-5">
          {/* Search box */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-[300px]">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Book Author or Title"
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          {/* Icons */}
          <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
          <User className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
