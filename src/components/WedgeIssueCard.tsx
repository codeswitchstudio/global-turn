interface WedgeIssueCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

export function WedgeIssueCard({ icon, title, description, delay = "0ms" }: WedgeIssueCardProps) {
  return (
    <div
      className="scroll-fade-up flex gap-5 rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/20"
      style={{ transitionDelay: delay }}
    >
      <span className="shrink-0 text-3xl">{icon}</span>
      <div>
        <h4 className="font-serif text-lg text-foreground">{title}</h4>
        <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
