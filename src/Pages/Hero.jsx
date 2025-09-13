import React from "react";

export default function Hero({ bgImage }) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }} // use absolute path from public
        />
      )}

      {/* Floating Logo */}
      <div className="mb-6 relative z-20 animate-float">
        <img
          src="/assets/logo.png" // Make sure this exists in public/assets/
          alt="Takshak Logo"
          className="w-56 h-56 object-contain drop-shadow-[0_0_20px_rgba(255,80,80,0.6)] transition-transform duration-500 hover:scale-110 hover:rotate-3"
        />
      </div>

      {/* Heading */}
      <h1 className="relative z-20 text-6xl md:text-8xl font-bold text-white tracking-widest animate-float hover:scale-110 hover:text-rose-400 hover:drop-shadow-[0_0_25px_rgba(255,120,120,0.8)] transition-all duration-500">
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
