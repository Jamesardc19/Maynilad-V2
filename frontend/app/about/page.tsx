import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

const values = [
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in all our academic and formative endeavors, encouraging a culture of continuous improvement.',
    icon: '⭐',
  },
  {
    title: 'Integrity',
    description: 'We uphold honesty, ethical behavior, and accountability in all our actions, fostering a community built on trust and respect.',
    icon: '🛡',
  },
  {
    title: 'Service',
    description: 'We are committed to serving others and contributing positively to society, instilling in our students social responsibility.',
    icon: '🤝',
  },
  {
    title: 'Leadership',
    description: 'We develop leaders who can inspire and guide others with vision, empathy, and a commitment to the common good.',
    icon: '🧭',
  },
  {
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking approaches, preparing students for the challenges of a rapidly changing world.',
    icon: '💡',
  },
  {
    title: 'Community',
    description: 'We foster a supportive environment where diverse perspectives are valued and everyone feels a sense of belonging.',
    icon: '🌏',
  },
];

const timeline = [
  { year: '1995', title: 'Foundation', description: 'Maynilad University Center was established as a small academic support center for college students in Manila.' },
  { year: '2005', title: 'Expansion', description: 'The center expanded its facilities and curriculum, introducing more specialized formation programs.' },
  { year: '2015', title: 'Growth', description: 'A decade of steady growth in membership, programs, and community partnerships across Metro Manila.' },
  { year: '2025', title: 'Today', description: 'Maynilad now serves hundreds of students with a robust holistic program, state-of-the-art facilities, and a strong alumni network.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero.png" alt="About Maynilad" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-gold-light mb-4">Who We Are</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              About Maynilad University Center
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl">
              Dedicated to academic excellence and holistic formation — forming leaders of competence, conscience, and compassion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-primary text-white p-10 rounded-xl h-full">
                <div className="w-12 h-12 border-2 border-gold rounded-lg flex items-center justify-center mb-6">
                  <span className="text-gold font-heading font-bold text-lg">M</span>
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4 tracking-wide">Our Mission</h2>
                <p className="font-body text-white/80 leading-relaxed">
                  Maynilad University Center is committed to providing quality formation that integrates academic excellence with values development. We develop professionals who are not only competent in their fields but also possess a strong sense of ethics and social responsibility.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="border-2 border-primary p-10 rounded-xl h-full">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-heading font-bold text-lg">V</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 tracking-wide">Our Vision</h2>
                <p className="font-body text-gray-600 leading-relaxed">
                  To be a leading institution in holistic formation, developing individuals who excel in their professional fields while contributing positively to society through integrity, leadership, and meaningful service to others.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-surface-warm">
        <div className="container-custom">
          <AnimatedSection className="mb-14">
            <p className="section-label">Our Story</p>
            <h2 className="text-section font-heading font-bold text-primary">Our History</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <span className="text-gold font-heading font-bold text-xl block mb-2">{item.year}</span>
                        <h3 className="font-heading font-bold text-primary text-lg mb-2">{item.title}</h3>
                        <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-0 items-center justify-center relative">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow absolute left-1/2 -translate-x-1/2 z-10" />
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label">What We Stand For</p>
            <h2 className="text-section font-heading font-bold text-primary">Our Core Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <div className="group p-8 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="font-heading font-bold text-primary text-lg mb-3">{value.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to be part of our community?</h2>
            <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">Meet our staff and explore what Maynilad has to offer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/staff" className="btn-primary bg-white text-primary hover:bg-gray-50">Meet the Staff</Link>
              <Link href="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
