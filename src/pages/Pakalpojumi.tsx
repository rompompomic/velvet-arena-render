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

// Custom SVG Icons for each service
const StableIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M2 20V8.5L12 3l10 5.5V20H2z" />
    <path d="M6 20v-8h4v8M10 20v-8h4v8M14 20v-8h4v8" />
    <circle cx="8" cy="14" r="1" />
    <circle cx="12" cy="14" r="1" />
    <circle cx="16" cy="14" r="1" />
  </svg>
);
const RidingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <circle cx="8" cy="6" r="3" />
    <path d="M12 8v8l-3-2-3 2V8" />
    <path d="M16 12c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3z" />
    <path d="M16 18v2" />
    <path d="M13 15l-1 3" />
  </svg>
);
const ArenaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 8h2v2H6zM10 8h2v2h-2zM14 8h2v2h-2z" />
    <path d="M8 14h8" />
    <circle cx="6" cy="16" r="1" />
    <circle cx="18" cy="16" r="1" />
  </svg>
);
const ExcursionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M8 12h8M12 8v8" />
  </svg>
);
const CorporateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M12 16l2-2 2 2" />
  </svg>
);
const ServicesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12l2 2 4-4" />
    <circle cx="16" cy="8" r="2" />
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
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
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
                          <IconComponent />
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
