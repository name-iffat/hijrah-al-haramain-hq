import React, { useEffect, useMemo, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
    id: string;
    quote: string;
    name: string;
    subtitle: string; // contoh: "Kumpulan Umrah Disember 2023"
    avatar: string;
    rating?: number;
};

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = useMemo(
        () => [
            {
                id: "t1",
                quote:
                    "Alhamdulillah, dari awal pendaftaran sampai pulang ke tanah air semuanya diuruskan dengan sangat teratur. Mutawwif sangat sabar membimbing kami, terutama jemaah yang pertama kali ke Umrah.",
                name: "Haji Ismail & Keluarga",
                subtitle: "Kumpulan Umrah Disember 2023",
                avatar: "https://picsum.photos/200/200?random=51",
                rating: 5,
            },
            {
                id: "t2",
                quote:
                    "Kami rasa sangat tenang sepanjang berada di Tanah Suci. Penerangan ibadah jelas, penginapan dekat, dan sentiasa ada bimbingan bila diperlukan.",
                name: "Puan Zainab Ahmad",
                subtitle: "Jemaah Umrah Ramadan 2024",
                avatar: "https://picsum.photos/200/200?random=52",
                rating: 5,
            },
            {
                id: "t3",
                quote:
                    "Servis sangat memuaskan. Mutawwif bukan sekadar memimpin ibadah, tetapi sentiasa mengambil berat keadaan jemaah, terutama warga emas.",
                name: "Encik Mohd Razak",
                subtitle: "Kumpulan Umrah Februari 2024",
                avatar: "https://picsum.photos/200/200?random=53",
                rating: 5,
            },
            {
                id: "t4",
                quote:
                    "Ini Umrah kedua saya, tetapi pengalaman bersama Hijrah al Haramain sangat berbeza. Lebih tersusun, lebih fokus ibadah, dan sangat menyentuh hati.",
                name: "Hajah Noraini & Suami",
                subtitle: "Kumpulan Umrah Syawal 2024",
                avatar: "https://picsum.photos/200/200?random=54",
                rating: 5,
            },
            {
                id: "t5",
                quote:
                    "Kami sekeluarga amat berpuas hati. Dari pengurusan visa, penerbangan, hotel hingga ziarah, semuanya lancar. Benar-benar rasa dilayan seperti keluarga.",
                name: "Keluarga Abdul Rahman",
                subtitle: "Kumpulan Umrah Jun 2024",
                avatar: "https://picsum.photos/200/200?random=55",
                rating: 5,
            },
        ],
        []
    );

    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    const total = testimonials.length;

    const goTo = (idx: number) => setActive((idx + total) % total);
    const next = () => goTo(active + 1);
    const prev = () => goTo(active - 1);

    // Auto play
    useEffect(() => {
        if (paused) return;
        intervalRef.current = window.setInterval(() => {
            setActive((p) => (p + 1) % total);
        }, 6000);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [paused, total]);

    // Keyboard accessibility (optional but nice)
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const endX = e.changedTouches[0].clientX;
        const dx = endX - touchStartX.current;

        // swipe threshold (bigger for accidental touches)
        if (Math.abs(dx) > 50) {
            dx < 0 ? next() : prev();
        }
        touchStartX.current = null;
    };

    const t = testimonials[active];

    return (
        <section
            className="py-20 md:py-32 bg-olive-900 text-sand-100 relative overflow-hidden"
            aria-label="Testimoni jemaah"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Atmosphere */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-200/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-black/15 backdrop-blur-sm">
                        <Star className="w-4 h-4 text-gold-500" fill="currentColor" />
                        <span className="text-xs tracking-[0.25em] uppercase text-sand-100/90 font-bold">
                            Testimoni Jemaah
                        </span>
                    </div>

                    <h2 className="mt-6 text-3xl md:text-5xl font-serif text-white leading-tight">
                        Pengalaman yang menenangkan,
                        <span className="italic text-gold-400"> dari hati ke hati</span>
                    </h2>

                    <p className="mt-4 text-sand-100/80 font-light text-base md:text-lg max-w-2xl mx-auto">
                        Kami utamakan bimbingan ibadah, keselesaan, dan layanan mesra jemaah
                        termasuk warga emas.
                    </p>
                </div>

                {/* Card */}
                <div
                    className="relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-sm"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Quote icon */}
                    <div className="absolute -top-5 left-6 md:left-10 w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-400/20 flex items-center justify-center">
                        <Quote className="w-6 h-6 text-gold-400" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-6 pt-4">
                        {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-gold-400" fill="currentColor" />
                        ))}
                    </div>

                    {/* Main quote (big for elders) */}
                    <blockquote className="text-center md:text-left text-xl md:text-3xl font-serif leading-relaxed text-white">
                        “{t.quote}”
                    </blockquote>

                    {/* Footer */}
                    <div className="mt-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold-500 overflow-hidden p-1 bg-olive-800">
                                <img
                                    src={t.avatar}
                                    alt={`Foto ${t.name}`}
                                    className="w-full h-full object-cover rounded-full"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <cite className="not-italic font-serif text-xl md:text-2xl text-white block">
                                    {t.name}
                                </cite>
                                <span className="text-gold-300 text-xs md:text-sm tracking-widest uppercase">
                                    {t.subtitle}
                                </span>
                            </div>
                        </div>

                        {/* Controls (big tap areas) */}
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={prev}
                                className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center transition"
                                aria-label="Testimoni sebelumnya"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                type="button"
                                onClick={next}
                                className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center transition"
                                aria-label="Testimoni seterusnya"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="mt-10 flex justify-center gap-2">
                        {testimonials.map((_, idx) => (
                            <button
                                key={_.id}
                                onClick={() => goTo(idx)}
                                className={`h-3 rounded-full transition-all ${idx === active ? "w-10 bg-gold-400" : "w-3 bg-white/30 hover:bg-white/50"
                                    }`}
                                aria-label={`Pergi ke testimoni ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Helper note */}
                    <p className="mt-6 text-center text-xs md:text-sm text-sand-100/60">
                        Tip: Swipe kiri/kanan di telefon untuk tukar testimoni.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
