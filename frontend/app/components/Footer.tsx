'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/activities', label: 'Activities' },
  { href: '/formation', label: 'Formation' },
  { href: '/staff', label: 'Staff' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const pathname = usePathname();
  const isContact = pathname === '/contact';

  if (isContact) {
    return (
      <footer className="bg-primary-dark text-white border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-white/40">
            &copy; {new Date().getFullYear()} Maynilad University Center. All rights reserved.
          </p>
          <p className="text-xs font-body text-white/30">
            Where Greatness in the Ordinary begins.
          </p>
        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Maynilad Logo.png"
                alt="Maynilad Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                MAYNILAD
              </span>
            </div>
            <p className="text-white/60 font-body text-xs leading-relaxed max-w-sm">
              Maynilad University Center is committed to forming leaders of competence, conscience, and compassion through holistic education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white font-body text-xs transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-xs font-body text-white/60 leading-relaxed">
              <p>
                5th Floor, Pablo Ocampo Sr. Street
                <br />
                corner Taft Avenue, Manila 1004
              </p>
              <p>0917 146 8055</p>
              <p>info@maynilad.edu</p>
            </div>
          </div>

          {/* Connect & Hours */}
          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.15em] text-white mb-4">
              Connect & Hours
            </h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/MayniladUC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mayniladuc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-xs font-body text-white/40 mb-1 uppercase tracking-wider">Operating Hours</p>
              <p className="text-xs font-body text-white/60">9:00 AM – 8:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-white/40">
            &copy; {new Date().getFullYear()} Maynilad University Center. All rights reserved.
          </p>
          <p className="text-xs font-body text-white/30">
            Where Greatness in the Ordinary begins.
          </p>
        </div>
      </div>
    </footer>
  );
}
