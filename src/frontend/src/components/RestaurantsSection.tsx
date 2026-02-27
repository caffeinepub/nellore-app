import { MapPin, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface RestaurantData {
  name: string;
  type: string;
  description: string;
  address: string;
  rating: number;
  maxRating: number;
  emoji: string;
  image?: string;
}

const RESTAURANTS: RestaurantData[] = [
  {
    name: 'Murali Krishna Restaurant',
    type: 'Andhra Cuisine',
    description: 'Famous for authentic Andhra meals and Nellore-style seafood dishes. A local favorite for traditional home-style cooking.',
    address: 'Nellore, Andhra Pradesh',
    rating: 4.5,
    maxRating: 5,
    emoji: '🍽️',
  },
  {
    name: 'Komala Vilas',
    type: 'Vegetarian | South Indian',
    description: 'A beloved vegetarian restaurant known for its traditional South Indian breakfast and meals. Famous for crispy dosas, fluffy idlis, and filter coffee.',
    address: 'Nellore, Andhra Pradesh',
    rating: 4.4,
    maxRating: 5,
    emoji: '🥗',
    image: '/assets/generated/komala-vilas-restaurant.dim_800x500.jpg',
  },
  {
    name: 'Ganesh Mess',
    type: 'Veg | Andhra Meals',
    description: 'Popular vegetarian mess known for wholesome Andhra thali, sambar, rasam, and fresh vegetable curries. A go-to spot for authentic home-style Nellore vegetarian meals.',
    address: 'Nellore, Andhra Pradesh',
    rating: 4.3,
    maxRating: 5,
    emoji: '🥬',
    image: '/assets/generated/ganesh-mess-restaurant.dim_800x500.jpg',
  },
];

function StarRating({ rating, max }: { rating: number; max: number }) {
  const stars = Array.from({ length: max }, (_, i) => ({
    id: i,
    filled: i < Math.floor(rating),
    half: i >= Math.floor(rating) && i < rating,
  }));
  return (
    <div className="flex items-center gap-1">
      {stars.map(({ id, filled, half }) => (
        <Star
          key={`star-${id}`}
          size={16}
          className={
            filled
              ? 'text-gold-500 fill-gold-500'
              : half
              ? 'text-gold-400 fill-gold-200'
              : 'text-muted-foreground/30 fill-transparent'
          }
        />
      ))}
      <span className="font-body text-sm font-semibold text-foreground ml-1.5">
        {rating}/{max}
      </span>
    </div>
  );
}

function RestaurantCard({ restaurant }: { restaurant: RestaurantData }) {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm-lg overflow-hidden">
      {/* Restaurant image */}
      {restaurant.image && (
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
      )}
      {/* Header banner */}
      <div className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 px-6 py-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl shrink-0 shadow-inner">
          {restaurant.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-xl font-bold text-white leading-tight">
            {restaurant.name}
          </h3>
          <span className="inline-block mt-1 font-body text-xs font-medium bg-white/20 text-white/90 px-2.5 py-0.5 rounded-full">
            {restaurant.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
          <StarRating rating={restaurant.rating} max={restaurant.maxRating} />
          <span className="font-body text-xs text-muted-foreground">Customer Rating</span>
        </div>

        {/* Description */}
        <p className="font-body text-base text-foreground/80 leading-relaxed mb-5">
          {restaurant.description}
        </p>

        {/* Address */}
        <div className="flex items-center gap-2 text-sm text-teal-600">
          <MapPin size={15} className="shrink-0 text-teal-500" />
          <span className="font-body">{restaurant.address}</span>
        </div>
      </div>
    </div>
  );
}

export default function RestaurantsSection() {
  return (
    <section id="restaurants" className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Nellore Restaurants"
          subtitle="Experience authentic Andhra meals, traditional vegetarian fare, and Nellore-style seafood at the city's most beloved eateries"
          accent="terracotta"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESTAURANTS.map((restaurant) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
