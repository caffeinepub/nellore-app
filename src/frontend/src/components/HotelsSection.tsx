import { ExternalLink, MapPin, Phone, Star, Wifi } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface HotelData {
  name: string;
  category: string;
  description: string;
  address: string;
  rating: number;
  maxRating: number;
  priceRange: string;
  amenities: string[];
  emoji: string;
  image: string;
  phone?: string;
  makemytripUrl: string;
  stars: number;
}

const HOTELS: HotelData[] = [
  {
    name: "Hotel Minerva Grand",
    category: "3-Star Business Hotel",
    description:
      "One of Nellore's most popular hotels, offering spacious AC rooms, a multi-cuisine restaurant, banquet facilities, and attentive service. Ideal for business and leisure travelers.",
    address: "Trunk Road, Nellore, Andhra Pradesh 524001",
    rating: 3.8,
    maxRating: 5,
    stars: 3,
    priceRange: "₹2,000 – ₹3,500/night",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "AC Rooms",
      "Banquet Hall",
      "Parking",
    ],
    emoji: "🏨",
    image: "/assets/generated/hotel-minerva-grand.dim_800x500.jpg",
    phone: "+91 861 230 1234",
    makemytripUrl:
      "https://www.makemytrip.com/hotels/hotel_minerva_grand-details-nellore.html",
  },
  {
    name: "Regenta Inn Bhavani",
    category: "3-Star Business Hotel",
    description:
      "A well-known hotel in Nellore offering comfortable rooms, modern amenities, and excellent hospitality. Popular among business travelers and families visiting the city.",
    address: "Bhavani Nagar, Nellore, Andhra Pradesh 524001",
    rating: 3.6,
    maxRating: 5,
    stars: 3,
    priceRange: "₹1,800 – ₹3,200/night",
    amenities: [
      "Free WiFi",
      "Restaurant",
      "AC Rooms",
      "Room Service",
      "Parking",
    ],
    emoji: "🏨",
    image: "/assets/generated/hotel-regenta-inn-bhavani.dim_800x500.jpg",
    makemytripUrl:
      "https://www.makemytrip.com/hotels/regenta_inn_bhavani-details-nellore.html",
  },
  {
    name: "D R Utthama",
    category: "Comfortable Stay",
    description:
      "A popular hotel in Nellore known for its comfortable accommodation, warm service, and convenient location. A trusted choice for travelers looking for a pleasant stay in the city.",
    address: "Nellore, Andhra Pradesh 524001",
    rating: 3.5,
    maxRating: 5,
    stars: 3,
    priceRange: "₹1,500 – ₹2,800/night",
    amenities: ["Free WiFi", "AC Rooms", "Restaurant", "Parking"],
    emoji: "🏩",
    image: "/assets/generated/hotel-dr-utthama.dim_800x500.jpg",
    makemytripUrl:
      "https://www.makemytrip.com/hotels/dr_utthama-details-nellore.html",
  },
];

function StarRating({
  rating,
  max,
  stars,
}: { rating: number; max: number; stars: number }) {
  const filledStars = Array.from({ length: stars }, (_, i) => i);
  const emptyStars = Array.from({ length: 5 - stars }, (_, i) => i);
  return (
    <div className="flex items-center gap-1">
      {filledStars.map((i) => (
        <Star
          key={`filled-${i}`}
          size={16}
          className="text-yellow-500 fill-yellow-500"
        />
      ))}
      {emptyStars.map((i) => (
        <Star
          key={`empty-${i}`}
          size={16}
          className="text-muted-foreground/30 fill-transparent"
        />
      ))}
      <span className="font-body text-sm font-semibold text-foreground ml-1.5">
        {rating}/{max}
      </span>
    </div>
  );
}

function HotelCard({ hotel }: { hotel: HotelData }) {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm-lg overflow-hidden flex flex-col">
      {/* Hotel image */}
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      {/* Header banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl shrink-0 shadow-inner">
          {hotel.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-xl font-bold text-white leading-tight">
            {hotel.name}
          </h3>
          <span className="inline-block mt-1 font-body text-xs font-medium bg-white/20 text-white/90 px-2.5 py-0.5 rounded-full">
            {hotel.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Rating and Price */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-border gap-2 flex-wrap">
          <StarRating
            rating={hotel.rating}
            max={hotel.maxRating}
            stars={hotel.stars}
          />
          <span className="font-body text-sm font-semibold text-teal-600 bg-teal-50 dark:bg-teal-950/30 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
            {hotel.priceRange}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-base text-foreground/80 leading-relaxed mb-5">
          {hotel.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {hotel.amenities.map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center gap-1.5 text-xs font-body font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full border border-border"
            >
              {amenity === "Free WiFi" ? <Wifi size={11} /> : null}
              {amenity}
            </span>
          ))}
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 text-sm text-teal-600 mb-2">
          <MapPin size={15} className="shrink-0 text-teal-500" />
          <span className="font-body">{hotel.address}</span>
        </div>

        {/* Phone */}
        {hotel.phone && (
          <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
            <Phone size={14} className="shrink-0" />
            <span className="font-body">{hotel.phone}</span>
          </div>
        )}

        {/* MakeMyTrip Book Button */}
        <div className="mt-auto pt-4">
          <a
            href={hotel.makemytripUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#e8132b] hover:bg-[#c91126] text-white font-body font-semibold text-sm transition-colors"
          >
            <ExternalLink size={14} />
            Book on MakeMyTrip
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HotelsSection() {
  return (
    <section id="hotels" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Top Hotels in Nellore"
          subtitle="Best-rated hotels on MakeMyTrip — from budget stays to premium properties, perfect for every traveler"
          accent="teal"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOTELS.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 font-body">
          Prices are approximate and may vary. Click "Book on MakeMyTrip" for
          live rates and availability.
        </p>
      </div>
    </section>
  );
}
