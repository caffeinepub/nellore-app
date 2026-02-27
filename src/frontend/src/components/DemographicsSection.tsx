import { Users, Loader2 } from 'lucide-react';
import { useDemographics } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import SectionHeader from './SectionHeader';

const DEMO_STATS = [
  { icon: '👥', label: 'District Population', value: '~2.97M' },
  { icon: '🏙️', label: 'City Population', value: '~600K' },
  { icon: '📚', label: 'Literacy Rate', value: '~72%' },
  { icon: '🗣️', label: 'Primary Language', value: 'Telugu' },
];

export default function DemographicsSection() {
  const { data: demographics, isLoading } = useDemographics();

  return (
    <section id="demographics" className="py-20 px-4 sm:px-6 bg-muted/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Demographics"
          subtitle="Understanding the people, culture, and community of Nellore"
          accent="terracotta"
        />

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {DEMO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl p-4 border border-border shadow-xs text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-heading text-xl font-bold text-terracotta-500 mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs text-muted-foreground leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Full text */}
        <div className="bg-card rounded-2xl border border-border shadow-warm overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-muted/30">
            <div className="w-8 h-8 rounded-lg bg-terracotta-500/10 flex items-center justify-center">
              <Users size={16} className="text-terracotta-500" />
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground">
              Demographic Overview
            </h3>
          </div>
          <div className="p-6 sm:p-8">
            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="font-body text-foreground/85 leading-relaxed text-base">
                {demographics || 'Loading demographics...'}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
