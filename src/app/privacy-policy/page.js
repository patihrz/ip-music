// src/app/privacy-policy/page.js
export const metadata = {
  title: 'Kebijakan Privasi - IP Music',
  description: 'Kebijakan Privasi untuk penggunaan bot musik IP Music di Discord.',
};

// Komponen untuk merender placeholder
const Placeholder = ({ children }) => <span className="text-yellow-500 font-semibold">[{children}]</span>;

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto text-text-on-dark prose prose-sm sm:prose-base prose-invert prose-headings:text-accent-cyan prose-h2:border-b prose-h2:border-neutral-border/50 prose-h2:pb-2 prose-a:text-accent-cyan hover:prose-a:text-accent-cyan-hover prose-strong:text-text-on-dark prose-code:text-accent-cyan prose-code:bg-neutral-medium prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-cyan drop-shadow-md">Kebijakan Privasi IP Music</h1>
        <p className="mt-2 text-sm text-text-on-dark-secondary">Tanggal Efektif: <Placeholder>Tanggal Efektif</Placeholder></p>
      </header>

      <p>Selamat datang di Kebijakan Privasi IP Music ("Bot", "kami", "milik kami", atau "kita"). Kami menghargai privasi Anda dan berkomitmen untuk melindunginya. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, memproses, dan melindungi informasi Anda saat Anda menggunakan Bot kami di platform Discord.</p>

      <section className="mt-8 space-y-4">
        <h2>1. Informasi yang Kami Kumpulkan dan Proses</h2>
        <p>Saat Anda menggunakan Bot kami, kami dapat mengumpulkan dan memproses jenis informasi berikut:</p>
        <h3 className="!text-lg !text-text-on-dark !font-semibold mt-4 mb-2">Informasi yang Disediakan Discord:</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>ID Pengguna Discord Anda:</strong> Untuk mengidentifikasi Anda sebagai pengguna yang mengeluarkan perintah.</li>
          <li><strong>Nama Pengguna/Nama Panggilan Discord Anda:</strong> Untuk personalisasi respons atau identifikasi dalam antrian.</li>
          <li><strong>ID Server (Guild) Discord:</strong> Untuk mengetahui di server mana Bot digunakan.</li>
          <li><strong>ID Channel (Teks dan Suara):</strong> Untuk mengetahui dari channel mana perintah berasal dan ke channel suara mana Bot harus bergabung.</li>
          <li><strong>Konten Perintah:</strong> Perintah spesifik yang Anda kirim ke Bot (misalnya, <code>!!play [judul lagu]</code>, <code>!!skip</code>).</li>
        </ul>

        <h3 className="!text-lg !text-text-on-dark !font-semibold mt-4 mb-2">Informasi Terkait Permintaan Musik:</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>URL atau Kueri Pencarian:</strong> Link ke YouTube, Spotify, atau teks pencarian judul lagu yang Anda berikan.</li>
          <li><strong>Metadata Lagu (Sementara):</strong> Saat memproses permintaan, Bot dapat mengambil metadata (judul, artis, durasi, thumbnail) dari layanan seperti Spotify (menggunakan API Spotify) atau YouTube (menggunakan yt-dlp). Informasi ini umumnya disimpan sementara dalam memori (RAM) untuk keperluan antrian, tampilan "Now Playing", atau histori sesi saat ini.</li>
        </ul>

        <h3 className="!text-lg !text-text-on-dark !font-semibold mt-4 mb-2">Data Penggunaan (Sementara):</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Antrian Musik (Queue):</strong> Daftar lagu yang Anda minta untuk diputar, disimpan dalam memori Bot dan hilang saat Bot restart atau antrian dibersihkan.</li>
          <li><strong>Histori Lagu (Session-based):</strong> Informasi tentang lagu terakhir yang diputar untuk fitur seperti replay atau autoplay, disimpan dalam memori dan hilang saat Bot restart.</li>
          <li><strong>Status Mode (misalnya, 24/7, Autoplay):</strong> Preferensi mode per server, disimpan dalam memori.</li>
        </ul>

        <h3 className="!text-lg !text-text-on-dark !font-semibold mt-4 mb-2">File Audio (Sementara, jika ada mekanisme download):</h3>
        <p>Jika Bot dikonfigurasi untuk mengunduh file audio terlebih dahulu sebelum memutarnya (misalnya, dari YouTube menggunakan yt-dlp dengan opsi stream=False atau melalui post-processor FFmpegExtractAudio), file audio ini akan disimpan sementara di server (<code>downloads/</code>) tempat Bot di-hosting. File ini hanya digunakan untuk tujuan pemutaran dan idealnya memiliki mekanisme pembersihan.</p>

        <h3 className="!text-lg !text-text-on-dark !font-semibold mt-4 mb-2">Log Server dan Bot:</h3>
        <p>Server tempat Bot di-hosting (GCP Compute Engine) dan Bot itu sendiri (melalui systemd dan print statements atau modul logging Python) akan menghasilkan log. Log ini dapat berisi ID pengguna, ID guild, perintah yang dijalankan, dan pesan error (yang mungkin mencakup sebagian dari query atau URL yang bermasalah) untuk tujuan debugging dan pemantauan.</p>
        <p>Kami tidak secara sengaja mengumpulkan informasi pribadi sensitif lainnya kecuali yang secara inheren diproses melalui interaksi Discord dan permintaan musik Anda.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
        <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Menyediakan fungsionalitas inti Bot: menerima perintah, bergabung ke channel suara, mencari dan memutar musik, mengelola antrian.</li>
          <li>Menanggapi perintah dan permintaan Anda.</li>
          <li>Menampilkan informasi "Now Playing" dan antrian.</li>
          <li>Memungkinkan fitur seperti skip, pause, resume, stop, replay, dan autoplay.</li>
          <li>Memecahkan masalah (troubleshooting) dan meningkatkan kinerja serta fungsionalitas Bot.</li>
          <li>Memantau penggunaan Bot untuk memastikan kepatuhan terhadap Ketentuan Layanan.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>3. Bagaimana Kami Membagikan Informasi Anda</h2>
        <p>Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat mengungkapkan informasi dalam situasi berikut:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Kepada Layanan Pihak Ketiga untuk Fungsi Bot:</strong>
            <ul className="list-circle space-y-1 pl-5 mt-1">
                <li>Discord API: Informasi pengguna dan server Anda secara inheren dibagikan dengan Discord agar Bot dapat berfungsi.</li>
                <li>YouTube API/yt-dlp: Kueri pencarian atau URL YouTube dibagikan untuk mencari dan mengambil informasi/stream audio.</li>
                <li>Spotify API: URL Spotify dibagikan untuk mengambil metadata lagu/album/playlist. Kredensial API Spotify Anda (Client ID & Secret) digunakan untuk autentikasi ke Spotify API.</li>
            </ul>
          </li>
          <li><strong>Persyaratan Hukum:</strong> Jika diwajibkan oleh hukum, panggilan pengadilan, atau proses hukum lainnya, atau untuk melindungi hak, properti, atau keselamatan kami, pengguna kami, atau publik.</li>
          <li><strong>Penyedia Layanan Teknis:</strong> Server hosting kami (Google Cloud Platform) akan menyimpan data operasional Bot.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>4. Keamanan Data</h2>
        <p>Kami mengambil langkah-langkah yang wajar untuk melindungi informasi yang kami proses:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Token Bot Discord dan kredensial API Spotify disimpan dalam file <code>.env</code> di server dan diakses sesuai kebutuhan.</li>
          <li>Akses ke server hosting dilindungi.</li>
          <li>Data dalam transit antara Bot dan Discord dienkripsi oleh Discord.</li>
        </ul>
        <p>Namun, harap diingat bahwa tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>5. Retensi Data</h2>
        <ul className="list-disc space-y-1 pl-5">
            <li><strong>Data dalam Memori (Antrian, Histori Sesi):</strong> Bersifat sementara dan hilang saat Bot di-restart atau data tersebut dibersihkan (misalnya, <code>clearqueue</code>).</li>
            <li><strong>File Audio yang Diunduh (jika ada):</strong> Disimpan sementara di direktori <code>downloads/</code> dan idealnya memiliki mekanisme pembersihan otomatis atau manual secara berkala untuk menghemat ruang disk.</li>
            <li><strong>Log Server/Bot:</strong> Disimpan sesuai dengan konfigurasi sistem logging (journald di server Anda) dan dapat memiliki periode retensi yang bervariasi.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2>6. Hak Anda</h2>
        <p>Sebagai pengguna Discord, Anda memiliki hak terkait data Anda sesuai dengan Kebijakan Privasi Discord. Untuk data yang secara spesifik diproses dan disimpan sementara oleh Bot ini (seperti antrian), Anda dapat mengelolanya melalui perintah Bot (misalnya, <code>clearqueue</code>). Jika Anda memiliki kekhawatiran tentang data spesifik yang mungkin di-log oleh Bot, Anda dapat menghubungi kami.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>7. Privasi Anak-Anak</h2>
        <p>Bot ini dimaksudkan untuk digunakan pada platform Discord, yang memiliki persyaratan usia minimumnya sendiri. Kami tidak secara sadar menargetkan atau mengumpulkan informasi pribadi dari anak-anak di bawah usia yang ditetapkan oleh Discord atau hukum yang berlaku. Jika Anda adalah orang tua atau wali dan Anda mengetahui bahwa anak Anda telah memberikan informasi kepada Bot tanpa persetujuan Anda, silakan hubungi kami.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>8. Layanan Pihak Ketiga</h2>
        <p>Bot ini berinteraksi dengan layanan pihak ketiga seperti Discord, YouTube (dan layanan Google lainnya), dan Spotify. Penggunaan Anda atas layanan pihak ketiga tersebut tunduk pada kebijakan privasi dan ketentuan layanan mereka masing-masing. Kami mendorong Anda untuk meninjaunya.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>9. Perubahan pada Kebijakan Privasi Kami</h2>
        <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan signifikan dengan memposting kebijakan baru dan memperbarui "Tanggal Efektif" di bagian atas. Dianjurkan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan.</p>
      </section>

      <section className="mt-8 space-y-2">
        <h2>10. Hubungi Kami</h2>
        <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Email: <Placeholder>Alamat Email Kontak Anda Untuk Pertanyaan Privasi</Placeholder></li>
          <li>Atau melalui server Discord dukungan Bot (jika ada): <Placeholder>Link atau Nama Server Discord Dukungan Anda</Placeholder></li>
        </ul>
      </section>
    </article>
  );
}
