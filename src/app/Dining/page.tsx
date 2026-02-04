"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Dining() {
  // Dining carousel images - adjust these paths to match your actual images
  const diningPhotos = [
    "/dining/1.webp",  // or .png/.webp based on your files
    "/dining/2.webp",
    "/dining/3.webp",
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? diningPhotos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === diningPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Optional: Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full">
      {/* HERO - Keep left-aligned like original */}
      <div className="relative h-[240px] sm:h-[280px] md:h-[320px]">
        <Image
          src="/hero/6.webp"
          alt="Dining area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl text-[#1f2c34]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-2 sm:mb-3 md:mb-4">
            Dining
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90 max-w-full sm:max-w-xl">
            Our café and restaurant offer a relaxed dining setting where guests
            can enjoy thoughtfully prepared meals in a comfortable and
            inviting atmosphere.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-[#485969] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          
          {/* PORTRAIT IMAGE CAROUSEL WITH CHEVRONS - LEFT SIDE ON DESKTOP */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-sm overflow-hidden shadow-lg">
              <Image
                src={diningPhotos[currentIndex]}
                alt={`Dining area ${currentIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Overlay for better chevron visibility on light images */}
              <div className="absolute inset-0 bg-black/5" />
              
              {/* Chevron Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-3 sm:p-4">
                <button
                  onClick={goToPrevious}
                  className="ml-[-12px] sm:ml-[-16px] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#20313E] hover:bg-[#20313E]/85 shadow-lg transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="mr-[-12px] sm:mr-[-16px] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#20313E] hover:bg-[#20313E]/85 shadow-lg transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Image counter indicator */}
            <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
              {diningPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* TEXT - RIGHT SIDE ON DESKTOP */}
          <div className="text-white order-1 lg:order-2">
            
            {/* First column - Aligns with the image */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl italic">Breakfast</h2>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl mt-1 sm:mt-2">
                  Start your day with a selection of freshly prepared breakfast
                  options, from local favorites to international staples.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl italic">Lunch</h2>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl mt-1 sm:mt-2">
                  Enjoy flavorful dishes crafted for a satisfying midday meal in
                  a relaxed, welcoming setting.
                </p>
              </div>
            </div>

            {/* Second column - Starts after the image */}
            <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl italic">Dinner</h2>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl mt-1 sm:mt-2">
                  Savor carefully prepared dinner offerings, perfect for
                  unwinding after a busy day or celebrating special moments.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 italic">Drinks</h2>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl">
                  Choose from refreshing beverages, signature cocktails, and a
                  variety of hot and cold drinks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}