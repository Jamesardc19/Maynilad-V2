'use client';

import React, { useState } from 'react';
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
    lines: ['(632) 8637-0912 to 26'],
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
    label: 'Office Hours',
    lines: ['Mon – Fri: 8:00 AM – 5:00 PM', 'Saturday: 8:00 AM – 12:00 PM'],
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white";

  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/contact/hero.png" alt="Contact Us" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-gold-light mb-4">Reach Out</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Contact Us
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl">
              We're here to help. Reach out with any questions, inquiries, or if you'd simply like to know more about Maynilad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2">
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
                          <p key={i} className="font-body text-gray-700 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="font-body text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all duration-300"
                        aria-label={platform}
                      >
                        <span className="text-xs font-body font-semibold">{platform[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15}>
                <div className="bg-surface-warm rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl font-heading font-bold text-primary mb-2">Send us a Message</h2>
                  <p className="text-gray-500 font-body text-sm mb-8">We'll get back to you within 1-2 business days.</p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-primary text-xl mb-2">Message Sent!</h3>
                      <p className="text-gray-500 font-body text-sm">Thank you for reaching out. We'll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="firstName" className="block text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                          <input id="firstName" type="text" required className={inputClass} placeholder="Juan" value={formState.firstName} onChange={e => setFormState({ ...formState, firstName: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                          <input id="lastName" type="text" required className={inputClass} placeholder="dela Cruz" value={formState.lastName} onChange={e => setFormState({ ...formState, lastName: e.target.value })} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                        <input id="email" type="email" required className={inputClass} placeholder="juan@email.com" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                        <input id="phone" type="tel" className={inputClass} placeholder="+63 9xx xxx xxxx" value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                        <input id="subject" type="text" required className={inputClass} placeholder="How can we help?" value={formState.subject} onChange={e => setFormState({ ...formState, subject: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                        <textarea id="message" rows={4} required className={inputClass + ' resize-none'} placeholder="Write your message here..." value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-surface-warm">
        <div className="container-custom">
          <AnimatedSection className="mb-8">
            <p className="section-label">Location</p>
            <h2 className="text-section font-heading font-bold text-primary">Find Us</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="h-96 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4121.304278315983!2d120.99460360720708!3d14.561546032631618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9795db387fd%3A0xe96a52005f7c717f!2sMaynilad%20University%20Center!5e0!3m2!1sen!2sph!4v1747135426607!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maynilad University Center Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
