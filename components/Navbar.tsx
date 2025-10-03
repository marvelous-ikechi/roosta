"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm z-50">
      <div className="max-w-[1284px] mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Roosta Logo" width={120} height={40} priority />
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/categories">Shop Books by Category</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/fairly-used">Fairly Used Books</Link>
          <Link href="/faqs">FAQs</Link>
        </div>

        {/* Account button */}
        <button className="bg-[#5C1246] text-white px-5 py-2 rounded-md">
          My Account
        </button>
      </div>
    </nav>
  );
}
