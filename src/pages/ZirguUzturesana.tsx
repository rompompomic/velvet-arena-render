import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceStable from "@/assets/service-horse-stable.jpg";
import heroImage from "@/assets/hero-equestrian.jpg";
import winterImage from "@/assets/winter-equestrian.jpg";

const ZirguUzturesana = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* HERO */}
        <section className="relative min-h-[65vh]">
          <img src="/assets/hero-equestrian.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-28 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Zirgu uzturēšana</h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90">
              Profesionāla zirgu aprūpe un uzturēšana modernās stallīs ar augstākajiem komforta standartiem.
            </p>
            {/* Stats chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { k: ">70", v: "boksi" },
                { k: "2", v: "slēgtās manēžas" },
                { k: "24/7", v: "aprūpe un uzraudzība" },
              ].map((s) => (
                <div key={s.v} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm border border-white/15">
                  <span className="font-semibold">{s.k}</span> {s.v}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CONTENT: 2 columns */}
        <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10">
            {/* Left: intro */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Profesionāla zirgu aprūpe un uzturēšana</h2>
              <p className="text-muted-foreground">
                Piedāvājam profesionālu zirgu aprūpi un uzturēšanu mūsdienīgos staļļos ar augstākajiem komforta standartiem.
                Staļļi ir aprīkoti ar modernām ventilācijas sistēmām, kvalitatīvām boksu konstrukcijām un regulāru veterināro
                uzraudzību. Katrs zirgs saņem individuālu aprūpi, ņemot vērā tā vecumu, veselības stāvokli un īpašās vajadzības.
              </p>
        
              <h3 className="text-xl font-semibold">Pakalpojumi ietver:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Pilna laika zirgu uzturēšana modernās stallīs</li>
                <li>Kvalitatīva barība un ūdens nodrošinājums</li>
                <li>Regulāra veterinārā aprūpe un veselības pārbaudes</li>
                <li>Profesionāla kopšana un higiēna</li>
                <li>Individuālas treniņu plāns katram zirgam</li>
                <li>24/7 uzraudzība un drošības nodrošinājums</li>
                <li>Āra pastaigu laukumi un ganības</li>
              </ul>
            </div>
        
            {/* Right: aside card */}
            <aside className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Iekļauts ikdienā</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mehāniskās dzirdnes un barības sili</li>
                <li>• Speciāls trauks sālim</li>
                <li>• Skaidu pakaiši boksos</li>
                <li>• Garderobes ar apsildāmām grīdām</li>
                <li>• Barības un saimniecības telpas (veļas mašīnas, žāvētāji)</li>
                <li>• Divi solāriji un mazgāšanas vietas</li>
                <li>• Vairāki āra pastaigu laukumi (ikdienas izvešana)</li>
                <li>• Vasarā – atvērta tipa staļļi sacensībām</li>
              </ul>
            </aside>
          </div>
        </section>
        
        {/* Included features grid */}
        <section className="container mx-auto max-w-6xl px-4 pb-6 md:pb-10">
          <h3 className="text-xl font-semibold mb-4">Iekārtas un labiekārtojums</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Ventilācijas sistēmas",
              "Kvalitatīvi boksi",
              "Solāriji zirgiem",
              "Mazgāšanas vietas",
              "Apsildāmas garderobes",
              "Āra laukumi un ganības",
            ].map((t) => (
              <div key={t} className="p-4 rounded-xl border bg-white shadow-sm text-sm text-muted-foreground">
                {t}
              </div>
            ))}
          </div>
        </section>
        
        {/* Pricing table */}
        <section className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
          <h3 className="text-xl font-semibold mb-4">Piedāvātās pakas</h3>
          <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <th className="text-left px-4 py-3 font-medium">Paka</th>
                  <th className="text-right px-4 py-3 font-medium">Cena (EUR) + PVN</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["DIY", "155"],
                  ["BRONZA", "285"],
                  ["SUDRABS", "370"],
                  ["SUDRABS+", "410"],
                  ["ZELTS", "470"],
                  ["PLATĪNS", "720"],
                ].map(([name, price]) => (
                  <tr key={name} className="hover:bg-neutral-50/70">
                    <td className="px-4 py-3">{name}</td>
                    <td className="px-4 py-3 text-right font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            * Cenas norādītas bez PVN. Apmaksa iespējama kā juridiskai personai vai uz biedrību ar sabiedriskā labuma statusu.
          </p>
        </section>
        
        {/* Practical info */}
        <section className="container mx-auto max-w-6xl px-4 pb-16">
          <h3 className="text-xl font-semibold mb-3">Praktiskā informācija</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Visi pakalpojumi pēc iepriekšēja pieraksta.</li>
            <li>Svētku dienās visiem pakalpojumiem tiek piemērota papildus maksa 50% apmērā.</li>
            <li>Nodarbību / aprūpes laiki var mainīties — vienmēr precizējam pirms apmeklējuma.</li>
            <li>Interesentiem: tālr. <a href="tel:+37128677177" className="underline">+371 28677177</a>, e-pasts <a className="underline" href="mailto:info@latvianhorses.lv">info@latvianhorses.lv</a>.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ZirguUzturesana;