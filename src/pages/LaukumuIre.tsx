import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, MapPin, Trophy, Shield, Users, CheckCircle2, Target, Volume2 } from "lucide-react";
import serviceArena from "@/assets/service-arena-rental.jpg";
import eventCompetition from "@/assets/event-competition.jpg";
import eventShowjumping from "@/assets/event-showjumping.jpg";
const LaukumuIre = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img src={serviceArena} alt="Laukumu īre" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
          
          <div className="relative flex items-center justify-center text-center text-white min-h-[50vh] md:min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-6xl">
              {/* Breadcrumbs */}
              <nav className="flex items-center justify-center mb-6 text-sm text-white/80">
                <Home className="w-4 h-4 mr-2" />
                <span>Sākums</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span>Pakalpojumi</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white font-medium">Laukumu īre</span>
              </nav>

              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Laukumu īre
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Profesionālu jāšanas laukumu īre ar visām nepieciešamajām iekārtām un šķēršļiem.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            <div className="space-y-8">
              <h2 className="text-section text-foreground">Profesionālu jāšanas laukumu īre</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Pieejamie laukumi:</h3>
                <div className="grid gap-3">
                  {[{
                  text: "Galvenais konkursu laukums (60x20m) ar tribunēm",
                  icon: Trophy
                }, {
                  text: "Dresūras laukums (60x20m) ar ogļu segumu",
                  icon: Target
                }, {
                  text: "Šķēršļu treniņu laukums ar pilnu šķēršļu komplektu",
                  icon: Shield
                }, {
                  text: "Silšanās laukums iekštelpu manēžā",
                  icon: Users
                }, {
                  text: "Mājas un stabļa izvietošanas vietas",
                  icon: MapPin
                }, {
                  text: "Veterinārās palīdzības iespēja",
                  icon: CheckCircle2
                }, {
                  text: "Tehniskais nodrošinājums un skaņas sistēma",
                  icon: Volume2
                }].map((item, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-light transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <aside className="glass-card p-8 h-fit">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Laukumu iekārtas
              </h3>
              <div className="space-y-4">
                {["Augstas kvalitātes segums", "Profesionāls apgaismojums", "Ūdens aspergēšanas sistēma", "Tribīnes skatītājiem", "Šķēršļu komplekts", "Drošības standartiem atbilstoši"].map((item, index) => <div key={index} className="flex items-start gap-3">
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
export default LaukumuIre;