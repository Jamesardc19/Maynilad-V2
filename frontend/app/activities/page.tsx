import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

const activityCards = [
  {
    title: 'Study Sessions',
    description: 'Focused group study, tutorials, and exam reviews that sharpen discipline and academic performance.',
    image: '/images/formation/bernie.png',
    tag: 'Academics',
  },
  {
    title: 'Excursions',
    description: 'Hiking, Camping, heritage visits, and outdoor immersions that broaden perspective and build camaraderie.',
    image: '/images/activities/excursion.png',
    tag: 'Culture',
  },
  {
    title: 'Sports',
    description: 'Basketball and running sessions that develop teamwork, discipline, and physical fitness.',
    image: '/images/activities/sports.png',
    tag: 'Sports',
  },
  {
    title: 'Spiritual Guidance',
    description: 'Formative talks, spiritual direction, and the sacraments that deepen faith and personal integrity.',
    image: '/images/activities/spiritual.png',
    tag: 'Formation',
  },
];

export default function ActivitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/activities/sports.png" alt="Activities" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-white/90 mb-4">What We Do</p>
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
          <AnimatedSection className="mb-14 text-center">
            <p className="section-label">Student Life</p>
            <h2 className="text-section font-heading font-bold text-primary">Student Activities</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activityCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100/90 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full group">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary text-xs font-body font-bold px-4 py-1.5 rounded-full shadow-sm">
                      {card.tag}
                    </span>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-primary text-2xl mb-3">{card.title}</h3>
                    <p className="font-body text-gray-600 text-base leading-relaxed flex-1">{card.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-20 bg-surface-warm">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="section-label mb-4">Give Back</p>
              <h2 className="text-section font-heading font-bold text-primary mb-6">
                Community Outreach Program
              </h2>
              <p className="text-text-secondary font-body leading-relaxed mb-6">
                We believe that true leadership means serving others. Our community outreach program connects students with volunteer opportunities, social advocacy projects, and partnerships with local communities.
              </p>
              <ul className="space-y-3.5 mb-8">
                {['Volunteer Catechism', 'Visits to the Poor', 'Visits to the Sick'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary font-body text-sm font-medium">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">Get Involved</Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-gray-100/80">
                <Image src="/images/life/community.png" alt="Community Outreach" fill className="object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
