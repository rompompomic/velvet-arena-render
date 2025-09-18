import { Button } from "@/components/ui/button";

// Секция с подарочной картой + декоративный бантик и анимации
const GiftCardSection = () => {
  const features = [
    "Tiešsaistes maksājums",
    "Elastīga summa",
    "Dāvanu iesaiņošana",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="velvet-bg rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Декоративный бантик */}
          <div
            className="absolute -top-6 right-6 md:right-10 w-28 md:w-32 aspect-square pointer-events-none select-none bow-float z-20"
            aria-hidden="true"
          >
            {/* SVG бантика (минималистичный) */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-xl"
            >
              <defs>
                <linearGradient id="bowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#f5e8ff" stopOpacity={0.85} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="26" fill="url(#bowGradient)" />
              <path
                d="M100 100 L32 64 Q20 58 26 72 L40 108 Q44 118 54 114 L100 100"
                fill="url(#bowGradient)"
              />
              <path
                d="M100 100 L168 64 Q180 58 174 72 L160 108 Q156 118 146 114 L100 100"
                fill="url(#bowGradient)"
              />
              <path
                d="M92 126 L84 180 Q83 188 90 184 L110 170 Q114 168 112 162 L100 124 L92 126"
                fill="url(#bowGradient)"
              />
              <path
                d="M108 126 L116 180 Q117 188 110 184 L90 170 Q86 168 88 162 L100 124 L108 126"
                fill="url(#bowGradient)"
              />
            </svg>
          </div>

          {/* Контент */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-section mb-6 fade-in-up" style={{ animationDelay: '0ms' }}>
                Dāviniet emocijas — dāviniet braucienu pie zirgiem
              </h2>

              <p
                className="text-xl mb-8 opacity-95 max-w-2xl mx-auto fade-in-up"
                style={{ animationDelay: '120ms' }}
              >
                Elektroniska vai drukāta, derīga 12 mēnešus
              </p>

              {/* Особенности */}
              <div
                className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium fade-in-up"
                style={{ animationDelay: '240ms' }}
              >
                {features.map((feature, index) => (
                  <span key={index} className="feature-item relative">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Кнопка */}
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 hover:text-primary-700 text-lg px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 fade-in-up"
                style={{ animationDelay: '360ms' }}
              >
                <a href="/lv/davanu-kartes/">Pirkt dāvanu karti</a>
              </Button>
            </div>
        </div>
      </div>

      {/* Локальные стили анимаций */}
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(24px) scale(.98); }
          60% { opacity: 1; transform: translateY(-2px) scale(1); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fade-in-up { 
          opacity: 0; 
          animation: fadeUp .9s cubic-bezier(.16,.84,.44,1) forwards; 
        }
        @keyframes bowFloat {
          0% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(6px) rotate(2deg); }
          100% { transform: translateY(0) rotate(-2deg); }
        }
        .bow-float { animation: bowFloat 5.5s ease-in-out infinite; }
        .feature-item::after { 
          content: ""; 
          position: absolute; 
          left: 50%; 
          bottom: -6px; 
          width: 0; 
          height: 2px; 
          background: currentColor; 
          opacity: .4; 
          transform: translateX(-50%); 
          transition: width .4s cubic-bezier(.16,.84,.44,1); 
        }
        .feature-item:hover::after { width: 70%; }
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up, .bow-float { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default GiftCardSection;