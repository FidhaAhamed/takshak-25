import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images in the public/gallery folder
  useEffect(() => {
    // Since the images are in the public folder, we can reference them directly
    const imageNames = [
      'download (1).jpg',
      'download (2).jpg',
      'download (3).jpg',
      'download (4).jpg',
      'download (5).jpg',
      'download (6).jpg',
      'download.jpg'
    ];
    
    // Prepend the path to the gallery folder
    const imagePaths = imageNames.map(name => `/gallery/${name}`);
    setImages(imagePaths);
  }, []);

  // Generate random rotation between -15 and 15 degrees
  const getRandomRotation = () => {
    return Math.floor(Math.random() * 30) - 15;
  };

  // Generate random position offset
  const getRandomOffset = () => {
    return Math.floor(Math.random() * 20) - 10;
  };

  // Set background image for the gallery page
  useEffect(() => {
    document.documentElement.style.backgroundImage = 'url(/assets/bg1.jpg)';
    
    return () => {
      document.documentElement.style.backgroundImage = '';
    };
  }, []);

  const handleImageClick = useCallback((index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  }, [images]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateImages = useCallback((direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [currentIndex, images]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          navigateImages(-1);
        } else if (e.key === 'ArrowRight') {
          navigateImages(1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImages, closeModal]);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white py-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="fixed top-6 left-6 z-50 px-6 py-2 bg-white/90 text-black rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:scale-105"
        >
          ← Back to Home
        </button>

        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in our collection of captured moments. Each image tells a unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 relative">
          {images.map((src, index) => {
            const rotation = getRandomRotation();
            const xOffset = getRandomOffset();
            const yOffset = getRandomOffset();
            const scale = 1 + (Math.random() * 0.2 - 0.1); // Random scale between 0.9 and 1.1
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-500 ease-out ${
                  hoveredIndex !== null && hoveredIndex !== index 
                    ? 'opacity-30 scale-95' 
                    : hoveredIndex === index 
                      ? 'opacity-100 scale-105 z-20' 
                      : 'opacity-100'
                }`}
                style={{
                  transform: `rotate(${rotation}deg) translate(${xOffset}px, ${yOffset}px) scale(${hoveredIndex === index ? 1.1 : scale})`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  margin: '1.5rem 0',
                  filter: hoveredIndex === index ? 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.4))' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`relative overflow-hidden rounded-2xl transform transition-all duration-400 cursor-pointer ${
                    hoveredIndex === index ? 'shadow-2xl' : 'shadow-xl'
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={src}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-400 flex items-end p-6 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                  }`}>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white mb-2">Memory #{index + 1}</h3>
                      <p className="text-gray-300 text-sm">Click to view full size</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">A Journey Through Moments</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Each photograph is a frozen moment in time, a story waiting to be told. Hover over the images to reveal their hidden details.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Top
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
              {/* Navigation Arrows */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages(-1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Main Image */}
              <motion.img
                src={selectedImage}
                alt="Full size preview"
                className="max-w-full max-h-[80vh] mx-auto object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition-all"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/70 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages(1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;