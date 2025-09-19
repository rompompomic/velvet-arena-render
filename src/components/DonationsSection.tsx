import { useState } from "react";
import donateHorse from "@/assets/donate-horse-new.png"; // 16:9 иллюстрация

const DonateSection = () => {
  const presets = [10, 20, 30, 50];
  const [amount, setAmount] = useState<number | "">("");
  const [method, setMethod] = useState<"card" | "bank">("card");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handlePreset = (v: number) => setAmount(v);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0 || !agree) return;
    // TODO: интеграция (Stripe/MakeCommerce u.c.)
    setSubmitted(true);
  };
  const points = [{
    title: "Zirgu labturība",
    desc: "Barība, veterinārā aprūpe un droša infrastruktūra ikdienai."
  }, {
    title: "Jauno jātnieku attīstība",
    desc: "Treniņi, nometnes un sacensību pieredze bērniem un jauniešiem."
  }, {
    title: "Kvalitatīvi pasākumi",
    desc: "Vietējās sacensības, atvērto durvju dienas un izglītojošas ekskursijas."
  }];
  return <section className="py-20" style={{
    // design tokens
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
    ["--shadow-sm" as any]: "0 1px 2px rgba(0,0,0,0.05)",
    ["--shadow-md" as any]: "0 6px 16px rgba(0,0,0,0.08)"
  } as React.CSSProperties}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="mb-2 text-[36px] leading-[44px] font-semibold text-[color:var(--text)]">
            Atbalsti Latvian Horses
          </h2>
          <p className="text-[16px] leading-[24px] text-[rgba(6,3,13,0.7)] max-w-2xl mx-auto">
            Tava līdzdalība palīdz uzturēt zirgu labturību, attīstīt jauno jātnieku skolu un rīkot pasākumus.
          </p>
        </div>

        {/* Список + Цитата */}
        <div className="mb-10 rounded-xl border bg-[var(--bg)]" style={{
        borderColor: "var(--neutral-200)",
        boxShadow: "var(--shadow-sm)"
      }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 p-5 sm:p-6 md:p-7">
            {/* Список слева */}
            <ul className="space-y-4">
              {points.map((p, idx) => <li key={p.title} className="flex items-start gap-3 my-[25px]">
                  <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full text-white font-semibold" style={{
                width: 26,
                height: 26,
                background: "var(--primary)",
                lineHeight: "26px",
                fontSize: 14
              }}>
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="leading-snug" style={{
                  color: "var(--text)",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "28px"
                }}>
                      {p.title}
                    </div>
                    <div className="text-[13px] text-[rgba(6,3,13,0.7)] mt-0.5">{p.desc}</div>
                  </div>
                </li>)}
            </ul>

            {/* Цитата справа */}
            <div className="mt-6 md:mt-0">
              <figure className="relative h-full rounded-xl border overflow-hidden" style={{
              borderColor: "var(--neutral-200)",
              background: "linear-gradient(180deg,#FFF 0%,#FAFAFA 100%)"
            }}>
                <div className="absolute inset-y-0 left-0 w-1.5" style={{
                background: "var(--primary)"
              }} />
                <div className="p-5 sm:p-6 md:p-7">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full" style={{
                  width: 40,
                  height: 40,
                  background: "var(--primary-50)",
                  color: "var(--primary)"
                }} aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.2 11.2c0-3.1 1.9-5.6 4.7-6.4v2.7c-1.1.5-1.9 1.8-1.9 3.2 1.1 0 2 .9 2 2 0 2.2-1.8 4-4 4-2.1 0-3.8-1.7-3.8-3.8zM15.2 11.2c0-3.1 1.9-5.6 4.7-6.4v2.7c-1.1.5-1.9 1.8-1.9 3.2 1.1 0 2 .9 2 2 0 2.2-1.8 4-4 4-2.1 0-3.8-1.7-3.8-3.8z" />
                    </svg>
                  </div>

                  <blockquote className="text-[15px] leading-7 text-[rgba(6,3,13,0.9)]">
                    “Šeit es iemācījos ne tikai jāt, bet arī rūpēties par dzīvniekiem. Treneri ir pacietīgi, bet zirgi —
                    mierīgi un droši. Katru nedēļu es gaidu nodarbības ar smaidu.”
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold" style={{
                    background: "var(--primary-50)",
                    color: "var(--primary)"
                  }}>
                      E
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold" style={{
                      color: "var(--text)"
                    }}>
                        Elīna, 12 gadi
                      </div>
                      <div className="text-xs text-[rgba(6,3,13,0.7)]">Skolniece, sākuma grupa</div>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* Иллюстрация + Форма доната */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Иллюстрация слева — центрируем и бордер по размеру картинки */}
          <div className="w-full h-full lg:min-h-[360px] flex items-center justify-center">
            <img src={donateHorse} alt="Ziedojums zirgiem — dāvanu tēma" className="max-w-full max-h-full object-contain block rounded-[12px]" style={{
            border: "1px solid var(--neutral-200)"
          }} />
          </div>

          {/* Форма доната справа */}
          <div style={{
          border: "1px solid var(--neutral-200)",
          borderRadius: 12,
          boxShadow: "var(--shadow-md)"
        }} className="p-6 md:p-8 bg-[color:var(--bg)] flex flex-col py-0 px-[32px]">
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
                {/* Сумма */}
                <div>
                  <label className="block text-[14px] leading-[20px] font-medium mb-2 text-[color:var(--text)]">
                    Ziedojuma summa
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {presets.map(p => <button key={p} type="button" onClick={() => handlePreset(p)} className="px-4 h-[42px] inline-flex items-center justify-center rounded-lg border transition-all" style={{
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
                </div>

                {/* Контакты */}
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

                {/* Способ оплаты */}
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

                  {/* Детали метода */}
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

                {/* Согласие */}
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

                {/* Отправка */}
                <button type="submit" disabled={!amount || Number(amount) <= 0 || !agree} className="inline-flex w-full items-center justify-center px-5 py-3 font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" style={{
              background: "var(--primary)",
              color: "#fff",
              borderRadius: 12
            }} onMouseDown={e => e.currentTarget.style.background = "var(--primary-700)"} onMouseUp={e => e.currentTarget.style.background = "var(--primary)"} onMouseLeave={e => e.currentTarget.style.background = "var(--primary)"}>
                  Ziedot {amount ? `${amount} €` : ""}
                </button>

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