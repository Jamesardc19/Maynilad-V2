import React from 'react';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-wide">About Maynilad University Study Center</h1>
          <p className="text-lg max-w-3xl font-body">
            Dedicated to academic excellence and holistic formation since its founding.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4 tracking-wide">Our Mission</h2>
              <p className="font-body">
                Maynilad University Study Center is committed to providing quality education that integrates academic excellence with values formation. We aim to develop professionals who are not only competent in their fields but also possess a strong sense of ethics and social responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4 tracking-wide">Our Vision</h2>
              <p className="font-body">
                To be a leading institution in holistic education, forming individuals who excel in their professional fields while contributing positively to society through their integrity, leadership, and service to others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-background-dark dark:bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 tracking-wide">Our History</h2>
          <div className="bg-white p-8 rounded-lg shadow-md dark:bg-background">
            <p className="mb-4 font-body">
              Founded in 1995, Maynilad University Study Center began as a small academic support center for college students. Over the years, it has grown into a comprehensive educational institution offering various academic programs.
            </p>
            <p className="mb-4 font-body">
              In 2005, the center expanded its facilities and curriculum to include more specialized programs in response to the growing needs of students and the evolving demands of the job market.
            </p>
            <p className="font-body">
              Today, Maynilad University Study Center stands as a testament to its commitment to educational excellence, with state-of-the-art facilities, a diverse faculty of experts, and a strong alumni network making significant contributions in various fields.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 tracking-wide">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 tracking-wide">Excellence</h3>
              <p className="font-body">
                We strive for the highest standards in all our academic and formative endeavors, encouraging a culture of continuous improvement and lifelong learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 tracking-wide">Integrity</h3>
              <p className="font-body">
                We uphold honesty, ethical behavior, and accountability in all our actions and decisions, fostering a community built on trust and respect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 tracking-wide">Service</h3>
              <p className="font-body">
                We are committed to serving others and contributing positively to society, instilling in our students a sense of social responsibility and civic engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 tracking-wide">Leadership</h3>
              <p className="font-body">
                We develop leaders who can inspire and guide others with vision, empathy, and a commitment to the common good.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 tracking-wide">Innovation</h3>
              <p className="font-body">
                We embrace creativity and forward-thinking approaches to education and problem-solving, preparing our students for the challenges of a rapidly changing world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3 tracking-wide">Community</h3>
              <p className="font-body">
                We foster a supportive and inclusive community where diverse perspectives are valued and everyone feels a sense of belonging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
