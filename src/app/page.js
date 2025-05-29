import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon, MusicalNoteIcon, Cog6ToothIcon, QueueListIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const features = [
    {
      icon: <MusicalNoteIcon className="w-10 h-10 lg:w-12 lg:h-12 mb-4 text-accent-cyan" />,
      title: 'Kualitas Audio Tinggi',
      description: 'Nikmati musik favoritmu dengan suara sebening kristal tanpa gangguan.',
    },
    {
      icon: <Cog6ToothIcon className="w-10 h-10 lg:w-12 lg:h-12 mb-4 text-accent-cyan" />,
      title: 'Mudah Digunakan',
      description: 'Perintah yang intuitif dan dokumentasi lengkap memudahkan siapa saja.',
    },
    {
      icon: <QueueListIcon className="w-10 h-10 lg:w-12 lg:h-12 mb-4 text-accent-cyan" />,
      title: 'Fitur Lengkap',
      description: 'Dari antrian, lirik, hingga filter audio, semua ada untuk pengalaman terbaik.',
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-24 md:space-y-28 text-text-on-dark">
      {/* Hero Section */}
      <header className="text-center pt-8 sm:pt-10 md:pt-12 flex flex-col items-center">
        <div className="mb-6 sm:mb-8 relative group">
          {/* Efek Glow di belakang logo - Opacity ditingkatkan */}
          <div className="absolute -inset-2 sm:-inset-4 blur-2xl animate-heroGlow opacity-75 group-hover:opacity-90 transition-opacity duration-500 rounded-full"></div>
          <Image
            src="/images/ip-music-logo.png"
            alt="IP Music Logo Utama"
            width={280}
            height={80}
            className="relative z-10 h-16 w-auto sm:h-20 lg:h-24 drop-shadow-2xl animate-logoBounce"
            priority
          />
        </div>
        <p className="text-lg sm:text-xl text-text-on-dark-secondary mb-8 sm:mb-10 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed">
          Bot musik Discord generasi baru dengan kualitas audio jernih, mudah digunakan, dan kaya fitur untuk memeriahkan server Anda!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1376181521165320404&permissions=3173376&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 text-base font-semibold text-neutral-dark bg-accent-cyan rounded-lg shadow-lg hover:bg-accent-cyan-hover focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-neutral-dark transition-all duration-300 transform hover:scale-105"
          >
            Tambahkan ke Discord
            <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/commands"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 text-base font-semibold text-accent-cyan bg-neutral-medium border border-neutral-border rounded-lg shadow-md hover:bg-neutral-border hover:text-accent-cyan-hover focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-neutral-dark transition-all duration-300"
          >
            Lihat Perintah
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-10 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-center text-text-on-dark">
          Kenapa Memilih <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">IP Music?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-neutral-medium backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-neutral-border/50 hover:border-accent-cyan/70 hover:shadow-accent-cyan/20 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-accent-cyan group-hover:text-accent-cyan-hover transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-on-dark-secondary leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-12 text-center bg-neutral-medium backdrop-blur-md rounded-xl shadow-xl my-8 sm:my-12 border border-neutral-border/50">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 text-text-on-dark px-4">
           Siap Membuat Servermu Lebih Hidup?
         </h2>
         <p className="text-md sm:text-lg text-text-on-dark-secondary mb-8 sm:mb-10 max-w-lg sm:max-w-xl mx-auto px-4">
           Tambahkan IP Music ke server Discord Anda sekarang juga dan rasakan pengalaman musik terbaik!
         </p>
         <Link
            href="https://discord.com/oauth2/authorize?client_id=1376181521165320404&permissions=3173376&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-neutral-dark bg-accent-cyan rounded-lg shadow-xl hover:bg-accent-cyan-hover focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-neutral-medium transition-all duration-300 transform hover:scale-105"
          >
            Undang IP Music Sekarang!
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
      </section>
    </div>
  );
}