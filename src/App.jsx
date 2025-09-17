import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Loader from "./components/Loader";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Footer from "./Pages/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Loader lasts for full animation cycle (≈6s spin + 0.5s fade)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  // Apply background image globally
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