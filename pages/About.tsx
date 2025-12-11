import React from 'react';
import { Target, Heart } from 'lucide-react';
import ustazHalim from '../assets/mutawwif/ustaz-hj-abd-halim.png';
import ustazManan from '../assets/mutawwif/ustaz-abdul-manan.png';
import ustazZamri from '../assets/mutawwif/ustaz-zamri.png';
import ustazAzizi from '../assets/mutawwif/ustaz-azizi-rosli.png';


const About: React.FC = () => {
   const team = [
      {
         name: "Ustaz Haji Abdul Halim",
         role: "Ketua Mutawwif",
         image: ustazHalim
      },
      {
         name: "Ustaz Abdul Manan",
         role: "Mutawwif Bertauliah",
         image: ustazManan
      },
      {
         name: "Ustaz Zamri",
         role: "Mutawwif Berpengalaman",
         image: ustazZamri
      },
      {
         name: "Ustaz Azizi Rosli",
         role: "Mutawwif",
         image: ustazAzizi
      }
   ];

   return (
      <div className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">


         {/* Intro */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-20 items-center mb-24">
               <div className="md:w-1/2">
                  <div className="relative p-6">
                     <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold-400 -z-0"></div>
                     <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold-400 -z-0"></div>
                     <img
                        src="https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?q=80&w=2072&auto=format&fit=crop"
                        alt="Pilgrims walking"
                        className="w-full h-auto shadow-2xl z-10 relative rounded-2xl rounded-tr-[2rem]"
                     />
                  </div>
               </div>
               <div className="md:w-1/2 space-y-8 relative">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-pattern-islamic opacity-5 pointer-events-none rounded-full blur-xl"></div>
                  <span className="text-gold-600 font-bold tracking-[0.2em] text-xs uppercase relative z-10">Kisah Kami</span>
                  <h1 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight relative z-10">
                     Memudahkan <span className="italic text-gold-600">Perjalanan Sepanjang Hayat</span>
                  </h1>
                  <div className="space-y-6 text-slate-600 font-light text-lg leading-relaxed relative z-10">
                     <p>
                        Hijrah al Haramain HQ ditubuhkan dengan satu visi utama: untuk melayani Tetamu Allah dengan martabat, keselesaan dan keikhlasan yang mereka layak terima. Kami memahami bahawa bagi ramai jemaah, perjalanan ini adalah impian seumur hidup.
                        <p>
                           Berpusat di Bedong Kedah, kami berkembang menjadi pakar dalam menyediakan pakej premium bajet Umrah, membantu ribuan jemaah dari seluruh Asia Tenggara menunaikan Umrah dan Haji dengan penuh ketenangan.
                        </p>
                        <p>
                           Kami bukan sekadar agensi pelancongan; kami adalah sahabat perjalanan anda di jalan suci ini.
                        </p>
                     </p>
                  </div>
               </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
               <div className="bg-sand-50 p-12 rounded-2xl border-t-4 border-olive-700 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pattern-islamic opacity-10 pointer-events-none"></div>
                  <Target className="w-10 h-10 text-olive-700 mb-6 relative z-10" />
                  <h2 className="text-3xl font-serif text-olive-900 mb-4 relative z-10">Misi Kami</h2>
                  <p className="text-slate-700 leading-relaxed font-light text-lg relative z-10">Untuk menyediakan pengalaman ibadah yang lancar, bermanfaat, dan meningkatkan kerohanian, agar setiap jemaah dapat menunaikan Umrah atau Haji dengan mudah serta pulang dengan hati yang disucikan dan ibadah yang diterima (Mabrur).</p>
               </div>
               <div className="bg-olive-50 p-12 rounded-2xl border-t-4 border-gold-500 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pattern-islamic opacity-10 pointer-events-none"></div>
                  <Heart className="w-10 h-10 text-gold-600 mb-6 relative z-10" />
                  <h2 className="text-3xl font-serif text-olive-900 mb-4 relative z-10">Nilai Kami</h2>
                  <p className="text-slate-700 leading-relaxed font-light text-lg relative z-10">Kami beroperasi berlandaskan prinsip Amanah, Khidmah, dan Ukhuwah. Setiap jemaah kami layani seperti ahli keluarga sendiri, dengan mengutamakan keselamatan, keselesaan, dan keperluan rohani mereka sepanjang perjalanan.</p>
               </div>
            </div>

            {/* Team Preview */}
            <div className="relative py-12">
               <div className="absolute inset-x-0 top-0 h-full bg-pattern-islamic opacity-[0.03] pointer-events-none"></div>

               <div className="text-center mb-16 relative z-10">
                  <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3 block">Siapakah Kami</span>
                  <h2 className="text-3xl font-serif text-olive-900 mb-4">Pasukan Dedikasi Kami</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">Diketuai oleh para Mutawwif berpengalaman dan pakar pelancongan yang berdedikasi dalam berkhidmat kepada Ummah.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                  {team.map((member, idx) => (
                     <article key={idx} className="text-center group">
                        <div className="w-full aspect-[3/4] overflow-hidden mb-6 bg-sand-200 relative rounded-t-full shadow-md">
                           <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>

                           <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover  duration-700 relative z-10"
                           />

                           <div className="absolute inset-0 border-[6px] sm:border-[8px] border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-t-full z-20"></div>
                        </div>

                        <h3 className="font-serif font-bold text-olive-900 text-lg sm:text-xl">
                           {member.name}
                        </h3>
                        <p className="text-gold-600 text-[0.65rem] sm:text-xs font-bold tracking-[0.2em] uppercase mt-2">
                           {member.role}
                        </p>
                     </article>
                  ))}
               </div>

            </div>
         </div>
      </div>
   );
};

export default About;