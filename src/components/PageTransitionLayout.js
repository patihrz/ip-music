// src/components/PageTransitionLayout.js
"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function PageTransitionLayout({ children }) {
  const pathname = usePathname();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [key, setKey] = useState(pathname); // Kunci untuk memicu animasi masuk

  const timeoutRef = useRef(null);
  const exitAnimTimeoutRef = useRef(null);

  useEffect(() => {
    // Bersihkan timeout jika komponen unmount atau pathname berubah lagi dengan cepat
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (exitAnimTimeoutRef.current) clearTimeout(exitAnimTimeoutRef.current);
    };
  }, []);


  useEffect(() => {
    // Hanya jalankan transisi jika pathname benar-benar berubah dari key saat ini
    // dan bukan saat initial load (kecuali Anda mau animasi di initial load juga)
    if (pathname !== key) {
      setIsExiting(true); // Mulai animasi keluar untuk konten lama

      if (exitAnimTimeoutRef.current) clearTimeout(exitAnimTimeoutRef.current);
      exitAnimTimeoutRef.current = setTimeout(() => {
        setIsPageLoading(true); // Tampilkan loading spinner setelah animasi keluar mulai
        setDisplayedChildren(children); // Ganti konten SEKARANG, tapi loading spinner masih tampil
        setKey(pathname); // Update key untuk konten baru, memicu animasi masuk
        setIsExiting(false); // Hentikan animasi keluar (konten baru akan masuk)

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsPageLoading(false); // Sembunyikan loading spinner setelah 2 detik
        }, 2000); // Durasi loading screen 2 detik
      }, 300); // Durasi animasi keluar (sesuaikan dengan CSS .page-exit)
    } else {
      // Untuk initial load, atau jika pathname sama, pastikan children ditampilkan
      setDisplayedChildren(children);
      setKey(pathname);
    }
  }, [pathname, children, key]); // Tambahkan key ke dependency array

  return (
    <>
      <div
        className={`loading-overlay ${isPageLoading ? 'visible' : ''}`}
        aria-hidden={!isPageLoading}
      >
        <LoadingSpinner />
      </div>
      <div
        key={key} // Menggunakan key untuk memicu animasi masuk pada konten baru
        className={`page-content ${isExiting ? 'page-exit' : 'page-enter'}`}
      >
        {displayedChildren}
      </div>
    </>
  );
}
