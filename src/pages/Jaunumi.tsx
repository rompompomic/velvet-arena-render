import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import heroImage from "@/assets/hero-equestrian.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";
import eventImage from "@/assets/event-showjumping.jpg";
import youthCupImage from "@/assets/youth-cup.jpg";
import competitionImage from "@/assets/event-competition.jpg";

const Jaunumi = () => {
  const allNews = [
    {
      title: "Ziemas sezona: zirgu sagatavošana aukstumam",
      excerpt: "Stāstām par to, kā pareizi sagatavot zirgus ziemas periodam un nodrošināt tiem komfortablus turēšanas apstākļus.",
      image: winterImage,
      date: "15. septembris 2025",
      href: "/lv/jaunumi/winter-preparation"
    },
    {
      title: "Mūsu audzēkņu panākumi sacensībās",
      excerpt: "Apsveicam mūsu audzēkņus ar lieliskajiem rezultātiem nesenajās konkūra un dresūras sacensībās.",
      image: eventImage,
      date: "10. septembris 2025",
      href: "/lv/jaunumi/student-success"
    },
    {
      title: "Jaunas programmas bērniem no 4 gadiem",
      excerpt: "Speciāli izstrādātas programmas vismazākajiem zirgu mīļotājiem, ņemot vērā vecuma īpatnības.",
      image: winterImage,
      date: "5. septembris 2025",
      href: "/lv/jaunumi/kids-programs"
    },
    {
      title: "Jauniešu kausa fināla posms konkūrā 2025",
      excerpt: "19.–21. septembris, sākums plkst. 08:30, Inčukalna novads, 'Zustrenes', Jauniešu jāšanas skolas sporta centrs. Pieteikumi jāiesniedz līdz 17. septembrim, plkst. 22:00.",
      image: youthCupImage,
      date: "19. septembris 2025",
      href: "/lv/jaunumi/youth-cup-final"
    },
    {
      title: "Jauniešu kauss konkūrā un LJF kausa IV posms",
      excerpt: "29.–31. augusts, sākums plkst. 08:30, Inčukalna novads, 'Zustrenes', Jauniešu jāšanas skolas sporta centrs. Pieteikumi jāiesniedz līdz 27. augustam.",
      image: competitionImage,
      date: "29. augusts 2025",
      href: "/lv/jaunumi/youth-cup-ljf-stage-4"
    },
    {
      title: "XVII Vislatvijas zirgu dienas",
      excerpt: "15.–17. augusts, Jauniešu jāšanas skola, Inčukalns. Svinības visiem zirgu mīļotājiem ar krāšņām sacensībām, šova elementiem, jāšanu un stalļu apskati.",
      image: eventImage,
      date: "15. augusts 2025",
      href: "/lv/jaunumi/horse-days-2025"
    },
    {
      title: "YRS Open 2025 un LJF kausa III posms",
      excerpt: "4.–6. jūlijs, sākums plkst. 08:30, Inčukalna novads, 'Zustrenes'. Sacensību arena: 90 × 60 m, iesildīšanās arena: 25 × 60 m.",
      image: competitionImage,
      date: "4. jūlijs 2025",
      href: "/lv/jaunumi/yrs-open-2025"
    },
    {
      title: "Treniņsacensības šķēršļu jāšanā",
      excerpt: "7. jūnijs, sākums plkst. 12:00, Inčukalna novads, 'Zustrenes'. Sacensību arena: 90 × 60 m, iesildīšanās arena: 25 × 60 m. Pieteikumi līdz 5. jūnijam.",
      image: eventImage,
      date: "7. jūnijs 2025",
      href: "/lv/jaunumi/training-competition-june"
    },
    {
      title: "Treniņnometne un motivācijas seminārs",
      excerpt: "6.–8. jūnijs, Jauniešu jāšanas skola, āra arena. Vada divkārtējais Latvijas šķēršļu jāšanas čempions Aigars Bregzis.",
      image: winterImage,
      date: "6. jūnijs 2025",
      href: "/lv/jaunumi/training-camp-seminar"
    },
    {
      title: "Pavasara šķēršļu jāšanas sacensības",
      excerpt: "17.–18. maijs, sākums plkst. 08:00, Inčukalna novads, 'Zustrenes'. Iekštelpu arena: 35 × 60 m, iesildīšanās arena: 25 × 60 m.",
      image: competitionImage,
      date: "17. maijs 2025",
      href: "/lv/jaunumi/spring-competition"
    },
    {
      title: "Treniņsacensības šķēršļu jāšanā",
      excerpt: "16. maijs, sākums plkst. 09:00, Inčukalna novads, 'Zustrenes'. Sacensību arena: 90 × 60 m. Pieteikumi līdz 14. maijam.",
      image: eventImage,
      date: "16. maijs 2025",
      href: "/lv/jaunumi/training-competition-may"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Фон */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage} // import heroImage from "@/assets/hero-equestrian.jpg";
            alt="Jaunumi un raksti"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        </div>
      
        {/* Контент */}
        <div className="relative z-10 container mx-auto px-4 max-w-7xl pt-28 md:pt-36 pb-16 text-center text-white min-h-[48vh]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-5">
            Jaunumi un raksti
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Sekojiet līdzi jaunākajām ziņām no jāšanas sporta pasaules, mūsu audzēkņu panākumiem un gaidāmajiem pasākumiem
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((article, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden hover-lift group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover image-duotone group-hover:scale-105 transition-all duration-500" 
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-3 font-medium">
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <a 
                    href={article.href} 
                    className="inline-flex items-center text-primary font-medium group-hover:text-primary-700 transition-all duration-300"
                  >
                    Lasīt
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <NewsletterSubscription />

      <Footer />
    </div>
  );
};

export default Jaunumi;