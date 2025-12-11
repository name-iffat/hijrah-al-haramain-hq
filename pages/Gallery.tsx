import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1647177156544-0d51fb7c900c?q=80&w=2072&auto=format&fit=crop", caption: "Kaabah, Makkah" },
    { src: "https://images.unsplash.com/photo-1667456416191-43ba057635c1?q=80&w=2072&auto=format&fit=crop", caption: "Masjid Nabawi" },
    { src: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop", caption: "Madinah Courtyard" },
    { src: "https://images.unsplash.com/photo-1674066253665-4d2553a3bcb8?q=80&w=2072&auto=format&fit=crop", caption: "Kurma" },
    { src: "https://images.unsplash.com/photo-1653985742057-683cc396bfe2?q=80&w=2072&auto=format&fit=crop", caption: "Melawat Unta" },
    { src: "https://images.unsplash.com/photo-1584186028062-637e3e77318d?q=80&w=2072&auto=format&fit=crop", caption: "Zam zam" },
    { src: "https://images.unsplash.com/photo-1674313505558-206662f3de03?q=80&w=2072&auto=format&fit=crop", caption: "Jabal Nur" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <span className="text-gold-600 font-bold tracking-widest text-xl uppercase mb-3 block">Portfolio Kami</span>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-900 mb-6">Momen Ketenangan Jiwa</h1>
          <p className="text-slate-600 text-lg font-light">
            Sekilas perjalanan yang lalu. Kami berbesar hati dapat menyaksikan momen-momen rohani yang indah bersama para jemaah kami.
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