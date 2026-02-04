"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../components/Contact"; // Assuming ContactModal is in the same directory

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <header className="bg-[#06141C] shadow-lg">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 pb-4 sm:px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/main/LogoMain.png"
              alt="Logo"
              width={240}
              height={80}
              className="h-auto w-40 sm:w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-10">
            <Link href="Rooms" className="text-md text-gray-200 hover:text-white transition">
              Rooms
            </Link>
            <Link href="Amenities" className="text-md text-gray-200 hover:text-white transition">
              Amenities
            </Link>
            <Link href="Dining" className="text-md text-gray-200 hover:text-white transition">
              Dining
            </Link>
            <Link href="Events" className="text-md text-gray-200 hover:text-white transition">
              Events
            </Link>

            {/* Contact button - Now triggers modal */}
            <button
              onClick={openContactModal}
              className="px-3 py-2 text-sm font-medium bg-white text-[#06141C] hover:bg-[#152833] hover:text-white transition"
            >
              CONTACT US
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-gray-200 hover:text-white transition"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-[#06141C] border-t border-gray-800">
            <nav className="flex flex-col px-4 py-3">
              <Link 
                href="Rooms" 
                className="py-3 text-gray-200 hover:text-white transition border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link 
                href="Amenities" 
                className="py-3 text-gray-200 hover:text-white transition border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link 
                href="Dining" 
                className="py-3 text-gray-200 hover:text-white transition border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Dining
              </Link>
              <Link 
                href="Events" 
                className="py-3 text-gray-200 hover:text-white transition border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <button
                onClick={openContactModal}
                className="mt-4 py-3 text-center font-medium bg-white text-[#06141C] hover:bg-[#152833] hover:text-white transition rounded"
              >
                CONTACT US
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </>
  );
}