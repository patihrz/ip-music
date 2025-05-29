export const metadata = {
    title: 'Perintah Bot - IP Music',
    description: 'Daftar lengkap perintah untuk bot musik IP Music.',
};

const commandsList = [
    { name: '!!clearqueue', description: 'Bersihkan semua lagu dari antrian.', aliases: ['!!cq', '!!hapusantrian']},
    { name: '!!help', description: 'Menampilkan pesan bantuan ini.', aliases: []},
    { name: '!!pause', description: 'Jeda musik yang sedang diputar.', aliases: ['!!jeda']},
    { name: '!!ping', description: 'Cek responsivitas bot.', aliases: []},
    { name: '!!play [judul lagu atau URL]', description: 'Putar musik dari YouTube/Spotify URL/pencarian.', aliases: ['!!p [judul lagu atau URL]', '!!mainkan [judul lagu atau URL]']},
    { name: '!!queue', description: 'Tampilkan antrian musik saat ini.', aliases: ['!!q', '!!antrian']},
    { name: '!!resume', description: 'Lanjutkan musik yang dijeda.', aliases: ['!!unpause', '!!lanjutkan']},
    { name: '!!skip', description: 'Lewati lagu yang sedang diputar.', aliases: ['!!s', '!!lewati']},
    { name: '!!stop', description: 'Hentikan musik, bersihkan antrian & keluar VC.', aliases: ['!!berhenti', '!!stfu']},
];

export default function CommandsPage() {
  return (
    // Teks default untuk halaman ini diatur ke text-text-on-dark
    <div className="max-w-4xl mx-auto text-text-on-dark">
      <header className="text-center mb-10 sm:mb-12">
        {/* Judul dengan aksen cyan */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-cyan mb-2 sm:mb-3 drop-shadow-md">Perintah IP Music</h1>
        <p className="text-sm sm:text-md text-text-on-dark-secondary">
          Bot Music by <a href="#" className="text-accent-cyan hover:underline">@paatih</a>
        </p>
      </header>
      <p className="text-md sm:text-lg text-text-on-dark-secondary mb-10 sm:mb-12 text-center leading-relaxed">
        Gunakan <code className="bg-neutral-medium px-2 py-1 rounded-md text-accent-cyan font-mono text-sm sm:text-base">!![nama_perintah]</code> untuk menjalankan perintah.
        <br className="sm:hidden"/>
        Untuk argumen, gunakan <code className="bg-neutral-medium px-2 py-1 rounded-md text-accent-cyan font-mono text-sm sm:text-base">!![nama_perintah] [argumen]</code> jika diperlukan.
      </p>

      <div className="space-y-6 sm:space-y-8">
        {commandsList.map((command) => (
          // Kartu perintah menggunakan bg-neutral-medium
          <div
            key={command.name}
            className="bg-neutral-medium backdrop-blur-sm border border-neutral-border/50 p-5 sm:p-6 rounded-xl shadow-xl hover:shadow-accent-cyan/20 transition-all duration-300 hover:border-accent-cyan/70"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-accent-cyan mb-2 font-mono break-words">
              {command.name}
            </h2>
            <p className="text-text-on-dark-secondary mb-3 leading-relaxed text-sm sm:text-base">{command.description}</p>
            {command.aliases && command.aliases.length > 0 && (
              <div className="mt-3 pt-3 border-t border-neutral-border/40">
                <span className="text-xs sm:text-sm text-text-on-dark-secondary/80 font-medium">ALIAS: </span>
                {command.aliases.map((alias, index) => (
                  <code key={index} className="ml-2 mt-1 inline-block bg-neutral-dark px-2 py-0.5 rounded-md text-accent-cyan font-mono text-xs sm:text-sm break-words">
                    {alias}
                  </code>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
