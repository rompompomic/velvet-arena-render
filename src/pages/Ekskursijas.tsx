import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceExcursions from "@/assets/service-excursions.jpg";
import youthCup from "@/assets/youth-cup.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";

const Ekskursijas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src={serviceExcursions}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Ekskursijas
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Izglītojošas ekskursijas visai ģimenei</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Piedāvājam izglītojošas ekskursijas visai ģimenei, lai iepazītos ar zirgiem un to aprūpi. 
                  Mūsu ekskursijas ir ideālas bērniem un pieaugušajiem, kas vēlas uzzināt vairāk par šiem 
                  brīnišķīgajiem dzīvniekiem un jāšanas mākslu.
                </p>
                
                <p>
                  Ekskursiju laikā apmeklētāji iepazīsies ar dažādām zirgu šķirnēm, uzzinās par to aprūpi, 
                  uzvedību un nozīmi cilvēka dzīvē. Programma ietver praktiskas nodarbības - zirgu barošanu, 
                  sukāšanu un iepazīšanos ar jāšanas ekipējumu.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Ekskursijas programma:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Iepazīšanās ar zirgu šķirnēm un to īpašībām</li>
                  <li>Zirgu aprūpes un barošanas demonstrējumi</li>
                  <li>Drošības noteikumi un zirgu uzvedības īpatnības</li>
                  <li>Praktiskās nodarbības - zirgu sukāšana un barošana</li>
                  <li>Iepazīšanās ar jāšanas ekipējumu un tā lietošanu</li>
                  <li>Zirgu treniņu un sacensību stāstījumi</li>
                  <li>Atmiņu foto ar zirgiem</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Galerija</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={serviceExcursions}
                alt="Bērni ar zirgiem"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={youthCup}
                alt="Jauniešu aktivitātes"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={heroImage}
                alt="Ģimenes ekskursija"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ekskursijas;