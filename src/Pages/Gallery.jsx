import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const [rotation, setRotation] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const navigate = useNavigate();

  const allImages = [
    "/gallery/download (1).jpg",
    "/gallery/download (2).jpg",
    "/gallery/download (3).jpg",
    "/gallery/download (4).jpg",
    "/gallery/download (5).jpg",
    "/gallery/download.jpg",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 20); // same messy slow spin
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // responsive values
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width < 1024 && windowSize.width >= 768;

  const getResponsiveValues = () => {
    if (isMobile) {
      return {
        radius: 150,
        cardWidth: "w-32",
        cardHeight: "h-40",
        perspective: "800px",
        scale: 0.7 + Math.random() * 0.2,
        hoverScale: 1.1,
      };
    } else if (isTablet) {
      return {
        radius: 250,
        cardWidth: "w-48",
        cardHeight: "h-60",
        perspective: "1200px",
        scale: 0.8 + Math.random() * 0.2,
        hoverScale: 1.12,
      };
    } else {
      return {
        radius: 400,
        cardWidth: "w-64",
        cardHeight: "h-80",
        perspective: "1600px",
        scale: 0.9 + Math.random() * 0.3,
        hoverScale: 1.15,
      };
    }
  };

  const responsiveValues = getResponsiveValues();

  const getCardTransform = (index) => {
    const angle = (index * (360 / allImages.length)) - rotation;
    const radius = responsiveValues.radius + Math.random() * (isMobile ? 20 : 50);
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const randomTilt =
      (index % 2 === 0 ? 1 : -1) * (Math.random() * (isMobile ? 10 : 15));

    return {
      x,
      z,
      rotateY: -angle + randomTilt,
      rotateZ: randomTilt,
      scale: responsiveValues.scale,
      opacity: 0.7 + Math.random() * 0.3,
    };
  };

  return (
    <section
      id="gallery"
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl md:text-5xl font-bold text-white z-20 drop-shadow-lg">
        Our <span className="text-purple-400">Gallery</span>
      </h2>

      {/* 3D card container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: responsiveValues.perspective,
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            width: isMobile ? "300px" : isTablet ? "500px" : "800px",
            height: isMobile ? "300px" : isTablet ? "500px" : "800px",
          }}
        >
          {allImages.map((src, index) => {
            const transform = getCardTransform(index);

            return (
              <div
                key={index}
                className={`absolute ${responsiveValues.cardWidth} ${responsiveValues.cardHeight} rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer transition-all duration-300`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `
                    translate3d(${transform.x}px, 0, ${transform.z}px) 
                    rotateY(${transform.rotateY}deg) 
                    rotateZ(${transform.rotateZ}deg) 
                    scale(${transform.scale})
                  `,
                  opacity: transform.opacity,
                  left: "50%",
                  top: "50%",
                  marginLeft: isMobile ? "-4rem" : isTablet ? "-6rem" : "-8rem",
                  marginTop: isMobile ? "-5rem" : isTablet ? "-7.5rem" : "-10rem",
                  transition: "transform 1.2s ease-in-out, opacity 1.2s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = `
                      translate3d(${transform.x}px, -20px, ${transform.z}px) 
                      rotateY(${transform.rotateY}deg) 
                      rotateZ(${transform.rotateZ}deg) 
                      scale(${responsiveValues.hoverScale})
                    `;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = `
                      translate3d(${transform.x}px, 0, ${transform.z}px) 
                      rotateY(${transform.rotateY}deg) 
                      rotateZ(${transform.rotateZ}deg) 
                      scale(${transform.scale})
                    `;
                  }
                }}
                onClick={() => window.open(src, "_blank")}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* View full gallery button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => navigate("/gallery")}
          className="px-8 py-3 bg-white text-black font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          View Full Gallery
        </button>
      </div>
    </section>
  );
}
