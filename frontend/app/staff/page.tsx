import React from 'react';

export default function Staff() {
  return (
    <main className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8 text-primary">Our Staff</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership Team Members */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Dr. Maria Santos</h3>
                <p className="text-primary font-medium mb-3">Director</p>
                <p className="text-sm">Ph.D. in Educational Leadership with over 20 years of experience in academic administration and teaching.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Prof. Juan Reyes</h3>
                <p className="text-primary font-medium mb-3">Academic Coordinator</p>
                <p className="text-sm">Master's in Curriculum Development with expertise in designing innovative educational programs.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Ms. Ana Lim</h3>
                <p className="text-primary font-medium mb-3">Student Affairs Head</p>
                <p className="text-sm">Specializes in student counseling and holistic development programs for young adults.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Faculty</h2>
          <p className="mb-6">
            Our faculty members are experts in their fields with a passion for teaching and mentoring students.
            They bring a wealth of academic knowledge and real-world experience to the classroom.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Faculty Members */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded-md mb-3"></div>
              <h3 className="font-semibold">Dr. Carlos Mendoza</h3>
              <p className="text-sm text-primary">Mathematics</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded-md mb-3"></div>
              <h3 className="font-semibold">Prof. Elena Cruz</h3>
              <p className="text-sm text-primary">Literature</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded-md mb-3"></div>
              <h3 className="font-semibold">Dr. Ramon Torres</h3>
              <p className="text-sm text-primary">Sciences</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 rounded-md mb-3"></div>
              <h3 className="font-semibold">Prof. Sofia Garcia</h3>
              <p className="text-sm text-primary">History</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Support Staff</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Administrative Team</h3>
              <p>Our administrative staff ensures smooth operations of all university functions, from enrollment to record-keeping.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Guidance Counselors</h3>
              <p>Professional counselors provide academic, career, and personal guidance to help students navigate their university journey.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Facilities Management</h3>
              <p>Dedicated staff who maintain our campus facilities to provide a conducive environment for learning and development.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
