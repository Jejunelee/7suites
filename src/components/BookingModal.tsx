import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: ModalProps) {
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeIn">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Icon/Decoration */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5f7688]/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5f7688]/40">
                <span className="text-2xl">📞</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-center text-2xl font-light tracking-wider text-white">
            Booking Information
          </h2>

          {/* Divider */}
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-[#5f7688] to-transparent" />

          {/* Content */}
          <div className="space-y-6">
            <p className="text-center leading-relaxed text-gray-300">
              We're currently working on automating booking! For now please contact us directly at:
            </p>

            {/* Contact Info */}
            <div className="space-y-4 rounded-lg bg-black/30 p-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5f7688]/20">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-400">PHONE</p>
                  <a
                    href="tel:09176335562"
                    className="text-lg font-medium text-white transition hover:text-[#5f7688]"
                  >
                    Not Yet Available Number
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5f7688]/20">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-gray-400">EMAIL</p>
                  <a
                    href="mailto:blank@sevensuites.com"
                    className="text-lg font-medium text-white transition hover:text-[#5f7688]"
                  >
                    blank@sevensuites.com
                  </a>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-gray-400">
              We'll respond within 24 hours to confirm your booking.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-8 w-full bg-[#5f7688] py-3 text-sm font-medium text-white transition hover:bg-[#4e6272]"
          >
            CLOSE MESSAGE
          </button>
        </div>
      </div>
    </>
  );
}