import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

// Fr. Dennis Yu is featured separately in the Chaplaincy section
const chaplain = {
  name: 'Fr. Dennis Yu',
  role: 'Chaplain',
  description: 'Fr. Dennis Yu serves as the Chaplain of Maynilad University Center. His ministry is at the heart of our spiritual life — administering the sacraments, offering spiritual direction, leading recollections and retreats, and guiding students to discover God in the ordinary tasks and responsibilities of everyday life.',
  image: '/images/staff/Dennis.png',
};

// Regular staff grid (Dennis Yu is in Chaplaincy section above, not here)
const staffMembers = [
  {
    name: 'Arwin Vibar',
    role: 'Director - UP Manila Associate Professor',
    description: 'A distinguished faculty member from the University of the Philippines, bringing world-class academic expertise and a passion for intellectual formation.',
    image: '/images/staff/Arwin.png',
  },
  {
    name: 'Janjan Ramirez',
    role: 'Vice Director - Economist',
    description: 'An accomplished economist who helps students understand the social and economic dimensions of leadership, governance, and professional life.',
    image: '/images/staff/Janjan.png',
  },
  {
    name: 'Ariel de Castro',
    role: 'Dual Tech Staff',
    description: 'A Dual Tech specialist who bridges academic theory with practical skills, equipping students with technical competencies for the modern workforce.',
    image: '/images/staff/Ariel.png',
  },
  {
    name: 'Raymond Ng',
    role: 'De La Salle University Assistant Professor Lecturer',
    description: 'A faculty member from De La Salle University, contributing his expertise in education and leadership development to the Maynilad formation program.',
    image: '/images/staff/Raymond.png',
  },
  {
    name: 'Donnell Dimaano',
    role: 'Digital Media',
    description: 'A digital media professional who guides students in navigating the modern digital landscape with creativity, responsibility, and purpose.',
    image: '/images/staff/Donnell.png',
  },
];

export default function StaffPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero.png" alt="Our Staff" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-gold-light mb-4">The People Behind Maynilad</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
              Our Staff
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl">
              Meet the dedicated professionals and mentors who guide, challenge, and inspire the students of Maynilad University Center every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STAFF GRID ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <p className="section-label">Meet the Team</p>
            <h2 className="text-section font-heading font-bold text-primary">
              Dedicated to Your Growth
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.08}>
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Photo */}
                  <div className="relative h-64 bg-surface-muted overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-heading font-bold text-primary text-xl mb-1">
                        {member.name}
                      </h3>
                      <span className="inline-block bg-primary/8 text-primary font-body text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                    <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">
                      {member.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE CHAPLAINCY ===== */}
      <section className="py-20 bg-primary-dark">
        <div className="container-custom">
          <AnimatedSection className="mb-14 text-center">
            <p className="section-label text-gold-light">Spiritual Guidance</p>
            <h2 className="text-section font-heading font-bold text-white">The Chaplaincy</h2>
            <p className="text-white/60 font-body max-w-2xl mx-auto mt-4 leading-relaxed">
              The chaplaincy at Maynilad University Center is at the heart of our spiritual life. This includes administering the Sacraments, offering spiritual direction, organizing retreats and recollections, and teaching doctrine. The main spiritual emphasis revolves around discovering God in the ordinary — in our daily responsibilities, tasks, and relationships.
            </p>
          </AnimatedSection>

          {/* Featured Chaplain Card */}
          <AnimatedSection delay={0.15} className="max-w-md mx-auto">
            <div className="group text-center">
              {/* Photo */}
              <div className="relative w-52 h-64 mx-auto mb-6 overflow-hidden rounded-xl border-2 border-gold/30 shadow-2xl">
                <Image
                  src={chaplain.image}
                  alt={chaplain.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Name & Title */}
              <h3 className="font-heading font-bold text-white text-2xl mb-1">
                {chaplain.name}
              </h3>
              {/* Divider line like in the reference */}
              <div className="w-24 h-px bg-gold mx-auto my-3" />
              <p className="font-body text-gold-light font-semibold text-sm uppercase tracking-widest mb-1">
                {chaplain.role}
              </p>
              <p className="font-body text-white/50 text-xs uppercase tracking-wider mb-6">Priest</p>

              <p className="text-white/70 font-body text-sm leading-relaxed max-w-sm mx-auto">
                {chaplain.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-surface-warm border-t border-gray-100">
        <div className="container-custom">
          <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
                Want to get to know us better?
              </h2>
              <p className="text-gray-500 font-body">Reach out — we'd be happy to talk.</p>
            </div>
            <Link href="/contact" className="btn-primary flex-shrink-0">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
