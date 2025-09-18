import { Button } from "@/components/ui/button";
import { CreditCard, Euro, Gift } from "lucide-react";

const GiftCardSection = () => {
  const features = [
    { text: "Tiešsaistes maksājums", icon: CreditCard },
    { text: "Elastīga summa", icon: Euro }, 
    { text: "Dāvanu iesaiņošana", icon: Gift }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="velvet-bg rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative Bow - Top Center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 z-20">
            <div className="w-16 h-12 md:w-20 md:h-16 relative">
              {/* Bow knot */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-full transform rotate-45 shadow-lg"></div>
              <div className="absolute inset-1 bg-gradient-to-r from-red-300 to-red-500 rounded-full transform rotate-45"></div>
              {/* Bow ribbons */}
              <div className="absolute -left-4 top-1/2 w-8 h-6 bg-gradient-to-r from-red-400 to-red-600 transform -translate-y-1/2 -rotate-12 rounded-l-full shadow-md"></div>
              <div className="absolute -right-4 top-1/2 w-8 h-6 bg-gradient-to-r from-red-400 to-red-600 transform -translate-y-1/2 rotate-12 rounded-r-full shadow-md"></div>
            </div>
          </div>
          
          {/* Decorative Ribbons - Corners */}
          <div className="absolute top-4 right-4 w-3 h-20 md:w-4 md:h-24 bg-gradient-to-b from-gold-400 to-gold-600 transform rotate-12 rounded-full opacity-80"></div>
          <div className="absolute top-8 left-4 w-3 h-16 md:w-4 md:h-20 bg-gradient-to-b from-gold-400 to-gold-600 transform -rotate-12 rounded-full opacity-80"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-section mb-6">
              Dāviniet emocijas — dāviniet braucienu pie zirgiem
            </h2>
            
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Elektroniska vai drukāta, derīga 12 mēnešus
            </p>

            {/* Trust Features */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-sm md:text-base font-medium">
                  <feature.icon className="w-10 h-10 flex-shrink-0" />
                  <span className="text-center sm:text-left">{feature.text}</span>
                </div>
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