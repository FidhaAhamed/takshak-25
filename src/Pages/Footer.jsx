import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full py-10 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/bg6 - Copy.jpg')" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
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
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://chat.whatsapp.com/yourcommunitylink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-sm text-white">
        © 2025 TAKSHAK. All rights reserved. <br />
        Designed and developed by Takshak'25 Web Team.
      </div>
    </footer>
  );
}
