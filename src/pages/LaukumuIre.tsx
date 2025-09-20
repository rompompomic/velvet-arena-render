import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceArena from "@/assets/service-arena-rental.jpg";
import eventCompetition from "@/assets/event-competition.jpg";
import eventShowjumping from "@/assets/event-showjumping.jpg";

const LaukumuIre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src={serviceArena}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Laukumu īre
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Profesionālu jāšanas laukumu īre</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Piedāvājam profesionālu jāšanas laukumu īri ar visām nepieciešamajām iekārtām un šķēršļiem. 
                  Mūsu laukumi ir aprīkoti ar augstas kvalitātes segumu un regulāri tiek uzturēti optimālā stāvoklī, 
                  nodrošinot drošu un komfortablu vidi treniņiem un sacensībām.
                </p>
                
                <p>
                  Laukumi ir piemēroti dažādu disciplīnu treniņiem - dresūrai, šķēršļu pārvarēšanai, 
                  kā arī konkursu rīkošanai. Katrs laukums ir aprīkots ar profesionālu apgaismojumu, 
                  ūdens aspergēšanas sistēmu un sēdvietu tribīnēm.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pieejamie laukumi:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Galvenais konkursu laukums (60x20m) ar tribunēm</li>
                  <li>Dresūras laukums (60x20m) ar ogļu segumu</li>
                  <li>Šķēršļu treniņu laukums ar pilnu šķēršļu komplektu</li>
                  <li>Silšanās laukums iekštelpu manēžā</li>
                  <li>Mājas un stabļa izvietošanas vietas</li>
                  <li>Veterinārās palīdzības iespēja</li>
                  <li>Tehniskais nodrošinājums un skaņas sistēma</li>
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
                src={serviceArena}
                alt="Jāšanas laukums"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={eventCompetition}
                alt="Sacensības laukumā"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={eventShowjumping}
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

export default LaukumuIre;