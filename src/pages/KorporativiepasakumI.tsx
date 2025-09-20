import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Users, Trophy, Shield, Heart, CheckCircle2, Target, Handshake } from "lucide-react";
import serviceCorporate from "@/assets/service-corporate.jpg";
import eventCompetition from "@/assets/event-competition.jpg";
import winterTraining from "@/assets/winter-training.jpg";
const KorporativiepasakumI = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img src={serviceCorporate} alt="Korporatīvie pasākumi" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
          
          <div className="relative flex items-center justify-center text-center text-white min-h-[50vh] md:min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-6xl">

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
              <span className="text-black font-medium">Korporatīvie pasākumi</span>
            </nav>
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
                  {[{
                  text: "Komandas veidošanas aktivitātes ar zirgiem",
                  icon: Users
                }, {
                  text: "Līderības prasmju attīstīšanas programmas",
                  icon: Target
                }, {
                  text: "Komunikācijas uzlabošanas treniņi",
                  icon: Handshake
                }, {
                  text: "Uzticības stiprināšanas vingrinājumi",
                  icon: Heart
                }, {
                  text: "Korporatīvie turnīri un sacensības",
                  icon: Trophy
                }, {
                  text: "Semināri par zirgu psihologii un uzvedību",
                  icon: Shield
                }, {
                  text: "Korporatīvo svinību organizēšana",
                  icon: CheckCircle2
                }].map((item, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-light transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <aside className="glass-card p-8 h-fit">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-primary" />
                Attīstāmās prasmes
              </h3>
              <div className="space-y-4">
                {["Uzticības veidošana", "Līderības prasmes", "Komandas saliedētība", "Komunikācija", "Pacietība", "Neverbālā saziņa"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </aside>
          </div>
        </section>

        {/* Nomas izmaksas */}
        <section className="container mx-auto max-w-4xl px-4 py-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Nomas izmaksas</h3>
        
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Pakalpojums</th>
                  <th className="text-right px-6 py-4 font-semibold">Cena ar PVN</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Konferenču zāle", "no 100 €"],
                  ["VIP terase", "150 €", "Ar grila zonu un banketa zāli"],
                  ["Āra telts", "220 €"],
                  ["2 jāšanas laukumi", "25 € / stundā"],
                  ["2 jāšanas laukumi, VIP terase, tribīnes", "no 650 €"],
                  ["Visa teritorija, ieskaitot konferenču zāli", "no 850 €"],
                ].map(([name, price, note], i) => (
                  <tr key={i} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 text-foreground">
                      <div className="flex flex-col">
                        <span>{name}</span>
                        {note && <span className="text-xs italic text-muted-foreground">{note}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Gallery Section */}
        
      </main>

      <Footer />
    </div>;
};
export default KorporativiepasakumI;