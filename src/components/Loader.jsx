import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0D0D0D] z-50 overflow-hidden">
      {/* Sliding video */}
      <video
        src="/spinning-toy2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 z-20 h-[250px] will-change-transform animate-slide-only"
        style={{ transformOrigin: "center" }}
      />

      {/* Text */}
      <div className="relative z-10">
        <h1 className="text-white font-bebas font-normal tracking-[2px] text-[15vw] animate-reveal-text-in-path">
          TAKSHAK'25
        </h1>
      </div>
    </div>
  );
}
