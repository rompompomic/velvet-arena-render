import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceCorporate from "@/assets/service-corporate.jpg";
import eventCompetition from "@/assets/event-competition.jpg";
import winterTraining from "@/assets/winter-training.jpg";

const KorporativiepasakumI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src={serviceCorporate}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Korporatīvie pasākumi
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Unikāli komandas veidošanas pasākumi</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Piedāvājam unikālus komandas veidošanas pasākumus ar zirgiem uzņēmumiem un organizācijām. 
                  Mūsu korporatīvie pasākumi ir ideāls veids, kā stiprināt komandas garu, uzlabot komunikāciju 
                  un radīt neaizmirstamas pieredzes ārpus tradicionālās biroja vides.
                </p>
                
                <p>
                  Darbs ar zirgiem attīsta uzticību, pacietību, līderības prasmes un spēju lasīt neverbālos signālus. 
                  Šie pasākumi ir piemēroti gan mazām darba grupām, gan lieliem uzņēmumiem, un tiek pielāgoti 
                  katras organizācijas specifiskajām vajadzībām un mērķiem.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Piedāvājamie pasākumi:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Komandas veidošanas aktivitātes ar zirgiem</li>
                  <li>Līderības prasmju attīstīšanas programmas</li>
                  <li>Komunikācijas uzlabošanas treniņi</li>
                  <li>Uzticības stiprināšanas vingrinājumi</li>
                  <li>Korporatīvie turnīri un sacensības</li>
                  <li>Semināri par zirgu psihologii un uzvedību</li>
                  <li>Korporatīvo svinību organizēšana</li>
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
                src={serviceCorporate}
                alt="Korporatīvs pasākums"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={eventCompetition}
                alt="Komandas aktivitātes"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={winterTraining}
                alt="Ziemas korporatīvs"
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

export default KorporativiepasakumI;