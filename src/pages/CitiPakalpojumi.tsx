import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Shield, Heart, CheckCircle2, Users, Truck, Target, BookOpen } from "lucide-react";
import serviceOther from "@/assets/service-other-services.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
const CitiPakalpojumi = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img src={serviceOther} alt="Citi pakalpojumi" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
          
          <div className="relative flex items-center justify-center text-center text-white min-h-[50vh] md:min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-6xl">

              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Citi pakalpojumi
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Specializēti pakalpojumi zirgu aprūpē, veselības uzraudzībā un terapijā.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          {/* Breadcrumbs */}
            <nav className="flex items-center justify-start mb-6 text-sm text-black/80">
              <a href="/lv/" className="flex items-center hover:text-primary transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Sākums
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/lv/pakalpojumi/" className="hover:text-primary transition-colors">
                Pakalpojumi
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-black font-medium">Citi pakalpojumi</span>
            </nav>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            <div className="space-y-8">
              <h2 className="text-section text-foreground">Specializēti pakalpojumi zirgu aprūpē</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Pieejamie pakalpojumi:</h3>
                <div className="grid gap-3">
                  {[{
                  text: "Veterinārā aprūpe un profilaktiskās pārbaudes",
                  icon: Shield
                }, {
                  text: "Kausēšanas pakalpojumi un naglu aprūpe",
                  icon: CheckCircle2
                }, {
                  text: "Zirgu masāža un fizioterapija",
                  icon: Heart
                }, {
                  text: "Specializētā barības plānu izstrāde",
                  icon: Target
                }, {
                  text: "Zirgu pārvadāšanas pakalpojumi",
                  icon: Truck
                }, {
                  text: "Konsultācijas zirgu aprūpē un treniņos",
                  icon: BookOpen
                }, {
                  text: "Zirgu uzvedības korekcijas programmas",
                  icon: Users
                }, {
                  text: "Sezonālā aprūpe un ziemas sagatavošana",
                  icon: Shield
                }].map((item, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-light transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <aside className="glass-card p-8 h-fit">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Mūsu speciālisti
              </h3>
              <div className="space-y-4">
                {["Pieredzējuši veterinārārsti", "Sertificēti kausētāji", "Profesionāli masieri", "Barošanas speciālisti", "Uzvedības eksperti", "Personalizēta aprūpe"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </aside>
          </div>
        </section>

        {/* Gallery Section */}
        
      </main>

      <Footer />
    </div>;
};
export default CitiPakalpojumi;