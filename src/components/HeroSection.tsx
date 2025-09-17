import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-equestrian.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Лошадь и всадник на арене на закате" className="w-full h-full object-cover" />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-text/70 via-text/40 to-text/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-hero mb-6">
            Место, где люди встречаются с лошадьми
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light opacity-95">
            Тренировки, события и отдых рядом с природой — для детей и взрослых
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild className="btn-velvet text-lg px-10 py-4">
              <a href="/ru/pakalpojumi/jasanas-trenini/">
                Записаться на тренировки
              </a>
            </Button>
            <Button variant="outline" asChild className="btn-outline-velvet text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary">
              <a href="/ru/pasakumi/">
                Смотреть события
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;