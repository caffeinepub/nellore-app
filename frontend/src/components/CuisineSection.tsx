import { useState } from 'react';
import { UtensilsCrossed, Loader2 } from 'lucide-react';
import { useCuisine } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import SectionHeader from './SectionHeader';

const CUISINE_ICONS = ['🐟', '🦐', '🍖', '🥞', '🍛', '🌶️', '🍆', '🫓'];

const SPICE_LEVELS: Record<string, string> = {
  'Nellore Fish Curry': 'Very Hot',
  'Gongura Mutton': 'Hot',
  'Pesarattu': 'Mild',
  'Pulihora': 'Medium',
  'Nellore Prawn Curry': 'Hot',
  'Bobbatlu': 'Mild',
  'Gutti Vankaya': 'Medium',
  'Idly Sambar': 'Mild',
  'Nellore Chepala Pulusu': 'Very Hot',
  'Prawns Biriyani': 'Hot',
  'Natu Kodi Kura': 'Hot',
};

const CUISINE_IMAGES: Record<string, string> = {
  'Nellore Fish Curry': '/assets/generated/nellore-fish-curry.dim_800x500.png',
  'Gongura Mutton': '/assets/generated/gongura-mutton.dim_800x500.png',
  'Pesarattu': '/assets/generated/pesarattu.dim_800x500.png',
  'Pulihora': '/assets/generated/pulihora.dim_800x500.png',
  'Nellore Prawn Curry': '/assets/generated/nellore-prawn-curry.dim_800x500.png',
  'Bobbatlu': '/assets/generated/bobbatlu.dim_800x500.png',
  'Gutti Vankaya': '/assets/generated/gutti-vankaya.dim_800x500.png',
  'Idly Sambar': '/assets/generated/idly-sambar.dim_800x500.png',
  'Nellore Chepala Pulusu': '/assets/generated/chepala-pulusu.dim_800x500.png',
  'Prawns Biriyani': '/assets/generated/prawns-biriyani.dim_800x500.png',
  'Natu Kodi Kura': '/assets/generated/natu-kodi-kura.dim_800x500.png',
};

function getImageForDish(dish: string): string | null {
  // Direct match
  if (CUISINE_IMAGES[dish]) return CUISINE_IMAGES[dish];
  // Case-insensitive match
  const key = Object.keys(CUISINE_IMAGES).find(
    (k) => k.toLowerCase() === dish.toLowerCase()
  );
  return key ? CUISINE_IMAGES[key] : null;
}

function getSpiceLevel(dish: string, index: number): string {
  if (SPICE_LEVELS[dish]) return SPICE_LEVELS[dish];
  const levels = ['Medium', 'Mild', 'Hot', 'Mild', 'Hot', 'Very Hot', 'Medium', 'Mild'];
  return levels[index % levels.length];
}

interface CuisineCardProps {
  dish: string;
  description: string;
  index: number;
}

function CuisineCard({ dish, description, index }: CuisineCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = getImageForDish(dish);
  const showImage = imageSrc && !imgError;
  const spiceLevel = getSpiceLevel(dish, index);

  const spiceColor =
    spiceLevel === 'Very Hot'
      ? 'bg-terracotta-600/15 text-terracotta-700 border-terracotta-600/25'
      : spiceLevel === 'Hot'
      ? 'bg-terracotta-500/10 text-terracotta-600 border-terracotta-500/20'
      : spiceLevel === 'Medium'
      ? 'bg-gold-500/10 text-gold-700 border-gold-500/20'
      : 'bg-teal-500/10 text-teal-700 border-teal-500/20';

  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm card-hover group overflow-hidden flex flex-col">
      {/* Image banner */}
      {showImage ? (
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={imageSrc}
            alt={dish}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Spice badge overlaid on image */}
          <span
            className={`absolute top-3 right-3 text-xs font-body font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm bg-card/80 ${spiceColor}`}
          >
            🌶️ {spiceLevel}
          </span>
        </div>
      ) : (
        /* Emoji fallback banner */
        <div className="relative h-44 flex-shrink-0 bg-gold-500/10 flex items-center justify-center">
          <span className="text-6xl">{CUISINE_ICONS[index % CUISINE_ICONS.length]}</span>
          <span
            className={`absolute top-3 right-3 text-xs font-body font-semibold px-2.5 py-1 rounded-full border ${spiceColor}`}
          >
            🌶️ {spiceLevel}
          </span>
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex gap-4 flex-1">
        {/* Emoji icon (only shown when image is displayed, as a small accent) */}
        {showImage && (
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-xl group-hover:bg-gold-500/20 transition-colors self-start mt-0.5">
            {CUISINE_ICONS[index % CUISINE_ICONS.length]}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-semibold text-foreground leading-tight mb-2">
            {dish}
          </h3>
          <p className="font-body text-sm text-foreground/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CuisineSection() {
  const { data: cuisine, isLoading } = useCuisine();

  return (
    <section id="cuisine" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Local Cuisine"
          subtitle="Savour the bold, fiery flavours that define Nellore's legendary culinary tradition"
          accent="gold"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                <Skeleton className="h-44 w-full rounded-none" />
                <div className="p-5 flex gap-4">
                  <Skeleton className="h-10 w-10 rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-2/3 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : cuisine && cuisine.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cuisine.map(([dish, description], index) => (
              <CuisineCard
                key={dish}
                dish={dish}
                description={description}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Loader2 size={32} className="animate-spin mx-auto mb-3 text-gold-500" />
            <p className="font-body">Loading cuisine...</p>
          </div>
        )}

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
