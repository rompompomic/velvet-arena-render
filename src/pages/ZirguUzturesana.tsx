import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceStable from "@/assets/service-horse-stable.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";

const ZirguUzturesana = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src={serviceStable}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Zirgu uzturēšana
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Profesionāla zirgu aprūpe un uzturēšana</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Piedāvājam profesionālu zirgu aprūpi un uzturēšanu mūsdienīgās stallīs ar augstākajiem komforta 
                  standartiem. Mūsu pieredze un rūpes par katru zirgu nodrošina optimālos dzīves apstākļus un 
                  veselības uzturēšanu.
                </p>
                
                <p>
                  Stallīs ir aprīkotas ar modernām ventilācijas sistēmām, kvalitatīvām boksu konstrukcijām un 
                  regulāru veterinārās aprūpes pakalpojumiem. Katrs zirgs saņem individuālu aprūpi, ņemot vērā 
                  tā vecumu, veselības stāvokli un īpašās vajadzības.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pakalpojumi ietver:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pilna laika zirgu uzturēšana modernās stallīs</li>
                  <li>Kvalitatīva barība un ūdens nodrošinājums</li>
                  <li>Regulāra veterinārā aprūpe un veselības pārbaudes</li>
                  <li>Profesionāla kopšana un higiēna</li>
                  <li>Individuāls treniņu plāns katram zirgam</li>
                  <li>24/7 uzraudzība un drošības nodrošinājums</li>
                  <li>Izskriešanās laukumi un ganības</li>
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
                src={serviceStable}
                alt="Mūsdienīgas stallis"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={heroImage}
                alt="Zirgi ganībās"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={winterImage}
                alt="Ziemas aprūpe"
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

export default ZirguUzturesana;