import { Button } from "@/components/ui/button";
import { CreditCard, Euro, Gift } from "lucide-react";
import horse1Image from "@/assets/Horse1.png";

const GiftCardSection = () => {
  const features = [
    { text: "Tiešsaistes maksājums", icon: CreditCard },
    { text: "Elastīga summa", icon: Euro },
    { text: "Dāvanu iesaiņošana", icon: Gift },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="velvet-bg rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background Horse Image */}
          <div className="absolute inset-0 flex items-end justify-end pointer-events-none">
            <img
              src={horse1Image}
              alt="Horse decoration"
              className="
                opacity-20 
                object-contain 
                w-3/4 max-w-sm 
                sm:max-w-md md:max-w-lg lg:max-w-xl
              "
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-section mb-6">
              Dāviniet emocijas — dāviniet braucienu pie zirgiem
            </h2>

            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Elektroniska vai drukāta, derīga 12 mēnešus
            </p>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <feature.icon className="w-10 h-10" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 hover:text-primary-700 text-lg px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="/lv/davanu-kartes/">Pirkt dāvanu karti</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;
