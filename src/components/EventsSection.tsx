import eventImage from "@/assets/event-showjumping.jpg";

const EventsSection = () => {
  const events = [
    {
      title: "Jauniešu kauss konkūrā — Fināls",
      date: "19–21",
      month: "SEP",
      year: "2025",
      description: "Fināla sacensības konkūrā starp jaunajiem jātniekiem"
    },
    {
      title: "Ziemas kauss — 1. posms",
      date: "25–26", 
      month: "OCT",
      year: "2025",
      description: "Ziemas sacensību sezonas atklāšana dresūrā"
    },
    {
      title: "Ziemas kauss — 2. posms",
      date: "15–16",
      month: "NOV", 
      year: "2025",
      description: "Ziemas turnīra turpinājums ar jauniem izaicinājumiem"
    }
  ];

  return (
    <section className="py-24 bg-text text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Gaidāmie pasākumi</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Pievienojieties mūsu sacensībām un pasākumiem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift group cursor-pointer"
            >
              {/* Date Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="date-badge bg-primary/20 border-primary/30">
                  <div className="date-number text-white">{event.date}</div>
                  <div className="date-month text-white/80">{event.month}</div>
                </div>
                <div className="text-sm text-white/60 font-medium">{event.year}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 leading-tight group-hover:text-primary-50 transition-colors duration-300">
                {event.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {event.description}
              </p>

              <a
                href="/lv/pasakumi/"
                className="inline-flex items-center text-primary-50 font-medium group-hover:text-white transition-all duration-300"
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/lv/pasakumi/"
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
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