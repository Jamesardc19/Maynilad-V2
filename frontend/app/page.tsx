'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from './components/AnimatedSection';
import StatsCounter from './components/StatsCounter';

const stats = [
  { value: 20, suffix: '+', label: 'Years of Formation' },
  { value: 500, suffix: '+', label: 'Students Formed' },
  { value: 6, suffix: '', label: 'Programs' },
  { value: 12, suffix: '+', label: 'Staff & Mentors' },
];

const activities = [
  {
    title: 'Leadership & Academic Development',
    description: 'Seminars, coaching, and workshops that build professional competence and intellectual excellence.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Cultural & Outdoors',
    description: 'Hikes, heritage tours, and cultural immersions that broaden perspective and build character.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Spiritual Formation',
    description: 'Pilgrimages, guided retreats, and mentoring that deepen faith and nurture personal growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Community Outreach',
    description: 'Service projects, volunteer work, and social initiatives that instill a spirit of giving back to the community.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const photoGrid = [
  { title: 'Academic Life', image: '/images/formation/bernie.png', category: 'Academics', colSpan: 'lg:col-span-2', aspect: 'aspect-[4/3]' },
  { title: 'Sports', image: '/images/activities/sports.png', category: 'Sports', colSpan: 'lg:col-span-2', aspect: 'aspect-[4/3]' },
  { title: 'Excursions', image: '/images/activities/excursion.png', category: 'Outdoors', colSpan: 'lg:col-span-2', aspect: 'aspect-[4/3]' },
  { title: 'Formation', image: '/images/activities/spiritual.png', category: 'Spiritual', colSpan: 'lg:col-span-3', aspect: 'aspect-[4/3]' },
  { title: 'Outreach', image: '/images/life/community.png', category: 'Service', colSpan: 'lg:col-span-3', aspect: 'aspect-[4/3]' },
];

const accelerateSlides = [
  {
    src: '/images/Accelerate/Invite Card.png',
    alt: 'Accelerate Program Overview - Invite Card 1',
  },
  {
    src: '/images/Accelerate/Invite Card _2.png',
    alt: 'Accelerate Mentors & Details - Invite Card 2',
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % accelerateSlides.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + accelerateSlides.length) % accelerateSlides.length);
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/ALL.PNG"
            alt="Maynilad University Center"
            fill
            className="object-cover opacity-30 scale-105 animate-subtle-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        </div>

        <div className="container-custom relative z-10 py-20 text-center text-white">
          <p className="section-label text-white/90 animate-fade-in mb-6">
            Maynilad University Center
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
            Where Greatness in the Ordinary Begins
          </h1>

          <p className="text-lg sm:text-xl font-body text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Forming university men of competence, conscience, and compassion through professional, personal, and spiritual development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/about" className="btn-secondary w-full sm:w-auto">
              Discover Maynilad
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-padding bg-surface-warm">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="section-label">About Us</p>
              <h2 className="text-section font-heading font-bold text-primary mb-6">
                Forming Leaders of Competence, Conscience, and Compassion
              </h2>
              <p className="text-text-secondary font-body leading-relaxed mb-6">
                Maynilad University Center provides a holistic program designed to develop aspiring leaders equipped for professional excellence and meaningful service. Through leadership seminars, academic development, spiritual formation, coaching, and mentoring, students are empowered to grow in virtue and responsibility.
              </p>
              <p className="text-text-secondary font-body leading-relaxed mb-8">
                More than an academic center, Maynilad is a community — a second home where university men discover the extraordinary within the ordinary.
              </p>
              <Link href="/about" className="btn-outline">
                Learn Our Story
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-gray-100/80">
                <Image
                  src="/images/hero/UNIV.png"
                  alt="Students at Maynilad University Center"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== ACCELERATE FLAGSHIP PROGRAM ===== */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        {/* Background Image with Dark Green Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/Accelerate/background.png"
            alt="Accelerate Background"
            fill
            className="object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6">
                  <span className="text-sm">🚀</span>
                  <span className="text-white font-body text-xs font-bold uppercase tracking-widest">
                    Flagship Program
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
                  Accelerate <span className="text-white/70 text-2xl md:text-3xl font-normal block lg:inline">by Maynilad</span>
                </h2>
                <p className="text-white/85 font-body text-base md:text-lg leading-relaxed mb-6">
                  Our 12-month flagship group mentoring program designed specifically for university men in Manila. Master coursework self-discipline, build organizational leadership confidence, and get mentored in real-time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="font-heading font-bold text-white text-sm mb-1">Group Mentoring</p>
                    <p className="font-body text-white/70 text-xs">Real-time guidance with like-minded peers</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="font-heading font-bold text-white text-sm mb-1">Academic Discipline</p>
                    <p className="font-body text-white/70 text-xs">Tools for heavy university coursework</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="font-heading font-bold text-white text-sm mb-1">Career Prep</p>
                    <p className="font-body text-white/70 text-xs">Leadership skills for future professionals</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="https://maynilad.carrd.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <span>Learn More (carrd.co)</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://bit.ly/AccelerateRegForm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full border-2 border-white/40 text-white font-body text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Apply to be a Mentee</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6">
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[3/2] group">
                  {/* Active Slide Image */}
                  <div
                    onClick={() => setActiveModalImage(accelerateSlides[currentSlide].src)}
                    className="w-full h-full relative cursor-pointer"
                    title="Click to view full graphic"
                  >
                    <Image
                      src={accelerateSlides[currentSlide].src}
                      alt={accelerateSlides[currentSlide].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 backdrop-blur-md text-primary font-body text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                        <span>Click to Expand Graphic</span>
                      </span>
                    </div>
                  </div>

                  {/* Previous Arrow */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 z-20"
                    aria-label="Previous Slide"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Arrow */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 z-20"
                    aria-label="Next Slide"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {accelerateSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80 w-2.5'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIFE AT MAYNILAD - Photo Grid ===== */}
      <section className="py-20 bg-surface-warm">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label">Experience</p>
            <h2 className="text-section font-heading font-bold text-primary">
              Life at Maynilad
            </h2>
            <p className="text-text-muted font-body mt-3 max-w-xl mx-auto text-sm">
              Click on any photo to explore that part of Maynilad life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {photoGrid.map((item, index) => {
              const linkMap: Record<string, string> = {
                'Academic Life': '/formation',
                'Sports': '/activities',
                'Excursions': '/activities',
                'Formation': '/formation',
                'Outreach': '/activities',
              };
              const targetHref = linkMap[item.title] || '/activities';

              return (
                <AnimatedSection key={item.title} delay={index * 0.08} className={item.colSpan}>
                  <Link href={targetHref} className="block group h-full">
                    <div className={`relative ${item.aspect} rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                        <div>
                          <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-3xl drop-shadow-md leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-300 flex-shrink-0 ml-3">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS & ACTIVITIES ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label">What We Offer</p>
            <h2 className="text-section font-heading font-bold text-primary mb-4">
              Programs & Activities
            </h2>
            <p className="text-gray-600 font-body max-w-2xl mx-auto">
              Our holistic program develops aspiring leaders equipped for professional excellence and meaningful service to others.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <AnimatedSection key={activity.title} delay={index * 0.1}>
                <div className="bg-surface-warm border border-gray-100/90 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                  <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link href="/activities" className="btn-primary">
              View All Activities
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-28 bg-surface-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Begin Your Journey at Maynilad?
            </h2>
            <p className="text-text-secondary font-body text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Discover how Maynilad University Center can help you grow in competence, character, and leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Contact Us Today
              </Link>
              <Link href="/about" className="btn-outline w-full sm:w-auto text-center">
                Learn More About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== LIGHTBOX MODAL FOR FULL IMAGE PREVIEW ===== */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setActiveModalImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveModalImage(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close image preview"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newIdx = (currentSlide - 1 + accelerateSlides.length) % accelerateSlides.length;
              setCurrentSlide(newIdx);
              setActiveModalImage(accelerateSlides[newIdx].src);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 z-50"
            aria-label="Previous Graphic"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Modal Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newIdx = (currentSlide + 1) % accelerateSlides.length;
              setCurrentSlide(newIdx);
              setActiveModalImage(accelerateSlides[newIdx].src);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 z-50"
            aria-label="Next Graphic"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeModalImage}
              alt="Accelerate Invite Card Full Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
