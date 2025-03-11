import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Home from './components/Home';
import * as THREE from 'three'; // Vanta requires THREE.js
import FOG from 'vanta/dist/vanta.fog.min'; // Import the Vanta effect

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null); // Ref to attach Vanta background

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(darkModePreference === 'true' || (!darkModePreference && systemPrefersDark));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          highlightColor: 0xb3d9ff, // Lighter blue
          midtoneColor: 0xd1e8ff, // Even lighter blue
          baseColor: isDarkMode ? 0xf5f5f5 : 0xeaf4ff,
          blurFactor: 0.7,
          speed: 1.2,
          THREE,
        })
      );
    }

    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [vantaEffect, isDarkMode]);

  const handleGetStarted = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {/* Fixed Vanta Background */}
      <div
        ref={vantaRef}
        className="fixed top-0 left-0 w-full h-full z-[-1]" // Correct z-index to ensure Vanta is at the background
      ></div>

      {/* Scrollable Content */}
      <div className="relative min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <main className="flex-grow">
          {currentPage === 'landing' && <Landing onGetStarted={handleGetStarted} />}
          {currentPage === 'home' && <Home />}
          {currentPage === 'about' && <About />}
        </main>
      </div>
    </>
  );
}

export default App;
