import React from 'react';
import { Target, Heart } from 'lucide-react';
import SectionPattern from '../components/SectionPattern';

const About: React.FC = () => {
   return (
      <div className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
         {/* Corner Patterns */}
         <SectionPattern />

         {/* Intro */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-20 items-center mb-24">
               <div className="md:w-1/2">
                  <div className="relative p-6">
                     <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold-400 -z-0"></div>
                     <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold-400 -z-0"></div>
                     <img
                        src="https://images.unsplash.com/photo-1597935266399-52e85a676b63?q=80&w=2072&auto=format&fit=crop"
                        alt="Pilgrims walking"
                        className="w-full h-auto shadow-2xl z-10 relative rounded-2xl rounded-tr-[5rem]"
                     />
                  </div>
               </div>
               <div className="md:w-1/2 space-y-8 relative">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-pattern-islamic opacity-5 pointer-events-none rounded-full blur-xl"></div>
                  <span className="text-gold-600 font-bold tracking-[0.2em] text-xs uppercase relative z-10">Our Story</span>
                  <h1 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight relative z-10">
                     Facilitating the <span className="italic text-gold-600">Journey of a Lifetime</span>
                  </h1>
                  <div className="space-y-6 text-slate-600 font-light text-lg leading-relaxed relative z-10">
                     <p>
                        Hijrah al Haramain HQ was established with a singular vision: to serve the Guests of Allah with the dignity, comfort, and sincerity they deserve. We understand that for many, this pilgrimage is a lifelong dream.
                     </p>
                     <p>
                        Based in Kuala Lumpur, we have grown from a small family-run agency to a trusted name in the industry, helping thousands of pilgrims from Southeast Asia perform Umrah and Hajj with peace of mind.
                     </p>
                     <p>
                        We are not just a travel agency; we are your companions on this sacred path.
                     </p>
                  </div>
               </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
               <div className="bg-sand-50 p-12 rounded-2xl border-t-4 border-olive-700 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pattern-islamic opacity-10 pointer-events-none"></div>
                  <Target className="w-10 h-10 text-olive-700 mb-6 relative z-10" />
                  <h2 className="text-3xl font-serif text-olive-900 mb-4 relative z-10">Our Mission</h2>
                  <p className="text-slate-700 leading-relaxed font-light text-lg relative z-10">To provide seamless, educational, and spiritually uplifting pilgrimage experiences that are accessible to all, ensuring every pilgrim returns home with a purified heart and accepted worship (Mabrur).</p>
               </div>
               <div className="bg-olive-50 p-12 rounded-2xl border-t-4 border-gold-500 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pattern-islamic opacity-10 pointer-events-none"></div>
                  <Heart className="w-10 h-10 text-gold-600 mb-6 relative z-10" />
                  <h2 className="text-3xl font-serif text-olive-900 mb-4 relative z-10">Our Values</h2>
                  <p className="text-slate-700 leading-relaxed font-light text-lg relative z-10">We operate on the principles of <strong>Amanah</strong> (Trust), <strong>Khidmah</strong> (Service), and <strong>Ukhuwah</strong> (Brotherhood). We treat every pilgrim as a family member, prioritizing their safety, comfort, and spiritual needs above all else.</p>
               </div>
            </div>

            {/* Team Preview */}
            <div className="relative py-12">
               <div className="absolute inset-x-0 top-0 h-full bg-pattern-islamic opacity-[0.03] pointer-events-none"></div>

               <div className="text-center mb-16 relative z-10">
                  <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3 block">Who We Are</span>
                  <h2 className="text-3xl font-serif text-olive-900 mb-4">Our Dedicated Team</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">Led by experienced Mutawwifs and travel experts who are passionate about serving the Ummah.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                  {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="text-center group">
                        <div className="w-full aspect-[3/4] overflow-hidden mb-6 bg-sand-200 relative rounded-t-full shadow-md">
                           <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>
                           <img src={`https://picsum.photos/300/400?random=${i + 10}`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10" />
                           <div className="absolute inset-0 border-[8px] border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-t-full z-20"></div>
                        </div>
                        <h3 className="font-serif font-bold text-olive-900 text-xl">Ustaz Abdullah</h3>
                        <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mt-2">Head Mutawwif</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;