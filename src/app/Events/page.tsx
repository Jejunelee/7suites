"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookingModal from "../../components/BookingModal"; // Adjust path as needed

// Define your event photos array - you can add more images here
const eventPhotos = [
  "/events/1.png",
  "/events/1.png", // Add your actual image names
  "/events/1.png",
  "/events/1.png",
  "/events/1.png",
];

export default function EventsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBookingClick = () => {
    setIsModalOpen(true);
  };

  // Optional: Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="w-full bg-[#dde1de]">
        {/* Hero Image Section with Carousel */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          {/* Current Image */}
          <Image
            src={eventPhotos[currentIndex]}
            alt={`Garden Event ${currentIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Chevron Navigation Container */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={goToPrevious}
              className="ml-[-16px] w-12 h-12 flex items-center justify-center bg-[#20313E] hover:bg-[#20313E]/85 shadow-lg transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={goToNext}
              className="mr-[-16px] w-12 h-12 flex items-center justify-center bg-[#20313E] hover:bg-[#20313E]/85 shadow-lg transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Optional: Image Indicators/Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {eventPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-[#2f3e46] mb-6">
            Garden <em>Event</em> Place
          </h1>

          <p className="text-[#4f5d63] text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Celebrate your special day in our serene garden, a charming and elegant
            setting perfect for weddings, intimate ceremonies, and outdoor gatherings.
            Lush surroundings, carefully curated spaces, and a tranquil atmosphere
            create the perfect backdrop for unforgettable moments.
          </p>

          <button
            onClick={handleBookingClick}
            className="inline-block bg-white px-16 py-4 text-[#4A5D6A] font-md text-xl shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}