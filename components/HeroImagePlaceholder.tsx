import Image from "next/image";
import React from "react";

export default function HeroImagePlaceholder() {
  return (
    <section className="relative w-full h-[560px]">
      {/* Hero background image */}
      <Image
        src="/hero-banner.svg"
        alt="Roosta Hero Banner"
        fill
        priority
        className="object-cover"
      />

      
    </section>
  );
}
