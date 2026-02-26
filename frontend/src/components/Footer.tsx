import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'nellore-explorer');

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold-400/50">
                <img
                  src="/assets/generated/nellore-logo.dim_128x128.png"
                  alt="Nellore Explorer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading text-xl font-bold text-background">
                Nellore Explorer
              </span>
            </div>
            <p className="font-body text-sm text-background/60 max-w-xs">
              Celebrating the culture, heritage, and spirit of Nellore — the Pearl of Andhra Pradesh.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {['About', 'Attractions', 'Cuisine', 'Restaurants', 'Demographics', 'Facts'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.querySelector(`#${item.toLowerCase()}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="font-body text-sm text-background/60 hover:text-gold-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-xs text-background/50">
            © {year} Nellore Explorer. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/50 flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="text-terracotta-400 fill-terracotta-400" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
