import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Users, BookOpen, Shield, Heart, CheckCircle2, Camera, Trophy, Phone, Mail, Star, User, CalendarClock, X } from "lucide-react";
import serviceExcursions from "@/assets/service-excursions.jpg";
import youthCup from "@/assets/youth-cup.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";
import serviceStable from "@/assets/service-horse-stable.jpg";
const Ekskursijas = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: отправьте данные на ваш endpoint
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
    }, 1400);
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <img src={serviceExcursions} alt="Ekskursijas" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
          
          <div className="relative flex items-center justify-center text-center text-white min-h-[50vh] md:min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-6xl">

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
            <span className="text-black font-medium">Ekskursijas</span>
          </nav>
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

        {/* Ekskursijas table */}
        <section className="container mx-auto max-w-4xl px-4 py-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Ekskursijas</h3>
        
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Ekskursija</th>
                  <th className="text-right px-6 py-4 font-semibold">Cena ar PVN</th>
                </tr>
              </thead>
        
              <tbody className="divide-y">
                {[
                  [
                    "Ekskursija pa teritoriju ar zirgu barošanu, līdz 4 personām (bērniem līdz 7 g.v. bez maksas)",
                    "€20.00",
                  ],
                  ["Papildus vizināšana ar zirgu/poniju, par personu", "€5.00"],
                  [
                    "Skolu un bērnudārza grupiņu ekskursijas ar zirgu barošanu un vizināšanos (cena par 1 personu, sākot no 10 personām)",
                    "€3.00",
                  ],
                ].map(([name, price], i) => (
                  <tr
                    key={i}
                    className="hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-foreground">{name}</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      {/* POPUP FORM */}
      {open && <div role="dialog" aria-modal="true" className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/60" onClick={() => setOpen(false)}>
          <div className="w-full max-w-3xl grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            {/* Left image */}
            <div className="relative hidden md:block">
              <img src={serviceStable} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Right form */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold">Atstāt pieteikumu</h4>
                <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-neutral-100" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!sent ? <form className="grid gap-4" onSubmit={onSubmit}>
                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> Vārds, Uzvārds
                    </span>
                    <input required type="text" className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" placeholder="Jūsu vārds" />
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="grid gap-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" /> Telefons
                      </span>
                      <input required type="tel" className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" placeholder="+371 ..." />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> E-pasts
                      </span>
                      <input type="email" className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" placeholder="name@example.com" />
                    </label>
                  </div>

                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-primary" /> Vēlamais laiks / komentārs
                    </span>
                    <textarea rows={4} className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 resize-none" placeholder="Īsi aprakstiet pieprasījumu" />
                  </label>

                  <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary text-white px-4 py-2.5 font-medium hover:bg-primary/90 transition-colors">
                    Nosūtīt
                  </button>
                </form> : <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
                  <p className="text-lg font-medium">Pieteikums nosūtīts!</p>
                  <p className="text-sm text-muted-foreground">Mēs sazināsimies ar jums tuvākajā laikā.</p>
                </div>}
            </div>
          </div>
        </div>}

      <Footer />
    </div>;
};
export default Ekskursijas;