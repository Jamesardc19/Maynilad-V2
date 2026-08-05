'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Activities' },
  { href: '/formation', label: 'Formation' },
  { href: '/staff', label: 'Staff' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Transparent when at top of any page hero banner
  const isTransparent = !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent py-4 md:py-5'
            : 'bg-white/98 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="Maynilad University Center - Home"
            >
              <Image
                src="/images/Maynilad Logo.png"
                alt="Maynilad Logo"
                width={38}
                height={38}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`font-heading font-bold text-lg md:text-xl tracking-wide transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-primary'
                }`}
              >
                MAYNILAD
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-body text-sm font-semibold tracking-wide uppercase relative py-1.5 transition-colors duration-300
                      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300
                      ${
                        isTransparent
                          ? `text-white/85 hover:text-white after:bg-white ${isActive ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'}`
                          : `text-gray-700 hover:text-primary after:bg-primary ${isActive ? 'text-primary font-bold after:w-full' : 'after:w-0 hover:after:w-full'}`
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2.5 rounded-lg transition-colors duration-300 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-primary hover:bg-primary/5'
              }`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 transform transition-transform duration-300 ease-in-out bg-primary shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
            <span className="font-heading font-bold text-white text-lg tracking-wide">MAYNILAD</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Close navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-base py-3.5 px-4 rounded-xl transition-all duration-200 touch-manipulation min-h-[52px] flex items-center ${
                    pathname === link.href
                      ? 'text-white font-bold bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="px-6 py-6 border-t border-white/10">
            <p className="text-white/40 font-body text-xs text-center">
              © {new Date().getFullYear()} Maynilad University Center
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
