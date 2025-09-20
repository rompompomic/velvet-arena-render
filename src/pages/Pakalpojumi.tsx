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

// ==== SOLID ICONS (readable at 20–24px) ====
// Принцип: только fill="currentColor", никакого stroke.
// Итог: высокая контрастность, без размытия на ретине.

const StableIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* сарай + дверь */}
    <path d="M12 3 3 8.5V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8.5L12 3Z" />
    <path d="M9 13h6v8H9z" fill="white" opacity=".22" />
  </svg>
);

const RidingIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* шлем верховой езды */}
    <path d="M6 12a6 6 0 0 1 12 0v1H6v-1Z" />
    <path d="M6 14h7.5a3.5 3.5 0 0 1-3.5 3.5H8.25A2.25 2.25 0 0 1 6 15.25V14Z" />
    <circle cx="15.25" cy="10" r="1" />
  </svg>
);

const ArenaIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* препятствие: стойки + две перекладины */}
    <rect x="4" y="5" width="3" height="14" rx="1" />
    <rect x="17" y="5" width="3" height="14" rx="1" />
    <rect x="6.5" y="9" width="11" height="2.5" rx="1.25" />
    <rect x="6.5" y="13" width="11" height="2.5" rx="1.25" />
  </svg>
);

const ExcursionIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* камера (фото-экскурсии) */}
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M8 7 9.3 5h5.4L16 7z" />
    <circle cx="12" cy="13" r="4" fill="white" opacity=".18" />
  </svg>
);

const CorporateIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* рукопожатие */}
    <path d="M4 12.5h4.8l2.2 1.8a2.8 2.8 0 0 0 3.6 0l2.2-1.8H22V18a2 2 0 0 1-2 2h-7.2a5 5 0 0 1-3.2-1.2L7.2 17H4a2 2 0 0 1-2-2v-2.5h2Z" />
    {/* галочка-результат */}
    <path d="M14.5 9.2 16 10.7l3-3" fill="white" opacity=".22" />
  </svg>
);

const ServicesIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    {/* подкова */}
    <path d="M12 3a8 8 0 0 1 8 8v2a8 8 0 0 1-16 0v-2a8 8 0 0 1 8-8Z" />
    <circle cx="8.5" cy="10" r="1" fill="white" opacity=".28" />
    <circle cx="15.5" cy="10" r="1" fill="white" opacity=".28" />
    <circle cx="8.5" cy="16" r="1" fill="white" opacity=".28" />
    <circle cx="15.5" cy="16" r="1" fill="white" opacity=".28" />
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
