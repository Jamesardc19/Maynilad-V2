'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newThemeMode = !isDarkMode;
    setIsDarkMode(newThemeMode);
    
    // Apply theme to document
    if (newThemeMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', newThemeMode ? 'true' : 'false');
  };
  
  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = savedTheme === 'true';
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo - not a link */}
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl">
              MAYNILAD
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-text hover:text-primary font-medium relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-text hover:text-primary font-medium relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/activities" className="text-text hover:text-primary font-medium relative group py-2">
              Activities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/formation" className="text-text hover:text-primary font-medium relative group py-2">
              Formation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/staff" className="text-text hover:text-primary font-medium relative group py-2">
              Staff
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-text hover:text-primary font-medium relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
              className="text-text hover:text-primary flex items-center"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - with transition */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`bg-primary text-white h-full w-4/5 max-w-sm transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="container-custom py-4 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-secondary transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="py-3 px-2 hover:bg-primary-dark hover:pl-4 transition-all duration-200 border-b border-primary-dark" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="py-3 px-2 hover:bg-primary-dark hover:pl-4 transition-all duration-200 border-b border-primary-dark" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/activities" className="py-3 px-2 hover:bg-primary-dark hover:pl-4 transition-all duration-200 border-b border-primary-dark" onClick={() => setIsMenuOpen(false)}>
                Activities
              </Link>
              <Link href="/formation" className="py-3 px-2 hover:bg-primary-dark hover:pl-4 transition-all duration-200 border-b border-primary-dark" onClick={() => setIsMenuOpen(false)}>
                Formation
              </Link>
              <Link href="/staff" className="py-3 px-2 hover:bg-primary-dark hover:pl-4 transition-all duration-200 border-b border-primary-dark" onClick={() => setIsMenuOpen(false)}>
                Staff
              </Link>
              <Link href="/contact" className="py-3 px-2 hover:bg-primary-dark hover:pl-4 transition-all duration-200 border-b border-primary-dark" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
