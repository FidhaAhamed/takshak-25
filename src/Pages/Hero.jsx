import React, { useState } from "react";

export default function Hero({ bgImage }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms]"
          style={{
            backgroundImage: "/assets/bg1.jpg",
            transform: zoomed ? "scale(1.1)" : "scale(1)",
          }}
        />
      )}

      {/* Floating Logo (click to zoom away) */}
      <div
        className={`mb-6 relative z-20 cursor-pointer transition-transform transition-opacity duration-[1500ms] ease-in-out ${
          zoomed
            ? "scale-[3] opacity-0 pointer-events-none"
            : "animate-float opacity-100"
        }`}
        onClick={() => setZoomed(true)}
      >
        <img
          src="/assets/logo.png"
          alt="Takshak Logo"
          className="w-56 h-56 object-contain drop-shadow-[0_0_20px_rgba(255,80,80,0.6)] hover:scale-110 hover:rotate-3 transition-transform duration-500"
        />
      </div>

      {/* Heading */}
      <h1
        className={`relative z-20 text-6xl md:text-8xl font-bold text-white tracking-widest transition-all duration-1000 ${
          zoomed
            ? "opacity-100 scale-105"
            : "opacity-100 animate-float hover:scale-110 hover:text-rose-400 hover:drop-shadow-[0_0_25px_rgba(255,120,120,0.8)]"
        }`}
      >
        TAKSHAK' <span className="text-rose-400">25</span>
      </h1>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
