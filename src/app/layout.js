import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransitionLayout from '@/components/PageTransitionLayout';
import './globals.css';

export const metadata = {
  title: 'IP Music - Bot Musik Elegan', // Judul disesuaikan
  description: 'Dokumentasi resmi IP Music dengan tampilan gelap elegan dan aksen gradasi.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Latar belakang body diubah menjadi hitam, teks default disesuaikan */}
      <body className="bg-neutral-dark text-text-on-dark flex flex-col min-h-screen antialiased selection:bg-accent-cyan selection:text-neutral-dark">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <PageTransitionLayout>
            {children}
          </PageTransitionLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}