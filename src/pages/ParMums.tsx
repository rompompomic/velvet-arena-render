import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/about-hero-bg.jpg";
import trainersImage from "@/assets/about-trainers-new.jpg";
import horsesImage from "@/assets/about-horses.jpg";
import facilitiesImage from "@/assets/about-facilities-new.jpg";
import partnershipImage from "@/assets/about-partnership.jpg";

// Import horse images
import horseTims from "@/assets/horse-tims.jpg";
import horseAmber from "@/assets/horse-amber.jpg";
import horseBure from "@/assets/horse-bure.jpg";
import horseDiora from "@/assets/horse-diora.jpg";
import horseKriksis from "@/assets/horse-kriksis.jpg";
import horseLatte from "@/assets/horse-latte.jpg";
import horseTadis from "@/assets/horse-tadis.jpg";

const ParMums = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO Section (как было) */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Jauno Jātnieku skola - moderna zirgu sporta centrs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Par mums
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Jauno Jātnieku skola - vieta, kur mīlestība uz zirgiem apvieno
              cilvēkus un rada iespējas sasniegt lielus mērķus kopā.
            </p>
          </div>
        </section>

        {/* ОБЪЕДИНЁННАЯ СЕКЦИЯ: Mūsu stāsts + Treneri */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mūsu stāsts (текст) */}
              <div>
                <h2 className="text-section mb-6">Mūsu stāsts</h2>
                <div className="section-divider mb-8" />

                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    Jauno Jātnieku skola ir biedrība, sabiedriskā labuma
                    organizācija, kas darbojas kopš 2007. gada ar mērķi veicināt
                    sabiedrības interesi par aktivitātēm dabā un komunikāciju ar
                    skaistajiem dzīvniekiem – zirgiem. Mīlestība uz zirgiem ir
                    galvenā vērtība un dzinējspēks, kas palīdzēja apvienot
                    pareizos cilvēkus, lai sasniegtu lielus mērķus.
                  </p>
                  <p>
                    Pirms vairāk nekā desmit gadiem mūsu teritorijā nebija ne
                    zirgu, ne jātnieku. Šeit, "Zustrēnēs", šajā laikā ir
                    sasniegts daudz – uz 22 hektāru zemes uzbūvētas vairākas
                    stallis, divas iekštelpu arēnas, divi jāšanas laukumi ar
                    tribīnēm 750 skatītājiem, kā arī mājīga māja zirgu
                    aprūpētājiem un pirts māja, kur notiek diskusijas par
                    pagātnes, plānotajām un nākotnes aktivitātēm.
                  </p>
                  <p>
                    Šodien Jauno Jātnieku skola ir viens no lielākajiem jāšanas
                    sporta centriem Baltijā, kas piedāvā kvalitatīvus
                    pakalpojumus gan amatieriem, gan profesionāļiem.
                  </p>
                </div>
              </div>

              {/* Treneru foto */}
              <div>
                <div className="glass-card overflow-hidden">
                  <img
                    src={trainersImage}
                    alt="Profesionāli treneri Jauno Jātnieku skolā"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Короткий блок «Treneri» внутри этой же секции */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2">Treneri</h3>
                <p className="text-muted-foreground">
                  Darba pieredze Vācijā, augsta līmeņa sporta stallīs, un
                  dziļa mīlestība pret profesiju. Pieeja — individuāla katram
                  zirgam un studentam.
                </p>
              </div>
              <div className="glass-card p-6">
                <h4 className="font-semibold mb-2">
                  C kategorijas sertifikāts
                </h4>
                <p className="text-muted-foreground">
                  Specializācija: bērni un iesācēji, šķēršļu jāšanas un
                  dresūras pamati.
                </p>
              </div>
              <div className="glass-card p-6">
                <h4 className="font-semibold mb-2">Sasniegumi</h4>
                <p className="text-muted-foreground">
                  Audzēkņu starts nacionālajās un starptautiskajās sacensībās,
                  regulāra profesionālā pilnveide semināros un tiešsaistē.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Horses */}
        <section className="py-16 md:py-24 bg-[#2f2f2f]/[0.08]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-section mb-6">Zirgi</h2>
              <div className="section-divider mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="glass-card overflow-hidden">
                <img
                  src={horseTims}
                  alt="Tims - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Tims</h3>
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <img
                  src={horseAmber}
                  alt="Amber - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Amber</h3>
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <img
                  src={horseBure}
                  alt="Bure - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Bure</h3>
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <img
                  src={horseDiora}
                  alt="Diora - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Diora</h3>
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <img
                  src={horseKriksis}
                  alt="Kriksis - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Kriksis</h3>
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <img
                  src={horseLatte}
                  alt="Latte - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Latte</h3>
                </div>
              </div>

              <div className="glass-card overflow-hidden">
                <img
                  src={horseTadis}
                  alt="Tadis - skolas zirgs"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Tadis</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* National Sports Base */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-section mb-6">Nacionālā sporta bāze</h2>
              <div className="section-divider mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Kopš 2019. gada sporta centram ir piešķirts Nacionālās sporta
                bāzes statuss — mūsu komandas darba un kvalitātes atzinība.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="glass-card overflow-hidden">
                  <img
                    src={facilitiesImage}
                    alt="Nacionālā sporta bāze - jāšanas centrs"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  Jauno Jātnieku skola ir viens no vadošajiem jāšanas sporta
                  centriem Baltijā. Sporta centra būvniecību uzraudzīja Eiropas
                  jāšanas eksperts Pīters van Santfūrts un divkāršējais
                  Olimpisko spēļu čempions Pīts Reijmakers.
                </p>
                <p>
                  Iekārtas atbilst visām prasībām nacionālo un starptautisko
                  sacensību organizēšanai un nodrošina treniņu iespējas visu
                  gadu.
                </p>
              </div>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">60×90m</div>
                <div className="text-sm text-muted-foreground">Sacensību laukums</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">35×60m</div>
                <div className="text-sm text-muted-foreground">Iesildīšanās laukums</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Iekštelpu arēnas</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">750</div>
                <div className="text-sm text-muted-foreground">Skatītāju vietas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Текст */}
              <div>
                <h2 className="text-section mb-6">Sadarbība un partneri</h2>
                <div className="section-divider mb-8" />

                <div className="space-y-6 text-muted-foreground mb-8">
                  <p>
                    Mēs piedāvājam trīs sponsorēšanas iespējas partneriem, kas
                    vēlas atbalstīt jāšanas sportu un mūsu aktivitātes.
                  </p>

                  <div className="space-y-4">
                    <div className="glass-card p-4">
                      <h4 className="font-semibold mb-2">Treniņu arēnas partneris</h4>
                      <p className="text-sm">
                        Logo redzamība reklāmas materiālos un digitālajos kanālos.
                      </p>
                    </div>

                    <div className="glass-card p-4">
                      <h4 className="font-semibold mb-2">Galvenais sponsors</h4>
                      <p className="text-sm">
                        Plašā redzamība pasākumos un digitālajā komunikācijā.
                      </p>
                    </div>

                    <div className="glass-card p-4">
                      <h4 className="font-semibold mb-2">Nosaukuma tiesību partneris</h4>
                      <p className="text-sm">
                        Ekskluzīvās tiesības nosaukt jāšanas kompleksu un tā VIP zonu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Фото */}
              <div>
                <div className="glass-card overflow-hidden">
                  <img
                    src={partnershipImage}
                    alt="Sadarbība un partnerība jāšanas sportā"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 max-w-7xl flex justify-center py-[15px]">
            <Button
              asChild
              className="w-full sm:w-auto bg-primary text-white rounded-xl 
                         px-8 py-4 text-lg font-semibold 
                         transition-all duration-300 hover:bg-primary-700 hover:scale-105"
            >
              <a href="/lv/kontakti/">
                Sazināties par partnerību
              </a>
            </Button>
          </div>
        </section>

        {/* CTA Section (финал) */}
        <section className="py-16 md:py-20 bg-[#2f2f2f]/[0.08]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pievienojies mūsu komandai
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Neatkarīgi no tā, vai esi iesācējs vai pieredzējis jātnieks, mēs
              aicinām tevi kļūt par mūsu kopienas daļu un atklāt jāšanas sporta
              skaistumu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary button */}
              <Button
                asChild
                size="lg"
                className="group bg-primary text-white rounded-xl 
                           transition-all duration-300 hover:bg-primary-700 hover:scale-105"
              >
                <a href="/lv/pakalpojumi/jasanas-trenini/" className="flex items-center">
                  Sākt treniņus
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Button>
            
              {/* Outline button */}
              <Button
                asChild
                size="lg"
                className="border border-primary text-white rounded-xl 
                           transition-all duration-300 hover:bg-primary hover:scale-105"
              >
                <a href="/lv/pasakumi/" className="!text-white">
                  Skatīt pasākumus
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParMums;
