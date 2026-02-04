import { X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeIn">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-6 shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full p-1.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Compact Header */}
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5f7688]/30">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Contact Us</h2>
              <p className="text-sm text-gray-400">Get in touch</p>
            </div>
          </div>

          {/* Contact Info - Compact */}
          <div className="mb-4 space-y-3">
            {/* Phone */}
            <div className="flex items-center gap-3 rounded-lg bg-black/20 p-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-[#5f7688]" />
              <div className="min-w-0 flex-1">
                <a
                  href="tel:09176335562"
                  className="block truncate text-base font-medium text-white transition hover:text-[#5f7688]"
                >
                  Not Yet Available Number
                </a>
                <p className="text-xs text-gray-400">Call 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 rounded-lg bg-black/20 p-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-[#5f7688]" />
              <div className="min-w-0 flex-1">
                <a
                  href="mailto:hello@sevensuites.com"
                  className="block truncate text-base font-medium text-white transition hover:text-[#5f7688]"
                >
                  Not Yet Available Email
                </a>
                <p className="text-xs text-gray-400">Email us</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="mb-4 text-center text-xs text-gray-400">
            WhatsApp available for quick responses
          </p>

          {/* Single Action Button */}
          <button
            onClick={() => window.open('tel:09176335562', '_self')}
            className="w-full bg-[#5f7688] py-2.5 text-sm font-medium text-white transition hover:bg-[#4e6272]"
          >
            CALL NOW
          </button>
        </div>
      </div>
    </>
  );
}