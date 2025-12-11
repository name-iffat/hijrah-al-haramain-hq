import React from 'react';
import { MessageCircle, Plane, BookOpen, MapPin, Heart } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      number: "1",
      title: "Initial Consultation & Guidance",
      desc: "Reach out to our knowledgeable team. We'll understand your needs, dates, and preferences to recommend the best spiritual path."
    },
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      number: "2",
      title: "Secure Your Sacred Journey",
      desc: "Select your preferred Umrah or Hajj package. We facilitate booking, including flights and accommodations."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      number: "3",
      title: "Spiritual & Practical Readiness",
      desc: "Receive visa processing assistance and access exclusive resources to prepare spiritually and practically.",
      isHighlighted: true
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      number: "4",
      title: "Journey to the Holy Cities",
      desc: "Embark on your travels. Enjoy seamless transfers and guided Ziyarat to holy sites in Mecca and Medina."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      number: "5",
      title: "Continuous Care & Reflection",
      desc: "Experience 24/7 on-ground support and post-journey resources to enrich your reflection and memories."
    }
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section with Kaaba Image */}
      <div className="relative w-full h-[350px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sand-300/90 via-sand-200/80 to-transparent"></div>
        </div>

        {/* Islamic Pattern Overlay on Right */}
        <div
          className="absolute right-0 top-0 w-1/3 h-full opacity-20 bg-pattern-islamic"
          style={{ backgroundSize: '200px' }}
        ></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-3xl md:text-5xl font-serif text-gold-600 italic mb-4">
            Your Sacred Journey, Simplified
          </h1>
          <p className="text-olive-800 text-sm md:text-base max-w-xl leading-relaxed">
            Guiding you through every step of your spiritual pilgrimage with care and peace of mind.
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider color="#D9A441" />

      {/* Process Steps Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16 bg-sand-50">
        <h2 className="text-2xl md:text-4xl font-serif text-olive-900 text-center mb-16">
          Our Process: From Inquiry to Reflection
        </h2>

        {/* Steps Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Curved Connecting Line - Desktop Only */}
          <svg
            className="hidden lg:block absolute top-[60px] left-0 w-full h-[60px] pointer-events-none"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M 60 30 Q 180 50, 300 30 Q 420 10, 540 30 Q 660 50, 780 30 Q 900 10, 1020 30 Q 1140 50, 1140 30"
              fill="none"
              stroke="#D9A441"
              strokeWidth="2"
              strokeDasharray="8,8"
              className="opacity-40"
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Circle Icon */}
                <div className={`
                  relative w-28 h-28 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                  ${step.isHighlighted
                    ? 'bg-gold-500 shadow-lg shadow-gold-400/30'
                    : 'bg-transparent border-4 border-gold-400 group-hover:border-gold-500'
                  }
                `}>
                  {/* Decorative Dashed Circle */}
                  <div className={`
                    absolute inset-[-8px] rounded-full border-2 border-dashed 
                    ${step.isHighlighted ? 'border-gold-300' : 'border-gold-300/60'}
                  `}></div>

                  {/* Inner Icon Container */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    ${step.isHighlighted
                      ? 'bg-gold-600'
                      : 'bg-gold-500 group-hover:bg-gold-600'
                    }
                    transition-all duration-300
                  `}>
                    {step.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className={`
                  text-sm font-semibold mb-3 leading-tight px-2
                  ${step.isHighlighted ? 'text-gold-600' : 'text-olive-800'}
                `}>
                  {step.number}. {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-600 leading-relaxed px-2 max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider color="#D9A441" />

      {/* CTA Section */}
      <div className="relative py-16 overflow-hidden">
        {/* Background with Pattern */}
        <div className="absolute inset-0 bg-olive-800">
          <div className="absolute inset-0 bg-pattern-islamic opacity-10"></div>

        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-8">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
            Ready to Begin Your Spiritual Path?
          </h2>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gold-500 text-white font-medium tracking-wide hover:bg-gold-600 transition-all shadow-lg rounded-full"
          >
            Start Your Spiritual Journey Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Process;