import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Maynilad University Center',
  description: 'Official website of Maynilad University Center',
  icons: {
    icon: '/images/Maynilad Logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />        
      </body>
    </html>
  );
}
