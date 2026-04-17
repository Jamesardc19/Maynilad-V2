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
    description: 'Seminars, coaching sessions, and workshops that develop professional competence and intellectual growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Cultural & Outdoors',
    description: 'Pilgrimages, recollections, hiking, and cultural immersions that broaden perspectives and build character.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Spiritual Formation',
    description: 'Guided retreats, mentoring on faith and values, and opportunities for spiritual reflection and personal growth.',
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

const events = [
  { day: '10', title: 'LA NAVAL DE MANILA PILGRIMAGE', location: 'Sto. Domingo Church' },
  { day: '17', title: 'OUR LADY OF CAYSASAY PILGRIMAGE', location: 'Taal, Batangas' },
  { day: '24', title: 'RECOLLECTION & COOKOUT', location: 'Maynilad Center' },
  { day: '28', title: 'BASKETBALL', location: 'PARQAL, Parañaque' },
];

export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/ALL.PNG"
            alt="Maynilad University Center"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center max-w-4xl mx-auto">
          <p className="section-label text-gold-light animate-fade-in mb-6">
            Maynilad University Center
          </p>
          <h1 className="text-hero font-heading font-bold text-white mb-6 animate-fade-up text-balance">
            Where Greatness in the Ordinary Begins
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A center for university men committed to academic excellence, leadership, and a life rooted in service and the Christian faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/about" className="btn-primary">
              Discover Maynilad
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
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
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero/UNIV.png"
                    alt="Students at Maynilad University Center"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== LIFE AT MAYNILAD - Photo Grid ===== */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <p className="section-label">Experience</p>
            <h2 className="text-section font-heading font-bold text-primary">
              Life at Maynilad
            </h2>
            <p className="text-text-muted font-body mt-3 max-w-xl mx-auto text-sm">
              Click on any photo to explore that part of Maynilad life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: '/images/life/study.png', label: 'Academic Life', sub: 'Study & growth', href: '/about', delay: 0.05 },
              { src: '/images/activities/sports.png', label: 'Sports', sub: 'Basketball & more', href: '/activities', delay: 0.1 },
              { src: '/images/activities/cultural.png', label: 'Cultural Events', sub: 'Music & celebrations', href: '/activities', delay: 0.15 },
              { src: '/images/hero/HEADER.png', label: 'Formation', sub: 'Mentoring & values', href: '/formation', delay: 0.2 },
              { src: '/images/life/community.png', label: 'Community', sub: 'Outreach & service', href: '/activities', delay: 0.25 },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
                <Link href={item.href} className="block relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-heading font-semibold text-sm">{item.label}</p>
                    <p className="text-white/70 font-body text-xs mt-0.5">{item.sub}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS & ACTIVITIES ===== */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label">What We Offer</p>
            <h2 className="text-section font-heading font-bold text-white mb-4">
              Programs & Activities
            </h2>
            <p className="text-white/70 font-body max-w-2xl mx-auto">
              Our holistic program develops aspiring leaders equipped for professional excellence and meaningful service to others.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <AnimatedSection key={activity.title} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-500 group h-full">
                  <div className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110">
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link href="/activities" className="btn-secondary">
              View All Activities
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="section-padding bg-surface-warm">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="section-label">Calendar</p>
              <h2 className="text-section font-heading font-bold text-primary mb-8">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-4 rounded-lg hover:bg-white transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                      <span className="text-2xl font-heading font-bold text-white">{event.day}</span>
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-text tracking-wide text-sm uppercase">
                        {event.title}
                      </h3>
                      <p className="text-text-muted font-body text-sm mt-1">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/activities/maynilad.png"
                  alt="Maynilad events"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-gold-light font-body text-xs uppercase tracking-widest mb-2">Join Us</p>
                  <p className="text-white font-heading text-2xl font-bold">
                    Be Part of the Maynilad Community
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <p className="section-label text-gold-light mb-4">Join Maynilad</p>
            <h2 className="text-section font-heading font-bold text-white mb-6 max-w-3xl mx-auto text-balance">
              Take the first step — join a community of driven young men committed to excellence.
            </h2>
            <p className="text-white/60 font-body max-w-xl mx-auto mb-10">
              Are you ready to challenge yourself academically, morally, and spiritually? Scan the QR code or reach out to us today.
            </p>

            <div className="flex flex-col items-center gap-8">
              <div className="w-40 h-40 bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/images/Maynilad QR.jpeg"
                  alt="Maynilad QR Code"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <Link href="/contact" className="btn-primary bg-gold hover:bg-gold-dark text-primary-dark">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
