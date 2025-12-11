import React, { useState, useEffect, useCallback } from 'react';
import { Facebook, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionPattern from './SectionPattern';

// @ts-ignore
import poster1 from '../assets/poster/poster-1.jpg';
// @ts-ignore
import poster2 from '../assets/poster/poster-2.jpg';
// @ts-ignore
import poster3 from '../assets/poster/poster-3.jpg';

const posters = [poster1, poster2, poster3];

const LatestProgram: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);
    };

    // Auto-advance
    useEffect(() => {
        if (!isHovered) {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }
    }, [isHovered, nextSlide]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <SectionPattern />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3 block">Latest Updates</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-olive-900">Featured Program</h2>
                </div>

                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-sand-200 flex flex-col lg:flex-row h-auto lg:h-[600px]">
                    {/* Poster Carousel Container */}
                    <div
                        className="lg:w-1/2 relative bg-neutral-900 flex items-center justify-center overflow-hidden h-[500px] lg:h-full group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Images */}
                        <div className="w-full h-full relative">
                            {posters.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <img
                                        src={src}
                                        alt={`Latest Program Poster ${index + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {posters.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pattern-islamic opacity-10 pointer-events-none"></div>

                        <div className="inline-flex items-center gap-2 text-gold-600 font-bold text-xs tracking-widest uppercase mb-6">
                            <Calendar size={14} />
                            <span>New Announcement</span>
                        </div>

                        <h3 className="text-3xl font-serif text-olive-900 mb-6 leading-tight">
                            Latest Journey Opportunities & Updates
                        </h3>

                        <p className="text-slate-600 mb-10 font-light text-lg leading-relaxed">
                            We are constantly updating our packages and special programs to serve you better.
                            Browse through our featured posters to see our latest offerings.
                            For full details, itineraries, and community discussions, visit our official Facebook post.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.facebook.com/share/p/1CgDpazzjQ/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1877F2] text-white rounded-full font-medium transition-all hover:bg-[#166fe5] hover:shadow-lg hover:-translate-y-1 group"
                            >
                                <Facebook size={20} fill="currentColor" />
                                <span>View on Facebook</span>
                                <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                        <p className="mt-8 text-xs text-slate-400 font-light">
                            *Click the button above to be redirected to the official post for comments and inquiries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProgram;
