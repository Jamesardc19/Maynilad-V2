'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="text-text hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
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
