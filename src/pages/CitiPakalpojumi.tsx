import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceOther from "@/assets/service-other-services.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";

const CitiPakalpojumi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src={serviceOther}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Citi pakalpojumi
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Specializēti pakalpojumi zirgu aprūpē</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Piedāvājam papildu pakalpojumus zirgu aprūpē, veselības uzraudzībā un specializētās terapijas. 
                  Mūsu komandā strādā pieredzējuši veterinārārsti, kausētāji un masieri, kas nodrošina 
                  visaptverošu aprūpi katram zirgam.
                </p>
                
                <p>
                  Sniedzam arī konsultācijas zirgu īpašniekiem par pareizu aprūpi, barību, treniņu plānošanu 
                  un veselības uzraudzību. Mūsu mērķis ir nodrošināt, lai katrs zirgs būtu vesels, laimīgs 
                  un gatavs darbam vai atpūtai.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pieejamie pakalpojumi:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Veterinārā aprūpe un profilaktiskās pārbaudes</li>
                  <li>Kausēšanas pakalpojumi un naglu aprūpe</li>
                  <li>Zirgu masāža un fizioterapija</li>
                  <li>Specializētā barības plānu izstrāde</li>
                  <li>Zirgu pārvadāšanas pakalpojumi</li>
                  <li>Konsultācijas zirgu aprūpē un treniņos</li>
                  <li>Zirgu uzvedības korekcijas programmas</li>
                  <li>Sezonālā aprūpe un ziemas sagatavošana</li>
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
                src={serviceOther}
                alt="Zirgu aprūpe"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={winterImage}
                alt="Ziemas aprūpe"
                className="rounded-lg object-cover w-full h-64"
              />
              <img
                src={heroImage}
                alt="Veterinārā aprūpe"
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

export default CitiPakalpojumi;