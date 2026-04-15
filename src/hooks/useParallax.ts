import { useEffect, useRef } from "react";

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.parentElement?.getBoundingClientRect();
          if (rect) {
            const viewportHeight = window.innerHeight;
            const center = rect.top + rect.height / 2 - viewportHeight / 2;
            const offset = center * speed;
            el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
