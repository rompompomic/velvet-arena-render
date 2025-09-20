import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Building2, Users, Shield, Heart, CheckCircle2, MapPin, Phone, Mail, Star } from "lucide-react";
import serviceStable from "@/assets/service-horse-stable.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";
const ZirguUzturesana = () => {
  return <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative">
          <img src={heroImage} alt="Zirgu uzturēšana" className="absolute inset-0 w-full h-full object-cover" />
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
                <span className="text-white font-medium">Zirgu uzturēšana</span>
              </nav>

              <h1 className="text-hero text-white mb-4 drop-shadow-lg">
                Zirgu uzturēšana
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                Profesionāla zirgu aprūpe un uzturēšana modernās stallīs ar augstākajiem komforta standartiem.
              </p>
        
              {/* Stats chips */}
              
            </div>
          </div>
        </section>

        {/* CONTENT: 2 columns */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12">
            {/* Left: intro */}
            <div className="space-y-8">
              <h2 className="text-section text-foreground">
                Profesionāla zirgu aprūpe un uzturēšana
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Piedāvājam profesionālu zirgu aprūpi un uzturēšanu mūsdienīgos
                staļļos ar augstākajiem komforta standartiem. Staļļi ir aprīkoti
                ar modernām ventilācijas sistēmām, kvalitatīvām boksu
                konstrukcijām un regulāru veterināro uzraudzību. Katrs zirgs
                saņem individuālu aprūpi, ņemot vērā tā vecumu, veselības stāvokli
                un īpašās vajadzības.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Pakalpojumi ietver:</h3>
                <div className="grid gap-3">
                  {[{
                  text: "Pilna laika zirgu uzturēšana modernās stallīs",
                  icon: Building2
                }, {
                  text: "Kvalitatīva barība un ūdens nodrošinājums",
                  icon: Heart
                }, {
                  text: "Regulāra veterinārā aprūpe un veselības pārbaudes",
                  icon: Shield
                }, {
                  text: "Profesionāla kopšana un higiēna",
                  icon: CheckCircle2
                }, {
                  text: "Individuālas treniņu plāns katram zirgam",
                  icon: Users
                }, {
                  text: "24/7 uzraudzība un drošības nodrošinājums",
                  icon: Shield
                }, {
                  text: "Āra pastaigu laukumi un ganības",
                  icon: MapPin
                }].map((item, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-light transition-colors">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Right: aside card */}
            <aside className="glass-card p-8 h-fit">
              <h3 className="text-card-title text-foreground mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Iekļauts ikdienā
              </h3>
              <div className="space-y-4">
                {["Mehāniskās dzirdnes un barības sili", "Speciāls trauks sālim", "Skaidu pakaiši boksos", "Garderobes ar apsildāmām grīdām", "Barības un saimniecības telpas (veļas mašīnas, žāvētāji)", "Divi solāriji un mazgāšanas vietas", "Vairāki āra pastaigu laukumi (ikdienas izvešana)", "Vasarā – atvērta tipa staļļi sacensībām"].map((item, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </aside>
          </div>
        </section>

        {/* Included features grid */}
        <section className="bg-light py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h3 className="text-section text-foreground mb-12 text-center">Iekārtas un labiekārtojums</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              text: "Ventilācijas sistēmas",
              icon: Shield
            }, {
              text: "Kvalitatīvi boksi",
              icon: Building2
            }, {
              text: "Solāriji zirgiem",
              icon: Heart
            }, {
              text: "Mazgāšanas vietas",
              icon: CheckCircle2
            }, {
              text: "Apsildāmas garderobes",
              icon: Users
            }, {
              text: "Āra laukumi un ganības",
              icon: MapPin
            }].map((item, index) => <div key={index} className="glass-card p-6 text-center hover-lift group">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Pricing table */}
        <section className="container mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-section text-foreground mb-12 text-center">Piedāvātās pakas</h3>
          <div className="glass-card overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Paka</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">Cena (EUR) + PVN</th>
                </tr>
              </thead>
              <tbody>
                {[{
                name: "DIY",
                price: "155",
                isPopular: false
              }, {
                name: "BRONZA",
                price: "285",
                isPopular: false
              }, {
                name: "SUDRABS",
                price: "370",
                isPopular: false
              }, {
                name: "SUDRABS+",
                price: "410",
                isPopular: true
              }, {
                name: "ZELTS",
                price: "470",
                isPopular: false
              }, {
                name: "PLATĪNS",
                price: "720",
                isPopular: false
              }].map((pkg, index) => <tr key={pkg.name} className={`
                      border-t hover:bg-primary/5 transition-colors
                      ${pkg.isPopular ? 'bg-primary/10 border-primary/20' : 'border-border'}
                      ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
                    `}>
                    <td className="px-6 py-4 relative">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${pkg.isPopular ? 'text-primary' : 'text-foreground'}`}>
                          {pkg.name}
                        </span>
                        {pkg.isPopular && <span className="px-2 py-1 text-xs bg-primary text-white rounded-full font-medium">
                            Populārs
                          </span>}
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-right font-bold text-lg ${pkg.isPopular ? 'text-primary' : 'text-foreground'}`}>
                      €{pkg.price}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            * Cenas norādītas bez PVN. Apmaksa iespējama kā juridiskai personai vai uz
            biedrību ar sabiedriskā labuma statusu.
          </p>
        </section>

        {/* Practical info */}
        <section className="bg-light py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h3 className="text-section text-foreground mb-12 text-center">Praktiskā informācija</h3>
            <div className="glass-card p-8">
              <div className="grid gap-6">
                {[{
                text: "Visi pakalpojumi pēc iepriekšēja pieraksta.",
                icon: CheckCircle2
              }, {
                text: "Svētku dienās visiem pakalpojumiem tiek piemērota papildus maksa 50% apmērā.",
                icon: Shield
              }, {
                text: "Nodarbību / aprūpes laiki var mainīties — vienmēr precizējam pirms apmeklējuma.",
                icon: Users
              }].map((item, index) => <div key={index} className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>)}
                <div className="flex items-start gap-4 pt-4 border-t border-border">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Interesentiem:</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="tel:+37128677177" className="link-underline text-primary font-medium hover:text-primary-700 transition-colors">
                        +371 28677177
                      </a>
                      <a href="mailto:info@latvianhorses.lv" className="link-underline text-primary font-medium hover:text-primary-700 transition-colors">
                        info@latvianhorses.lv
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default ZirguUzturesana;