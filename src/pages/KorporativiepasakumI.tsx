import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Users, Trophy, Shield, Heart, CheckCircle2, Target, Handshake } from "lucide-react";
import serviceCorporate from "@/assets/service-corporate.jpg";
import eventCompetition from "@/assets/event-competition.jpg";
import winterTraining from "@/assets/winter-training.jpg";

const KorporativiepasakumI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img
            src={serviceCorporate}
            alt="Korporatīvie pasākumi"
            className="absolute inset-0 w-full h-full object-cover"
          />
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
                <span className="text-white font-medium">Korporatīvie pasākumi</span>
              </nav>

              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Korporatīvie pasākumi
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Unikāli komandas veidošanas pasākumi ar zirgiem uzņēmumiem un organizācijām.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            <div className="space-y-8">
              <h2 className="text-section text-foreground">Unikāli komandas veidošanas pasākumi</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Piedāvājamie pasākumi:</h3>
                <div className="grid gap-3">
                  {[
                    { text: "Komandas veidošanas aktivitātes ar zirgiem", icon: Users },
                    { text: "Līderības prasmju attīstīšanas programmas", icon: Target },
                    { text: "Komunikācijas uzlabošanas treniņi", icon: Handshake },
                    { text: "Uzticības stiprināšanas vingrinājumi", icon: Heart },
                    { text: "Korporatīvie turnīri un sacensības", icon: Trophy },
                    { text: "Semināri par zirgu psihologii un uzvedību", icon: Shield },
                    { text: "Korporatīvo svinību organizēšana", icon: CheckCircle2 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-light transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="glass-card p-8 h-fit">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-primary" />
                Attīstāmās prasmes
              </h3>
              <div className="space-y-4">
                {[
                  "Uzticības veidošana",
                  "Līderības prasmes",
                  "Komandas saliedētība",
                  "Komunikācija",
                  "Pacietība",
                  "Neverbālā saziņa",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </aside>
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