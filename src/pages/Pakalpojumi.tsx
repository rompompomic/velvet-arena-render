import { Home, Users, Calendar, MapPin, Building2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import service images
import serviceStable from "@/assets/service-horse-stable.jpg";
import serviceRiding from "@/assets/service-riding-lessons.jpg";
import serviceArena from "@/assets/service-arena-rental.jpg";
import serviceExcursions from "@/assets/service-excursions.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceOther from "@/assets/service-other-services.jpg";
const Pakalpojumi = () => {
  const services = [{
    title: "Zirgu uzturēšana",
    description: "Profesionāla zirgu aprūpe un uzturēšana mūsdienīgās stallis ar augstākajiem komforta standartiem.",
    badge: "Core",
    href: "/lv/pakalpojumi/zirgu-uzturesana/",
    image: serviceStable,
    icon: Home
  }, {
    title: "Jāšanas treniņi",
    description: "Kvalitatīvas jāšanas nodarbības visiem līmeņiem ar pieredzējušiem instruktoriem drošā vidē.",
    badge: "Core",
    href: "/lv/pakalpojumi/jasanas-trenini/",
    image: serviceRiding,
    icon: Users
  }, {
    title: "Laukumu īre",
    description: "Profesionālu jāšanas laukumu īre ar visām nepieciešamajām iekārtām un šķēršļiem.",
    badge: "Additional",
    href: "/lv/pakalpojumi/laukumu-ire/",
    image: serviceArena,
    icon: MapPin
  }, {
    title: "Ekskursijas",
    description: "Izglītojošas ekskursijas visai ģimenei, lai iepazītos ar zirgiem un to aprūpi.",
    badge: "Additional",
    href: "/lv/pakalpojumi/ekskursijas/",
    image: serviceExcursions,
    icon: Calendar
  }, {
    title: "Korporatīvie pasākumi",
    description: "Unikāli komandas veidošanas pasākumi ar zirgiem uzņēmumiem un organizācijām.",
    badge: "Additional",
    href: "/lv/pakalpojumi/korporativie-pasakumi/",
    image: serviceCorporate,
    icon: Building2
  }, {
    title: "Citi pakalpojumi",
    description: "Papildu pakalpojumi zirgu aprūpē, veselības uzraudzībā un specializētās terapijas.",
    badge: "Additional",
    href: "/lv/pakalpojumi/citi-pakalpojumi/",
    image: serviceOther,
    icon: Heart
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-hero mb-6">Mūsu pakalpojumi</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Atklājiet plašu pakalpojumu klāstu, kas paredzēts gan pieredzējušiem jātniekiem, gan tiem, kas tikai sāk savu ceļu ar zirgiem
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
              const IconComponent = service.icon;
              return <div key={index} className="glass-card overflow-hidden hover-lift group">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Icon and Badge Row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        
                      </div>

                      {/* Title */}
                      <h3 className="text-card-title mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      {/* Learn More Button */}
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5 transition-colors duration-300" asChild>
                        <a href={service.href}>
                          Uzzināt vairāk
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Pakalpojumi;