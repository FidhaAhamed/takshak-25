import React, { useState } from "react";

export default function Hero({ bgImage }) {
  const [zoomed, setZoomed] = useState(false);

  // Trigger animation & reset after 2s
  const handleAnimation = () => {
    if (zoomed) return;
    setZoomed(true);
    setTimeout(() => setZoomed(false), 2000);
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: zoomed ? "scale(1.1)" : "scale(1)",
          }}
        />
      )}

      {/* Logo – only fade out */}
      <div
        className={`mb-6 relative z-20 cursor-pointer transition-opacity duration-[1500ms] ease-in-out ${
          zoomed ? "opacity-0 pointer-events-none" : "animate-float opacity-100"
        }`}
        onClick={handleAnimation}
      >
        <img
          src="/assets/logo.png"
          alt="Takshak Logo"
          className="w-56 h-56 object-contain hover:scale-110 hover:rotate-3 transition-transform duration-500"
        />
      </div>

      {/* Text – zoom out + fade */}
      <h1
        className={`relative z-20 text-5xl md:text-8xl font-bold text-white tracking-widest text-center transition-all duration-[2000ms] ease-in-out ${
          zoomed
            ? "scale-[20] opacity-0" // zoom way out + fade
            : "scale-100 opacity-100"
        }`}
      >
        TAKSHAK' <span className="text-rose-400">25</span>
      </h1>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
