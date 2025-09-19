import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-equestrian.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Zirgs un jātnieks arēnā saulrietā"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-hero mb-6">
            Vieta, kur cilvēki satiekas ar zirgiem
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light opacity-95">
            Apmācības, pasākumi un atpūta dabas tuvumā — bērniem un pieaugušajiem
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-8">
            {/* Левая — всегда красная (shadcn Button ок) */}
            <Button
              asChild
              variant="default"
              className="h-11 px-6 rounded-lg font-semibold
                         bg-[#963026] text-white
                         shadow-md transition-transform duration-300
                         hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0
                         flex items-center justify-center
                         focus:outline-none focus:ring-2 focus:ring-[#963026]/40"
            >
              <a href="/lv/pakalpojumi/jasanas-trenini/" className="inline-flex items-center gap-2">
                <span>Pieteikties treniņiem</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Button>

            {/* Правая — всегда ЧЁРНАЯ, без shimmer и без hover-изменений (НЕ используем Button) */}
            <a
              href="/lv/pasakumi/"
              role="button"
              className="inline-flex items-center justify-center gap-2
                         h-11 px-6 rounded-lg font-semibold
                         bg-neutral-900 text-white
                         shadow-md transition-transform duration-300
                         hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0
                         focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span>Skatīt pasākumus</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
