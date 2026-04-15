import { useParallax } from "@/hooks/useParallax";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

export function ParallaxImage({ src, alt, speed = 0.3, className = "" }: ParallaxImageProps) {
  const ref = useParallax(speed);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`h-full w-full object-cover will-change-transform ${className}`}
      loading="lazy"
      width={1920}
      height={1080}
      style={{ transform: "translate3d(0,0,0) scale(1.15)" }}
    />
  );
}
