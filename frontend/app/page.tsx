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

      {/* Announcement Banner */}
      <div className="bg-secondary py-4 text-center text-primary font-medium">
        <div className="container-custom">
          Applications are open until May 16, 2025. Click here for more information.
        </div>
      </div>

      {/* Featured News Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Image placeholder - replace with actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">A Legacy of Excellence: Maynilad Confers Highest Academic Titles</h3>
                <p className="text-text-light mb-4">
                  On April 2, the Maynilad University Study Center held a historic Conferment Ceremony at the Li Seng Giap Auditorium.
                </p>
                <Link href="/news/1" className="text-primary font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Image placeholder - replace with actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Accepted applicants for SY 2025-2026</h3>
                <p className="text-text-light mb-4">
                  The list of accepted applicants for SY 2025-2026 may now be viewed below. For inquiries, please email the Admissions Office.
                </p>
                <Link href="/news/2" className="text-primary font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200"></div>
                {/* Image placeholder - replace with actual image */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Maynilad launches CORE Cebu</h3>
                <p className="text-text-light mb-4">
                  The Maynilad University Study Center launched its first regional executive education hub—Maynilad CORE Cebu—on March 28, 2025.
                </p>
                <Link href="/news/3" className="text-primary font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/news" className="btn-primary">
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

      {/* May Activities Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">May Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-light p-6 rounded-lg flex items-center">
              <div className="mr-4 text-4xl font-bold">10</div>
              <div>
                <h3 className="text-xl font-bold">LA NAVAL DE MANILA PILGRIMAGE</h3>
                <p>Sto. Domingo Church</p>
              </div>
            </div>
            <div className="bg-primary-light p-6 rounded-lg flex items-center">
              <div className="mr-4 text-4xl font-bold">17</div>
              <div>
                <h3 className="text-xl font-bold">OUR LADY OF CAYSASAY PILGRIMAGE</h3>
                <p>Taal, Batangas</p>
              </div>
            </div>
            <div className="bg-primary-light p-6 rounded-lg flex items-center">
              <div className="mr-4 text-4xl font-bold">24</div>
              <div>
                <h3 className="text-xl font-bold">RECOLLECTION & COOKOUT</h3>
                <p>Maynilad Center</p>
              </div>
            </div>
            <div className="bg-primary-light p-6 rounded-lg flex items-center">
              <div className="mr-4 text-4xl font-bold">28</div>
              <div>
                <h3 className="text-xl font-bold">BASKETBALL</h3>
                <p>PARQAL, Parañaque</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MAYNILAD UNIVERSITY STUDY CENTER</h3>
              <p className="mb-2">Pearl Drive, Ortigas Center</p>
              <p className="mb-2">Pasig City 1605, Philippines</p>
              <p>(632) 8637-0912 to 26</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-secondary">About</Link></li>
                <li><Link href="/admissions" className="hover:text-secondary">Admissions</Link></li>
                <li><Link href="/programs" className="hover:text-secondary">Programs</Link></li>
                <li><Link href="/news" className="hover:text-secondary">News & Events</Link></li>
                <li><Link href="/contact" className="hover:text-secondary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-secondary">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-secondary">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-secondary">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-secondary">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center">© {new Date().getFullYear()} Maynilad University Study Center. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
