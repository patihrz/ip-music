"use client";
import Link from 'next/link';
import Image from 'next/image'; // Impor komponen Image
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', text: 'BERANDA' },
    { href: '/commands', text: 'PERINTAH' },
    { href: '/setup', text: 'SETUP' },
    { href: '/faq', text: 'FAQ' },
    { href: '/support', text: 'DUKUNGAN' },
  ];

  return (
    <nav className="bg-neutral-dark text-text-on-dark p-4 shadow-lg sticky top-0 z-50 border-b border-neutral-border/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/ip-music-logo-navbar.png" // Path ke logo Anda di folder public
            alt="IP Music Logo"
            width={150} // PERBESAR: Sesuaikan lebar logo (misalnya, jika logo Anda lebar)
            height={30} // PERBESAR: Sesuaikan tinggi logo (misalnya, 45px)
            className="h-15 w-auto sm:h-5 group-hover:opacity-90 transition-opacity duration-300" // PERBESAR: Atur tinggi, lebar otomatis
            priority // Jika logo penting untuk LCP
          />
        </Link>
        <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.text}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm lg:text-base font-semibold tracking-wider transition-all duration-300
                            ${isActive
                              ? 'bg-accent-cyan text-neutral-dark shadow-sm'
                              : 'text-text-on-dark-secondary hover:bg-neutral-medium hover:text-text-on-dark'
                            }`}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-on-dark-secondary hover:text-accent-cyan focus:outline-none p-2 rounded-md focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-neutral-dark"
            aria-label="Buka menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-neutral-dark rounded-b-lg shadow-md border-t border-neutral-border/30">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.text}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-semibold tracking-wider transition-all duration-300
                              ${isActive
                                ? 'bg-accent-cyan text-neutral-dark'
                                : 'text-text-on-dark-secondary hover:bg-neutral-medium hover:text-text-on-dark'
                              }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
