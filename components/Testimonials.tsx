import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 bg-olive-900 text-sand-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-200/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <Star className="w-8 h-8 text-gold-500 mx-auto mb-8" fill="currentColor" />
                <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight italic">
                    "Alhamdulillah, the guidance provided by the Mutawwif was exceptional. My heart felt at ease throughout the entire journey."
                </h2>

                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border-2 border-gold-500 overflow-hidden mb-6 p-1 bg-olive-800">
                        <img src="https://picsum.photos/200/200?random=5" alt="Reviewer" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <cite className="not-italic font-serif text-2xl text-white mb-2">Haji Ismail & Family</cite>
                    <span className="text-gold-400 text-sm tracking-widest uppercase">December 2023 Umrah Group</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
