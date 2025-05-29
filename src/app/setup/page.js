import Link from 'next/link';
import { ArrowDownTrayIcon, QuestionMarkCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function SetupPage() {
  return (
    // Teks default untuk halaman ini diatur ke text-text-on-dark
    <div className="max-w-3xl mx-auto text-text-on-dark">
      <header className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-cyan drop-shadow-md">
          Panduan Setup IP Music
        </h1>
      </header>

      {/* Kartu utama menggunakan bg-neutral-medium */}
      <div className="bg-neutral-medium backdrop-blur-sm border border-neutral-border/50 p-6 sm:p-8 rounded-xl shadow-xl space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-accent-cyan mb-4 sm:mb-5 flex items-center">
            <ArrowDownTrayIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-accent-cyan" />
            1. Undang Bot ke Server Anda
          </h2>
          <p className="text-text-on-dark-secondary mb-4 text-sm sm:text-base leading-relaxed">
            Langkah pertama adalah menambahkan IP Music ke server Discord Anda. Klik tombol di bawah ini untuk mengundang bot:
          </p>
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1376181521165320404&permissions=3173376&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto group px-6 py-3 text-base font-semibold text-neutral-dark bg-accent-cyan rounded-lg shadow-lg hover:bg-accent-cyan-hover focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-neutral-medium transition-all duration-300 transform hover:scale-105 mb-6"
          >
            Undang IP Music
            <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-text-on-dark-secondary text-sm sm:text-base leading-relaxed">
            Anda akan diarahkan ke halaman otorisasi Discord. Pilih server tempat Anda ingin menambahkan bot dan berikan izin yang diperlukan.
          </p>
        </section>

        <hr className="border-neutral-border/40" />

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-accent-cyan mb-4 sm:mb-5 flex items-center">
            <QuestionMarkCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-accent-cyan" />
            2. Perintah Dasar & Konfigurasi
          </h2>
          <p className="text-text-on-dark-secondary mb-4 text-sm sm:text-base leading-relaxed">
            Setelah bot berhasil ditambahkan, Anda bisa langsung menggunakannya. Semua perintah menggunakan prefix <code className="bg-neutral-dark px-2 py-0.5 rounded-md text-accent-cyan font-mono text-sm">!!</code>.
            Coba perintah berikut di channel teks:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-text-on-dark-secondary text-sm sm:text-base">
            <li><code className="bg-neutral-dark px-2 py-1 rounded text-accent-cyan font-mono">!!play [judul lagu]</code></li>
            <li><code className="bg-neutral-dark px-2 py-1 rounded text-accent-cyan font-mono">!!help</code></li>
          </ul>
          <p className="text-text-on-dark-secondary text-sm sm:text-base leading-relaxed">
            Pastikan IP Music memiliki izin untuk bergabung dan berbicara di voice channel yang ingin Anda gunakan.
          </p>
          <p className="text-text-on-dark-secondary text-sm sm:text-base leading-relaxed mt-2">
            Saat ini, IP Music tidak memerlukan konfigurasi khusus yang rumit.
            Untuk informasi lebih lanjut, kunjungi halaman <Link href="/commands" className="text-accent-cyan hover:underline">Perintah</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}