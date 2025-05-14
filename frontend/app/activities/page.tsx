import React from 'react';

export default function Activities() {
  return (
    <main className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8 text-primary">Activities</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Student Activities</h2>
          <p className="mb-4">
            At Maynilad University Study Center, we believe in holistic development through a variety of engaging activities.
            Our students participate in academic, cultural, sports, and community service programs that enrich their university experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Activity Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Academic Competitions</h3>
                <p>Participate in debates, quiz bowls, and research symposiums to showcase your intellectual abilities.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Cultural Festivals</h3>
                <p>Celebrate diversity through music, dance, art exhibitions, and theatrical performances.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Sports Events</h3>
                <p>Join our basketball, volleyball, swimming, and track teams to develop teamwork and physical fitness.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold">Annual University Fair</h3>
              <p className="text-sm text-gray-600">June 15-17, 2025 | Main Campus</p>
              <p className="mt-2">Showcase of student projects, research, and performances.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold">Leadership Summit</h3>
              <p className="text-sm text-gray-600">July 8-10, 2025 | Conference Hall</p>
              <p className="mt-2">Workshops and seminars on developing leadership skills.</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold">Community Outreach Program</h3>
              <p className="text-sm text-gray-600">August 5, 2025 | Various Locations</p>
              <p className="mt-2">Volunteer opportunities to serve local communities.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
