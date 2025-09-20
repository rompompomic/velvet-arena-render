import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceRiding from "@/assets/service-riding-lessons.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import eventImage from "@/assets/event-showjumping.jpg";

const JasanasTrenini = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src={serviceRiding}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Jāšanas treniņi
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Profesionāli jāšanas treniņi</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Piedāvājam kvalitatīvas jāšanas nodarbības visiem līmeņiem ar pieredzējušiem instruktoriem drošā vidē. 
                  Mūsu treniņu programmas ir pielāgotas gan iesācējiem, gan pieredzējušiem jātniekiem, nodrošinot 
                  individuālu pieeju katram apmeklētājam.
                </p>
                
                <p>
                  Treniņi notiek modernās stallīs ar labākajiem zirgiem, kas ir speciāli sagatavoti mācību procesam. 
                  Mūsu instruktori ir sertificēti speciālisti ar daudzgadu pieredzi, kas palīdzēs jums attīstīt 
                  jāšanas prasmes drošā un atbalstošā atmosfērā.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Treniņu veidi:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Individuālās nodarbības iesācējiem</li>
                  <li>Grupu treniņi pieredzējušiem jātniekiem</li>
                  <li>Bērnu jāšanas skola (no 6 gadu vecuma)</li>
                  <li>Specializētie dresūras treniņi</li>
                  <li>Šķēršļu pārvarēšanas nodarbības</li>
                  <li>Konkursa sagatavošanas treniņi</li>
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
                src={serviceRiding}
                alt="Jāšanas treniņš"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={heroImage}
                alt="Zirgs ar jātnieku"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={eventImage}
                alt="Šķēršļu pārvarēšana"
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

export default JasanasTrenini;