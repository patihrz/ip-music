import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-dark border-t border-neutral-border/30 text-text-on-dark-secondary p-8 text-center mt-16 sm:mt-20">
      <div className="mb-4 flex justify-center space-x-4 sm:space-x-6">
        <Link href="/privacy-policy" className="text-xs sm:text-sm hover:text-accent-cyan hover:underline transition-colors">
          Privacy Policy
        </Link>
        <span className="text-xs sm:text-sm">|</span>
        <Link href="/terms-of-service" className="text-xs sm:text-sm hover:text-accent-cyan hover:underline transition-colors">
          Terms of Service
        </Link>
         <span className="text-xs sm:text-sm">|</span>
        <Link href="/support" className="text-xs sm:text-sm hover:text-accent-cyan hover:underline transition-colors">
          Dukungan
        </Link>
      </div>
      <p className="text-lg text-text-on-dark">&copy; {currentYear} IP Music.</p>
      <p className="text-sm mt-2">
        Bot Music by <a href="#" className="text-accent-cyan hover:text-accent-cyan-hover hover:underline">@paatih</a>
      </p>
      <p className="text-xs mt-4 opacity-75">
        Crafted with ❤️.
      </p>
    </footer>
  );
}
