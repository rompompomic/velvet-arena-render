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

// --- PREMIUM ICON SET (duotone outline) ---
// Общие параметры: 24x24, round caps/joins, strokeWidth=1.8
// className по умолчанию  w-5 h-5  (можно менять)

const StableIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* мягкая подложка */}
    <path d="M4 10.5 12 5l8 5.5v7.5a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 18V10.5z" fill="currentColor" opacity=".12"/>
    {/* крыша/коробка */}
    <path d="M4 10.5 12 5l8 5.5"/>
    <path d="M5.5 10.5v7.5A1.5 1.5 0 0 0 7 19.5h10a1.5 1.5 0 0 0 1.5-1.5v-7.5"/>
    {/* дверь сарая */}
    <rect x="9" y="14" width="6" height="5.5" rx="1"/>
    {/* профиль головы лошади в двери */}
    <path d="M10.6 17.8c.5-.8 1.3-1.3 2.2-1 .8.2 1.2.8 1.3 1.9"/>
  </svg>
);

const RidingIcon = ({ className = "w-5 h-5" }) => (
  // Универсальная и понятная метафора — ШЛЕМ для верховой езды
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 11.5a6 6 0 0 1 12 0" fill="currentColor" opacity=".12"/>
    {/* корпус шлема */}
    <path d="M6 11.5a6 6 0 0 1 12 0"/>
    {/* козырёк */}
    <path d="M6 12.5h6.5"/>
    {/* ремешок */}
    <path d="M17 12.5c0 1.6-1.3 3-3 3H8"/>
    <circle cx="15.2" cy="10.2" r=".8" fill="currentColor"/>
  </svg>
);

const ArenaIcon = ({ className = "w-5 h-5" }) => (
  // Препятствие для конкура (стойки + перекладины со "штриховкой")
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="16" height="12" rx="1.5" fill="currentColor" opacity=".08"/>
    {/* стойки */}
    <path d="M6 6v12M18 6v12"/>
    {/* перекладины */}
    <path d="M6 10h12M6 13h12"/>
    {/* диагональная разметка (намёк на полосатую рейку) */}
    <path d="M7.5 9l3 3M13.5 9l3 3M7.5 12l3 3M13.5 12l3 3"/>
  </svg>
);

const ExcursionIcon = ({ className = "w-5 h-5" }) => (
  // Экскурсии — ПОНЯТНОЕ фото/камера
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7.5" width="18" height="11" rx="2" fill="currentColor" opacity=".10"/>
    {/* камера */}
    <path d="M8 7.5l1.2-1.8h5.6L16 7.5"/>
    <circle cx="12" cy="13" r="3.5"/>
    <circle cx="12" cy="13" r="1.2" fill="currentColor"/>
    {/* кнопка камеры */}
    <path d="M18 9.5h.01"/>
  </svg>
);

const CorporateIcon = ({ className = "w-5 h-5" }) => (
  // Бизнес-ивенты — рукопожатие (очевидная метафора) + лёгкая подложка
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10.5h16v7a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 17.5v-7z" fill="currentColor" opacity=".08"/>
    {/* рукопожатие */}
    <path d="M7 14.5l2.2 1.8a2.8 2.8 0 0 0 3.6 0L15 14.5"/>
    <path d="M7 14.5l2.2-1.8a2.8 2.8 0 0 1 3.6 0L15 14.5"/>
    {/* руки / манжеты */}
    <path d="M5.5 13l2-.8M18.5 13l-2-.8"/>
    {/* маленький график-галочка как акцент деловой ценности */}
    <path d="M16 11.2l1.2 1.2L20 9.6"/>
  </svg>
);

const ServicesIcon = ({ className = "w-5 h-5" }) => (
  // Прочие услуги — элегантная подкова
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4a7 7 0 0 1 7 7v2a7 7 0 0 1-14 0v-2a7 7 0 0 1 7-7z" fill="currentColor" opacity=".10"/>
    <path d="M12 4a7 7 0 0 1 7 7v2a7 7 0 0 1-14 0v-2a7 7 0 0 1 7-7z"/>
    {/* клёпки */}
    <path d="M8.2 8.7h0M10 7.5h0M14 7.5h0M15.8 8.7h0M8.2 15.3h0M15.8 15.3h0"/>
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
