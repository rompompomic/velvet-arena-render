import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  Home,
  Building2,
  Users,
  Shield,
  Heart,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Star,
  User,
  CalendarClock,
  X,
} from "lucide-react";

import serviceStable from "@/assets/service-horse-stable.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";

const ZirguUzturesana = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative">
          <img
            src={heroImage}
            alt="Zirgu uzturēšana"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

          <div className="relative flex items-center justify-center text-center text-white min-h-[50vh] md:min-h-[60vh]">
            <div className="container mx-auto px-4 max-w-6xl">
              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Zirgu uzturēšana
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Profesionāla zirgu aprūpe un uzturēšana modernās stallīs ar augstākajiem komforta standartiem.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT: 2 columns */}
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
              <span className="text-black font-medium">Zirgu uzturēšana</span>
            </nav>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            {/* Left: intro */}
            <div className="space-y-8">
              <h2 className="text-section text-foreground">Profesionala zirgu aprūpe un uzturēšana</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Piedāvājam profesionālu zirgu aprūpi un uzturēšanu mūsdienīgos staļļos ar augstākajiem komforta standartiem.
                Staļļi ir aprīkoti ar modernām ventilācijas sistēmām, kvalitatīvām boksu konstrukcijām un regulāru veterināro uzraudzību.
                Katrs zirgs saņem individuālu aprūpi, ņemot vērā tā vecumu, veselības stāvokli un īpašās vajadzības.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Pakalpojumi ietver:</h3>
                <div className="grid gap-3">
                  {[
                    { text: "Pilna laika zirgu uzturēšana modernās stallīs", icon: Building2 },
                    { text: "Kvalitatīva barība un ūdens nodrošinājums", icon: Heart },
                    { text: "Regulāra veterinārā aprūpe un veselības pārbaudes", icon: Shield },
                    { text: "Profesionāla kopšana un higiēna", icon: CheckCircle2 },
                    { text: "Individuālas treniņu plāns katram zirgam", icon: Users },
                    { text: "24/7 uzraudzība un drošības nodrošinājums", icon: Shield },
                    { text: "Āra pastaigu laukumi un ganības", icon: MapPin },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: daily include card (light) */}
            <aside className="p-8 h-fit rounded-2xl border bg-white shadow-sm">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Iekļauts ikdienā
              </h3>
              <div className="space-y-4">
                {[
                  "Mehāniskās dzirdnes un barības sili",
                  "Speciāls trauks sālim",
                  "Skaidu pakaiši boksos",
                  "Garderobes ar apsildāmām grīdām",
                  "Barības un saimniecības telpas (veļas mašīnas, žāvētāji)",
                  "Divi solāriji un mazgāšanas vietas",
                  "Vairāki āra pastaigu laukumi (ikdienas izvešana)",
                  "Vasarā – atvērta tipa staļļi sacensībām",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* Facilities grid (light cards) */}
        <section className="bg-neutral-50 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h3 className="text-section text-foreground mb-12 text-center">Iekārtas un labiekārtojums</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { text: "Ventilācijas sistēmas", icon: Shield },
                { text: "Kvalitatīvi boksi", icon: Building2 },
                { text: "Solāriji zirgiem", icon: Heart },
                { text: "Mazgāšanas vietas", icon: CheckCircle2 },
                { text: "Apsildāmas garderobes", icon: Users },
                { text: "Āra laukumi un ganības", icon: MapPin },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border bg-white shadow-sm text-center transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing table */}
        <section className="container mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-section text-foreground mb-12 text-center">Piedāvātās pakas</h3>
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Paka</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">Cena (EUR) + PVN</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "DIY", price: "155", isPopular: false },
                  { name: "BRONZA", price: "285", isPopular: false },
                  { name: "SUDRABS", price: "370", isPopular: false },
                  { name: "SUDRABS+", price: "410", isPopular: true },
                  { name: "ZELTS", price: "470", isPopular: false },
                  { name: "PLATĪNS", price: "720", isPopular: false },
                ].map((pkg, index) => (
                  <tr
                    key={pkg.name}
                    className={`
                      border-t hover:bg-primary/5 transition-colors
                      ${pkg.isPopular ? "bg-primary/10 border-primary/20" : "border-border"}
                      ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                    `}
                  >
                    <td className="px-6 py-4 relative">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${pkg.isPopular ? "text-primary" : "text-foreground"}`}>
                          {pkg.name}
                        </span>
                        {pkg.isPopular && (
                          <span className="px-2 py-1 text-xs bg-primary text-white rounded-full font-medium">
                            Populārs
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-right font-bold text-lg ${pkg.isPopular ? "text-primary" : "text-foreground"}`}>
                      €{pkg.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            * Cenas norādītas bez PVN. Apmaksa iespējama kā juridiskai personai vai uz biedrību ar sabiedriskā labuma statusu.
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
                  <img
                    src={winterImage}
                    alt="Praktiskā informācija"
                    className="absolute inset-0 w-full h-full object-cover opacity-25"
                  />
                </div>
        
                {/* Content */}
                <div className="p-6 space-y-6">
                  {[
                    "Visi pakalpojumi pēc iepriekšēja pieraksta.",
                    "Svētku dienās visiem pakalpojumiem tiek piemērota papildus maksa 50% apmērā.",
                    "Nodarbību / aprūpes laiki var mainīties — vienmēr precizējam pirms apmeklējuma.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
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

                  <button
                    onClick={() => setOpen(true)}
                    className="mt-2 inline-flex items-center justify-center w-full rounded-xl bg-primary text-white px-4 py-2.5 font-medium hover:bg-primary/90 transition-colors"
                    aria-haspopup="dialog"
                    aria-expanded={open}
                  >
                    Atstāt pieteikumu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* POPUP FORM */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
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

              {!sent ? (
                <form className="grid gap-4" onSubmit={onSubmit}>
                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> Vārds, Uzvārds
                    </span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
                      placeholder="Jūsu vārds"
                    />
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="grid gap-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" /> Telefons
                      </span>
                      <input
                        required
                        type="tel"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
                        placeholder="+371 ..."
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> E-pasts
                      </span>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
                        placeholder="name@example.com"
                      />
                    </label>
                  </div>

                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-primary" /> Vēlamais laiks / komentārs
                    </span>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 resize-none"
                      placeholder="Īsi aprakstiet pieprasījumu"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary text-white px-4 py-2.5 font-medium hover:bg-primary/90 transition-colors"
                  >
                    Nosūtīt
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
                  <p className="text-lg font-medium">Pieteikums nosūtīts!</p>
                  <p className="text-sm text-muted-foreground">Mēs sazināsimies ar jums tuvākajā laikā.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ZirguUzturesana;
