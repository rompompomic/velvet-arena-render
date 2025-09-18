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
        <div className="velvet-bg rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative Bow and Ribbons */}
          <div className="absolute top-0 right-0 pointer-events-none">
            {/* Golden ribbon */}
            <div className="absolute -top-2 -right-2 w-32 h-32 opacity-40">
              <div className="absolute top-8 right-8 w-16 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 transform rotate-45 rounded-full shadow-lg"></div>
              <div className="absolute top-12 right-4 w-16 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 transform rotate-45 rounded-full shadow-lg"></div>
              <div className="absolute top-6 right-12 w-12 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 transform -rotate-45 rounded-full shadow-lg"></div>
              <div className="absolute top-10 right-8 w-12 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 transform -rotate-45 rounded-full shadow-lg"></div>
            </div>
            {/* Bow center */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg opacity-60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Dāviniet emocijas — dāviniet braucienu pie zirgiem
            </h2>
            
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto px-4">
              Elektroniska vai drukāta, derīga 12 mēnešus
            </p>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 px-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm sm:text-base font-medium">
                  <feature.icon className="w-10 h-10 flex-shrink-0" />
                  <span className="whitespace-nowrap">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 hover:text-primary-700 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mx-4"
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