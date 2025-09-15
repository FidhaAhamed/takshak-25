import React from "react";

export default function About() {
  return (
    <section className="relative w-full py-12 px-6 overflow-hidden">
      {/* Background Image (flipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
        style={{ backgroundImage: "url('/assets/bg6.jpg')" }}
      ></div>

      {/* Dark overlay for readability (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative bg-transparent rounded-2xl shadow-lg p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Side: Video (nonstop) */}
          <div className="flex justify-center md:justify-start">
            <video
              src="/spinning-toy2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full max-w-sm md:max-w-md h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl text-white mb-4 text-center font-giaza uppercase">
              <span className="text-white">THE LEGACY CONTINUES</span>
            </h2>
            <p className="text-white leading-relaxed text-left">
              The clock strikes, the top spins and time breaks free. From the brilliance of the Renaissance to the skylines of a future ruled by machines and dreams, this is your odyssey across time.
              
              A single spinning top binds these worlds, whirling between past and future, where brushstrokes meet holograms and history dances with tomorrow.
              
              Turn after turn, Takshak’25 becomes the stage where the past and future collide and this time, you’re part of the story.
            </p>
          </div>
        </div>
      </div>    </section>
  );
}
