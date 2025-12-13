
import React, { useMemo, useState, useEffect } from 'react';
import { Shield, Heart, Star, ArrowUpRight } from 'lucide-react';
import SectionPattern from '../components/SectionPattern';
import Masonry, { Item } from '../components/Masonry';
import UmrahCourseSection from '../components/UmrahCourseSection';

// @ts-ignore
import v1 from '../assets/poster/vertical-1.jpg';
// @ts-ignore
import v2 from '../assets/poster/vertical-2.jpg';
// @ts-ignore
import v3 from '../assets/poster/vertical-3.jpg';
// @ts-ignore
import v4 from '../assets/poster/vertical-4.jpg';
// @ts-ignore
import v5 from '../assets/poster/vertical-5.jpg';
// @ts-ignore
import poster1 from '../assets/poster/poster-1.jpg';
// @ts-ignore
import poster2 from '../assets/poster/poster-2.jpg';
// @ts-ignore
import poster3 from '../assets/poster/poster-3.jpg';


const Home: React.FC = () => {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosterIndex((prev) => (prev + 1) % 3);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const masonryItems: Item[] = useMemo(() => [
    { id: '1', img: v1, url: '#', height: 800 },
    { id: '2', img: v2, url: '#', height: 600 },
    { id: '3', img: v3, url: '#', height: 500 },
    { id: '4', img: v4, url: '#', height: 350 },
    { id: '5', img: v5, url: '#', height: 450 },
  ], []);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop"
            alt="Kaabah View"
            className="w-full h-full object-cover animate-fade-in"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-olive-950/90 via-olive-950/70 to-olive-950/40"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Subtle Pattern at the bottom */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-olive-950/80 to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

            {/* Left Side: Text Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in-up pt-20 lg:pt-0">
              <span className="inline-block py-1.5 px-4 border border-white/20 rounded-full bg-black/20 backdrop-blur-sm text-sand-100 text-xs tracking-[0.2em] uppercase font-bold mb-4">
                Perjalanan Sepanjang Hayat
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-8 text-shadow-lg">
                Tunaikan Umrah dengan <br />
                <span className="text-gold-400 italic">Ikhlas</span> & <span className="text-gold-400 italic">Selesa</span>
              </h1>
              <p className="text-lg md:text-xl text-sand-100 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-12 opacity-90">
                Kami membimbing anda pada setiap langkah perjalanan rohani menuju Tanah Suci, memastikan ketenangan jiwa agar anda dapat fokus sepenuhnya pada ibadah.              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a
                  href="#packages"
                  className="px-10 py-4 bg-gold-500 hover:bg-white hover:text-olive-900 text-white font-medium tracking-wide transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group rounded-full"
                >
                  View Packages <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-10 py-4 bg-transparent border border-white text-white font-medium tracking-wide hover:bg-white hover:text-olive-900 transition-all duration-300 flex items-center justify-center rounded-full"
                >
                  Start Inquiry
                </a>
              </div>
            </div>

            {/* Right Side: Masonry Gallery */}
            <div className="hidden lg:block h-[35rem] w-full relative">
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.8}
                stagger={0.05}
                animateFrom="right"
                scaleOnHover={true}
                hoverScale={1.05}
                blurToFocus={false}
                colorShiftOnHover={false}
              />
              {/* Gradient Overlay to fade bottom */}
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hidden lg:block">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <span className="text-white/50">Scroll</span>
        </div>
      </section>
      {/* Umrah Course Section */}
      <UmrahCourseSection />


      {/* Intro / Values Section */}
      <section className="py-32 bg-sand-50 relative overflow-hidden">
        {/* Geometric Patterns */}
        <SectionPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">

            {/* Carousel Side */}
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] bg-olive-100  overflow-hidden relative z-10 shadow-2xl group">
                {[poster1, poster2, poster3].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Intro Poster ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentPosterIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {[0, 1, 2].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPosterIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPosterIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -bottom-8 -left-8 w-full h-full border border-gold-700/50  -z-0 bg-pattern-subtle"></div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2">
              <span className="text-gold-600 font-bold tracking-widest text-xl uppercase mb-4 block">Mengapa Memilih Hijrah al Haramain</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-olive-900 mb-10 leading-tight">Memuliakan Tetamu<br />Allah</h2>
              <p className="text-slate-600 leading-relaxed mb-12 font-bold text-lg">
                Kami percaya bahawa perjalanan ibadah anda harus bebas daripada kebimbangan duniawi. Misi kami adalah untuk memudahkan sebuah perjalanan yang bukan sahaja lancar dari segi logistik, tetapi juga mengangkat jiwa secara rohani.
              </p>

              <div className="space-y-10">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-gold-600" />,
                    title: "Amanah (Kepercayaan)",
                    desc: "Harga yang telus tanpa caj tersembunyi. Kami menunaikan apa yang kami janjikan"
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-gold-600" />,
                    title: "Layanan Mesra",
                    desc: "Mutawwif berdedikasi yang melayani anda seperti keluarga sepanjang perjalanan."
                  },
                  {
                    icon: <Star className="w-6 h-6 text-gold-600" />,
                    title: "Halal & Patuh Syariah",
                    desc: "Memastikan setiap aspek perjalanan anda mematuhi prinsip-prinsip Islam."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="mt-1 shrink-0 bg-white p-4 rounded-full h-fit shadow-sm border border-sand-200 group-hover:border-gold-300 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-olive-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600 font-light text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Decorative Divider */}
      <div className="flex items-center justify-center py-4 bg-sand-50">
        <div className="h-[1px] w-24 bg-gold-300"></div>
        <div className="w-4 h-4 rotate-45 border border-gold-400 mx-4 bg-sand-50"></div>
        <div className="h-[1px] w-24 bg-gold-300"></div>
      </div>
    </div>
  );
};

export default Home;