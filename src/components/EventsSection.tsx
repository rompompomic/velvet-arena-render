import eventImage from "@/assets/event-competition.jpg";
import winterTrainingImage from "@/assets/winter-training.jpg";
import youthCupImage from "@/assets/youth-cup.jpg";

const EventsSection = () => {
  const events = [
    {
      title: "Jauniešu kauss konkūrā — Fināls",
      date: "19–21",
      month: "SEP",
      year: "2025",
      description: "Fināla sacensības konkūrā starp jaunajiem jātniekiem",
      image: youthCupImage,
    },
    {
      title: "Ziemas kauss — 1. posms",
      date: "25–26",
      month: "OKT",
      year: "2025",
      description: "Ziemas sacensību sezonas atklāšana dresūrā",
      image: winterTrainingImage,
    },
    {
      title: "Ziemas kauss — 2. posms",
      date: "15–16",
      month: "NOV",
      year: "2025",
      description: "Ziemas turnīra turpinājums ar jauniem izaicinājumiem",
      image: eventImage,
    },
  ];

  return (
    <section className="py-24 bg-light text-text relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Gaidāmie pasākumi</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Pievienojieties mūsu sacensībām un pasākumiem
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover-lift group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover image-duotone group-hover:scale-105 transition-all duration-500" 
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="date-badge bg-primary/10 border border-primary/20 text-text px-3 py-2 rounded-md">
                    <div className="date-number font-bold">{event.date}</div>
                    <div className="date-month text-sm opacity-70 uppercase">
                      {event.month}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {event.year}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                <a
                  href="/lv/pasakumi/"
                  className="inline-flex items-center text-primary font-medium group-hover:text-primary-700 transition-all duration-300"
                >
                  Sīkāk
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/lv/pasakumi/"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-xl transition-all duration-300 hover:bg-primary-700 hover:scale-105"
          >
            Skatīt visus pasākumus
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
