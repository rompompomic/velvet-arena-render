import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import service images
import serviceStable from "@/assets/service-horse-stable.jpg";
import serviceRiding from "@/assets/service-riding-lessons.jpg"; // ← используем как фон hero
import serviceArena from "@/assets/service-arena-rental.jpg";
import serviceExcursions from "@/assets/service-excursions.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceOther from "@/assets/service-other-services.jpg";
import ridingIcon from "@/assets/riding-icon.webp";

const StableIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* Stable building with roof */}
    <path d="M2 9 12 2l10 7v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Z" />
    <path d="M7 12h3v9H7V12ZM14 12h3v9h-3V12Z" fill="white" opacity=".3" />
    <path d="M9 16h6v2H9v-2Z" fill="white" opacity=".2" />
  </svg>
);

const RidingIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* Person riding horse */}
    <path d="M14 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
    <path d="M13 7h3l2 5-1 2h-2l-1-3-1 8-2-1V7Z" />
    <path d="M4 18c0-2 2-4 5-4s4 1 6 2c1 0 2-1 4-1v2c-1.5 0-2.5.5-3 1-1.5-1-3-1.5-5-1s-3 1-4 2c-2 0-3-1-3-1Z" />
  </svg>
);

const ArenaIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* Jumping obstacle */}
    <rect x="3" y="6" width="2" height="12" rx="1" />
    <rect x="19" y="6" width="2" height="12" rx="1" />
    <rect x="4" y="10" width="16" height="1.5" rx="0.75" />
    <rect x="4" y="13" width="16" height="1.5" rx="0.75" />
    <path d="M6 8h12v1H6V8ZM6 16h12v1H6v-1Z" opacity=".4" />
  </svg>
);

const ExcursionIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* Group of people */}
    <circle cx="8" cy="6" r="2" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="12" cy="8" r="1.5" />
    <path d="M4 18v-3c0-1.5 1.5-3 4-3s4 1.5 4 3v3h-8Z" />
    <path d="M12 18v-2.5c0-1 1-2 2.5-2s2.5 1 2.5 2V18h-5Z" />
    <path d="M16 18v-3c0-1.5 1.5-3 4-3s4 1.5 4 3v3h-8Z" />
  </svg>
);

const CorporateIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* Handshake */}
    <path d="M8 12c0-1 1-2 2-2h4c1 0 2 1 2 2v1l-2 2h-4l-2-2v-1Z" />
    <path d="M6 11c-1 0-2 1-2 2s1 2 2 2h1l1-1v-2l-1-1H6ZM18 11c1 0 2 1 2 2s-1 2-2 2h-1l-1-1v-2l1-1h1Z" />
    <path d="M10 8c0-1 1-1 1-1s1 0 1 1v2h-2V8ZM12 8c0-1 1-1 1-1s1 0 1 1v2h-2V8Z" />
  </svg>
);

const ServicesIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* Medical cross with horseshoe */}
    <path d="M12 2C8 2 5 5 5 9c0 2 1 4 3 5v6c0 1 1 2 2 2h4c1 0 2-1 2-2v-6c2-1 3-3 3-5 0-4-3-7-7-7Z" />
    <path d="M10 6h4v2h-4V6ZM11 9h2v4h-2V9Z" fill="white" opacity=".4" />
    <circle cx="8" cy="10" r="1" fill="white" opacity=".3" />
    <circle cx="16" cy="10" r="1" fill="white" opacity=".3" />
  </svg>
);

const Pakalpojumi = () => {
  const services = [
    {
      title: "Zirgu uzturēšana",
      description:
        "Profesionāla zirgu aprūpe un uzturēšana mūsdienīgās stallis ar augstākajiem komforta standartiem.",
      badge: "Core",
      href: "/lv/pakalpojumi/zirgu-uzturesana/",
      image: serviceStable,
      icon: StableIcon,
    },
    {
      title: "Jāšanas treniņi",
      description:
        "Kvalitatīvas jāšanas nodarbības visiem līmeņiem ar pieredzējušiem instruktoriem drošā vidē.",
      badge: "Core",
      href: "/lv/pakalpojumi/jasanas-trenini/",
      image: serviceRiding,
      icon: RidingIcon,
    },
    {
      title: "Laukumu īre",
      description:
        "Profesionālu jāšanas laukumu īre ar visām nepieciešamajām iekārtām un šķēršļiem.",
      badge: "Additional",
      href: "/lv/pakalpojumi/laukumu-ire/",
      image: serviceArena,
      icon: ArenaIcon,
    },
    {
      title: "Ekskursijas",
      description:
        "Izglītojošas ekskursijas visai ģimenei, lai iepazītos ar zirgiem un to aprūpi.",
      badge: "Additional",
      href: "/lv/pakalpojumi/ekskursijas/",
      image: serviceExcursions,
      icon: ExcursionIcon,
    },
    {
      title: "Korporatīvie pasākumi",
      description:
        "Unikāli komandas veidošanas pasākumi ar zirgiem uzņēmumiem un organizācijām.",
      badge: "Additional",
      href: "/lv/pakalpojumi/korporativie-pasakumi/",
      image: serviceCorporate,
      icon: CorporateIcon,
    },
    {
      title: "Citi pakalpojumi",
      description:
        "Papildu pakalpojumi zirgu aprūpē, veselības uzraudzībā un specializētās terapijas.",
      badge: "Additional",
      href: "/lv/pakalpojumi/citi-pakalpojumi/",
      image: serviceOther,
      icon: ServicesIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO with background image */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={serviceRiding}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Mūsu pakalpojumi
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Atklājiet plašu pakalpojumu klāstu, kas paredzēts gan
              pieredzējušiem jātniekiem, gan tiem, kas tikai sāk savu ceļu ar
              zirgiem.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="glass-card overflow-hidden hover-lift group flex flex-col"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Icon Row (с бейджем при желании) */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          {service.title === "Jāšanas treniņi" ? (
                            <img 
                              src={ridingIcon} 
                              alt="" 
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <IconComponent />
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-card-title mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">
                        {service.description}
                      </p>

                      {/* Learn More Button — у низа карточки */}
                      <Button
                        className="w-full justify-between bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 mt-auto"
                        asChild
                      >
                        <a href={service.href}>
                          Uzzināt vairāk
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pakalpojumi;
