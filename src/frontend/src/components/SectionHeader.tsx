interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: "terracotta" | "gold" | "teal";
}

export default function SectionHeader({
  title,
  subtitle,
  accent = "terracotta",
}: SectionHeaderProps) {
  const accentClasses = {
    terracotta: "bg-terracotta-500",
    gold: "bg-gold-500",
    teal: "bg-teal-500",
  };

  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className={`h-0.5 w-12 ${accentClasses[accent]}`} />
        <div className={`w-2 h-2 rounded-full ${accentClasses[accent]}`} />
        <div className={`h-0.5 w-12 ${accentClasses[accent]}`} />
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
