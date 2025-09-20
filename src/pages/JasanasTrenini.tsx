import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Users, Trophy, Shield, Heart, CheckCircle2, BookOpen, Target } from "lucide-react";
import serviceRiding from "@/assets/service-riding-lessons.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import eventImage from "@/assets/event-showjumping.jpg";
const JasanasTrenini = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img src={serviceRiding} alt="Jāšanas treniņi" className="absolute inset-0 w-full h-full object-cover" />
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
                  {[{
                  text: "Individuālās nodarbības iesācējiem",
                  icon: Users
                }, {
                  text: "Grupu treniņi pieredzējušiem jātniekiem",
                  icon: Trophy
                }, {
                  text: "Bērnu jāšanas skola (no 6 gadu vecuma)",
                  icon: BookOpen
                }, {
                  text: "Specializētie dresūras treniņi",
                  icon: Target
                }, {
                  text: "Šķēršļu pārvarēšanas nodarbības",
                  icon: Shield
                }, {
                  text: "Konkursa sagatavošanas treniņi",
                  icon: Trophy
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
                Treniņu priekšrocības
              </h3>
              <div className="space-y-4">
                {["Sertificēti instruktori", "Individuāla pieeja", "Droša vide", "Kvalitatīvi zirgi", "Modernas iekārtas", "Visi līmeņi laipni gaidīti"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </aside>
          </div>
        </section>

        {/* Pricing table */}
        <section className="container mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-section text-foreground mb-12 text-center">Treniņu un pakalpojumu cenas</h3>
          <div className="glass-card overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Pakalpojums</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">Cena ar PVN</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: "Treniņi", items: [
                    { name: "Iepazīšanās ar poniju / zirgu", price: "35.00" },
                    { name: "Individuāls treniņš ar skolas zirgu", price: "60.00" },
                    { name: "Treniņš ar savu zirgu pie JJS trenera (iekļaujot manēžas īri)", price: "45.00" },
                    { name: "Treniņš ar personīgo zirgu, kurš uzturas JJS stallī, pie JJS trenera", price: "30.00" }
                  ]},
                  { category: "Mēneša abonementi treniņiem", items: [
                    { name: "1x nedēļā (60 EUR reize)", price: "240.00" },
                    { name: "2x nedēļā (55 EUR reize)", price: "440.00" },
                    { name: "3x nedēļā (50 EUR reize)", price: "600.00" }
                  ]},
                  { category: "Manēžas / laukuma īre par zirgu", items: [
                    { name: "Viena reize", price: "25.00" },
                    { name: "Abonements 10 reizēm (3 mēnešu laikā)", price: "200.00" }
                  ]}
                ].map((group, gi) => (
                  <>
                    <tr key={group.category} className="bg-muted/30">
                      <td colSpan={2} className="px-6 py-3 font-semibold text-primary">{group.category}</td>
                    </tr>
                    {group.items.map((item, i) => (
                      <tr key={item.name} className="border-t hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 text-foreground">{item.name}</td>
                        <td className="px-6 py-4 text-right font-medium">€{item.price}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            * Nodarbību laiki var mainīties. Svētku dienās visiem pakalpojumiem tiek piemērota papildus maksa 50% apmērā.
          </p>
        </section>

        {/* Practical info + Contacts (light cards) */}
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h3 className="text-section text-foreground mb-12 text-center">
              Praktiskā informācija
            </h3>
        
            <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
              {/* Info card with image */}
              <div className="p-0 overflow-hidden rounded-2xl border bg-white shadow-sm">
                {/* Top image */}
                <div className="relative h-28 bg-gradient-to-r from-primary/80 to-primary/60">
                  <img src={winterImage} alt="Praktiskā informācija" className="absolute inset-0 w-full h-full object-cover opacity-25" />
                </div>
        
                {/* Content */}
                <div className="p-6 space-y-6">
                  {["Visi pakalpojumi pēc iepriekšēja pieraksta.", "Svētku dienās visiem pakalpojumiem tiek piemērota papildus maksa 50% apmērā.", "Nodarbību / aprūpes laiki var mainīties — vienmēr precizējam pirms apmeklējuma."].map((text, i) => <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{text}</span>
                    </div>)}
                </div>
              </div>

              {/* Contacts card + popup trigger */}
              <div className="p-0 overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-28 bg-gradient-to-r from-primary/80 to-primary/60">
                  <img src={winterImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Sazinieties ar mums</h4>
                  <div className="space-y-3">
                    <a href="tel:+37128677177" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="font-medium">+371 28677177</span>
                    </a>
                    <a href="mailto:info@latvianhorses.lv" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="font-medium">info@latvianhorses.lv</span>
                    </a>
                  </div>

                  <button onClick={() => setOpen(true)} className="mt-2 inline-flex items-center justify-center w-full rounded-xl bg-primary text-white px-4 py-2.5 font-medium hover:bg-primary/90 transition-colors" aria-haspopup="dialog" aria-expanded={open}>
                    Atstāt pieteikumu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>;
};
export default JasanasTrenini;