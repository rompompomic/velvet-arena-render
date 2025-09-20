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
const StableIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {/* крыша + фронтон */}
    <path d="M3 10.5 12 4l9 6.5" />
    {/* стены сарая */}
    <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
    {/* дверь */}
    <rect x="9" y="14" width="6" height="6" rx="1" />
    {/* конек/окошко */}
    <path d="M12 10.5v1.5" />
    {/* силуэт головы лошади в дверном проеме (минимал) */}
    <path d="M11 17.5c.6-.8 1.2-1.2 2-.9.7.2 1.1.8 1.2 1.9" />
  </svg>
);

const RidingIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {/* всадник */}
    <circle cx="8.5" cy="6.5" r="2" />
    <path d="M7.5 9.5l2.2 1.3a2 2 0 0 1 .9 1.1l.6 1.6" />
    {/* корпус лошади */}
    <path d="M5 15.5c2.5-2.2 6.8-2.6 9.5-.9l2 .9" />
    {/* ноги лошади */}
    <path d="M9 15.5l-1.2 3.5M15 15.5l-.8 3.2" />
    {/* уздечка/шея */}
    <path d="M12 12.2c1-.6 2.4-.6 3.4.1" />
  </svg>
);

const ArenaIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {/* стойки препятствия */}
    <path d="M5 6v12M19 6v12" />
    {/* перекладины */}
    <path d="M5 9h14M5 12h14M5 15h14" />
    {/* основание/земля */}
    <path d="M3.5 18.5H8M16 18.5h4.5" />
  </svg>
);

const ExcursionIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {/* сложенная карта */}
    <path d="M4 6.5l6-2.5 4 2 6-2.5v13l-6 2.5-4-2-6 2.5z" />
    {/* пин маркер */}
    <path d="M12 10.2c1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.2 3.3-2.7 4.6-1.5-1.3-2.7-3.2-2.7-4.6 0-1.5 1.2-2.7 2.7-2.7z" />
    {/* подковообразный контур внутри пина (намёк на конный тур) */}
    <path d="M12 12.2c.8 0 1.4.6 1.4 1.4" />
  </svg>
);

const CorporateIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {/* группа людей */}
    <path d="M7.5 10.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zM16.5 11.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" />
    <path d="M3.5 18.5c.6-2.6 2.8-4 4.8-4h1.4c2 0 4.2 1.4 4.8 4" />
    {/* график роста (тимбилдинг/бизнес-ивент) */}
    <path d="M13 18.5V14l2.2 1.8L20 12" />
  </svg>
);

const ServicesIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {/* классическая подкова */}
    <path d="M12 3.5c4.4 0 8 3.6 8 8 0 2.7-1.3 5-3.3 6.5M12 3.5c-4.4 0-8 3.6-8 8 0 2.7 1.3 5 3.3 6.5" />
    {/* заклёпки */}
    <path d="M7.2 8.6h0M9.5 6.9h0M14.5 6.9h0M16.8 8.6h0M7.2 15.4h0M16.8 15.4h0" />
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
