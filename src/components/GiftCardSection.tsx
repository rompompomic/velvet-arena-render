import { Button } from "@/components/ui/button";

const GiftCardSection = () => {
  const features = [
    "Онлайн-оплата",
    "Гибкая сумма", 
    "Подарочная упаковка"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="velvet-bg rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-section mb-6">
              Подарите эмоции — дарите поездку к лошадям
            </h2>
            
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Электронная или печатная, действует 12 месяцев
            </p>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-white rounded-full opacity-75" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-white text-primary hover:bg-white/90 hover:text-primary-700 text-lg px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="/ru/davanu-kartes/">
                Купить подарочную карту
              </a>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20" />
          
          {/* Sparkle Effect */}
          <div className="absolute top-1/4 right-1/4 w-1 h-8 bg-white/30 rounded-full transform rotate-45" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-6 bg-white/30 rounded-full transform -rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;