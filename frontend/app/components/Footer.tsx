'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container-custom">
        <div className="flex justify-center">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/" className="font-body hover:text-background-green transition-colors duration-300 px-2">
              Home
            </Link>
            <Link href="/about" className="font-body hover:text-background-green transition-colors duration-300 px-2">
              About
            </Link>
            <Link href="/activities" className="font-body hover:text-background-green transition-colors duration-300 px-2">
              Activities
            </Link>
            <Link href="/formation" className="font-body hover:text-background-green transition-colors duration-300 px-2">
              Formation
            </Link>
            <Link href="/staff" className="font-body hover:text-background-green transition-colors duration-300 px-2">
              Staff
            </Link>
            <Link href="/contact" className="font-body hover:text-background-green transition-colors duration-300 px-2">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="border-t border-primary-light mt-6 md:mt-8 pt-4 md:pt-6 text-sm font-body text-center px-4">
          <p>&copy; {new Date().getFullYear()} Maynilad University Study Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
