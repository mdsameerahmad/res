import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  const whatsappNumber = "9155649575";

  return (
    <footer className="bg-[var(--charcoal)] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Restaurant Info */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Food Fun Friends Logo"
                className="
                  h-24 w-24
                  sm:h-28 sm:w-28
                  md:h-32 md:w-32
                  object-contain
                "
              />
              <div className="flex flex-col leading-tight">
                <h3 className="text-[var(--gold)] text-lg font-semibold">
                  Food Fun Friends
                </h3>
                <p className="text-gray-300 text-sm">
                  Caterers & Homedelivery
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-sm">
              Trusted catering and home delivery service, bringing fresh,
              hygienic and homely food to your doorstep across Howrah.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[var(--gold)] mb-4 text-base">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">
                  Howrah, West Bengal
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                <a
                  href={`tel:${whatsappNumber}`}
                  className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  +91 {whatsappNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-[var(--gold)] mb-4 text-base">
              Operating Hours
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <div className="text-gray-300">
                <p>Monday – Sunday</p>
                <p>9:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Food Fun Friends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
