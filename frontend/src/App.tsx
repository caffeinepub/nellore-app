import { useEffect } from 'react';
import { useActor } from '@/hooks/useActor';
import {
  useSeedData,
  useOverview,
  useRestaurantsCount,
  useSeedRestaurants,
} from '@/hooks/useQueries';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AttractionsSection from '@/components/AttractionsSection';
import CuisineSection from '@/components/CuisineSection';
import RestaurantsSection from '@/components/RestaurantsSection';
import DemographicsSection from '@/components/DemographicsSection';
import FactsSection from '@/components/FactsSection';
import Footer from '@/components/Footer';

function AppContent() {
  const { actor, isFetching } = useActor();
  const { data: overview, isLoading: overviewLoading } = useOverview();
  const { data: restaurantsCount, isLoading: restaurantsCountLoading } = useRestaurantsCount();
  const seedMutation = useSeedData();
  const seedRestaurantsMutation = useSeedRestaurants();

  // Seed main data if backend is empty (overview is the sentinel)
  useEffect(() => {
    if (!actor || isFetching || overviewLoading) return;
    const isEmpty =
      !overview ||
      overview === 'No overview available' ||
      overview.trim() === '';
    if (isEmpty && !seedMutation.isPending && !seedMutation.isSuccess) {
      seedMutation.mutate();
    }
  }, [actor, isFetching, overview, overviewLoading, seedMutation]);

  // Seed restaurants if the store is empty
  useEffect(() => {
    if (!actor || isFetching || restaurantsCountLoading) return;
    const isEmpty = restaurantsCount === undefined || restaurantsCount === BigInt(0);
    if (isEmpty && !seedRestaurantsMutation.isPending && !seedRestaurantsMutation.isSuccess) {
      seedRestaurantsMutation.mutate();
    }
  }, [actor, isFetching, restaurantsCount, restaurantsCountLoading, seedRestaurantsMutation]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />

        {/* Decorative divider */}
        <div className="section-divider" />

        <AboutSection />

        <div className="section-divider" />

        <AttractionsSection />

        <div className="section-divider" />

        <CuisineSection />

        <div className="section-divider" />

        <RestaurantsSection />

        <div className="section-divider" />

        <DemographicsSection />

        <div className="section-divider" />

        <FactsSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
