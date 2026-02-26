import { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { useAttractions } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import SectionHeader from './SectionHeader';

const ATTRACTION_ICONS = ['🏛️', '🦩', '🏖️', '⛩️', '🌿', '🏔️'];

// Map attraction names (case-insensitive substring match) to generated image paths
const ATTRACTION_IMAGES: { keywords: string[]; src: string }[] = [
  {
    keywords: ['nelapattu', 'bird'],
    src: '/assets/generated/nelapattu-bird-sanctuary.dim_800x500.png',
  },
  {
    keywords: ['pulicat', 'lake'],
    src: '/assets/generated/pulicat-lake-attraction.dim_800x500.png',
  },
  {
    keywords: ['ranganathaswamy', 'temple', 'ranganatha'],
    src: '/assets/generated/ranganathaswamy-temple.dim_800x500.png',
  },
  {
    keywords: ['mypad', 'beach'],
    src: '/assets/generated/mypad-beach.dim_800x500.png',
  },
  {
    keywords: ['udayagiri', 'fort'],
    src: '/assets/generated/udayagiri-fort.dim_800x500.png',
  },
  {
    keywords: ['penchalakona', 'waterfall'],
    src: '/assets/generated/penchalakona-waterfall.dim_800x500.png',
  },
];

function getAttractionImage(name: string): string | null {
  const lower = name.toLowerCase();
  for (const entry of ATTRACTION_IMAGES) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.src;
    }
  }
  return null;
}

interface AttractionCardProps {
  name: string;
  description: string;
  index: number;
}

function AttractionCard({ name, description, index }: AttractionCardProps) {
  const imageSrc = getAttractionImage(name);
  const [imgError, setImgError] = useState(false);
  const showImage = imageSrc && !imgError;

  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm card-hover group overflow-hidden flex flex-col">
      {/* Card image banner */}
      {showImage ? (
        <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
          <img
            src={imageSrc}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle gradient overlay at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ) : (
        /* Fallback: decorative emoji banner */
        <div className="h-28 w-full flex-shrink-0 bg-teal-500/10 flex items-center justify-center text-5xl group-hover:bg-teal-500/20 transition-colors">
          {ATTRACTION_ICONS[index % ATTRACTION_ICONS.length]}
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-3 mb-3">
          {showImage && (
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-xl group-hover:bg-teal-500/20 transition-colors">
              {ATTRACTION_ICONS[index % ATTRACTION_ICONS.length]}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
              {name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-teal-500 flex-shrink-0" />
              <span className="font-body text-xs text-muted-foreground">Nellore, AP</span>
            </div>
          </div>
        </div>
        <p className="font-body text-sm text-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AttractionsSection() {
  const { data: attractions, isLoading } = useAttractions();

  return (
    <section id="attractions" className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Top Attractions"
          subtitle="Explore the natural wonders, ancient forts, and sacred temples of Nellore"
          accent="teal"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                <Skeleton className="h-44 w-full rounded-none" />
                <div className="p-5">
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : attractions && attractions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map(([name, description], index) => (
              <AttractionCard
                key={name}
                name={name}
                description={description}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Loader2 size={32} className="animate-spin mx-auto mb-3 text-teal-500" />
            <p className="font-body">Loading attractions...</p>
          </div>
        )}
      </div>
    </section>
  );
}
