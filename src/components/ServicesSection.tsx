import Horse1 from "@/assets/Horse1.png";
import Horse2 from "@/assets/Horse2.png";
import Horse3 from "@/assets/Horse3.png";
import Horse4 from "@/assets/Horse4.png";
const ServicesSection = () => {
  // Custom horse icons for each service card
  const horseIcons = [Horse1, Horse2, Horse3, Horse4];
  const services = [{
    title: "Mācīties jāt",
    description: "Profesionālas jāšanas nodarbības visiem sagatavotības līmeņiem",
    badge: "Apmācība",
    href: "/lv/pakalpojumi/jasanas-trenini/"
  }, {
    title: "Zirgu īpašniekiem",
    description: "Zirgu turēšana komfortablā vidē ar profesionālu aprūpi",
    badge: "Turēšana",
    href: "/lv/pakalpojumi/zirgu-uzturesana/"
  }, {
    title: "Apmeklētājiem",
    description: "Ekskursijas un iepazīšanās ar zirgiem visai ģimenei",
    badge: "Ekskursijas",
    href: "/lv/pakalpojumi/ekskursijas/"
  }, {
    title: "Uzņēmumiem",
    description: "Korporatīvi pasākumi un komandas veidošana unikālā atmosfērā",
    badge: "Korporatīvs",
    href: "/lv/pakalpojumi/korporativie-pasakumi/"
  }];
  return <section className="py-24 bg-[#2f2f2f]/[0.08]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Atrodiet savu ceļu pie zirgiem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mēs piedāvājam dažādus pakalpojumus visiem, kas mīl zirgus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="glass-card p-8 hover-lift group cursor-pointer relative overflow-hidden">
              {/* Watermark */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-50 group-hover:opacity-80 transition-colors duration-300">
                <img src={horseIcons[index]} alt="" className="w-full h-full object-contain text-gray-400 group-hover:text-black" />
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

              <a href={service.href} className="inline-flex items-center text-primary font-medium group-hover:text-primary-700 transition-all duration-300">
                Uzzināt vairāk
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;