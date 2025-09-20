import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, MapPin, Trophy, Shield, Users, CheckCircle2, Target, Volume2, Mail, Phone, Star, User, CalendarClock, X } from "lucide-react";
import serviceArena from "@/assets/service-arena-rental.jpg";
import eventCompetition from "@/assets/event-competition.jpg";
import eventShowjumping from "@/assets/event-showjumping.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";
import serviceStable from "@/assets/service-horse-stable.jpg";
const LaukumuIre = () => {
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
                <p>Sporta centrs piedāvā izīrēt manēžu un laukumus jātniekiem un zirgu īpašniekiem ar saviem privātajiem zirgiem, kuri netiek turēti Jauno Jātnieku Skolas zirgu staļļos. Laukumi un manēžas ir aprīkotas ar šķēršļu komplektiem un atbilstošu aprīkojumu, lai klientiem varētu sniegt pilnvērtīgus jāšanas treniņus un nodrošinātu augstas klases sacensības.

Īres maksa par vienu zirgu – Cena 25 EUR / stundā (īres laikā manēžā atradīsies arī citi jātnieki).

Laukumus un manēžas ir iespējams arī īrēt privātiem pasākumiem, piemēram, zirgu skatei vai suņu adžiliti sacensībām.

Lai rezervētu laiku, lūdzu zvanīt uz tel.28677177</p>
                
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
export default LaukumuIre;