"use client"
import { Calendar, Users, Search } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import BookingModal from './BookingModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array.from({ length: 8 }, (_, i) => `/hero/${i + 1}.webp`);

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="relative h-[91vh] w-full overflow-hidden">
        {/* Background Image Container */}
        <div className="relative h-full w-full">
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
                alt={`Hero background ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay - ensure it's above all images */}
        <div className="absolute inset-0 bg-black/10 z-30" />

        {/* Booking Bar */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-15 left-1/2 w-[95%] sm:w-[80%] md:w-[60%] max-w-6xl -translate-x-1/2 bg-black/80 px-4 sm:px-5 md:px-6 py-4 sm:py-5 shadow-2xl backdrop-blur-sm z-40">
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-end justify-center gap-4 sm:gap-5 md:flex-nowrap md:justify-between">
            {/* Check-in */}
            <div 
              className="relative w-full flex-col md:w-auto cursor-pointer group"
              onClick={handleBookingClick}
            >
              <div className="mb-1 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-xs tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  CHECK-IN
                </span>
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-600 bg-transparent px-3 py-2 text-white outline-none focus:border-white cursor-pointer group-hover:border-gray-400 transition-colors"
                  readOnly
                />
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                  <Calendar className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Check-out */}
            <div 
              className="relative w-full flex-col md:w-auto cursor-pointer group"
              onClick={handleBookingClick}
            >
              <div className="mb-1 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-xs tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  CHECK-OUT
                </span>
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-600 bg-transparent px-3 py-2 text-white outline-none focus:border-white cursor-pointer group-hover:border-gray-400 transition-colors"
                  readOnly
                />
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                  <Calendar className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Adults */}
            <div 
              className="flex w-full flex-col md:w-auto cursor-pointer group"
              onClick={handleBookingClick}
            >
              <div className="mb-1 flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-xs tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  ADULTS
                </span>
              </div>
              <input
                type="number"
                min={1}
                placeholder="0"
                className="border border-gray-600 bg-transparent px-3 py-2 text-white outline-none focus:border-white cursor-pointer group-hover:border-gray-400 transition-colors"
                readOnly
              />
            </div>

            {/* CTA */}
            <button 
              onClick={handleBookingClick}
              className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#5f7688] px-4 sm:px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#4e6272] hover:scale-105 active:scale-95 md:w-auto cursor-pointer mt-2 sm:mt-0"
            >
              <Search className="h-4 w-4" />
              SEARCH AVAILABILITY
            </button>
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