import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const metadata = {
    title: 'FAQ - IP Music',
    description: 'Pertanyaan yang sering diajukan tentang bot musik IP Music.',
};

const faqList = [
    { question: 'Apakah IP Music gratis digunakan?', answer: 'Ya, IP Music sepenuhnya gratis untuk digunakan di server Discord Anda.'},
    { question: 'Dari platform mana saja IP Music bisa memutar musik?', answer: 'IP Music mendukung pemutaran dari YouTube, Spotify, SoundCloud, dan link URL langsung ke file audio.'},
    { question: 'Bagaimana cara melihat antrian lagu?', answer: 'Anda bisa menggunakan perintah `!!queue` atau `!!q` untuk melihat daftar lagu yang ada di antrian.'},
    { question: 'Apakah saya bisa mengatur volume bot?', answer: 'Tentu, gunakan perintah `!!volume [angka 0-100]` untuk mengatur tingkat volume.'},
    { question: 'Bot tidak merespons, apa yang harus saya lakukan?', answer: 'Pastikan bot online, memiliki izin yang benar, atau gabung server dukungan kami.'},
];

export default function FAQPage() {
  return (
    // Teks default untuk halaman ini diatur ke text-text-on-dark
    <div className="max-w-3xl mx-auto text-text-on-dark">
      <header className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-cyan drop-shadow-md">
          Pertanyaan Umum (FAQ)
        </h1>
      </header>

      <div className="space-y-5 sm:space-y-6">
        {faqList.map((faqItem, index) => (
          // Kartu FAQ menggunakan bg-neutral-medium
          <details
            key={index}
            className="bg-neutral-medium backdrop-blur-sm border border-neutral-border/50 p-5 sm:p-6 rounded-xl shadow-lg group transition-all duration-300 hover:border-accent-cyan/70"
          >
            <summary className="text-md sm:text-lg font-semibold text-accent-cyan cursor-pointer list-none flex justify-between items-center group-hover:text-accent-cyan-hover transition-colors">
              {faqItem.question}
              <ChevronDownIcon className="w-5 h-5 text-accent-cyan transform transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="text-text-on-dark-secondary mt-4 pt-4 border-t border-neutral-border/40 leading-relaxed text-sm sm:text-base">
              {/* Jawaban akan menggunakan text-text-on-dark-secondary */}
              <p dangerouslySetInnerHTML={{ __html: faqItem.answer.replace(/`([^`]+)`/g, '<code class="bg-neutral-dark px-1.5 py-0.5 rounded text-accent-cyan font-mono text-xs sm:text-sm shadow-sm">$1</code>') }} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}