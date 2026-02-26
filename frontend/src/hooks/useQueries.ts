import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Restaurant } from '@/backend';

// ── Seed data ──────────────────────────────────────────────────────────────────

const SEED_OVERVIEW = `Nellore, officially known as Sri Potti Sriramulu Nellore, is a vibrant city and district headquarters in the southern state of Andhra Pradesh, India. Situated on the banks of the Penna River near the Bay of Bengal, Nellore is one of the oldest and most historically significant cities in the region. With a rich heritage spanning over two millennia, the city has been ruled by the Pallavas, Cholas, Kakatiyas, Vijayanagara Empire, and later the British. Today, Nellore is a thriving commercial and cultural hub, celebrated for its aquaculture industry — particularly shrimp farming — which has earned it the title "Shrimp Capital of India." The city blends ancient temples, scenic lakes, and a warm, hospitable culture that reflects the best of Telugu tradition.`;

const SEED_DEMOGRAPHICS = `Nellore district has a population of approximately 2.97 million people, with the city itself home to around 600,000 residents. The population is predominantly Telugu-speaking, with Telugu being the official and most widely spoken language. The city has a literacy rate of about 72%, above the national average. Hinduism is the predominant religion, with significant Muslim and Christian minorities. The district has a sex ratio of 1,010 females per 1,000 males. Nellore has seen steady urbanization over the past two decades, driven by growth in aquaculture, agriculture, and small-scale industries. The city is well-connected by road, rail, and is approximately 175 km north of Chennai and 370 km south of Hyderabad.`;

const SEED_ATTRACTIONS: [string, string][] = [
  ['Pulicat Lake', 'One of the largest brackish water lagoons in India, Pulicat Lake is a paradise for birdwatchers and nature lovers. It serves as a critical habitat for flamingos, pelicans, and migratory birds from Siberia and Central Asia. The lake spans across Andhra Pradesh and Tamil Nadu and is home to the Pulicat Lake Bird Sanctuary.'],
  ['Udayagiri Fort', 'A magnificent 16th-century fort perched atop a rocky hill, Udayagiri Fort was built during the Vijayanagara Empire. The fort offers panoramic views of the surrounding landscape and houses ancient temples, granaries, and royal chambers that speak to its glorious past.'],
  ['Nelapattu Bird Sanctuary', 'Located about 20 km from Nellore, Nelapattu is a renowned bird sanctuary famous for its large colony of spot-billed pelicans. The sanctuary is a protected wetland and an important breeding ground for numerous water birds, making it a must-visit for wildlife enthusiasts.'],
  ['Sri Ranganathaswamy Temple', 'An ancient and revered Vaishnavite temple dedicated to Lord Ranganatha, this temple is one of the most important religious sites in Nellore. The temple features stunning Dravidian architecture with intricate carvings and a towering gopuram that dominates the city skyline.'],
  ['Mypadu Beach', 'A serene and relatively unspoiled beach located about 30 km from Nellore city, Mypadu Beach is known for its golden sands, clear waters, and tranquil atmosphere. It is a popular weekend getaway for locals and tourists seeking a peaceful coastal retreat.'],
  ['Penchalakona', 'A scenic hill station and pilgrimage site nestled in the Eastern Ghats, Penchalakona is home to the ancient Narasimha Swamy temple. The journey through lush forests and waterfalls makes it a beloved destination for both devotees and trekkers.'],
];

const SEED_CUISINE: [string, string][] = [
  ['Nellore Chepala Pulusu', 'The crown jewel of Nellore cuisine, this fiery fish curry is made with freshwater fish simmered in a tangy tamarind-based gravy with generous amounts of red chillies, onions, and aromatic spices. It is considered one of the spiciest and most flavorful fish curries in all of South India.'],
  ['Prawn Biryani', 'Given Nellore\'s status as the shrimp capital of India, prawn biryani is a local staple. Plump, fresh prawns are marinated in spices and slow-cooked with fragrant basmati rice, saffron, and caramelized onions to create a dish that is both aromatic and deeply satisfying.'],
  ['Gongura Mutton', 'A beloved Andhra classic, gongura mutton features tender pieces of mutton cooked with sorrel leaves (gongura), which lend a distinctive sour and tangy flavor. The dish is a celebration of the bold, unapologetic flavors that define Telugu cuisine.'],
  ['Pesarattu', 'A wholesome and nutritious breakfast dish made from green moong dal batter, pesarattu is a crispy crepe served with ginger chutney and upma. It is a beloved morning staple across Nellore households and a testament to the simplicity and elegance of Andhra cooking.'],
  ['Nellore Kodi Kura', 'A robust chicken curry unique to the Nellore region, this dish is prepared with a special blend of dry-roasted spices, coconut, and tamarind. The result is a thick, intensely flavored gravy that pairs perfectly with steamed rice or roti.'],
];

const SEED_FACTS: [string, string][] = [
  ['Shrimp Capital of India', 'Nellore district is the largest producer of shrimp in India, contributing significantly to the country\'s aquaculture exports. The district\'s coastal geography and favorable climate make it ideal for shrimp farming, and the industry supports hundreds of thousands of livelihoods.'],
  ['Ancient Heritage', 'Nellore has a recorded history of over 2,000 years. The region finds mention in ancient texts and was an important center during the Pallava and Chola dynasties. The name "Nellore" is derived from "Nellur," meaning "land of rice" in Telugu, reflecting its agricultural abundance.'],
  ['Penna River', 'The Penna River, also known as Pennar, flows through Nellore district before emptying into the Bay of Bengal. The river has been the lifeline of the region for centuries, supporting agriculture, trade, and settlement along its banks.'],
  ['Mica Mining Legacy', 'Nellore was once one of the world\'s leading producers of mica, a mineral used in electrical insulation and cosmetics. The district\'s mica mines were extensively worked during the British colonial period and contributed significantly to the global supply.'],
  ['Sri Potti Sriramulu', 'The city is officially named after Sri Potti Sriramulu, a freedom fighter and social activist who fasted unto death in 1952 to demand a separate Telugu-speaking state. His sacrifice led to the creation of Andhra State, making him a revered figure in Telugu history.'],
  ['Cyclone Resilience', 'Nellore has historically been one of the most cyclone-prone districts in India due to its coastal location. The city and its people have developed remarkable resilience and disaster preparedness over generations, with modern infrastructure now significantly reducing cyclone-related damage.'],
];

export const SEED_RESTAURANTS: Restaurant[] = [
  {
    name: 'Murali Krishna',
    cuisine: 'South Indian Dosa delicacies',
    area: 'MG Road',
    priceRange: '💲',
    description: 'World-famous dosa spot serving crispy dosas, idlis, and vadas',
    emoji: '🌮',
  },
];

// ── Query keys ─────────────────────────────────────────────────────────────────

export const QUERY_KEYS = {
  overview: ['overview'],
  demographics: ['demographics'],
  attractions: ['attractions'],
  cuisine: ['cuisine'],
  facts: ['facts'],
  restaurants: ['restaurants'],
  restaurantsCount: ['restaurantsCount'],
  seeded: ['seeded'],
};

// ── Hooks ──────────────────────────────────────────────────────────────────────

export function useOverview() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: QUERY_KEYS.overview,
    queryFn: async () => {
      if (!actor) return '';
      return actor.getOverview();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDemographics() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: QUERY_KEYS.demographics,
    queryFn: async () => {
      if (!actor) return '';
      return actor.getDemographics();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAttractions() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<[string, string]>>({
    queryKey: QUERY_KEYS.attractions,
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAttractions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCuisine() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<[string, string]>>({
    queryKey: QUERY_KEYS.cuisine,
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCuisine();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFacts() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<[string, string]>>({
    queryKey: QUERY_KEYS.facts,
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFacts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRestaurants() {
  const { actor, isFetching } = useActor();
  return useQuery<Restaurant[]>({
    queryKey: QUERY_KEYS.restaurants,
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRestaurants();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRestaurantsCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: QUERY_KEYS.restaurantsCount,
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getRestaurantsCount();
    },
    enabled: !!actor && !isFetching,
  });
}

// ── Seed hook ──────────────────────────────────────────────────────────────────

export function useSeedData() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not ready');

      // Seed all data in parallel
      await Promise.all([
        actor.addOverview(SEED_OVERVIEW),
        actor.addDemographics(SEED_DEMOGRAPHICS),
        ...SEED_ATTRACTIONS.map(([name, desc]) => actor.addAttraction(name, desc)),
        ...SEED_CUISINE.map(([dish, desc]) => actor.addCuisine(dish, desc)),
        ...SEED_FACTS.map(([title, fact]) => actor.addFact(title, fact)),
      ]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.overview });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.demographics });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.attractions });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.cuisine });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.facts });
    },
  });
}

export function useSeedRestaurants() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not ready');
      await Promise.all(
        SEED_RESTAURANTS.map((restaurant) => actor.addRestaurant(restaurant))
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.restaurants });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.restaurantsCount });
    },
  });
}
