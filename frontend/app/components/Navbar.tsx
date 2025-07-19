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
    <nav className="bg-white shadow-md dark-mode-header">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo with text */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/Maynilad Logo.png" 
                alt="Maynilad Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <div className="text-primary font-heading font-bold text-2xl tracking-wide">
                MAYNILAD
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-text hover:text-primary font-body font-medium relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-text hover:text-primary font-body font-medium relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/activities" className="text-text hover:text-primary font-body font-medium relative group py-2">
              Activities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/formation" className="text-text hover:text-primary font-body font-medium relative group py-2">
              Formation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/staff" className="text-text hover:text-primary font-body font-medium relative group py-2">
              Staff
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-text hover:text-primary font-body font-medium relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
              className="theme-toggle-btn text-text hover:text-primary flex items-center p-2 rounded-full hover:bg-background-green hover:shadow-md transition-all duration-200"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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

      {/* Mobile Menu - with elegant transition */}
      <div className={`md:hidden fixed inset-0 bg-primary bg-opacity-30 backdrop-blur-sm z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`mobile-sidebar bg-gradient-to-br from-primary to-primary-dark text-text-white h-full w-4/5 max-w-sm transform transition-all duration-500 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="py-8 px-6 h-full overflow-y-auto flex flex-col">
            {/* Logo and close button */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/Maynilad Logo.png" 
                  alt="Maynilad Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
                <h2 className="text-xl font-heading font-bold tracking-wide text-white">MAYNILAD</h2>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="close-sidebar-btn text-white hover:text-background-green transition-all duration-200 rounded-full p-2 hover:bg-primary-light"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col space-y-1 mt-4">
              <Link 
                href="/" 
                className="py-4 px-4 rounded-lg font-body font-medium text-lg hover:bg-primary-light transition-all duration-200 flex items-center group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 group-hover:w-2 h-5 bg-primary-accent rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></span>
                Home
              </Link>
              <Link 
                href="/about" 
                className="py-4 px-4 rounded-lg font-body font-medium text-lg hover:bg-primary-light transition-all duration-200 flex items-center group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 group-hover:w-2 h-5 bg-primary-accent rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></span>
                About
              </Link>
              <Link 
                href="/activities" 
                className="py-4 px-4 rounded-lg font-body font-medium text-lg hover:bg-primary-light transition-all duration-200 flex items-center group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 group-hover:w-2 h-5 bg-primary-accent rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></span>
                Activities
              </Link>
              <Link 
                href="/formation" 
                className="py-4 px-4 rounded-lg font-body font-medium text-lg hover:bg-primary-light transition-all duration-200 flex items-center group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 group-hover:w-2 h-5 bg-primary-accent rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></span>
                Formation
              </Link>
              <Link 
                href="/staff" 
                className="py-4 px-4 rounded-lg font-body font-medium text-lg hover:bg-primary-light transition-all duration-200 flex items-center group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 group-hover:w-2 h-5 bg-primary-accent rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></span>
                Staff
              </Link>
              <Link 
                href="/contact" 
                className="py-4 px-4 rounded-lg font-body font-medium text-lg hover:bg-primary-light transition-all duration-200 flex items-center group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-0 group-hover:w-2 h-5 bg-primary-accent rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></span>
                Contact
              </Link>
            </div>
            
            {/* Theme toggle in sidebar */}
            <div className="mt-auto pt-8 border-t border-primary-light">
              <button 
                className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-primary-light transition-all duration-200 w-full"
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
