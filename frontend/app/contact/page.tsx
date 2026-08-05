'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    lines: ['5th Floor, Pablo Ocampo Sr. Street', 'corner Taft Avenue, Manila 1004'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    lines: ['0917 146 8055'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    lines: ['info@maynilad.edu'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Operating Hours',
    lines: ['9:00 AM – 8:30 PM'],
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/contact/hero.png" alt="Contact Us" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-white/90 mb-4">Reach Out</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Contact Us
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl">
              We're here to help. Reach out with any questions, inquiries, or if you'd simply like to know more about Maynilad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Interactive Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <AnimatedSection>
                <p className="section-label mb-4">Get in Touch</p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
                  We'd love to hear from you.
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-body text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                        {item.lines.map((line, i) => (
                          <p key={i} className="font-body text-gray-700 text-sm font-medium">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="font-body text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Follow & Connect</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/MayniladUC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 font-body text-xs font-semibold hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                      aria-label="Facebook"
                    >
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/mayniladuc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 font-body text-xs font-semibold hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Interactive Map */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15} className="h-full min-h-[450px]">
                <div className="h-full min-h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-100/90 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4121.304278315983!2d120.99460360720708!3d14.561546032631618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9795db387fd%3A0xe96a52005f7c717f!2sMaynilad%20University%20Center!5e0!3m2!1sen!2sph!4v1747135426607!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '450px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maynilad University Center Location"
                  />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
