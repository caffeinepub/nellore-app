import { MapPin, IndianRupee, Loader2 } from 'lucide-react';
import { useRestaurants } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import SectionHeader from './SectionHeader';
import type { Restaurant } from '@/backend';

function PriceRange({ range }: { range: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 font-body text-xs font-semibold text-gold-600 bg-gold-500/10 px-2 py-0.5 rounded-full">
      {range}
    </span>
  );
}

function CuisineBadge({ cuisine }: { cuisine: string }) {
  return (
    <span className="inline-flex items-center font-body text-xs font-medium text-terracotta-600 bg-terracotta-500/10 px-2 py-0.5 rounded-full">
      {cuisine}
    </span>
  );
}

function AreaBadge({ area }: { area: string }) {
  return (
    <span className="inline-flex items-center gap-1 font-body text-xs text-teal-600 bg-teal-500/10 px-2 py-0.5 rounded-full">
      <MapPin size={10} className="flex-shrink-0" />
      {area}
    </span>
  );
}

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-warm card-hover group flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-terracotta-500/10 flex items-center justify-center text-3xl group-hover:bg-terracotta-500/20 transition-colors">
          {restaurant.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-semibold text-foreground leading-tight mb-1">
            {restaurant.name}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            <CuisineBadge cuisine={restaurant.cuisine} />
            <PriceRange range={restaurant.priceRange} />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1 mb-4">
        {restaurant.description}
      </p>

      {/* Footer */}
      <div className="pt-3 border-t border-border/60">
        <AreaBadge area={restaurant.area} />
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        <Skeleton className="w-14 h-14 rounded-xl flex-shrink-0" />
        <div className="flex-1">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <div className="flex gap-1.5">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-10 rounded-full" />
          </div>
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-4/5 mb-2" />
      <Skeleton className="h-4 w-3/5 mb-4" />
      <div className="pt-3 border-t border-border/60">
        <Skeleton className="h-5 w-28 rounded-full" />
      </div>
    </div>
  );
}

export default function RestaurantsSection() {
  const { data: restaurants, isLoading } = useRestaurants();

  return (
    <section id="restaurants" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Nellore Restaurants"
          subtitle="From fiery Andhra thalis to fresh coastal seafood — discover the best dining experiences in Nellore"
          accent="terracotta"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : restaurants && restaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Loader2 size={32} className="animate-spin mx-auto mb-3 text-terracotta-500" />
            <p className="font-body">Loading restaurants...</p>
          </div>
        )}
      </div>
    </section>
  );
}
