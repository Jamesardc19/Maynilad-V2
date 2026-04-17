import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

const formationPillars = [
  {
    title: 'Character Development',
    description: 'We focus on developing virtues such as integrity, responsibility, perseverance, and respect for others. Through mentoring sessions and workshops, students learn to make sound decisions and develop strong moral principles.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Spiritual Growth',
    description: 'We offer opportunities for spiritual reflection and growth. Voluntary retreats, recollections, and discussions on ethics and values help students develop their spiritual dimension.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Intellectual Formation',
    description: 'We sharpen the mind through study circles, academic coaching, and seminars. Students are encouraged to pursue excellence in their university studies with dedicated mentors supporting their growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Apostolic Formation',
    description: 'We develop a spirit of service and mission. Students are encouraged to give back to their communities and to help bring others into the Maynilad family through friendship and example.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const leadershipSkills = [
  { title: 'Communication', description: 'Public speaking, active listening, and persuasive writing.' },
  { title: 'Team Building', description: 'Collaboration, conflict resolution, and group management.' },
  { title: 'Ethical Leadership', description: 'Integrity, accountability, and social responsibility.' },
];

const mentoringSteps = [
  'Regular one-on-one sessions with experienced mentors',
  'Personalized guidance on academic and career planning',
  'Support for personal development and life skills',
  'Assistance in setting and achieving goals',
  'Connection to resources and opportunities in your field',
];

export default function FormationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/formation/hero.png" alt="Formation" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-gold-light mb-4">Holistic Growth</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Formation Program
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl">
              Education goes beyond the classroom. Our formation program is designed to develop the whole person — intellectually, morally, spiritually, and socially.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <p className="section-label">The Foundation</p>
            <h2 className="text-section font-heading font-bold text-primary">Holistic Formation</h2>
            <p className="text-gray-500 font-body mt-3 max-w-xl">
              Our formation is built on four pillars that work together to develop excellent, virtuous men ready for life's challenges.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {formationPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.1}>
                <div className="flex gap-5 p-7 rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/10 transition-all duration-300 h-full group">
                  <div className="flex-shrink-0 text-primary group-hover:text-gold transition-colors duration-300 mt-1">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-lg mb-2">{pillar.title}</h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoring Program */}
      <section className="py-20 bg-surface-warm">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image src="/images/formation/hero.png" alt="Mentoring" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-gold-light font-body text-xs uppercase tracking-widest mb-1">Personal Growth</p>
                  <p className="text-white font-heading font-bold text-xl">Every student has a dedicated mentor.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="section-label">Personalized Support</p>
              <h2 className="text-section font-heading font-bold text-primary mb-4">Mentoring Program</h2>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                Each student is assigned a personal mentor who provides guidance on academic, personal, and professional matters. Regular one-on-one sessions help students navigate challenges and maximize their potential.
              </p>

              <div className="space-y-3">
                {mentoringSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-body font-semibold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 font-body text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Development */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label text-gold-light">Skills & Competencies</p>
            <h2 className="text-section font-heading font-bold text-white mb-4">Leadership Development</h2>
            <p className="text-white/70 font-body max-w-xl mx-auto">
              We prepare students to be future leaders through workshops, seminars, and practical experiences.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {leadershipSkills.map((skill, index) => (
              <AnimatedSection key={skill.title} delay={index * 0.1}>
                <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center mx-auto mb-6">
                    <span className="text-gold font-heading font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{skill.title}</h3>
                  <p className="text-white/60 font-body text-sm">{skill.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
