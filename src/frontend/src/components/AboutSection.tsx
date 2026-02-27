import { BookOpen } from 'lucide-react';
import { useOverview } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  const { data: overview, isLoading } = useOverview();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="About & History"
          subtitle="Discover the rich heritage and vibrant story of Nellore"
          accent="terracotta"
        />

        <div className="relative bg-card rounded-2xl shadow-warm border border-border overflow-hidden">
          {/* Decorative side accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-terracotta-400 via-gold-400 to-terracotta-400" />

          <div className="p-8 sm:p-10 pl-10 sm:pl-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-terracotta-500/10 flex items-center justify-center">
                <BookOpen size={22} className="text-terracotta-500" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Sri Potti Sriramulu Nellore
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  District Headquarters, Andhra Pradesh
                </p>
              </div>
            </div>

            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ) : (
              <p className="font-body text-foreground/85 leading-relaxed text-base sm:text-lg">
                {overview || 'Loading overview...'}
              </p>
            )}
          </div>
        </div>

        {/* Quick info pills */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {[
            { label: 'State', value: 'Andhra Pradesh' },
            { label: 'River', value: 'Penna (Pennar)' },
            { label: 'Known For', value: 'Aquaculture & Shrimp' },
            { label: 'Language', value: 'Telugu' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-terracotta-500/8 border border-terracotta-500/20 rounded-full px-4 py-2"
            >
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                {item.label}:
              </span>
              <span className="font-body text-sm font-semibold text-terracotta-600">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
