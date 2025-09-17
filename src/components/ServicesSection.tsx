import horseWatermark from "@/assets/horse-watermark.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Учиться ездить",
      description: "Профессиональные уроки верховой езды для всех уровней подготовки",
      badge: "Обучение",
      href: "/ru/pakalpojumi/jasanas-trenini/",
    },
    {
      title: "Владельцам лошадей", 
      description: "Содержание лошадей в комфортных условиях с профессиональным уходом",
      badge: "Содержание",
      href: "/ru/pakalpojumi/zirgu-uzturesana/",
    },
    {
      title: "Посетителям",
      description: "Экскурсии и знакомство с лошадьми для всей семьи",
      badge: "Экскурсии", 
      href: "/ru/pakalpojumi/ekskursijas/",
    },
    {
      title: "Компаниям",
      description: "Корпоративные мероприятия и тимбилдинг в уникальной атмосфере",
      badge: "Корпоратив",
      href: "/ru/pakalpojumi/korporativie-pasakumi/",
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Найдите свой путь к лошадям</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем разнообразные услуги для всех, кто любит лошадей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift group cursor-pointer relative overflow-hidden"
            >
              {/* Watermark */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <img
                  src={horseWatermark}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary mb-4">
                {service.badge}
              </div>

              {/* Content */}
              <h3 className="text-card-title mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href={service.href}
                className="inline-flex items-center text-primary font-medium group-hover:text-primary-700 transition-colors duration-300"
              >
                Подробнее
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
      </div>
    </section>
  );
};

export default ServicesSection;