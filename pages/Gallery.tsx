import React from 'react';
import SectionPattern from '../components/SectionPattern';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop", caption: "Kaabah, Makkah" },
    { src: "https://images.unsplash.com/photo-1565552629477-cd2c2bf3b63e?q=80&w=2074&auto=format&fit=crop", caption: "Masjid Nabawi" },
    { src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop", caption: "Madinah Courtyard" },
    { src: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop", caption: "Details of Light" },
    { src: "https://images.unsplash.com/photo-1585698522307-e5088eb7e614?q=80&w=2072&auto=format&fit=crop", caption: "Quran Recitation" },
    { src: "https://images.unsplash.com/photo-1647895058693-85cb96041e2f?q=80&w=2070&auto=format&fit=crop", caption: "Pilgrim Groups" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white relative">
      {/* Corner Patterns */}
      <SectionPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-900 mb-6">Moments of Tranquility</h1>
          <p className="text-slate-600 text-lg font-light">
            Glimpses from previous journeys. We are honored to have witnessed these beautiful spiritual moments with our pilgrims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-sand-100 rounded-xl shadow-md ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}
            >
              {/* Pattern inside card placeholder */}
              <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>

              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 relative z-10"
              />
              <div className="absolute inset-0 bg-olive-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-serif text-2xl tracking-wide">{img.caption}</p>
                  <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;