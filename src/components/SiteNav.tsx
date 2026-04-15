import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "I" },
  { id: "firewall", label: "II" },
  { id: "drivers", label: "III" },
  { id: "arenas", label: "IV" },
  { id: "resilience", label: "V" },
];

export function SiteNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden md:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-sans font-medium transition-all duration-300 ${
            active === id
              ? "border-gold bg-primary/20 text-gold"
              : "border-border/50 text-muted-foreground hover:border-gold/50 hover:text-foreground"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
