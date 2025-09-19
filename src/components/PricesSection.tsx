const PricesSection = () => {
  const services = [{
    name: "Individuālais treniņš (ar JJS zirgu)",
    price: "60 €/h"
  }, {
    name: "Treniņs ar savu zirgu pie JJS treneres",
    price: "45 €/h"
  }, {
    name: "Manēžas / laukuma īre par zirgu",
    price: "25 €/h"
  }, {
    name: "Ekskursija teritorijā ar zirgu barošanu (līdz 4 pers.)",
    price: "20 €"
  }, {
    name: "Ekskursijas grupām (no 10 pers.)",
    price: "3 €/pers."
  }, {
    name: "Fotosesija ar zirgu (JJS teritorijā, līdz 1 h)",
    price: "30 €"
  }];
  return <section className="py-20 bg-[#2f2f2f]/[0.08]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-section mb-6">
            Cenas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mūsu pakalpojumu cenas ir pielāgotas dažādām vajadzībām - 
            no individuālām nodarbībām līdz korporatīviem pasākumiem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-text mb-2">{service.name}</h3>
              <p className="text-2xl font-bold text-primary">{service.price}</p>
            </div>)}
        </div>

        <div className="text-center">
          <a 
            href="/lv/cenas/" 
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-xl transition-all duration-300 hover:bg-primary-700 hover:scale-105"
          >
            Skatīt visas cenas
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
    </section>;
};
export default PricesSection;