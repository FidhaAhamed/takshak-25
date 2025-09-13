export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Smaller Animated Red Blob */}
      <div className="absolute bottom-[-100px] w-[300px] h-[300px] rounded-full bg-red-500 opacity-60 blur-2xl animate-hover-blob" />

      {/* Bigger Logo above text */}
      <div className="mb-6 animate-fade-in">
        <img
          src="/assets/logo.png" // 👈 make sure this is in public/assets/
          alt="Takshak Logo"
          className="w-56 h-56 object-contain drop-shadow-[0_0_20px_rgba(255,80,80,0.6)] hover:scale-110 hover:rotate-3 transition-transform duration-500"
        />
      </div>

      {/* Text with softer hover color */}
      <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest animate-fade-in hover:scale-110 hover:text-rose-400 hover:drop-shadow-[0_0_25px_rgba(255,120,120,0.8)] transition-all duration-500">
        TAKSHAK <span className="text-rose-400">25</span>
      </h1>

      {/* Animations */}
      <style jsx>{`
        @keyframes hover-blob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-80px) scale(1.05); }
        }
        .animate-hover-blob {
          animation: hover-blob 7s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
