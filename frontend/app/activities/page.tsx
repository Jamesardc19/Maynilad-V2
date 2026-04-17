import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

const activityCards = [
  {
    title: 'Academic Competitions',
    description: 'Participate in debates, quiz bowls, and research symposiums to showcase your intellectual abilities.',
    image: '/images/formation/bernie.png',
    tag: 'Academics',
  },
  {
    title: 'Cultural Festivals',
    description: 'Celebrate diversity through music, dance, art exhibitions, and theatrical performances.',
    image: '/images/activities/cultural.png',
    tag: 'Culture',
  },
  {
    title: 'Sports Events',
    description: 'Join our basketball, volleyball, and track teams to develop teamwork and physical fitness.',
    image: '/images/activities/sports.png',
    tag: 'Sports',
  },
];

const upcomingEvents = [
  { day: '10', month: 'Jul', title: 'La Naval de Manila Pilgrimage', location: 'Sto. Domingo Church', type: 'Spiritual' },
  { day: '17', month: 'Jul', title: 'Our Lady of Caysasay Pilgrimage', location: 'Taal, Batangas', type: 'Spiritual' },
  { day: '24', month: 'Jul', title: 'Recollection & Cookout', location: 'Maynilad Center', type: 'Formation' },
  { day: '28', month: 'Jul', title: 'Basketball Game', location: 'PARQAL, Parañaque', type: 'Sports' },
  { day: '15', month: 'Aug', title: 'Annual University Fair', location: 'Main Campus', type: 'Academic' },
  { day: '8', month: 'Sep', title: 'Leadership Summit', location: 'Conference Hall', type: 'Leadership' },
];

const tagColors: Record<string, string> = {
  Spiritual: 'bg-purple-50 text-purple-700',
  Formation: 'bg-green-50 text-green-700',
  Sports: 'bg-blue-50 text-blue-700',
  Academic: 'bg-amber-50 text-amber-700',
  Leadership: 'bg-primary/10 text-primary',
};

export default function ActivitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/activities/sports.png" alt="Activities" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-gold-light mb-4">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Activities & Events
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl">
              At Maynilad, we believe in holistic development through a variety of engaging activities — academic, cultural, spiritual, and beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Student Activities */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <p className="section-label">Student Life</p>
            <h2 className="text-section font-heading font-bold text-primary">Student Activities</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="card group h-full flex flex-col">
                  <div className="card-image relative h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-body font-semibold px-3 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-primary text-lg mb-2">{card.title}</h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">{card.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-surface-warm">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <p className="section-label">Schedule</p>
            <h2 className="text-section font-heading font-bold text-primary">Upcoming Events</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.07}>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 text-center">
                    <div className="w-14 h-14 bg-primary rounded-lg flex flex-col items-center justify-center">
                      <span className="text-white font-heading font-bold text-xl leading-none">{event.day}</span>
                      <span className="text-white/70 font-body text-xs uppercase tracking-wider mt-0.5">{event.month}</span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-body font-semibold px-2 py-0.5 rounded-full mb-2 ${tagColors[event.type] || 'bg-gray-100 text-gray-600'}`}>
                      {event.type}
                    </span>
                    <h3 className="font-heading font-bold text-primary text-sm leading-tight mb-1">{event.title}</h3>
                    <p className="text-gray-500 font-body text-xs">{event.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="section-label text-gold-light mb-4">Give Back</p>
              <h2 className="text-section font-heading font-bold text-white mb-6">
                Community Outreach Program
              </h2>
              <p className="text-white/70 font-body leading-relaxed mb-6">
                We believe that true leadership means serving others. Our community outreach program connects students with volunteer opportunities, social advocacy projects, and partnerships with local communities.
              </p>
              <ul className="space-y-3 mb-8">
                {['Volunteer teaching programs', 'Environmental advocacy', 'Community livelihood projects', 'Medical missions'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/80 font-body text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary">Get Involved</Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src="/images/life/community.png" alt="Community Outreach" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
