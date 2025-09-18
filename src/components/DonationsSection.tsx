import { useState } from "react";
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
    // TODO: интеграция платежей (Stripe/MakeCommerce и т.п.)
    setSubmitted(true);
  };
  return <section className="py-20" style={{
    // Design tokens
    // Colors
    ["--primary" as any]: "#963026",
    ["--primary-700" as any]: "#7A251F",
    ["--primary-50" as any]: "#FCECEA",
    ["--accent" as any]: "#995856",
    ["--accent-700" as any]: "#7D4647",
    ["--accent-50" as any]: "#F9F2F2",
    ["--text" as any]: "#06030d",
    ["--bg" as any]: "#FFFFFF",
    ["--light" as any]: "#FAFAFA",
    ["--neutral-200" as any]: "#EDEDED",
    // Shadows
    ["--shadow-sm" as any]: "0 1px 2px rgba(0,0,0,0.05)",
    ["--shadow-md" as any]: "0 6px 16px rgba(0,0,0,0.08)"
  } as React.CSSProperties}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          {/* H2 36/44 semibold */}
          <h2 className="mb-3 text-[36px] leading-[44px] font-semibold text-[color:var(--text)]">
            Atbalsti Latvian Horses
          </h2>
          {/* Body 16/24 */}
          <p className="text-[16px] leading-[24px] text-[rgba(6,3,13,0.7)] max-w-2xl mx-auto">
            Tava līdzdalība palīdz uzturēt zirgu labturību, attīstīt jauno jātnieku skolu un rīkot pasākumus.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Highlights (card radius 12px) */}
          <div style={{
          borderColor: "var(--neutral-200)",
          borderRadius: 12,
          boxShadow: "var(--shadow-sm)"
        }} className="p-8 border bg-[color:var(--light)] bg-[#000a00]/0">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)] text-white text-[12px] leading-none my-[7px]">
                  1
                </span>
                <div>
                  {/* H3 28/36 medium */}
                  <h3 className="text-[28px] leading-[36px] font-medium text-[color:var(--text)]">
                    Zirgu labturība
                  </h3>
                  {/* Small 14/20 */}
                  <p className="text-[14px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                    Barība, veterinārā aprūpe un droša infrastruktūra ikdienai.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)] text-white text-[12px] leading-none my-[7px]">
                  2
                </span>
                <div>
                  <h3 className="text-[28px] leading-[36px] font-medium text-[color:var(--text)]">
                    Jauno jātnieku attīstība
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                    Treniņi, nometnes un sacensību pieredze bērniem un jauniešiem.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)] text-white text-[12px] leading-none mx-0 my-[5px]">
                  3
                </span>
                <div>
                  <h3 className="text-[28px] leading-[36px] font-medium text-[color:var(--text)]">
                    Kvalitatīvi pasākumi
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                    Vietējās sacensības, atvērto durvju dienas un izglītojošas ekskursijas.
                  </p>
                </div>
              </li>
            </ul>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-[14px] leading-[20px]">
              <div className="p-4 bg-[color:var(--bg)]" style={{
              border: "1px solid var(--neutral-200)",
              borderRadius: 12,
              boxShadow: "var(--shadow-sm)"
            }}>
                <p className="font-medium text-[color:var(--text)]">Drošs atbalsts</p>
                <p className="text-[rgba(6,3,13,0.7)] text-[12px] leading-[20px]">Norēķini vai pārskaitījums</p>
              </div>
              <div className="p-4 bg-[color:var(--bg)]" style={{
              border: "1px solid var(--neutral-200)",
              borderRadius: 12,
              boxShadow: "var(--shadow-sm)"
            }}>
                <p className="font-medium text-[color:var(--text)]">Pārskatāmība</p>
                <p className="text-[rgba(6,3,13,0.7)] text-[12px] leading-[20px]">Rēķins pēc pieprasījuma</p>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="p-6 md:p-8 bg-[color:var(--bg)]" style={{
          border: "1px solid var(--neutral-200)",
          borderRadius: 12,
          boxShadow: "var(--shadow-md)"
        }}>
            {submitted ? <div className="text-center py-10">
                <svg className="w-10 h-10 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
              color: "var(--primary)"
            }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h3 className="text-[28px] leading-[36px] font-medium text-[color:var(--text)] mb-2">
                  Paldies par atbalstu!
                </h3>
                <p className="text-[14px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                  Mēs novērtējam tavu ieguldījumu. Ja vajadzīgs rēķins, sazinies ar{" "}
                  <a href="mailto:info@latvianhorses.lv" className="underline">
                    info@latvianhorses.lv
                  </a>
                  .
                </p>
              </div> : <form onSubmit={onSubmit} className="space-y-6">
                {/* Amount presets */}
                <div>
                  <label className="block text-[14px] leading-[20px] font-medium mb-2 text-[color:var(--text)]">
                    Ziedojuma summa
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {presets.map(p => <button type="button" key={p} onClick={() => handlePreset(p)} className="px-4 h-[42px] inline-flex items-center justify-center rounded-lg border transition-all" style={{
                  borderColor: amount === p ? "var(--primary)" : "var(--neutral-200)",
                  background: amount === p ? "color-mix(in oklab, var(--primary) 10%, transparent)" : "transparent",
                  color: amount === p ? "var(--primary)" : "var(--text)"
                }}>
                        {p} €
                      </button>)}
                    <div className="relative">
                      <input inputMode="decimal" pattern="[0-9]*" value={amount} onChange={e => {
                    const v = e.target.value.replace(/[^\d]/g, "");
                    setAmount(v === "" ? "" : Number(v));
                  }} placeholder="Cita summa" className="h-[42px] w-36 rounded-lg px-3 pr-8 focus:outline-none" style={{
                    border: "1px solid var(--neutral-200)",
                    boxShadow: "0 0 0 0 rgba(0,0,0,0)"
                  }} />
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[14px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                        €
                      </span>
                    </div>
                  </div>

                  {/* Frequency toggle */}
                  <div className="mt-4 inline-flex overflow-hidden" style={{
                border: "1px solid var(--neutral-200)",
                borderRadius: 12
              }}>
                    <button type="button" onClick={() => setFreq("one")} className="px-3 py-2 text-[14px] leading-[20px]" style={{
                  background: freq === "one" ? "var(--primary)" : "transparent",
                  color: freq === "one" ? "#fff" : "var(--text)"
                }}>
                      Vienreizējs
                    </button>
                    <button type="button" onClick={() => setFreq("monthly")} className="px-3 py-2 text-[14px] leading-[20px]" style={{
                  borderLeft: "1px solid var(--neutral-200)",
                  background: freq === "monthly" ? "var(--primary)" : "transparent",
                  color: freq === "monthly" ? "#fff" : "var(--text)"
                }}>
                      Ik mēnesi
                    </button>
                  </div>
                </div>

                {/* Contact fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] leading-[20px] font-medium mb-1 text-[color:var(--text)]">
                      Vārds (nav obligāti)
                    </label>
                    <input type="text" className="w-full rounded-lg px-3 py-2 focus:outline-none" placeholder="Vārds, uzvārds" style={{
                  border: "1px solid var(--neutral-200)"
                }} />
                  </div>
                  <div>
                    <label className="block text-[14px] leading-[20px] font-medium mb-1 text-[color:var(--text)]">
                      E-pasts (rēķinam)
                    </label>
                    <input type="email" className="w-full rounded-lg px-3 py-2 focus:outline-none" placeholder="name@example.com" style={{
                  border: "1px solid var(--neutral-200)"
                }} />
                  </div>
                </div>

                {/* Payment method */}
                <div>
                  <label className="block text-[14px] leading-[20px] font-medium mb-2 text-[color:var(--text)]">
                    Apmaksas veids
                  </label>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setMethod("card")} className="px-4 h-[42px] inline-flex items-center justify-center rounded-lg border transition-all" style={{
                  borderColor: method === "card" ? "var(--primary)" : "var(--neutral-200)",
                  background: method === "card" ? "var(--primary-50)" : "transparent",
                  color: method === "card" ? "var(--primary)" : "var(--text)"
                }}>
                      Bankas karte
                    </button>
                    <button type="button" onClick={() => setMethod("bank")} className="px-4 h-[42px] inline-flex items-center justify-center rounded-lg border transition-all" style={{
                  borderColor: method === "bank" ? "var(--primary)" : "var(--neutral-200)",
                  background: method === "bank" ? "var(--primary-50)" : "transparent",
                  color: method === "bank" ? "var(--primary)" : "var(--text)"
                }}>
                      Bankas pārskaitījums
                    </button>
                  </div>

                  {/* Method details */}
                  {method === "card" ? <p className="mt-3 text-[14px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                      Norēķini ar karti tiks pievienoti drīzumā.
                    </p> : <div className="mt-4 p-4" style={{
                background: "var(--light)",
                border: "1px solid var(--neutral-200)",
                borderRadius: 12
              }}>
                      <p className="text-[14px] leading-[20px] font-medium mb-2 text-[color:var(--text)]">
                        Pārskaitījuma rekvizīti
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] leading-[20px]">
                        <div className="text-[rgba(6,3,13,0.7)]">Saņēmējs</div>
                        <div className="text-[color:var(--text)]">Latvian Horses</div>

                        <div className="text-[rgba(6,3,13,0.7)]">Reģ. Nr.</div>
                        <div className="text-[color:var(--text)]">—</div>

                        <div className="text-[rgba(6,3,13,0.7)]">IBAN</div>
                        <div className="text-[color:var(--text)]">—</div>

                        <div className="text-[rgba(6,3,13,0.7)]">Banka</div>
                        <div className="text-[color:var(--text)]">—</div>

                        <div className="text-[rgba(6,3,13,0.7)]">Mērķis</div>
                        <div className="text-[color:var(--text)]">Ziedojums Latvian Horses</div>
                      </div>
                      <p className="mt-3 text-[12px] leading-[20px] text-[rgba(6,3,13,0.7)]">
                        * Ja vajadzīgi precīzi rekvizīti rēķinam, raksti:{" "}
                        <a href="mailto:info@latvianhorses.lv" className="underline">
                          info@latvianhorses.lv
                        </a>
                        .
                      </p>
                    </div>}
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 text-[14px] leading-[20px]">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded" checked={agree} onChange={e => setAgree(e.target.checked)} style={{
                border: "1px solid var(--neutral-200)",
                accentColor: "var(--primary)"
              }} />
                  <span className="text-[color:var(--text)]">
                    Piekrītu personas datu apstrādei saskaņā ar{" "}
                    <a href="/lv/privatuma-politika/" className="underline">
                      Privātuma politiku
                    </a>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button type="submit" disabled={!amount || Number(amount) <= 0 || !agree} className="inline-flex w-full items-center justify-center px-5 py-3 font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" style={{
              background: "var(--primary)",
              color: "#fff",
              borderRadius: 12
            }} onMouseDown={e => e.currentTarget.style.background = "var(--primary-700)"} onMouseUp={e => e.currentTarget.style.background = "var(--primary)"} onMouseLeave={e => e.currentTarget.style.background = "var(--primary)"}>
                  Ziedot {amount ? `${amount} €` : ""}
                  {freq === "monthly" && <span className="ml-1 opacity-90">/ mēnesī</span>}
                </button>

                {/* Note */}
                <p className="text-[12px] leading-[20px] text-center text-[rgba(6,3,13,0.7)]">
                  Pēc ziedojuma saņemšanas nosūtīsim apstiprinājumu uz e-pastu (ja norādīts).
                </p>
              </form>}
          </div>
        </div>
      </div>
    </section>;
};
export default DonateSection;