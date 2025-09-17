import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Events from './Pages/Events';
import Footer from './Pages/Footer';
import EventsPage from './Pages/eventspage';

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
      {/* Home route */}
      <Route
        path="/"
        element={
          <div className="min-h-screen flex flex-col">
            <Hero bgImage="/assets/bg7.jpg"/>
            <About />
            <Events />
            <Footer />
          </div>
        }
      />

      {/* Events page */}
      {/*<Route path="/events" element={<EventsPage />} />*/}
    </Routes>
  );
}

export default App;













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