import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Users, BookOpen, Shield, Heart, CheckCircle2, Camera, Trophy } from "lucide-react";
import serviceExcursions from "@/assets/service-excursions.jpg";
import youthCup from "@/assets/youth-cup.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
const Ekskursijas = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img src={serviceExcursions} alt="Ekskursijas" className="absolute inset-0 w-full h-full object-cover" />
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
                <span className="text-white font-medium">Ekskursijas</span>
              </nav>

              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Ekskursijas
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Izglītojošas ekskursijas visai ģimenei, lai iepazītos ar zirgiem un to aprūpi.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            <div className="space-y-8">
              <h2 className="text-section text-foreground">Izglītojošas ekskursijas visai ģimenei</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Ekskursijas programma:</h3>
                <div className="grid gap-3">
                  {[{
                  text: "Iepazīšanās ar zirgu šķirnēm un to īpašībām",
                  icon: BookOpen
                }, {
                  text: "Zirgu aprūpes un barošanas demonstrējumi",
                  icon: Heart
                }, {
                  text: "Drošības noteikumi un zirgu uzvedības īpatnības",
                  icon: Shield
                }, {
                  text: "Praktiskās nodarbības - zirgu sukāšana un barošana",
                  icon: Users
                }, {
                  text: "Iepazīšanās ar jāšanas ekipējumu un tā lietošanu",
                  icon: CheckCircle2
                }, {
                  text: "Zirgu treniņu un sacensību stāstījumi",
                  icon: Trophy
                }, {
                  text: "Atmiņu foto ar zirgiem",
                  icon: Camera
                }].map((item, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-light transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <aside className="glass-card p-8 h-fit">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Piemērots visai ģimenei
              </h3>
              <div className="space-y-4">
                {["Bērniem un pieaugušajiem", "Izglītojošs saturs", "Praktiskās nodarbības", "Drošā vidē", "Pieredzējuši gidi", "Neaizmirstamas atmiņas"].map((item, index) => <div key={index} className="flex items-start gap-3">
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
export default Ekskursijas;