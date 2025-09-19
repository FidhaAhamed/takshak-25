import React from "react";
import { motion } from "framer-motion";
import { competitions, workshops, otherEvents } from "../data/eventsData";

export default function EventsPage() {
  const renderCards = (events) =>
    events.map((event, index) => (
      <motion.a
        key={index}
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900/80 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={event.poster}
          alt={`Event ${index + 1}`}
          className="w-full object-contain"
        />
      </motion.a>
    ));

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/bg.jpg)", backgroundSize: "100% 100%" }}
      />

      {/* Dark Overlay */}
      <div className="absolute 0" />

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold font-giaza uppercase text-center mt-16 mb-10 tracking-tight text-white drop-shadow-lg z-10">
        Our <span className="text-rose-500">Events</span>
      </h1>

      {/* Competitions */}
      <div className="w-full max-w-6xl px-6 mb-16 z-10">
        <h2 className="font-bebas text-5xl uppercase tracking-wide">Competitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderCards(competitions)}
        </div>
      </div>

      {/* Workshops */}
      <div className="w-full max-w-6xl px-6 mb-16 z-10">
        <h2 className="font-bebas text-5xl uppercase tracking-wide">Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderCards(workshops)}
        </div>
      </div>

      {/* Other Events */}
      <div className="w-full max-w-6xl px-6 mb-16 z-10">
        <h2 className="font-bebas text-5xl uppercase tracking-wide">Other Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderCards(otherEvents)}
        </div>
      </div>
    </section>
  );
}
