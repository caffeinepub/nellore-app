import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const handleExplore = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/nellore-hero.dim_1200x600.jpg"
          alt="Nellore scenic landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-500 via-gold-500 to-teal-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-12">
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gold-400/70" />
          <span className="text-gold-300 text-sm font-body tracking-[0.3em] uppercase">
            Andhra Pradesh, India
          </span>
          <div className="h-px w-16 bg-gold-400/70" />
        </div>

        {/* Main Title */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tight drop-shadow-lg">
          Welcome to Nellore
        </h1>

        {/* Telugu script decoration */}
        <p className="font-heading text-2xl sm:text-3xl text-gold-300 mb-6 italic drop-shadow">
          నెల్లూరు
        </p>

        {/* Tagline */}
        <p className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          The Cultural Heart of Andhra Pradesh — where ancient temples meet serene backwaters,
          and the spirit of Telugu culture thrives on the banks of the Pennar River.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12">
          {[
            { value: '~600K', label: 'City Population' },
            { value: '2000+', label: 'Years of History' },
            { value: '175 km', label: 'From Chennai' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-300">
                {stat.value}
              </div>
              <div className="font-body text-xs text-white/70 tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleExplore}
          className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-body font-semibold px-8 py-3.5 rounded-full shadow-warm-lg transition-all duration-200 hover:scale-105 active:scale-95 mb-14"
        >
          Explore Nellore
          <ChevronDown size={18} />
        </button>

        {/* Nellore Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div className="relative rounded-xl overflow-hidden shadow-warm-lg border border-white/10 group">
            <img
              src="/assets/generated/nellore-attraction-pulicat.dim_800x500.jpg"
              alt="Pulicat Lake, Nellore"
              className="w-full h-48 sm:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="font-body text-xs text-white/80 tracking-widest uppercase bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                Pulicat Lake
              </span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-warm-lg border border-white/10 group">
            <img
              src="/assets/generated/nellore-city.dim_1200x600.jpg"
              alt="Nellore City"
              className="w-full h-48 sm:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="font-body text-xs text-white/80 tracking-widest uppercase bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                Nellore City
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-white/50" />
      </div>
    </section>
  );
}
