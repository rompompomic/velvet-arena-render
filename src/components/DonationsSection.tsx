import { useState } from "react";
import { Button } from "@/components/ui/button";

const DonateSection = () => {
  const presets = [10, 20, 30, 50];
  const [amount, setAmount] = useState<number | "">("");
  const [freq, setFreq] = useState<"one" | "monthly">("one");
  const [method, setMethod] = useState<"card" | "bank">("card");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePreset = (v: number) => setAmount(v);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0 || !agree) return;
    // TODO: Integrate (Stripe/MakeCommerce/EveryPay) here
    setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-section mb-3">Atbalsti Latvian Horses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tava līdzdalība palīdz uzturēt zirgu labturību, attīstīt jauno jātnieku skolu un rīkot pasākumus.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Highlights */}
          <div className="rounded-3xl p-8 bg-[var(--light)]/60 border border-neutral-200">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-white text-sm">1</span>
                <div>
                  <h3 className="font-semibold">Zirgu labturība</h3>
                  <p className="text-sm text-muted-foreground">
                    Barība, veterinārā aprūpe un droša infrastruktūra ikdienai.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-white text-sm">2</span>
                <div>
                  <h3 className="font-semibold">Jauno jātnieku attīstība</h3>
                  <p className="text-sm text-muted-foreground">
                    Treniņi, nometnes un sacensību pieredze bērniem un jauniešiem.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] text-white text-sm">3</span>
                <div>
                  <h3 className="font-semibold">Kvalitatīvi pasākumi</h3>
                  <p className="text-sm text-muted-foreground">
                    Vietējās sacensības, atvērto durvju dienas un izglītojošas ekskursijas.
                  </p>
                </div>
              </li>
            </ul>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-neutral-200 p-4 bg-white">
                <p className="font-medium">Drošs atbalsts</p>
                <p className="text-muted-foreground text-xs">Norēķini vai pārskaitījums</p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4 bg-white">
                <p className="font-medium">Pārskatāmība</p>
                <p className="text-muted-foreground text-xs">Rēķins pēc pieprasījuma</p>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="rounded-3xl p-6 md:p-8 bg-white border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <svg className="w-10 h-10 mx-auto mb-3 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Paldies par atbalstu!</h3>
                <p className="text-muted-foreground">
                  Mēs novērtējam tavu ieguldījumu. Ja vajadzīgs rēķins, sazinies ar{" "}
                  <a href="mailto:info@latvianhorses.lv" className="underline">info@latvianhorses.lv</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Amount presets */}
                <div>
                  <label className="block text-sm font-medium mb-2">Ziedojuma summa</label>
                  <div className="flex flex-wrap gap-3">
                    {presets.map((p) => (
                      <Button
                        type="button"
                        key={p}
                        onClick={() => handlePreset(p)}
                        variant="outline"
                        className={`h-[42px] px-4 rounded-lg border transition-all ${
                          amount === p
                            ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                            : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {p} €
                      </Button>
                    ))}
                    <div className="relative">
                      <input
                        inputMode="decimal"
                        pattern="[0-9]*"
                        value={amount}
                        onChange={(e) => {
                          const v = e.target.value.replace(/[^\d]/g, "");
                          setAmount(v === "" ? "" : Number(v));
                        }}
                        placeholder="Cita summa"
                        className="h-[42px] w-36 rounded-lg border border-neutral-200 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="mt-4 inline-flex rounded-lg border border-neutral-200 overflow-hidden">
                    <Button
                      type="button"
                      onClick={() => setFreq("one")}
                      variant="ghost"
                      className={`px-3 py-2 text-sm rounded-none ${
                        freq === "one" ? "bg-[var(--primary)] text-white" : "hover:bg-neutral-50"
                      }`}
                    >
                      Vienreizējs
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setFreq("monthly")}
                      variant="ghost"
                      className={`px-3 py-2 text-sm border-l border-neutral-200 rounded-none ${
                        freq === "monthly" ? "bg-[var(--primary)] text-white" : "hover:bg-neutral-50"
                      }`}
                    >
                      Ik mēnesi
                    </Button>
                  </div>
                </div>

                {/* Contact fields (optional) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Vārds (nav obligāti)</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                      placeholder="Vārds, uzvārds"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-pasts (rēķinam)</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                {/* Payment method */}
                <div>
                  <label className="block text-sm font-medium mb-2">Apmaksas veids</label>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={() => setMethod("card")}
                      variant="outline"
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        method === "card"
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      Bankas karte
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setMethod("bank")}
                      variant="outline"
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        method === "bank"
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      Bankas pārskaitījums
                    </Button>
                  </div>

                  {/* Method details */}
                  {method === "card" ? (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Norēķini ar karti tiks pievienoti drīzumā.
                    </p>
                  ) : (
                    <div className="mt-4 rounded-xl border border-neutral-200 p-4 bg-[var(--light)]/40">
                      <p className="text-sm font-medium mb-2">Pārskaitījuma rekvizīti</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <div className="text-muted-foreground">Saņēmējs</div>
                        <div>Latvian Horses</div>
                        <div className="text-muted-foreground">Reģ. Nr.</div>
                        <div>—</div>
                        <div className="text-muted-foreground">IBAN</div>
                        <div>—</div>
                        <div className="text-muted-foreground">Banka</div>
                        <div>—</div>
                        <div className="text-muted-foreground">Mērķis</div>
                        <div>Ziedojums Latvian Horses</div>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        * Ja vajadzīgi precīzi rekvizīti rēķinam, raksti:{" "}
                        <a href="mailto:info@latvianhorses.lv" className="underline">info@latvianhorses.lv</a>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[var(--primary)] focus:ring-[var(--primary)]"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span>
                    Piekrītu personas datu apstrādei saskaņā ar{" "}
                    <a href="/lv/privatuma-politika/" className="underline">Privātuma politiku</a>.
                  </span>
                </label>

                {/* Submit — shadcn Button, принудительно брендовый */}
                <Button
                  type="submit"
                  disabled={!amount || Number(amount) <= 0 || !agree}
                  className="w-full bg-[var(--primary)] text-white hover:bg-[var(--primary-700)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Ziedot {amount ? `${amount} €` : ""}
                  {freq === "monthly" && <span className="ml-1 opacity-90">/ mēnesī</span>}
                </Button>

                {/* Note */}
                <p className="text-xs text-muted-foreground text-center">
                  Pēc ziedojuma saņemšanas nosūtīsim apstiprinājumu uz e-pastu (ja norādīts).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
