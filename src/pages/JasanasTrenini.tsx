import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Users, Trophy, Shield, Heart, CheckCircle2, BookOpen, Target } from "lucide-react";
import serviceRiding from "@/assets/service-riding-lessons.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import eventImage from "@/assets/event-showjumping.jpg";

const JasanasTrenini = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img
            src={serviceRiding}
            alt="Jāšanas treniņi"
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
                <span className="text-white font-medium">Jāšanas treniņi</span>
              </nav>

              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Jāšanas treniņi
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Kvalitatīvas jāšanas nodarbības visiem līmeņiem ar pieredzējušiem instruktoriem drošā vidē.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            <div className="space-y-8">
              <h2 className="text-section text-foreground">Profesionāli jāšanas treniņi</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Treniņu veidi:</h3>
                <div className="grid gap-3">
                  {[
                    { text: "Individuālās nodarbības iesācējiem", icon: Users },
                    { text: "Grupu treniņi pieredzējušiem jātniekiem", icon: Trophy },
                    { text: "Bērnu jāšanas skola (no 6 gadu vecuma)", icon: BookOpen },
                    { text: "Specializētie dresūras treniņi", icon: Target },
                    { text: "Šķēršļu pārvarēšanas nodarbības", icon: Shield },
                    { text: "Konkursa sagatavošanas treniņi", icon: Trophy },
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
                <Heart className="w-5 h-5 text-primary" />
                Treniņu priekšrocības
              </h3>
              <div className="space-y-4">
                {[
                  "Sertificēti instruktori",
                  "Individuāla pieeja",
                  "Droša vide",
                  "Kvalitatīvi zirgi",
                  "Modernas iekārtas",
                  "Visi līmeņi laipni gaidīti",
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