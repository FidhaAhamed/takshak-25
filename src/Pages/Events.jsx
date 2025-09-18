import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const cardsData = [
  { id: 1, imageUrl: "/assets/events/e1.jpg", registrationLink: "https://makemypass.com/event/bgmi-tournament" },
  { id: 2, imageUrl: "/assets/events/e2.jpg", registrationLink: "https://forms.gle/EPQTKZwr9MkGc2eLA" },
  { id: 3, imageUrl: "/assets/events/e3.jpg", registrationLink: "https://makemypass.com/event/innovista" },
  { id: 4, imageUrl: "/assets/events/e4.jpg", registrationLink: "https://makemypass.com/event/ragworkshop" },
  { id: 5, imageUrl: "/assets/events/e5.jpg", registrationLink: "https://makemypass.com/event/animate-the-basics" },
  { id: 6, imageUrl: "/assets/events/e6.jpg", registrationLink: "https://makemypass.com/event/macekart-iedc-mace" },
  { id: 7, imageUrl: "/assets/events/e7.jpg", registrationLink: "https://makemypass.com/event/visionedge-paper-presentation" },
  { id: 8, imageUrl: "/assets/events/e8.jpg", registrationLink: "https://makemypass.com/event/game-development-workshop" },
  { id: 9, imageUrl: "/assets/events/e9.jpg", registrationLink: "https://makemypass.com/event/autocad-1" },
  { id: 10, imageUrl: "/assets/events/e10.jpg", registrationLink: "https://makemypass.com/event/brain2gain" },
];

const LayeredCards = () => {
  const [rotation, setRotation] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 20); // slow messy spin
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (registrationLink) => {
    window.open(registrationLink, "_blank");
  };

  // Responsive values based on screen size
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width < 1024 && windowSize.width >= 768;
  
  const getResponsiveValues = () => {
    if (isMobile) {
      return {
        radius: 150,
        cardWidth: 'w-40',
        cardHeight: 'h-40',
        perspective: '800px',
        scale: 0.7 + Math.random() * 0.2,
        hoverScale: 1.1,
      };
    } else if (isTablet) {
      return {
        radius: 250,
        cardWidth: 'w-60',
        cardHeight: 'h-60',
        perspective: '1200px',
        scale: 0.8 + Math.random() * 0.2,
        hoverScale: 1.12,
      };
    } else {
      return {
        radius: 400,
        cardWidth: 'w-80',
        cardHeight: 'h-80',
        perspective: '1600px',
        scale: 0.9 + Math.random() * 0.3,
        hoverScale: 1.15,
      };
    }
  };

  const responsiveValues = getResponsiveValues();

  const getCardTransform = (index) => {
    const angle = (index * (360 / cardsData.length)) - rotation;
    const radius = responsiveValues.radius + Math.random() * (isMobile ? 20 : 50); // random depth for messy layout
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const randomTilt = (index % 2 === 0 ? 1 : -1) * (Math.random() * (isMobile ? 10 : 15));

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
    <div
      className="relative w-full min-h-[80vh] md:min-h-[130vh] overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform -scale-x-100"
        style={{ backgroundImage: "url('/assets/bg71.jpg')" }}
      ></div>

      {/* Dark overlay for readability (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>
      <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl md:text-6xl my-16 font-giaza font-extrabold uppercase tracking-wider text-white drop-shadow-lg z-20">
        Events
      </h1>

      {/* Main 3D container - Properly centered */}
      <div 
        className="my-48 absolute inset-0 flex items-center justify-center"
        style={{
          perspective: responsiveValues.perspective,
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            width: isMobile ? '300px' : isTablet ? '500px' : '800px',
            height: isMobile ? '300px' : isTablet ? '500px' : '800px',
          }}
        >
          {cardsData.map((card, index) => {
            const transform = getCardTransform(index);

            return (
              <div
                key={card.id}
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
                  left: '50%',
                  top: '50%',
                  marginLeft: isMobile ? '-4rem' : isTablet ? '-6rem' : '-8rem',
                  marginTop: isMobile ? '-5rem' : isTablet ? '-7.5rem' : '-10rem',
                  transition: 'transform 1.2s ease-in-out, opacity 1.2s ease-in-out',
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
                onClick={() => handleCardClick(card.registrationLink)}
              >
                <img
                  src={card.imageUrl}
                  alt="Event Poster"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                
                {/* Touch indicator for mobile */}
                {isMobile && (
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      See More Button
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
        <Link to="/events">
          <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 font-quicksand
                            rounded-full text-white font-semibold uppercase tracking-wider 
                            hover:bg-white/20 hover:scale-105 transition-all duration-300">
            See More →
          </button>
        </Link>
      </div>


    </div>
  );
};

export default LayeredCards;