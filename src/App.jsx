import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Loader from "./components/Loader";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Footer from "./Pages/Footer";
import EventsPage from "./Pages/EventsPage";

function ScrollToTopInline() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth <= 640; 
    const duration = isMobile ? 2000 : 4000;
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("bg-fixed", "bg-cover", "bg-center");
    document.documentElement.style.backgroundImage = "url(/assets/bg7.jpg)";
    return () => {
      document.documentElement.classList.remove(
        "bg-fixed",
        "bg-cover",
        "bg-center"
      );
      document.documentElement.style.backgroundImage = "";
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollToTopInline />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Hero bgImage="/assets/bg7.jpg" />
              <About />
              <Events />
              <Footer />
            </div>
          }
        />
        <Route
          path="/events"
          element={
            <div className="min-h-screen flex flex-col">
              <EventsPage />
              <Footer />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col">
              <Hero bgImage="/assets/bg7.jpg" />
              <About />
              <Events />
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}








{/*import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Events from './Pages/Events';
import Footer from './Pages/Footer';
import Gallery from './Pages/Gallery';
import GalleryPage from './Pages/Gallerypage';

function App() {
  useEffect(() => {
    
    document.documentElement.classList.add('bg-fixed', 'bg-cover', 'bg-center');
    document.documentElement.style.backgroundImage = 'url(/assets/bg7.jpg)';
    
    return () => {
      document.documentElement.classList.remove('bg-fixed', 'bg-cover', 'bg-center');
      document.documentElement.style.backgroundImage = '';
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen flex flex-col">
          <Hero bgImage="/assets/bg7.jpg" />
          <About />
          <Events />
         <Gallery />
          <Footer />
        </div>
      } />
    <Route path="/gallery" element={
        <div className="min-h-screen flex flex-col">
          <GalleryPage />
        </div>
      } />
      <Route path="*" element={
        <div className="min-h-screen flex flex-col">
          <Hero bgImage="/assets/bg1.jpg" />
          <About />
          <Events />
        <Gallery />
          <Footer />
        </div>
      } />
    </Routes>
  )
}

export default App
*/}