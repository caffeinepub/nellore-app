import { Lightbulb, Loader2 } from 'lucide-react';
import { useFacts } from '@/hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import SectionHeader from './SectionHeader';

const FACT_COLORS = [
  'bg-terracotta-500/10 border-terracotta-500/25 text-terracotta-600',
  'bg-gold-500/10 border-gold-500/25 text-gold-700',
  'bg-teal-500/10 border-teal-500/25 text-teal-600',
  'bg-terracotta-500/10 border-terracotta-500/25 text-terracotta-600',
  'bg-gold-500/10 border-gold-500/25 text-gold-700',
  'bg-teal-500/10 border-teal-500/25 text-teal-600',
];

const FACT_NUMBERS = ['01', '02', '03', '04', '05', '06'];

export default function FactsSection() {
  const { data: facts, isLoading } = useFacts();

  return (
    <section id="facts" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Fun Facts"
          subtitle="Fascinating tidbits that make Nellore truly one of a kind"
          accent="gold"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border">
                <Skeleton className="h-8 w-8 rounded-lg mb-4" />
                <Skeleton className="h-5 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : facts && facts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map(([title, fact], index) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-6 border border-border shadow-warm card-hover group relative overflow-hidden"
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-4 font-heading text-5xl font-bold text-foreground/5 select-none">
                  {FACT_NUMBERS[index % FACT_NUMBERS.length]}
                </div>

                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border mb-4 ${FACT_COLORS[index % FACT_COLORS.length]}`}
                >
                  <Lightbulb size={18} />
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-tight">
                  {title}
                </h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Loader2 size={32} className="animate-spin mx-auto mb-3 text-gold-500" />
            <p className="font-body">Loading facts...</p>
          </div>
        )}
      </div>
    </section>
  );
}
