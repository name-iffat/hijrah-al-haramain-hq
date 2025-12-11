import React from 'react';
import { Check, MapPin, Plane } from 'lucide-react';
import SectionPattern from '../components/SectionPattern';

const packages = [
  {
    id: 1,
    name: "Economy Saver",
    type: "Essential Comfort",
    price: "RM 6,990",
    duration: "12 Days / 10 Nights",
    description: "Ideal for pilgrims seeking a fulfilling journey on a budget, without compromising on essential comforts.",
    hotelMakkah: "3★ Hotel (500m)",
    hotelMadinah: "3★ Hotel (300m)",
    flight: "Transit Flight",
    features: [
      "Tourist Visa Included",
      "Mutawwif Support",
      "Transport by AC Bus",
      "Ziarah Makkah & Madinah"
    ],
    image: "https://images.unsplash.com/photo-1548231227-2c1c6016335a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Standard Comfort",
    type: "Highly Recommended",
    price: "RM 8,990",
    duration: "12 Days / 10 Nights",
    description: "A balanced spiritual experience offering closer accommodations and direct flights for ease of mind.",
    hotelMakkah: "4★ Hotel (250m)",
    hotelMadinah: "4★ Hotel (150m)",
    flight: "Direct Flight (MAS/Saudia)",
    features: [
      "Umrah Visa Included",
      "Experienced Mutawwif",
      "Full Board Meals (Asian)",
      "Ziarah + Hudaibiyah",
      "Free Ihram Kit"
    ],
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c438e95?q=80&w=2144&auto=format&fit=crop",
    popular: true
  },
  {
    id: 3,
    name: "VIP Executive",
    type: "Luxury Experience",
    price: "RM 14,990",
    duration: "12 Days / 10 Nights",
    description: "Immerse yourself completely in worship with 5-star hospitality right at the doorstep of the Haram.",
    hotelMakkah: "5★ Clock Tower (0m)",
    hotelMadinah: "5★ Haram View (50m)",
    flight: "Business Class Option",
    features: [
      "VIP Visa Handling",
      "Private GMC Transport",
      "International Buffet",
      "Private Mutawwif",
      "Taif Excursion Included"
    ],
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop"
  }
];

const Packages: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-sand-50 relative">
      {/* Corner Patterns */}
      <SectionPattern />

      <div className="absolute top-0 inset-x-0 h-[400px] bg-olive-900 -z-0">
        <div className="absolute inset-0 bg-pattern-islamic opacity-10"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-sand-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <span className="text-gold-400 font-bold tracking-widest text-xs uppercase mb-3 block">Our Offerings</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Packages to Suit Your Needs</h1>
          <p className="text-olive-200 text-lg font-light">
            We have carefully curated these packages to ensure you can perform your ibadah with peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 relative group ${pkg.popular ? 'ring-2 ring-gold-500 shadow-2xl scale-105 z-20' : 'shadow-lg border border-sand-200 hover:shadow-xl'}`}>

              {pkg.popular && (
                <div className="absolute top-0 inset-x-0 bg-gold-500 text-white text-center py-1.5 text-xs font-bold tracking-widest uppercase z-30">
                  Most Popular Choice
                </div>
              )}

              {/* Image Header */}
              <div className="h-64 overflow-hidden relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <div className="text-gold-300 text-xs font-medium tracking-wider uppercase mb-1">{pkg.type}</div>
                  <h3 className="text-white text-3xl font-serif">{pkg.name}</h3>
                </div>
                {/* Subtle overlay on image */}
                <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                {pkg.popular && <div className="absolute top-0 right-0 w-20 h-20 bg-pattern-islamic opacity-5 pointer-events-none"></div>}

                <div className="mb-8 pb-8 border-b border-sand-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-slate-400">from</span>
                    <p className="text-3xl font-serif text-olive-900">{pkg.price}</p>
                  </div>
                  <p className="text-slate-500 text-sm mt-4 leading-relaxed font-light">{pkg.description}</p>
                </div>

                <div className="space-y-5 mb-10 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-olive-50 rounded-full text-olive-600"><MapPin size={16} /></div>
                    <div className="text-sm">
                      <span className="font-bold text-olive-900 block mb-0.5">Makkah</span>
                      <span className="text-slate-600">{pkg.hotelMakkah}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-olive-50 rounded-full text-olive-600"><MapPin size={16} /></div>
                    <div className="text-sm">
                      <span className="font-bold text-olive-900 block mb-0.5">Madinah</span>
                      <span className="text-slate-600">{pkg.hotelMadinah}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-olive-50 rounded-full text-olive-600"><Plane size={16} /></div>
                    <div className="text-sm">
                      <span className="font-bold text-olive-900 block mb-0.5">Flight</span>
                      <span className="text-slate-600">{pkg.flight}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                    <ul className="space-y-3">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-gold-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-4 rounded-full font-bold text-center text-sm tracking-widest uppercase transition-all block ${pkg.popular ? 'bg-olive-900 text-white hover:bg-olive-800 shadow-lg' : 'bg-sand-100 text-olive-900 hover:bg-gold-500 hover:text-white'}`}
                >
                  Book This Package
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white border border-gold-200 rounded-2xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif text-olive-900 mb-4">Travelling with a Large Group?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-light">
              We specialize in organizing private family Umrah trips and corporate delegations. Let us tailor a journey that meets your specific dates and requirements.
            </p>
            <a href="#contact" className="inline-block px-10 py-4 bg-transparent border border-olive-900 text-olive-900 font-bold text-sm tracking-widest uppercase hover:bg-olive-900 hover:text-white transition-all rounded-full">
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;