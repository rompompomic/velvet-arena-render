import React, { useState } from "react";
import donateHorse from "@/assets/donate-horse.png";
const DonateSection: React.FC = () => {
  const presets = [10, 20, 30, 50];

  // проще: храню сумму как строку (input всегда строка)
  const [amount, setAmount] = useState<string>("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handlePreset = (v: number) => setAmount(String(v));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(amount);
    if (!num || num <= 0 || !agree) return;
    // Тут можно добавить интеграцию со Stripe/Fetch и т.д.
    setSubmitted(true);
  };
  return <section className="py-16" style={{
    ["--primary" as any]: "#963026",
    ["--primary-700" as any]: "#7A251F",
    ["--primary-50" as any]: "#FCECEA",
    ["--text" as any]: "#06030d",
    ["--bg" as any]: "#FFFFFF",
    ["--light" as any]: "#FAFAFA",
    ["--neutral-200" as any]: "#EDEDED",
    ["--shadow-sm" as any]: "0 1px 2px rgba(0,0,0,0.05)"
  } as React.CSSProperties}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="mb-2" style={{
          fontSize: 36,
          lineHeight: "44px",
          fontWeight: 600,
          color: "var(--text)",
          fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto"
        }}>
            Atbalsti Latvian Horses
          </h2>
          <p className="text-sm text-[rgba(6,3,13,0.7)] max-w-xl mx-auto">
            Neliels atbalsts palīdz nodrošināt zirgu labturību un aktivitātes.
            Paldies par jebkuru ieguldījumu.
          </p>
        </div>

        {/* Main Content - Image + Form */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Horse Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative max-w-md w-full">
              <img src={donateHorse} alt="Beautiful brown horse in a field - Support Latvian Horses" className="w-full h-auto rounded-[12px] shadow-lg object-cover" style={{
              maxHeight: "500px",
              aspectRatio: "4/5"
            }} />
            </div>
          </div>

          {/* Donation Form */}
          <div className="w-full lg:w-1/2">
            <div style={{
            borderColor: "var(--neutral-200)",
            boxShadow: "var(--shadow-sm)"
          }} className="bg-[var(--bg)] border rounded-[12px] p-6 lg:p-8 my-[100px]">
          {submitted ? <div className="text-center py-8">
              <div className="mx-auto mb-4 rounded-full flex items-center justify-center" style={{
                width: 56,
                height: 56,
                background: "var(--primary-50)"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
                  color: "var(--primary)"
                }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 style={{
                fontSize: 20,
                fontWeight: 600,
                color: "var(--text)"
              }}>
                Paldies par atbalstu!
              </h3>
              <p className="text-sm text-[rgba(6,3,13,0.7)] mt-2">
                Mēs nosūtīsim apstiprinājumu uz e-pastu (ja norādīts).
              </p>
            </div> : <form onSubmit={onSubmit} className="space-y-6">
              {/* Amount presets */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{
                  color: "var(--text)"
                }}>
                  Ziedojuma summa
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  {presets.map(p => <button key={p} type="button" onClick={() => handlePreset(p)} className={`rounded-md px-3 h-10 inline-flex items-center justify-center text-sm border`} style={{
                    borderColor: Number(amount) === p ? "var(--primary)" : "var(--neutral-200)",
                    background: Number(amount) === p ? "var(--primary)" : "transparent",
                    color: Number(amount) === p ? "#fff" : "var(--text)",
                    minWidth: 64
                  }}>
                      {p} €
                    </button>)}

                  <div className="relative">
                    <input inputMode="decimal" pattern="[0-9]*" value={amount} onChange={e => {
                      const v = e.target.value.replace(/[^\d]/g, "");
                      setAmount(v);
                    }} placeholder="Cita summa" className="h-10 px-3 rounded-md border text-sm" style={{
                      borderColor: "var(--neutral-200)",
                      width: 140,
                      color: "var(--text)"
                    }} />
                    <span style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(6,3,13,0.6)",
                      fontSize: 14
                    }}>
                      €
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact (optional) */}
              <div>
                <input type="text" placeholder="Vārds (nav obligāti)" className="w-full h-10 px-3 rounded-md border text-sm" style={{
                  borderColor: "var(--neutral-200)",
                  color: "var(--text)"
                }} />
              </div>

              {/* Consent + Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <label className="flex items-center gap-3 text-sm" style={{
                  color: "var(--text)"
                }}>
                  <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="h-4 w-4" style={{
                    accentColor: "var(--primary)"
                  }} />
                  <span>
                    Piekrītu personas datu apstrādei saskaņā ar{" "}
                    <a href="/lv/privatuma-politika/" className="underline">
                      Privātuma politiku
                    </a>
                    .
                  </span>
                </label>

                <button type="submit" onClick={onSubmit} disabled={!amount || Number(amount) <= 0 || !agree} className="h-10 px-4 rounded-md text-sm font-semibold" style={{
                  background: !amount || Number(amount) <= 0 || !agree ? "var(--neutral-200)" : "var(--primary)",
                  color: !amount || Number(amount) <= 0 || !agree ? "rgba(6,3,13,0.5)" : "#fff",
                  border: "none",
                  minWidth: 160,
                  cursor: !amount || Number(amount) <= 0 || !agree ? "not-allowed" : "pointer"
                }}>
                  Ziedot {amount ? `${amount} €` : ""}
                </button>
              </div>

              <p className="text-xs text-[rgba(6,3,13,0.6)] text-center mt-2">
                Pēc ziedojuma saņemšanas nosūtīsim apstiprinājumu uz e-pastu
                (ja norādīts).
              </p>
            </form>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DonateSection;