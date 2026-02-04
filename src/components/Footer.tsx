"use client";

import Image from "next/image";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61574539666078",
    instagram: "https://www.instagram.com/sevensuites/?hl=en",
    phone: "tel:+1234567890", // Replace with actual phone number
    email: "mailto:info@sevensuites.com" // Replace with actual email
  };

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'facebook':
        window.open(socialLinks.facebook, '_blank', 'noopener,noreferrer');
        break;
      case 'instagram':
        window.open(socialLinks.instagram, '_blank', 'noopener,noreferrer');
        break;
      case 'phone':
        window.location.href = socialLinks.phone;
        break;
      case 'email':
        window.location.href = socialLinks.email;
        break;
    }
  };

  return (
    <footer className="bg-[#253845] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 pt-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8">

        {/* Left section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <Image
            src="/main/LogoMain.png"
            alt="Seven Suites Logo"
            width={220}
            height={80}
            className="object-contain"
          />

          <p className="text-sm text-white/80 mt-[-12]">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Right section */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight">Get in touch</h3>

          <div className="flex justify-center md:justify-start gap-3">
            <SocialIcon onClick={() => handleSocialClick('facebook')}>
              <Facebook size={22} />
            </SocialIcon>
            <SocialIcon onClick={() => handleSocialClick('instagram')}>
              <Instagram size={22} />
            </SocialIcon>
            <SocialIcon onClick={() => handleSocialClick('phone')}>
              <Phone size={22} />
            </SocialIcon>
            <SocialIcon onClick={() => handleSocialClick('email')}>
              <Mail size={22} />
            </SocialIcon>
          </div>

          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Sumulong Hwy, Antipolo, 1870 Rizal
          </p>
        </div>

      </div>
    </footer>
  );
}

interface SocialIconProps {
  children: React.ReactNode;
  onClick: () => void;
}

function SocialIcon({ children, onClick }: SocialIconProps) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30"
      aria-label="Social media link"
    >
      {children}
    </button>
  );
}