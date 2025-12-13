import React, { useEffect, useRef } from "react";

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1647177156544-0d51fb7c900c?q=80&w=2072&auto=format&fit=crop", caption: "Kaabah, Makkah" },
    { src: "https://images.unsplash.com/photo-1667456416191-43ba057635c1?q=80&w=2072&auto=format&fit=crop", caption: "Masjid Nabawi" },
    { src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop", caption: "Madinah Courtyard" },
    { src: "https://images.unsplash.com/photo-1674066253665-4d2553a3bcb8?q=80&w=2072&auto=format&fit=crop", caption: "Kurma" },
    { src: "https://images.unsplash.com/photo-1653985742057-683cc396bfe2?q=80&w=2072&auto=format&fit=crop", caption: "Melawat Unta" },
    { src: "https://images.unsplash.com/photo-1584186028062-637e3e77318d?q=80&w=2072&auto=format&fit=crop", caption: "Zam Zam" },
    { src: "https://images.unsplash.com/photo-1674313505558-206662f3de03?q=80&w=2072&auto=format&fit=crop", caption: "Jabal Nur" },
  ];

  // Triplicate images for smoother seamless loop on wider screens
  const loopImages = [...images, ...images, ...images];

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf: number;
    let paused = false;

    // Helper to check when content is loaded enough to scroll
    const waitForOverflow = () => {
      if (el.scrollWidth > el.clientWidth) {
        // Initial offset to middle set to avoid left-edge boundary issues immediately
        // el.scrollLeft = el.scrollWidth / 3; 
        startScroll();
      } else {
        requestAnimationFrame(waitForOverflow);
      }
    };

    const startScroll = () => {
      const step = () => {
        if (!paused && el) {
          // Adjust speed here (0.5 pixels per frame)
          el.scrollLeft += 0.5;

          // Infinite loop logic:
          // The content is duplicated 3 times. 
          // Total Width = W. One set width ≈ W / 3.
          // When we scroll past the 2nd set (2/3rds), we snap back to the 1st set (1/3rd).
          // Or simpler: strictly reset when reaching the midpoint of total scrollable area.

          // Using strict half-point reset for 2x duplication logic (original code's intent):
          // If we stick to double duplication, reset at half.
          // With triple duplication (safer for wide screens), we reset when we hit 2/3 and jump back to 1/3.

          // Let's stick to the simpler 2-part logic if we assume the user provided logic was desired, 
          // but I'll use a safer mathematical reset to prevent jitter.
          // Resetting when we've scrolled past one full length of the original list.
          const singleSetWidth = el.scrollWidth / 3;

          if (el.scrollLeft >= singleSetWidth * 2) {
            // Snap back to the first set
            el.scrollLeft -= singleSetWidth;
          }
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    waitForOverflow();

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    // Add event listeners for pause on hover/touch
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(raf);
      if (el) {
        el.removeEventListener("mouseenter", pause);
        el.removeEventListener("mouseleave", resume);
        el.removeEventListener("touchstart", pause);
        el.removeEventListener("touchend", resume);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto px-6 text-center mb-14 z-10">
        <span className="text-gold-600 font-bold tracking-widest text-xs md:text-sm uppercase block mb-3 font-sans">
          Portfolio Kami
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-olive-900 mb-6 leading-tight">
          Momen Ketenangan Jiwa
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8 opacity-60" />
        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Sekilas perjalanan yang lalu. Kami berbesar hati dapat menyaksikan
          momen-momen rohani yang indah bersama para jemaah kami.
        </p>
      </div>

      {/* FULL WIDTH SCROLLER */}
      <div className="relative w-full">
        {/* Gradient edges for fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        <div
          ref={scrollerRef}
          className="overflow-x-scroll no-scrollbar px-6 py-4"
        >
          <div
            className="
              grid
              grid-flow-col
              grid-rows-2
              auto-cols-[85vw]
              sm:auto-cols-[60vw]
              md:auto-cols-[45vw]
              lg:auto-cols-[30vw]
              xl:auto-cols-[25vw]
              gap-6
              h-[520px]
              min-w-max
            "
          >
            {loopImages.map((img, idx) => {
              // Create a masonry effect by making some items span 2 rows
              // The pattern checks modulo to alternate layout
              const tall = idx % 5 === 0 || idx % 5 === 3;

              return (
                <div
                  key={`${img.src}-${idx}`}
                  className={`
                    group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl 
                    bg-sand-100 transition-all duration-500 ease-out
                    ${tall ? "row-span-2" : "row-span-1"}
                  `}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-pattern-islamic opacity-30 pointer-events-none z-10 mix-blend-multiply" />

                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Caption */}
                  <div className="absolute inset-0 bg-olive-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 backdrop-blur-[2px]">
                    <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-serif text-2xl drop-shadow-md">
                        {img.caption}
                      </p>
                      <div className="w-12 h-0.5 bg-gold-400 mx-auto mt-4 rounded-full" />
                    </div>
                  </div>

                  {/* Always visible label (pill) */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm border border-white/20 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                      <span className="text-olive-900 text-xs font-bold tracking-wide uppercase">
                        {img.caption}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Geser atau sentuh untuk menahan</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Gallery;