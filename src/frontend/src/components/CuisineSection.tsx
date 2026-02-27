import SectionHeader from './SectionHeader';

interface Dish {
  name: string;
  description: string;
  image: string;
  spiceLevel: string;
  icon: string;
}

const CUISINE: Dish[] = [
  {
    name: 'Nellore Chepala Pulusu',
    description: 'A spicy fish curry made with tamarind and local spices, the signature dish of Nellore. Considered one of the most flavorful fish curries in all of South India.',
    image: '/assets/generated/nellore-chepala-pulusu.dim_800x600.jpg',
    spiceLevel: 'Very Hot',
    icon: '🐟',
  },
  {
    name: 'Prawns Biryani',
    description: 'Fragrant basmati rice cooked with fresh prawns and aromatic spices, an Andhra specialty. Slow-cooked with saffron and caramelized onions for a deeply satisfying meal.',
    image: '/assets/generated/nellore-prawns-biryani.dim_800x600.jpg',
    spiceLevel: 'Hot',
    icon: '🦐',
  },
  {
    name: 'Natu Kodi Kura',
    description: 'A bold country chicken curry with fresh ground masalas, a rustic Telugu classic. Made with dry-roasted spices and tamarind for a rich, intensely flavored gravy.',
    image: '/assets/generated/nellore-natu-kodi-kura.dim_800x600.jpg',
    spiceLevel: 'Hot',
    icon: '🍖',
  },
];

const spiceColorMap: Record<string, string> = {
  'Very Hot': 'bg-terracotta-600/15 text-terracotta-700 border-terracotta-600/25',
  Hot: 'bg-terracotta-500/10 text-terracotta-600 border-terracotta-500/20',
  Medium: 'bg-gold-500/10 text-gold-700 border-gold-500/20',
  Mild: 'bg-teal-500/10 text-teal-700 border-teal-500/20',
};

function CuisineCard({ dish }: { dish: Dish }) {
  const spiceColor = spiceColorMap[dish.spiceLevel] ?? spiceColorMap['Medium'];

  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm card-hover group overflow-hidden flex flex-col">
      {/* Image banner */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Spice badge overlaid on image */}
        <span
          className={`absolute top-3 right-3 text-xs font-body font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm bg-card/80 ${spiceColor}`}
        >
          🌶️ {dish.spiceLevel}
        </span>
        <div className="absolute top-3 left-3">
          <span className="text-2xl drop-shadow-lg">{dish.icon}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-semibold text-foreground leading-tight mb-2">
          {dish.name}
        </h3>
        <p className="font-body text-sm text-foreground/80 leading-relaxed">
          {dish.description}
        </p>
      </div>
    </div>
  );
}

export default function CuisineSection() {
  return (
    <section id="cuisine" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Local Cuisine"
          subtitle="Savour the bold, fiery flavours that define Nellore's legendary culinary tradition"
          accent="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUISINE.map((dish) => (
            <CuisineCard key={dish.name} dish={dish} />
          ))}
        </div>

        {/* Decorative note */}
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-muted-foreground italic">
            🌶️ Nellore cuisine is renowned for its bold use of red chillies and tamarind — not for the faint-hearted!
          </p>
        </div>
      </div>
    </section>
  );
}
