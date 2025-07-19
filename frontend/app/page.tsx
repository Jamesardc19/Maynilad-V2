import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-primary-dark opacity-40 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 tracking-wide">
              Where Greatness in the Ordinary begins
            </h1>
            <p className="text-lg md:text-xl mb-8 font-body">
              A study center for university men committed to academic excellence, leadership, and a life rooted in the Christian faith.
            </p>
          </div>
        </div>
      </section>

      {/* May Activities Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-primary tracking-wide">July Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">10</div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary tracking-wide">LA NAVAL DE MANILA PILGRIMAGE</h3>
                <p className="font-body">Sto. Domingo Church</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">17</div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary tracking-wide">OUR LADY OF CAYSASAY PILGRIMAGE</h3>
                <p className="font-body">Taal, Batangas</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">24</div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary tracking-wide">RECOLLECTION & COOKOUT</h3>
                <p className="font-body">Maynilad Center</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">28</div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary tracking-wide">BASKETBALL</h3>
                <p className="font-body">PARQAL, Parañaque</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs and Activities Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-white tracking-wide">Programs and Activities</h2>
          <p className="text-lg font-body max-w-4xl mx-auto mb-12 text-center text-white">
            Our holistic program is designed to develop aspiring leaders equipped for professional excellence and meaningful service.
            Through leadership seminars, academic development, spiritual formation, coaching, and mentoring, students are
            empowered to grow in virtue and responsibility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14h.01M12 19h.01M20 14h.01M12 14h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-white tracking-wide">Leadership & Academic Development</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-white tracking-wide">Cultural and Outdoors</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-white tracking-wide">Spiritual Formation</h3>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-white tracking-wide">Community Outreach</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-primary tracking-wide">Take the first step— join a community of<br />driven young men committed to excellence.</h2>
          
          <div className="w-48 h-48 mx-auto my-8 border-4 border-primary p-2">
            <img 
              src="/images/Maynilad QR.jpeg" 
              alt="Maynilad QR Code" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-lg font-body max-w-3xl mx-auto mb-8 text-text">
            Are you ready to challenge yourself academically, morally, and spiritually? Join Maynilad University Center by scanning
            the QR code and embark on a journey toward becoming a leader who makes a meaningful impact.
          </p>
        </div>
      </section>
    </main>
  );
}
