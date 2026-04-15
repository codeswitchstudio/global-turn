interface ArenaCardProps {
  number: string;
  title: string;
  countries: string;
  description: string;
  delay?: string;
}

export function ArenaCard({ number, title, countries, description, delay = "0ms" }: ArenaCardProps) {
  return (
    <div
      className="scroll-fade-up group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30"
      style={{ transitionDelay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <span className="gradient-gold text-6xl font-bold font-serif">{number}</span>
        <h3 className="mt-4 text-2xl font-serif text-foreground">{title}</h3>
        <p className="mt-2 font-sans text-sm font-medium uppercase tracking-widest text-gold">
          {countries}
        </p>
        <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
