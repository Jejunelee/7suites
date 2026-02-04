"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import BookingModal from "./BookingModal"; // Adjust path as needed

export default function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  // Image rotation - using a different set of images
  const images = Array.from({ length: 3 }, (_, i) => `/features/${i + 1}.webp`);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="bg-[#4A5D6A] py-8 sm:py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left content */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Our 4 <span className="italic"> signature</span> elements
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl md:text-2xl text-white/90">
              <FeatureItem text="Elegant Event Spaces" />
              <FeatureItem text="Attentive, Personalized Service" />
              <FeatureItem text="Strategic Antipolo Location" />
              <FeatureItem text="Comfort-Driven Design" />
            </ul>

            <button 
              onClick={handleBookingClick}
              className="mt-4 sm:mt-6 bg-gray-200 text-gray-700 px-8 sm:px-10 md:px-14 py-2.5 sm:py-3 text-base sm:text-lg tracking-wide shadow hover:bg-white transition cursor-pointer w-full sm:w-auto"
            >
              BOOK NOW
            </button>
          </div>

          {/* Right image with transition */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[380px] lg:h-[520px] overflow-hidden order-1 lg:order-2">
            {/* All images stacked */}
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`Feature ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 sm:gap-4">
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white flex items-center justify-center flex-shrink-0">
        <Check size={14} className="sm:size-4" />
      </div>
      <span className="text-sm sm:text-base md:text-lg lg:text-xl">{text}</span>
    </li>
  );
}