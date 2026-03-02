import { MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Attraction {
  name: string;
  description: string;
  image: string;
  icon: string;
}

const ATTRACTIONS: Attraction[] = [
  {
    name: "Pulicat Lake",
    description:
      "One of India's largest brackish water lagoons, a haven for migratory birds including flamingos, pelicans, and birds from Siberia and Central Asia.",
    image: "/assets/generated/nellore-attraction-pulicat.dim_800x500.jpg",
    icon: "🦩",
  },
  {
    name: "Kandaleru Dam",
    description:
      "A scenic reservoir surrounded by hills, ideal for picnics and nature walks. The calm waters and lush greenery make it a popular weekend getaway.",
    image: "/assets/generated/nellore-attraction-kandaleru.dim_800x500.jpg",
    icon: "🏞️",
  },
  {
    name: "Penchalakona",
    description:
      "A forested pilgrimage site with a waterfall and ancient temple dedicated to Lord Narasimha, nestled in the Eastern Ghats.",
    image: "/assets/generated/nellore-attraction-penchalakona.dim_800x500.jpg",
    icon: "⛩️",
  },
  {
    name: "Nellore City",
    description:
      "A vibrant city with bustling markets, rich history, and cultural landmarks on the banks of the Pennar River.",
    image: "/assets/generated/nellore-city.dim_1200x600.jpg",
    icon: "🏙️",
  },
];

function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-warm card-hover group overflow-hidden flex flex-col">
      {/* Card image banner */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-2xl drop-shadow-lg">{attraction.icon}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
              {attraction.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-teal-500 shrink-0" />
              <span className="font-body text-xs text-muted-foreground">
                Nellore, AP
              </span>
            </div>
          </div>
        </div>
        <p className="font-body text-sm text-foreground/80 leading-relaxed">
          {attraction.description}
        </p>
      </div>
    </div>
  );
}

export default function AttractionsSection() {
  return (
    <section id="attractions" className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Top Attractions"
          subtitle="Explore the natural wonders, scenic dams, and sacred temples of Nellore"
          accent="teal"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {ATTRACTIONS.map((attraction) => (
            <AttractionCard key={attraction.name} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  );
}
