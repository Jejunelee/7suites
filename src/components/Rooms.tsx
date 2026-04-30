"use client"

import { useState, useEffect, useRef, useCallback } from 'react';

const rooms = [
  {
    title: "Deluxe Double",
    size: "2 Guest Capacity",
    bed: "1 queen bed",
    images: [
      "/rooms/Deluxe-Double/DD-1.jpg",
      "/rooms/Deluxe-Double/DD-2.jpg",
      "/rooms/Deluxe-Double/DD-3.jpg",
      "/rooms/Deluxe-Double/DD-4.jpg",
      "/rooms/Deluxe-Double/DD-5.jpg",
      "/rooms/Deluxe-Double/DD-6.jpg"
    ]
  },
  {
    title: "Deluxe Twin",
    size: "2 Guest Capacity",
    bed: "2 twin beds",
    images: [
      "/rooms/Deluxe-Twin/DT-1.jpg",
      "/rooms/Deluxe-Twin/DT-2.jpg",
      "/rooms/Deluxe-Twin/DT-3.jpg",
      "/rooms/Deluxe-Twin/DT-4.jpg",
      "/rooms/Deluxe-Twin/DT-5.jpg",
      "/rooms/Deluxe-Twin/DT-6.jpg",
      "/rooms/Deluxe-Twin/DT-7.jpg"
    ]
  },
  {
    title: "Executive",
    size: "2 Guest Capacity",
    bed: "1 king bed",
    images: [
      "/rooms/Executive/Executive1.jpg",
      "/rooms/Executive/Executive2.jpg",
      "/rooms/Executive/Executive3.jpg",
      "/rooms/Executive/Executive4.jpg",
      "/rooms/Executive/Executive5.jpg",
      "/rooms/Executive/Executive6.jpg"
    ]
  },
  {
    title: "VIP Suite",
    size: "4 Guest Capacity",
    bed: "1 king bed + sofa bed",
    images: [
      "/rooms/VIP/VIP-1.jpg",
      "/rooms/VIP/VIP-2.jpg",
      "/rooms/VIP/VIP-3.jpg",
      "/rooms/VIP/VIP-4.jpg",
      "/rooms/VIP/VIP-5.jpg",
      "/rooms/VIP/VIP-6.jpg"
    ]
  },
];

export default function Rooms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [hoveredImages, setHoveredImages] = useState<{ [key: number]: number }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // The minimum distance required to trigger a swipe
  const minSwipeDistance = 50;

  // Update number of cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Math.max(rooms.length - cardsToShow, 0) : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, cardsToShow]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex >= rooms.length - cardsToShow;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, cardsToShow]);

  // Touch event handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    
    if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Optional: Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = startX - moveEvent.clientX;
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        document.removeEventListener('mousemove', onMouseMove);
      }
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const handlePrevImage = (roomIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHoveredImages(prev => ({
      ...prev,
      [roomIndex]: ((prev[roomIndex] || 0) - 1 + rooms[roomIndex].images.length) % rooms[roomIndex].images.length
    }));
  };

  const handleNextImage = (roomIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHoveredImages(prev => ({
      ...prev,
      [roomIndex]: ((prev[roomIndex] || 0) + 1) % rooms[roomIndex].images.length
    }));
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#07131b] to-[#02080d] py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* Left Chevron - Hide on mobile, show on tablet and up */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-[-25] md:left-[-50] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-[#20313E] hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 transition-all"
          aria-label="Previous room"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 md:h-6 md:w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Mobile Navigation Dots */}
        <div className="sm:hidden flex justify-center gap-2 mb-6">
          {rooms.slice(0, rooms.length - cardsToShow + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-white' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Room Cards with Touch Events */}
        <div 
          className="overflow-hidden"
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={handleMouseDown}
          style={{ cursor: 'grab' }}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {rooms.map((room, index) => (
              <div
                key={room.title}
                className={`px-2 ${
                  cardsToShow === 1 ? 'w-full min-w-full' :
                  cardsToShow === 2 ? 'w-1/2 min-w-[50%]' :
                  'w-1/3 min-w-[33.333%]'
                }`}
              >
                <div className="bg-[#f7f6f1] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group">
                  <div className="aspect-square w-full overflow-hidden relative">
                    <img
                      src={room.images[hoveredImages[index] || 0]}
                      alt={room.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    
                    {/* Image Navigation Controls - Visible on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* Previous button */}
                      <button
                        onClick={(e) => handlePrevImage(index, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl"
                      >
                        ‹
                      </button>
                      
                      {/* Next button */}
                      <button
                        onClick={(e) => handleNextImage(index, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl"
                      >
                        ›
                      </button>
                      
                      {/* Image counter */}
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {(hoveredImages[index] || 0) + 1} / {room.images.length}
                      </div>
                      
                      {/* Dot indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {room.images.map((_, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setHoveredImages(prev => ({ ...prev, [index]: imgIdx }));
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              (hoveredImages[index] || 0) === imgIdx
                                ? 'bg-white w-3'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1720]">
                      {room.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                      Occupancy: {room.size}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">{room.bed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Chevron - Hide on mobile, show on tablet and up */}
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-[-25] md:right-[-50] top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-[#20313E] hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 transition-all"
          aria-label="Next room"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 md:h-6 md:w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center text-gray-400 text-xs mt-4">
          Swipe to see more rooms
        </p>
      </div>
    </section>
  );
}