import React from 'react';

export default function Formation() {
  return (
    <main className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8 text-primary">Formation</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Holistic Formation</h2>
          <p className="mb-6">
            At Maynilad University Study Center, we believe that education goes beyond academic excellence. 
            Our formation program is designed to develop the whole person - intellectually, morally, 
            spiritually, and socially.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Character Development</h3>
              <p>
                We focus on developing virtues such as integrity, responsibility, perseverance, 
                and respect for others. Through mentoring sessions and workshops, students learn 
                to make sound decisions and develop strong moral principles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Spiritual Growth</h3>
              <p>
                While respecting each student's personal beliefs, we offer opportunities for 
                spiritual reflection and growth. Voluntary retreats, meditation sessions, and 
                discussions on ethics and values help students develop their spiritual dimension.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Mentoring Program</h2>
          <p className="mb-6">
            Each student is assigned a personal mentor who provides guidance on academic, 
            personal, and professional matters. Regular one-on-one sessions help students 
            navigate challenges and maximize their potential.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">How Our Mentoring Works</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Regular one-on-one sessions with experienced mentors</li>
              <li>Personalized guidance on academic and career planning</li>
              <li>Support for personal development and life skills</li>
              <li>Assistance in setting and achieving goals</li>
              <li>Connection to resources and opportunities</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Leadership Development</h2>
          <p className="mb-6">
            We prepare students to be future leaders in their fields and communities. 
            Through workshops, seminars, and practical experiences, students develop 
            essential leadership skills.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary text-white p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Communication Skills</h3>
              <p className="text-sm">Learn effective public speaking, active listening, and persuasive writing.</p>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Team Building</h3>
              <p className="text-sm">Develop collaboration, conflict resolution, and group management skills.</p>
            </div>
            <div className="bg-primary text-white p-5 rounded-lg">
              <h3 className="font-semibold mb-2">Ethical Leadership</h3>
              <p className="text-sm">Understand the importance of integrity, accountability, and social responsibility.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
