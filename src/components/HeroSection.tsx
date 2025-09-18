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
        <div className="absolute inset-0 bg-gradient-to-b from-text/80 via-text/50 to-text/10" />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Основная кнопка */}
            <Button asChild className="btn-velvet text-lg px-10 py-4">
              <a href="/lv/pakalpojumi/jasanas-trenini/">
                Pieteikties treniņiem
              </a>
            </Button>

            {/* Вторая кнопка — тёмная с анимацией */}
            <Button
              asChild
              className="group relative overflow-hidden bg-neutral-900 text-white text-lg px-10 py-4 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              <a href="/lv/pasakumi/" className="inline-flex items-center gap-2">
                <span>Skatīt pasākumus</span>
                {/* стрелка слегка уезжает вправо при ховере */}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                {/* shine-блик */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full shine-mask" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
