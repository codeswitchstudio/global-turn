import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const children = el.querySelectorAll(
      ".scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale"
    );
    children.forEach((child) => observer.observe(child));
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
