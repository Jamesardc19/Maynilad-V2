import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  title: 'Maynilad University Center',
  description: 'Official website of Maynilad University Center — forming leaders of competence, conscience, and compassion.',
  icons: {
    icon: '/images/Maynilad Logo.png',
    apple: '/images/Maynilad Logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F3C3E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
