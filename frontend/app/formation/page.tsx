import React from 'react';

export default function Formation() {
  return (
    <main className="container-custom py-16">
      <h1 className="text-4xl font-heading font-bold mb-8 text-primary tracking-wide">Formation</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-heading font-semibold mb-4 tracking-wide text-text">Holistic Formation</h2>
          <p className="mb-6 font-body text-text">
            At Maynilad University Study Center, we believe that education goes beyond academic excellence. 
            Our formation program is designed to develop the whole person - intellectually, morally, 
            spiritually, and socially.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md dark-card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary tracking-wide">Character Development</h3>
              <p className="font-body">
                We focus on developing virtues such as integrity, responsibility, perseverance, 
                and respect for others. Through mentoring sessions and workshops, students learn 
                to make sound decisions and develop strong moral principles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md dark-card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary tracking-wide">Spiritual Growth</h3>
              <p className="font-body">
                While respecting each student's personal beliefs, we offer opportunities for 
                spiritual reflection and growth. Voluntary retreats, meditation sessions, and 
                discussions on ethics and values help students develop their spiritual dimension.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-heading font-semibold mb-4 tracking-wide text-text">Mentoring Program</h2>
          <p className="mb-6 font-body text-text">
            Each student is assigned a personal mentor who provides guidance on academic, 
            personal, and professional matters. Regular one-on-one sessions help students 
            navigate challenges and maximize their potential.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md dark-card">
            <h3 className="text-xl font-heading font-semibold mb-3 text-primary tracking-wide">How Our Mentoring Works</h3>
            <ul className="list-disc pl-5 space-y-2 textfont-body">
              <li>Regular one-on-one sessions with experienced mentors</li>
              <li>Personalized guidance on academic and career planning</li>
              <li>Support for personal development and life skills</li>
              <li>Assistance in setting and achieving goals</li>
              <li>Connection to resources and opportunities</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-heading font-semibold mb-4 tracking-wide text-text">Leadership Development</h2>
          <p className="mb-6 font-body text-text">
            We prepare students to be future leaders in their fields and communities. 
            Through workshops, seminars, and practical experiences, students develop 
            essential leadership skills.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary text-white p-5 rounded-lg">
              <h3 className="font-heading font-semibold mb-2 tracking-wide">Communication Skills</h3>
              <p className="text-sm font-body">Learn effective public speaking, active listening, and persuasive writing.</p>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg">
              <h3 className="font-heading font-semibold mb-2 tracking-wide">Team Building</h3>
              <p className="text-sm font-body">Develop collaboration, conflict resolution, and group management skills.</p>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg">
              <h3 className="font-heading font-semibold mb-2 tracking-wide">Ethical Leadership</h3>
              <p className="text-sm font-body">Understand the importance of integrity, accountability, and social responsibility.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
