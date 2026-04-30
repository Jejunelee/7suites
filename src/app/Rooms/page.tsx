"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Wifi,
  Utensils,
  Bath,
  Tv,
  BedDouble,
  Wind,
  Coffee,
  Shield
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import BookingModal from "../../components/BookingModal"; // Adjust path as needed

const rooms = [
  {
    title: "Deluxe Double",
    description: "A cozy double room with modern interiors, warm ambiance, and amenities for a truly relaxing stay.",
    images: [
      "/rooms/Deluxe-Double/DD-1.jpg",
      "/rooms/Deluxe-Double/DD-2.jpg",
      "/rooms/Deluxe-Double/DD-3.jpg",
      "/rooms/Deluxe-Double/DD-4.jpg",
      "/rooms/Deluxe-Double/DD-5.jpg",
      "/rooms/Deluxe-Double/DD-6.jpg"
    ],
    amenities: ["WiFi", "Dining", "Bath", "TV", "Bed"]
  },
  {
    title: "Deluxe Twin",
    description: "Perfect for friends or colleagues, featuring twin beds with modern interiors and thoughtful amenities.",
    images: [
      "/rooms/Deluxe-Twin/DT-1.jpg",
      "/rooms/Deluxe-Twin/DT-2.jpg",
      "/rooms/Deluxe-Twin/DT-3.jpg",
      "/rooms/Deluxe-Twin/DT-4.jpg",
      "/rooms/Deluxe-Twin/DT-5.jpg",
      "/rooms/Deluxe-Twin/DT-6.jpg",
      "/rooms/Deluxe-Twin/DT-7.jpg"
    ],
    amenities: ["WiFi", "Dining", "Bath", "TV", "Bed"]
  },
  {
    title: "Executive",
    description: "Spacious executive room with premium furnishings, perfect for business travelers and extended stays.",
    images: [
      "/rooms/Executive/Executive1.jpg",
      "/rooms/Executive/Executive2.jpg",
      "/rooms/Executive/Executive3.jpg",
      "/rooms/Executive/Executive4.jpg",
      "/rooms/Executive/Executive5.jpg",
      "/rooms/Executive/Executive6.jpg"
    ],
    amenities: ["WiFi", "Dining", "Bath", "TV", "AC"]
  },
  {
    title: "VIP Suite",
    description: "Luxurious VIP suite with exclusive amenities and stunning views for an unforgettable experience.",
    images: [
      "/rooms/VIP/VIP-1.jpg",
      "/rooms/VIP/VIP-2.jpg",
      "/rooms/VIP/VIP-3.jpg",
      "/rooms/VIP/VIP-4.jpg",
      "/rooms/VIP/VIP-5.jpg",
      "/rooms/VIP/VIP-6.jpg"
    ],
    amenities: ["WiFi", "Dining", "Bath", "TV", "Coffee", "Safety"]
  }
];

type AmenityKey = "WiFi" | "Dining" | "Bath" | "TV" | "Bed" | "AC" | "Coffee" | "Safety";

const amenityIcons: Record<AmenityKey, LucideIcon> = {
  WiFi: Wifi,
  Dining: Utensils,
  Bath: Bath,
  TV: Tv,
  Bed: BedDouble,
  AC: Wind,
  Coffee: Coffee,
  Safety: Shield
};

interface AmenityIconProps {
  name: AmenityKey;
}

export default function Rooms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [hoveredImages, setHoveredImages] = useState<{ [key: number]: number }>({});

  const handleBookingClick = (room: any) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const AmenityIcon = ({ name }: AmenityIconProps) => {
    const IconComponent = amenityIcons[name];
    return IconComponent ? <IconComponent size={14} className="sm:size-4" /> : null;
  };

  return (
    <>
      <section className="bg-[#dde2e2] pb-12 sm:pb-16 md:pb-20">
        {/* HERO - Keep left-aligned for all screen sizes */}
        <div className="relative h-[240px] sm:h-[280px] md:h-[320px]">
          <Image
            src="/rooms/VIP/VIP-2.jpg"
            alt="Rooms & Suites"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/50" />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl text-black">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-2 sm:mb-3 drop-shadow-lg">
              Rooms & Suites
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-95 drop-shadow max-w-full sm:max-w-xl">
              Thoughtfully designed rooms offering comfort, style, and modern
              essentials for a calm stay in Antipolo.
            </p>
          </div>
        </div>

        {/* ROOMS GRID */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-4">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              onMouseEnter={() => setHoveredImages(prev => ({ ...prev, [idx]: 0 }))}
            >
              {/* IMAGE CONTAINER with hover cycling */}
              <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
                <Image
                  src={room.images[hoveredImages[idx] || 0]}
                  alt={room.title}
                  fill
                  className="object-cover transition duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover controls - next/prev buttons */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setHoveredImages(prev => ({
                        ...prev,
                        [idx]: ((prev[idx] || 0) - 1 + room.images.length) % room.images.length
                      }));
                    }}
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setHoveredImages(prev => ({
                        ...prev,
                        [idx]: ((prev[idx] || 0) + 1) % room.images.length
                      }));
                    }}
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base"
                  >
                    ›
                  </button>
                </div>

                {/* Image counter */}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  {(hoveredImages[idx] || 0) + 1} / {room.images.length}
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  {room.images.map((_, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHoveredImages(prev => ({ ...prev, [idx]: imgIdx }));
                      }}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                        (hoveredImages[idx] || 0) === imgIdx
                          ? 'bg-white w-2 sm:w-3'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                {/* AMENITIES */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10 w-[85%] sm:w-[75%] md:w-[65%]">
                  <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 bg-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 text-gray-500 text-xs shadow-md">
                    {room.amenities.map((amenity, amenityIdx) => (
                      <div key={amenityIdx} className="flex flex-col items-center gap-0.5 sm:gap-1">
                        <AmenityIcon name={amenity as AmenityKey} />
                        <span className="text-[9px] sm:text-[10px]">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-4 sm:px-5 md:px-7 pb-4 sm:pb-5 md:pb-6 pt-8 sm:pt-9 md:pt-10 text-center">
                <h3 className="text-lg sm:text-xl text-black italic font-serif mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0">
                  {room.description}
                </p>
                <button
                  onClick={() => handleBookingClick(room)}
                  className="inline-block bg-[#1f2c34] text-white px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 text-xs tracking-wider rounded hover:bg-black transition cursor-pointer w-full sm:w-auto"
                >
                  CHECK AVAILABILITY
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal - Don't pass room prop if BookingModal doesn't accept it */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedRoom(null);
        }}
      />
    </>
  );
}