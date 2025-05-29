import Link from 'next/link';
import { ChatBubbleLeftRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export const metadata = {
    title: 'Dukungan - IP Music',
    description: 'Dapatkan bantuan dan dukungan untuk bot musik IP Music.',
};

export default function SupportPage() {
  const discordServerLink = "https://discord.gg/C8Cxzk2bWy";
  const githubLink = "YOUR_GITHUB_REPO_LINK_HERE";

  return (
    // Halaman ini sudah bg-neutral-dark, -mx dan -my digunakan untuk "break out" dari container jika ada padding global
    <div className="bg-neutral-dark text-text-on-dark p-6 sm:p-8 rounded-xl shadow-2xl -mx-4 sm:-mx-6 lg:-mx-8 -my-10 sm:-my-14 relative z-10">
      <header className="mb-8 sm:mb-10 text-center">
        {/* Judul dengan gradasi dipertahankan */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent drop-shadow-md">
          Butuh Bantuan?
        </h1>
      </header>
      <p className="text-md sm:text-lg text-text-on-dark-secondary mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed text-center">
        Jika Anda mengalami masalah, memiliki pertanyaan, atau ingin memberikan masukan, jangan ragu untuk menghubungi kami!
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Discord Card */}
        <div className="bg-neutral-medium border border-neutral-border/80 p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-brand-teal/30 transition-all duration-300 hover:border-brand-teal/70 text-left flex flex-col">
          <ChatBubbleLeftRightIcon className="w-10 h-10 mb-4 text-accent-cyan self-start" />
          <h2 className="text-xl sm:text-2xl font-semibold text-accent-cyan mb-3">Server Discord Komunitas</h2>
          <p className="text-text-on-dark-secondary mb-5 text-sm sm:text-base leading-relaxed flex-grow">
            Bergabunglah dengan server Discord kami untuk dukungan langsung.
          </p>
          {discordServerLink && discordServerLink !== "" ? (
            <Link
              href={discordServerLink}
              target="_blank"
              rel="noopener noreferrer"
              // Tombol dengan gradasi dipertahankan
              className="inline-block w-full mt-auto text-center group px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg shadow-lg hover:from-brand-teal hover:to-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-neutral-medium transition-all duration-300"
            >
              Gabung Server
            </Link>
          ) : (
            <p className="text-yellow-500 text-sm mt-auto">Link server Discord belum diatur.</p>
          )}
        </div>

        {/* GitHub Card */}
        {githubLink && githubLink !== "YOUR_GITHUB_REPO_LINK_HERE" && (
          <div className="bg-neutral-medium border border-neutral-border/80 p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-brand-blue/30 transition-all duration-300 hover:border-brand-blue/70 text-left flex flex-col">
            <CodeBracketIcon className="w-10 h-10 mb-4 text-accent-cyan self-start" />
            <h2 className="text-xl sm:text-2xl font-semibold text-accent-cyan mb-3">Lapor Isu di GitHub</h2>
            <p className="text-text-on-dark-secondary mb-5 text-sm sm:text-base leading-relaxed flex-grow">
              Temukan bug atau punya ide fitur? Laporkan di GitHub kami.
            </p>
            {/* Tombol dengan gradasi dipertahankan */}
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full mt-auto text-center group px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg shadow-lg hover:from-brand-teal hover:to-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-neutral-medium transition-all duration-300"
            >
              Kunjungi GitHub
            </Link>
          </div>
        )}
      </div>
       <p className="mt-12 sm:mt-16 text-text-on-dark-secondary text-sm sm:text-base text-center">
        Lihat juga <Link href="/faq" className="text-accent-cyan hover:underline">FAQ</Link> untuk pertanyaan umum.
      </p>
    </div>
  );
}