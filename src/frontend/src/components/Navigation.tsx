import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Attractions", href: "#attractions" },
  { label: "Cuisine", href: "#cuisine" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Hotels", href: "#hotels" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [installed, setInstalled] = useState(false);
  const deferredPrompt = useRef<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setInstalled(true));
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    const { outcome } = await deferredPrompt.current.userChoice;
    if (outcome === "accepted") setInstalled(true);
    deferredPrompt.current = null;
    setInstallPrompt(null);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-gold-400 shadow-warm shrink-0 bg-white/10">
              <img
                src="/assets/generated/nellore-emblem.dim_128x128.png"
                alt="Nellore City Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span
                className={`font-heading font-bold text-lg md:text-xl leading-tight block transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Nellore
              </span>
              <span
                className={`text-xs font-body tracking-widest uppercase transition-colors ${
                  scrolled ? "text-terracotta-500" : "text-gold-300"
                }`}
              >
                Andhra Pradesh
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-md font-body text-sm font-medium tracking-wide transition-all duration-200 hover:bg-terracotta-500/10 hover:text-terracotta-500 ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            {installPrompt && !installed && (
              <button
                type="button"
                onClick={handleInstall}
                className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-md font-body text-sm font-semibold bg-terracotta-500 text-white hover:bg-terracotta-600 transition-colors shadow"
              >
                <Download size={14} />
                Install App
              </button>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border shadow-warm-lg">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-md font-body text-sm font-medium text-foreground hover:bg-terracotta-500/10 hover:text-terracotta-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
            {installPrompt && !installed && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  handleInstall();
                }}
                className="flex items-center gap-2 mt-2 px-4 py-3 rounded-md font-body text-sm font-semibold bg-terracotta-500 text-white hover:bg-terracotta-600 transition-colors"
              >
                <Download size={15} />
                Install App on Phone
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
