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
];

export default function StaffPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero.png" alt="Our Staff" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <p className="section-label text-white/90 mb-4">The People Behind Maynilad</p>
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
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label">Meet the Team</p>
            <h2 className="text-section font-heading font-bold text-primary">
              Dedicated to Your Growth
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.08}>
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-100/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Photo */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="font-heading font-bold text-primary text-lg mb-1.5 leading-snug">
                        {member.name}
                      </h3>
                      <span className="inline-block bg-primary/10 text-primary font-body text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                    <p className="font-body text-gray-600 text-xs leading-relaxed flex-1">
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
          <AnimatedSection className="mb-12 text-center">
            <p className="section-label text-white/90">Spiritual Guidance</p>
            <h2 className="text-section font-heading font-bold text-white">The Chaplaincy</h2>
            <p className="text-white/60 font-body text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
              The chaplaincy at Maynilad University Center is at the heart of our spiritual life. This includes administering the Sacraments, offering spiritual direction, organizing retreats and recollections, and teaching doctrine. The main spiritual emphasis revolves around discovering God in the ordinary — in our daily responsibilities, tasks, and relationships.
            </p>
          </AnimatedSection>

          {/* Featured Chaplain Card */}
          <AnimatedSection delay={0.15} className="max-w-md mx-auto">
            <div className="group text-center">
              {/* Photo */}
              <div className="relative w-44 h-56 mx-auto mb-5 overflow-hidden rounded-xl border-2 border-white/20 shadow-xl">
                <Image
                  src={chaplain.image}
                  alt={chaplain.name}
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Name & Title */}
              <h3 className="font-heading font-bold text-white text-xl mb-1">
                {chaplain.name}
              </h3>
              {/* Divider line */}
              <div className="w-16 h-0.5 bg-white/40 mx-auto my-2.5" />
              <p className="font-body text-white/90 font-semibold text-xs uppercase tracking-widest mb-0.5">
                {chaplain.role}
              </p>
              <p className="font-body text-white/50 text-[11px] uppercase tracking-wider mb-4">Priest</p>

              <p className="text-white/70 font-body text-xs leading-relaxed max-w-sm mx-auto">
                {chaplain.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
