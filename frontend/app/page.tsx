import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Where Greatness in the Ordinary begins
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Maynilad University Study Center offers academic excellence and holistic formation
            </p>
            <Link href="/apply" className="btn-secondary">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* May Activities Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">May Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">10</div>
              <div>
                <h3 className="text-xl font-bold text-primary">LA NAVAL DE MANILA PILGRIMAGE</h3>
                <p className="text-text-light">Sto. Domingo Church</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">17</div>
              <div>
                <h3 className="text-xl font-bold text-primary">OUR LADY OF CAYSASAY PILGRIMAGE</h3>
                <p className="text-text-light">Taal, Batangas</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">24</div>
              <div>
                <h3 className="text-xl font-bold text-primary">RECOLLECTION & COOKOUT</h3>
                <p className="text-text-light">Maynilad Center</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4 text-4xl font-bold text-primary">28</div>
              <div>
                <h3 className="text-xl font-bold text-primary">BASKETBALL</h3>
                <p className="text-text-light">PARQAL, Parañaque</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Announcement Banner
      <div className="bg-secondary py-4 text-center text-primary font-medium">
        <div className="container-custom">
          Applications are open until May 16, 2025. Click here for more information.
        </div>
      </div> */}

      {/* Featured Activities Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Latest Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-primary-light rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Image placeholder - replace with actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Academic Excellence Awards Ceremony</h3>
                <p className="text-white opacity-80 mb-4">
                  On April 2, the Maynilad University Study Center celebrated student achievements at the annual Academic Excellence Awards.
                </p>
                <Link href="/activities" className="text-white font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-primary-light rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Image placeholder - replace with actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Student Leadership Summit 2025</h3>
                <p className="text-white opacity-80 mb-4">
                  Our annual Student Leadership Summit brought together student leaders for workshops, seminars, and team-building activities.
                </p>
                <Link href="/activities" className="text-white font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-primary-light rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Image placeholder - replace with actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Cultural Festival Week</h3>
                <p className="text-white opacity-80 mb-4">
                  Our annual Cultural Festival Week celebrated diversity through music, dance, art exhibitions, and culinary showcases from different cultures.
                </p>
                <Link href="/activities" className="text-white font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/activities" className="btn-secondary">
              See more
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="section-padding bg-background-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-80 relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-300"></div>
              {/* Image placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Campus Life</h3>
              </div>
            </div>
            <div className="h-80 relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-300"></div>
              {/* Image placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Book a Tour</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
