import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Inline CSS inside component - mobile first, change at 768px (md) */}
      <style>{`
        .footer-bg {
          background-image: url('/assets/bg7.jpeg'); /* mobile */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .footer-bg {
            background-image: url('/assets/bg8.jpg'); /* md+ screens */
          }
        }
      `}</style>

      <footer className="footer-bg relative w-full py-10 px-6 overflow-hidden">
        {/* Dark overlay so white text is readable */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Left Side: Address */}
          <div>
            <p className="font-semibold text-white">Mar Athanasius College of Engineering</p>
            <p className="text-white">Kothamangalam</p>
            <p className="text-white">Kerala, India</p>
            <p className="text-white">686666</p>
            <p className="text-white">
              <a href="mailto:support@takshak.in">support@takshak.in</a>
            </p>
          </div>

          {/* Middle: Spinning Toy Video */}
          <div className="flex justify-center">
            <video
              src="/spinning-toy2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-32 md:w-48 h-auto"
            />
          </div>

          {/* Right Side: Contact Us */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.instagram.com/takshak.25?igsh=ajk2dzVpajlvZXc2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VagVIY81Hsq0tnpshb2H"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-500"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-8 text-center text-sm text-white">
          © 2025 TAKSHAK. All rights reserved. <br />
          Designed and developed by Takshak'25 Web Team.
        </div>
      </footer>
    </>
  );
}
