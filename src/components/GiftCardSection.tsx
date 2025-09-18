import { Button } from "@/components/ui/button";

const GiftCardSection = () => {
  const features = [
    "Tiešsaistes maksājums",
    "Elastīga summa", 
    "Dāvanu iesaiņošana"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="velvet-bg rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-section mb-6">
              Dāviniet emocijas — dāviniet braucienu pie zirgiem
            </h2>
            
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Elektroniska vai drukāta, derīga 12 mēnešus
            </p>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium">
              {features.map((feature, index) => (
                <span key={index}>{feature}</span>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 hover:text-primary-700 text-lg px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="/lv/davanu-kartes/">
                Pirkt dāvanu karti
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;