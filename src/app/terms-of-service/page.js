// src/app/terms-of-service/page.js
export const metadata = {
  title: 'Ketentuan Layanan - IP Music',
  description: 'Ketentuan Layanan untuk penggunaan bot musik IP Music di Discord.',
};

// Komponen untuk merender placeholder
const Placeholder = ({ children }) => <span className="text-yellow-500 font-semibold">[{children}]</span>;

export default function TermsOfServicePage() {
  return (
    <article className="max-w-3xl mx-auto text-text-on-dark prose prose-sm sm:prose-base prose-invert prose-headings:text-accent-cyan prose-h2:border-b prose-h2:border-neutral-border/50 prose-h2:pb-2 prose-a:text-accent-cyan hover:prose-a:text-accent-cyan-hover prose-strong:text-text-on-dark prose-code:text-accent-cyan prose-code:bg-neutral-medium prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-cyan drop-shadow-md">Ketentuan Layanan IP Music</h1>
        <p className="mt-2 text-sm text-text-on-dark-secondary">Tanggal Efektif: <Placeholder>Tanggal Efektif</Placeholder></p>
      </header>

      <p>Selamat datang di IP Music ("Bot", "kami", "milik kami", atau "kita"), yang dioperasikan oleh <Placeholder>Nama Anda/Nama Pengembang</Placeholder>. Ketentuan Layanan ("Ketentuan") ini mengatur penggunaan Anda atas Bot kami di platform Discord.</p>
      <p>Dengan mengundang, menambahkan, atau menggunakan Bot ini di server Discord Anda atau melalui pesan langsung, Anda menyetujui untuk terikat oleh Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari Ketentuan ini, Anda tidak boleh menggunakan Bot.</p>

      <section className="mt-8 space-y-2">
        <h2>1. Penggunaan Layanan</h2>
        <ul className="list-disc space-y-1 pl-5">
            <li>Bot ini disediakan untuk memutar audio dari sumber yang didukung (seperti YouTube dan Spotify, dengan mengambil metadata dari Spotify dan mencari padanannya di YouTube) di server Discord melalui voice channel.</li>
            <li>Anda bertanggung jawab atas semua perintah yang Anda keluarkan ke Bot dan konten yang Anda minta untuk diputar.</li>
            <li>Anda setuju untuk menggunakan Bot hanya untuk tujuan yang sah dan sesuai dengan Ketentuan ini, Ketentuan Layanan Discord, dan semua hukum serta peraturan yang berlaku.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>2. Akun Pengguna</h2>
        <p>Bot ini beroperasi dalam lingkungan Discord dan menggunakan akun Discord Anda untuk identifikasi. Anda bertanggung jawab untuk menjaga keamanan akun Discord Anda.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>3. Perilaku yang Dilarang</h2>
        <p>Anda setuju untuk tidak menggunakan Bot untuk:</p>
        <ul className="list-disc space-y-1 pl-5">
            <li>Memutar konten yang melanggar hukum, cabul, memfitnah, melecehkan, mengancam, atau konten yang tidak pantas lainnya.</li>
            <li>Melanggar hak kekayaan intelektual pihak ketiga, termasuk hak cipta musik atau konten lainnya.</li>
            <li>Melakukan spamming perintah ke Bot.</li>
            <li>Mencoba mengeksploitasi, merusak, atau mengganggu operasi Bot atau server tempat Bot di-hosting.</li>
            <li>Menggunakan Bot dengan cara yang dapat menonaktifkan, membebani secara berlebihan, atau merusak layanan Discord atau mengganggu penggunaan Bot oleh pihak lain.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>4. Konten dan Layanan Pihak Ketiga</h2>
         <ul className="list-disc space-y-1 pl-5">
            <li>Bot ini memungkinkan Anda untuk mengakses dan memutar konten dari layanan pihak ketiga seperti YouTube dan Spotify. Penggunaan Anda atas konten tersebut tunduk pada ketentuan layanan dan kebijakan lisensi dari platform sumber tersebut.</li>
            <li>IP Music tidak memiliki, mengontrol, atau bertanggung jawab atas konten yang disediakan oleh layanan pihak ketiga ini. Semua hak atas konten tersebut adalah milik pemiliknya masing-masing.</li>
            <li>Anda bertanggung jawab untuk memastikan bahwa Anda memiliki hak atau izin yang diperlukan untuk mengakses dan memutar konten yang Anda minta melalui Bot.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>5. Ketersediaan Layanan</h2>
        <ul className="list-disc space-y-1 pl-5">
            <li>Kami berusaha untuk menjaga Bot tetap operasional. Namun, Bot disediakan "SEBAGAIMANA ADANYA" dan "SEBAGAIMANA TERSEDIA".</li>
            <li>Kami tidak menjamin bahwa Bot akan selalu tersedia, tanpa gangguan, tepat waktu, atau bebas dari kesalahan. Operasi Bot dapat ditangguhkan sementara tanpa pemberitahuan untuk pemeliharaan, perbaikan, atau karena alasan di luar kendali kami.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>6. Hak Kekayaan Intelektual</h2>
        <ul className="list-disc space-y-1 pl-5">
            <li>Kode sumber dan aset asli Bot (tidak termasuk konten pihak ketiga yang diputar) adalah milik <Placeholder>Nama Anda/Nama Pengembang</Placeholder>.</li>
            <li>Anda tidak boleh menyalin, memodifikasi, mendistribusikan, menjual, atau menyewakan bagian mana pun dari Bot kami atau perangkat lunak yang disertakan, juga tidak boleh merekayasa balik atau mencoba mengekstrak kode sumber perangkat lunak tersebut, kecuali jika hukum mengizinkan atau Anda memiliki izin tertulis dari kami.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>7. Penghentian</h2>
        <ul className="list-disc space-y-1 pl-5">
            <li>Kami berhak untuk menghentikan atau menangguhkan akses Anda ke Bot, atau fungsionalitas Bot di server tertentu, kapan saja, tanpa pemberitahuan atau kewajiban sebelumnya, atas kebijakan kami sendiri, termasuk jika Anda melanggar Ketentuan ini.</li>
            <li>Anda dapat berhenti menggunakan Bot kapan saja dengan mengeluarkannya dari server Anda.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>8. Penafian Jaminan</h2>
        <p>SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, BOT INI DISEDIAKAN "SEBAGAIMANA ADANYA" TANPA JAMINAN APA PUN, BAIK TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK TERBATAS PADA JAMINAN KELAYAKAN UNTUK DIPERDAGANGKAN, KESESUAIAN UNTUK TUJUAN TERTENTU, DAN NON-PELANGGARAN. KAMI TIDAK MENJAMIN BAHWA BOT AKAN BEBAS DARI KESALAHAN ATAU GANGGUAN.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>9. Batasan Tanggung Jawab</h2>
        <p>SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, DALAM KEADAAN APA PUN <Placeholder>Nama Anda/Nama Pengembang</Placeholder> TIDAK AKAN BERTANGGUNG JAWAB ATAS KERUSAKAN TIDAK LANGSUNG, INSIDENTAL, KHUSUS, KONSEKUENSIAL, ATAU PUNITIF (TERMASUK, TANPA BATASAN, KEHILANGAN KEUNTUNGAN, DATA, PENGGUNAAN, NIAT BAIK, ATAU KERUGIAN TIDAK BERWUJUD LAINNYA) YANG TIMBUL DARI ATAU SEHUBUNGAN DENGAN AKSES ANDA KE ATAU PENGGUNAAN ATAU KETIDAKMAMPUAN UNTUK MENGAKSES ATAU MENGGUNAKAN BOT.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>10. Ganti Rugi</h2>
        <p>Anda setuju untuk membela, mengganti rugi, dan membebaskan <Placeholder>Nama Anda/Nama Pengembang</Placeholder> dari dan terhadap setiap dan semua klaim, kerusakan, kewajiban, kerugian, tanggung jawab, biaya atau utang, dan pengeluaran (termasuk namun tidak terbatas pada biaya pengacara), yang diakibatkan oleh atau timbul dari penggunaan dan akses Anda ke Bot, atau pelanggaran terhadap Ketentuan ini.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>11. Hukum yang Mengatur</h2>
        <p>Ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum <Placeholder>Yurisdiksi Hukum Anda, contoh: Republik Indonesia</Placeholder>, tanpa memperhatikan pertentangan ketentuan hukumnya.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>12. Perubahan pada Ketentuan</h2>
        <p>Kami berhak, atas kebijakan kami sendiri, untuk memodifikasi atau mengganti Ketentuan ini kapan saja. Jika revisi bersifat material, kami akan berusaha untuk memberikan pemberitahuan (misalnya melalui pesan status Bot atau server dukungan jika ada) sebelum ketentuan baru berlaku. Apa yang merupakan perubahan material akan ditentukan atas kebijakan kami sendiri.</p>
        <p>Dengan terus menggunakan Bot setelah revisi tersebut berlaku, Anda setuju untuk terikat oleh ketentuan yang direvisi.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>13. Hubungi Kami</h2>
        <p>Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini, silakan hubungi kami melalui:</p>
         <ul className="list-disc space-y-1 pl-5">
          <li>Email: <Placeholder>Alamat Email Kontak Anda</Placeholder></li>
          <li>Atau melalui server Discord dukungan Bot (jika ada): <Placeholder>Link atau Nama Server Discord Dukungan Anda</Placeholder></li>
        </ul>
      </section>
    </article>
  );
}
