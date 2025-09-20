import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-equestrian.jpg";
import ridingLessonsImage from "@/assets/service-riding-lessons.jpg";
import excursionsImage from "@/assets/service-excursions.jpg";
import corporateImage from "@/assets/service-corporate.jpg";
import arenaImage from "@/assets/service-arena-rental.jpg";
const Cenas = () => {
  const individualLessons = [{
    name: "Iepazīšanās ar poniju/zirgu",
    description: "Bez iepriekšējas pieredzes, pirmā tikšanās",
    price: "30 €",
    duration: "30 min"
  }, {
    name: "Individuālais treniņš",
    description: "Ar JJS treneri un JJS zirgu",
    price: "60 €",
    duration: "60 min"
  }, {
    name: "Individuālais treniņš",
    description: "Ar JJS treneri un savu zirgu",
    price: "45 €",
    duration: "60 min"
  }];
  const subscriptions = [{
    sessions: "1x nedēļā",
    price: "220 €",
    period: "mēnesī",
    description: "Maksājums: priekšapmaksa par plānotajām nodarbībām"
  }, {
    sessions: "2x nedēļā",
    price: "400 €",
    period: "mēnesī",
    description: "Maksājums: priekšapmaksa par plānotajām nodarbībām"
  }, {
    sessions: "3x nedēļā",
    price: "570 €",
    period: "mēnesī",
    description: "Maksājums: priekšapmaksa par plānotajām nodarbībām"
  }, {
    sessions: "10 nodarbību abonements",
    price: "550 €",
    period: "3 mēnešos",
    description: "Jāizmanto 3 mēnešu laikā"
  }];
  const excursions = [{
    name: "Ekskursija pa teritoriju ar zirgu barošanu",
    description: "Līdz 4 personām (bērni līdz 7 gadiem bez maksas)",
    price: "20 €",
    duration: "grupai"
  }, {
    name: "Papildu brauciens uz zirga/ponija",
    description: "Cena par personu",
    price: "8 €",
    duration: "par pers."
  }, {
    name: "Ekskursijas skolu un bērnudārzu grupām",
    description: "Ar zirgu barošanu un braucieniem, minimums 10 dalībnieki",
    price: "12 €",
    duration: "par pers."
  }];
  const additionalServices = [{
    name: "Ponijs/zirgs svinībām ārpus sporta centra",
    description: "1 zirgs, 2 instruktori, papildus €0.80/km",
    price: "120 €",
    duration: "1h"
  }, {
    name: "Fotosesija ar zirgu JJS teritorijā",
    description: "Sagatavots zirgs, sesijas ilgums līdz 1 stundai",
    price: "30 €",
    duration: "1h"
  }, {
    name: "VIP telts īre",
    description: "Ar galdiem un krēsliem, minimālā īre 3 stundas",
    price: "25 €",
    duration: "stundā"
  }, {
    name: "Kafejnīcas terases īre",
    description: "Ar galdiem un krēsliem, minimālā īre 3 stundas",
    price: "15 €",
    duration: "stundā"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-text/70 via-text/40 to-text/20" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-hero mb-6">
            Mūsu cenas un pakalpojumi
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto">
            Pielāgoti risinājumi visām vecuma grupām - no pirmās iepazīšanās ar zirgu 
            līdz profesionāliem treniņiem un korporatīviem pasākumiem.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        
        {/* Individual Lessons Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-section mb-6 text-text">
                Individuālie treniņi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Personalizēti treniņi ar mūsu pieredzējušiem instruktoriem. 
                Neatkarīgi no jūsu pieredzes līmeņa, mēs palīdzēsim jums attīstīt 
                jāšanas prasmes drošā un atbalstošā vidē.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img src={ridingLessonsImage} alt="Individuālie jāšanas treniņi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualLessons.map((lesson, index) => <div key={index} className="glass-card p-6 hover-lift">
                <div className="mb-4">
                  <h3 className="text-card-title text-text mb-2">
                    {lesson.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {lesson.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">
                      {lesson.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      / {lesson.duration}
                    </span>
                  </div>
                  <CheckCircle className="text-primary" size={24} />
                </div>
              </div>)}
          </div>
        </section>

        {/* Subscriptions Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-section mb-6 text-text">
              Abonementi un regulārie treniņi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ekonomiskāki risinājumi regulāriem treniņiem. Izvēlieties sev 
              piemērotu intensitāti un ietaupiet līdz pat 25%.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptions.map((sub, index) => <div key={index} className={`glass-card p-6 hover-lift ${index === 3 ? 'border-2 border-primary' : ''}`}>
                {index === 3 && <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Populārākais
                  </div>}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {sub.sessions}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sub.description}
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {sub.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {sub.period}
                  </span>
                </div>
              </div>)}
          </div>
        </section>

        {/* Excursions Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-80 rounded-xl overflow-hidden order-2 lg:order-1">
              <img src={excursionsImage} alt="Ekskursijas ar zirgu barošanu" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-section mb-6 text-text">
                Ekskursijas un iepazīšanās
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ideāli ģimenēm ar bērniem un grupām. Iepazīstiet mūsu draudzīgos 
                zirgus, uzziniet par to aprūpi un izbaudiet nelielus braucienus 
                drošā vidē.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {excursions.map((excursion, index) => <div key={index} className="glass-card p-6 hover-lift">
                <div className="mb-4">
                  <h3 className="text-card-title text-text mb-2">
                    {excursion.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {excursion.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">
                      {excursion.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {excursion.duration}
                    </span>
                  </div>
                  <CheckCircle className="text-primary" size={24} />
                </div>
              </div>)}
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-section mb-6 text-text">
                Papildu pakalpojumi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Padariet savus pasākumus neaizmirstamus ar mūsu īpašajiem 
                pakalpojumiem - no fotosesijām līdz telšu īrei un zirgu 
                piedalīšanās svinībās.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img src={corporateImage} alt="Korporatīvie pakalpojumi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img src={arenaImage} alt="Telšu īre un pasākumi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => <div key={index} className="glass-card p-6 hover-lift">
                <div className="mb-4">
                  <h3 className="text-card-title text-text mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      / {service.duration}
                    </span>
                  </div>
                  <CheckCircle className="text-primary" size={24} />
                </div>
              </div>)}
          </div>
        </section>

        {/* Contact CTA Section */}
        

      </div>

      <Footer />
    </div>;
};
export default Cenas;