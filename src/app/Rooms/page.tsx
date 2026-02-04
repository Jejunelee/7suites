"use client";

import Image from "next/image";
import Link from "next/link";
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
    title: "Deluxe Twin",
    description: "A peaceful retreat featuring modern interiors, warm ambiance, and thoughtful amenities for a truly relaxing stay.",
    image: "/main/PHOTO.png",
    amenities: ["WiFi", "Dining", "Bath", "TV", "Bed"]
  },
  {
    title: "Executive Suite",
    description: "Spacious living area with panoramic views, premium furnishings, and exclusive lounge access for extended stays.",
    image: "/main/PHOTO.png",
    amenities: ["WiFi", "Dining", "Bath", "TV", "AC"]
  },
  {
    title: "Garden View Room",
    description: "Overlooking lush landscapes with natural light, private balcony, and serene garden atmosphere.",
    image: "/main/PHOTO.png",
    amenities: ["WiFi", "Coffee", "Bath", "TV", "Bed"]
  },
  {
    title: "Family Suite",
    description: "Ideal for groups, featuring interconnected rooms, kid-friendly amenities, and ample living space.",
    image: "/main/PHOTO.png",
    amenities: ["WiFi", "Dining", "Bath", "TV", "Safety"]
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

  const handleBookingClick = () => {
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
            src="/hero/3.webp"
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
          {rooms.map((room, i) => (
            <div
              key={i}
              className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* AMENITIES */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10 w-[85%] sm:w-[75%] md:w-[65%]">
                  <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 bg-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 text-gray-500 text-xs shadow-md">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-0.5 sm:gap-1">
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
                  onClick={handleBookingClick}
                  className="inline-block bg-[#1f2c34] text-white px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 text-xs tracking-wider rounded hover:bg-black transition cursor-pointer w-full sm:w-auto"
                >
                  CHECK AVAILABILITY
                </button>
              </div>
            </div>
          ))}
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