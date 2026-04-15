import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function ScrollSection({ children, className = "", id }: ScrollSectionProps) {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}
