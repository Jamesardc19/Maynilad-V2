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
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-primary font-bold text-2xl">
              MAYNILAD
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-text hover:text-primary font-medium">
              About
            </Link>
            <Link href="/admissions" className="text-text hover:text-primary font-medium">
              Admissions
            </Link>
            <Link href="/programs" className="text-text hover:text-primary font-medium">
              Programs
            </Link>
            <Link href="/contact" className="text-text hover:text-primary font-medium">
              Contact
            </Link>
          </div>

          {/* Theme Toggle, Search and Mobile Menu Button */}
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
            
            {/* Search Button */}
            <button className="text-text hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white">
          <div className="container-custom py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/admissions" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Admissions
              </Link>
              <Link href="/programs" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Programs
              </Link>
              <Link href="/scholarships" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Scholarships & Grants
              </Link>
              <Link href="/schools" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Schools/College
              </Link>
              <Link href="/centers" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Centers
              </Link>
              <Link href="/international" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                International
              </Link>
              <Link href="/research" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Research
              </Link>
              <Link href="/faculty" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Faculty
              </Link>
              <Link href="/news" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                News & Events
              </Link>
              <Link href="/give" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Give
              </Link>
              <Link href="/jobs" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Jobs
              </Link>
              <Link href="/contact" className="py-2 hover:text-secondary" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
