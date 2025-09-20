import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceRiding from "@/assets/service-riding-lessons.jpg";
import excursionsImage from "@/assets/service-excursions.jpg";
import { Gift, ShieldCheck, Sparkles, Clock, Wallet } from "lucide-react";

type FixedCard = {
  amount: number;
  price: string;
  custom?: false;
};
type CustomCard = {
  custom: true;
};
type GiftCard = FixedCard | CustomCard;

const DavanuKartes = () => {
  const [customAmount, setCustomAmount] = useState("");
  const customInputRef = useRef<HTMLInputElement | null>(null);

  const giftCards: GiftCard[] = [
    { amount: 25, price: "25.00€" },
    { amount: 50, price: "50.00€" },
    { amount: 100, price: "100.00€" },
    { custom: true },
  ];

  const fieldBase =
    "w-full rounded-xl border border-gray-300 px-4 py-2.5 text-base bg-white " +
    "text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0">
            <img src={serviceRiding} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Dāvanu kartes
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Dāviniet iespēju piedzīvot neaizmirstamas emocijas ar zirgiem.
              Mūsu dāvanu kartes ir ideāls veids, kā pārsteigt tuvos cilvēkus.
            </p>
          </div>
        </section>

        {/* Gift Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {giftCards.map((card, index) => {
                const isCustom = "custom" in card && card.custom;

                return (
                  <div key={index} className="flex flex-col items-stretch">
                    <div className="rounded-2xl overflow-hidden shadow-sm bg-card flex flex-col">
                      {/* Картинка */}
                      {isCustom ? (
                        <a
                          href="#custom-amount"
                          onClick={(e) => {
                            e.preventDefault();
                            customInputRef.current?.focus();
                            document.getElementById("custom-amount")?.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                          }}
                          className="relative block aspect-[3/4]"
                          aria-label="Savs apjoms"
                        >
                          <img src={excursionsImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="relative h-full px-6 py-5 flex flex-col justify-end">
                            <div className="text-white text-2xl font-bold drop-shadow-sm">
                              Dāvanu karte
                            </div>
                            <div className="mt-2 text-white text-3xl font-extrabold drop-shadow-sm">
                              Savs apjoms
                            </div>
                          </div>
                        </a>
                      ) : (
                        <a
                          href={`/lv/checkout/?amount=${(card as FixedCard).amount}`}
                          className="relative block aspect-[3/4]"
                        >
                          <img src={excursionsImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="relative h-full px-6 py-5 flex flex-col justify-end">
                            <div className="text-white text-2xl font-bold drop-shadow-sm">
                              Dāvanu karte
                            </div>
                            <div className="mt-2 text-white text-4xl font-extrabold drop-shadow-sm">
                              {(card as FixedCard).amount}€
                            </div>
                          </div>
                        </a>
                      )}

                      {/* Нижняя часть */}
                      <div className="p-5 border-t bg-white/60 dark:bg-black/20 backdrop-blur">
                        {isCustom ? (
                          <div id="custom-amount" className="flex flex-col gap-3">
                            <input
                              ref={customInputRef}
                              type="number"
                              min={5}
                              step="1"
                              inputMode="numeric"
                              value={customAmount}
                              onChange={(e) => {
                                const v = e.target.value;
                                if (Number(v) >= 0 || v === "") setCustomAmount(v);
                              }}
                              placeholder="Ievadiet summu (€)"
                              className={fieldBase}
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col gap-3">
                            <div className={`${fieldBase} select-none`}>
                              {(card as FixedCard).price}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Кнопка под карточкой */}
                    <div className="mt-3">
                      {isCustom ? (
                        <Button
                          asChild
                          disabled={!customAmount || Number(customAmount) < 5}
                          className="w-full rounded-xl px-6 py-2.5 text-base"
                        >
                          <a
                            href={`/lv/checkout/?amount=${customAmount || 0}`}
                            className="!text-white"
                          >
                            Pirkt
                          </a>
                        </Button>
                      ) : (
                        <Button asChild className="w-full rounded-xl px-6 py-2.5 text-base">
                          <a
                            href={`/lv/checkout/?amount=${(card as FixedCard).amount}`}
                            className="!text-white"
                          >
                            Pirkt
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "#2f2f2f14" }}
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Kāpēc izvēlēties dāvanu karti?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Elastīga, ērta un vienmēr patīkama dāvana — piemērota gan
                bērniem, gan pieaugušajiem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Universāla dāvana</h3>
                </div>
                <p className="text-muted-foreground">
                  Der nodarbībām, ekskursijām vai mierīgai atpūtai pie zirgiem —
                  saņēmējs pats izvēlas pieredzi.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Wallet className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Elastīga summa</h3>
                </div>
                <p className="text-muted-foreground">
                  Fiksētas vērtības vai paša izvēlēta summa — dāvanu karti var
                  pielāgot jebkuram budžetam.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Ērta izmantošana</h3>
                </div>
                <p className="text-muted-foreground">
                  Vienkārša iegāde tiešsaistē un ērta pierakstīšanās uz
                  pakalpojumiem jebkurā laikā.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Drošs pirkums</h3>
                </div>
                <p className="text-muted-foreground">
                  Droši norēķini un caurskatāmi noteikumi — nekādu pārsteigumu.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 hover:shadow-md transition md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Emocijas dāvanā</h3>
                </div>
                <p className="text-muted-foreground">
                  Dāvana, kas paliek atmiņā — satikšanās ar zirgiem sniedz
                  īpašas sajūtas un iedvesmu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DavanuKartes;
