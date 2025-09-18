import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-equestrian.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Zirgs un jātnieks arēnā saulrietā" className="w-full h-full object-cover" />
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
      
        {/* Альтернативная кнопка (outline-light) */}
        <Button
          asChild
          className="bg-neutral-900 text-white text-lg px-10 py-4 rounded-lg hover:bg-neutral-800 transition-colors shadow-md"
        >
          <a href="/lv/pasakumi/">
            Skatīt pasākumus
          </a>
        </Button>
      </div>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;