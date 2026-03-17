"use client"


export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-20 border-t block border-cream-200 bg-offwhite mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted font-sans">
        <p>
          <span className="font-serif text-base font-medium text-ink">Anirudh Sahu</span>
          {/* <span className="mx-2 text-gold">·</span> */}
          {/* <span>Developer, Builder, Curious Learner</span> */}
        </p>
        <p>© {year} · Built with love :)</p>
      </div>
    </footer>
  );
}
