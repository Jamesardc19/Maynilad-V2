import React from 'react';
import { getPrograms, Program } from '../services/api';

// This is a Server Component that fetches data on the server
export default async function ProgramsPage() {
  // Fetch programs data
  const programs: Program[] = await getPrograms();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
          <p className="text-lg max-w-3xl">
            Discover our comprehensive range of academic programs designed to prepare you for success in your chosen field.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.length > 0 ? (
              programs.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{program.name}</h3>
                    <p className="text-sm text-secondary font-medium mb-4">{program.department} • {program.duration}</p>
                    <p className="text-text-light mb-4">
                      {program.description}
                    </p>
                    <button className="text-primary font-medium hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // Fallback content if API fails or returns empty
              <>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-secondary font-medium mb-4">School of Engineering and Technology • 4 years</p>
                    <p className="text-text-light mb-4">
                      A comprehensive program that covers programming, algorithms, data structures, and software engineering principles.
                    </p>
                    <button className="text-primary font-medium hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Bachelor of Arts in Philosophy</h3>
                    <p className="text-sm text-secondary font-medium mb-4">School of Humanities • 4 years</p>
                    <p className="text-text-light mb-4">
                      A program that explores the fundamental questions of existence, knowledge, values, reason, mind, and language.
                    </p>
                    <button className="text-primary font-medium hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Master of Business Administration</h3>
                    <p className="text-sm text-secondary font-medium mb-4">School of Business • 2 years</p>
                    <p className="text-text-light mb-4">
                      An advanced degree program that prepares students for leadership roles in business and management.
                    </p>
                    <button className="text-primary font-medium hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Admission Requirements</h2>
          
          <div className="bg-primary-light p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Undergraduate Programs</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Completed application form</li>
              <li>High school transcript of records</li>
              <li>Certificate of good moral character</li>
              <li>Entrance examination results</li>
              <li>Two passport-sized photographs</li>
              <li>Interview with the admissions committee</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4">Graduate Programs</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Completed application form</li>
              <li>Bachelor's degree in a relevant field</li>
              <li>Official transcript of records</li>
              <li>Letters of recommendation (2)</li>
              <li>Statement of purpose</li>
              <li>Curriculum vitae</li>
              <li>Interview with the program director</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary mb-8">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-primary mb-2">Submit Application</h3>
              <p className="text-text-light">Complete and submit the online application form with all required documents.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-primary mb-2">Entrance Exam</h3>
              <p className="text-text-light">Take the entrance examination on your scheduled date.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-primary mb-2">Interview</h3>
              <p className="text-text-light">Attend an interview with the admissions committee or program director.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-primary mb-2">Admission Decision</h3>
              <p className="text-text-light">Receive your admission decision and enrollment instructions.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">Apply Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}
