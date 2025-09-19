import React, { useState } from "react";
import donateHorse from "@/assets/donate-horse-new.png"; // 16:9 иллюстрация

const DonateSection: React.FC = () => {
  const presets = [10, 20, 30, 50];

  const [amount, setAmount] = useState<string>("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePreset = (v: number) => setAmount(String(v));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(amount);
    if (!num || num <= 0 || !agree) return;
    setSubmitted(true);
  };

  const points = [
    {
      title: "Zirgu labturība",
      desc: "Barība, veterinārā aprūpe un droša infrastruktūra ikdienai.",
    },
    {
      title: "Jauno jātnieku attīstība",
      desc: "Treniņi, nometnes un sacensību pieredze bērniem un jauniešiem.",
    },
    {
      title: "Kvalitatīvi pasākumi",
      desc: "Vietējās sacensības, atvērto durvju dienas un izglītojošas ekskursijas.",
    },
  ];

  return (
    <section
      className="py-16"
      style={
        {
          ["--primary" as any]: "#963026",
          ["--primary-700" as any]: "#7A251F",
          ["--primary-50" as any]: "#FCECEA",
          ["--text" as any]: "#06030d",
          ["--bg" as any]: "#FFFFFF",
          ["--light" as any]: "#FAFAFA",
          ["--neutral-200" as any]: "#EDEDED",
          ["--shadow-sm" as any]: "0 1px 2px rgba(0,0,0,0.05)",
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-6">
          <h2
            className="mb-2"
            style={{
              fontSize: 36,
              lineHeight: "44px",
              fontWeight: 600,
              color: "var(--text)",
              fontFamily:
                "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
            }}
          >
            Atbalsti Latvian Horses
          </h2>
          <p className="text-sm text-[rgba(6,3,13,0.7)] max-w-xl mx-auto">
            Neliels atbalsts palīdz nodrošināt zirgu labturību un aktivitātes.
            Paldies par jebkuru ieguldījumu.
          </p>
        </div>

        {/* Список + Цитата (правый блок) */}
        <div
          className="mb-10 rounded-xl border bg-[var(--bg)]"
          style={{ borderColor: "var(--neutral-200)", boxShadow: "var(--shadow-sm)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 p-5 sm:p-6 md:p-7">
            {/* Левый список */}
            <ul className="space-y-4">
              {points.map((p, idx) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 inline-flex items-center justify-center rounded-full text-white font-semibold"
                    style={{
                      width: 26,
                      height: 26,
                      background: "var(--primary)",
                      lineHeight: "26px",
                      fontSize: 14,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <div
                      className="leading-snug"
                      style={{
                        color: "var(--text)",
                        fontWeight: 600,
                        fontSize: 20,
                        lineHeight: "28px",
                      }}
                    >
                      {p.title}
                    </div>
                    <div className="text-[13px] text-[rgba(6,3,13,0.7)] mt-0.5">
                      {p.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Правый блок — красивая цитата (без изображений) */}
            <div className="mt-6 md:mt-0">
              <figure
                className="relative h-full rounded-xl border overflow-hidden"
                style={{
                  borderColor: "var(--neutral-200)",
                  background: "linear-gradient(180deg, #FFF 0%, #FAFAFA 100%)",
                }}
              >
                {/* Декоративная полоса слева */}
                <div
                  className="absolute inset-y-0 left-0 w-1.5"
                  style={{ background: "var(--primary)" }}
                />
                <div className="p-5 sm:p-6 md:p-7">
                  {/* Иконка кавычек */}
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-full"
                    style={{
                      width: 40,
                      height: 40,
                      background: "var(--primary-50)",
                      color: "var(--primary)",
                    }}
                    aria-hidden
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.2 11.2c0-3.1 1.9-5.6 4.7-6.4v2.7c-1.1.5-1.9 1.8-1.9 3.2 1.1 0 2 .9 2 2 0 2.2-1.8 4-4 4-2.1 0-3.8-1.7-3.8-3.8zM15.2 11.2c0-3.1 1.9-5.6 4.7-6.4v2.7c-1.1.5-1.9 1.8-1.9 3.2 1.1 0 2 .9 2 2 0 2.2-1.8 4-4 4-2.1 0-3.8-1.7-3.8-3.8z" />
                    </svg>
                  </div>

                  <blockquote className="text-[15px] leading-7 text-[rgba(6,3,13,0.9)]">
                    “Šeit es iemācījos ne tikai jāt, bet arī rūpēties par dzīvniekiem.
                    Treneri ir pacietīgi, bet zirgi — mierīgi un droši. Katru nedēļu es gaidu
                    nodarbības ar smaidu.”
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    {/* Кружок с инициалом вместо фото */}
                    <div className="relative">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                        style={{ background: "var(--primary-50)", color: "var(--primary)" }}
                      >
                        E
                      </div>
                      <span
                        className="absolute -bottom-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-md"
                        style={{ background: "var(--primary-50)", color: "var(--primary)" }}
                      >
                        ⭐️⭐️⭐️⭐️⭐️
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="font-semibold" style={{ color: "var(--text)" }}>
                        Elīna, 12 gadi
                      </div>
                      <div className="text-xs text-[rgba(6,3,13,0.7)]">
                        Skolniece, sākuma grupa
                      </div>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>

        {/* Основной контент: иллюстрация + форма */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Иллюстрация */}
          <div
            className="w-full rounded-[12px] border bg-[var(--light)] shadow-sm overflow-hidden h-full lg:min-h-[360px]"
            style={{ borderColor: "var(--neutral-200)" }}
          >
            <div className="relative w-full h-full">
              <img
                src={donateHorse}
                alt="Ziedojums zirgiem — dāvanu tēma"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Форма доната */}
          <div className="w-full h-full" id="donate-form">
            <div
              className="bg-[var(--bg)] border rounded-[12px] p-6 lg:p-8 h-full lg:min-h-[360px]"
              style={{
                borderColor: "var(--neutral-200)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      background: "var(--primary-50)",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ color: "var(--primary)" }}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    Paldies par atbalstu!
                  </h3>
                  <p className="text-sm text-[rgba(6,3,13,0.7)] mt-2">
                    Mēs nosūtīsim apstiprinājumu uz e-pastu (ja norādīts).
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Сумма */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Ziedojuma summa
                    </label>

                    <div className="flex flex-wrap items-center gap-3">
                      {presets.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => handlePreset(p)}
                          className="rounded-md px-3 h-10 inline-flex items-center justify-center text-sm border"
                          style={{
                            borderColor:
                              Number(amount) === p
                                ? "var(--primary)"
                                : "var(--neutral-200)",
                            background:
                              Number(amount) === p
                                ? "var(--primary)"
                                : "transparent",
                            color:
                              Number(amount) === p ? "#fff" : "var(--text)",
                            minWidth: 64,
                          }}
                        >
                          {p} €
                        </button>
                      ))}

                      <div className="relative">
                        <input
                          inputMode="decimal"
                          pattern="[0-9]*"
                          value={amount}
                          onChange={(e) => {
                            const v = e.target.value.replace(/[^\d]/g, "");
                            setAmount(v);
                          }}
                          placeholder="Cita summa"
                          className="h-10 px-3 rounded-md border text-sm"
                          style={{
                            borderColor: "var(--neutral-200)",
                            width: 140,
                            color: "var(--text)",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            right: 10,
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "rgba(6,3,13,0.6)",
                            fontSize: 14,
                          }}
                        >
                          €
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Контакты (необязательно) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Vārds (nav obligāti)"
                      className="w-full h-10 px-3 rounded-md border text-sm"
                      style={{
                        borderColor: "var(--neutral-200)",
                        color: "var(--text)",
                      }}
                    />
                    <input
                      type="email"
                      placeholder="E-pasts (rēķinam)"
                      className="w-full h-10 px-3 rounded-md border text-sm"
                      style={{
                        borderColor: "var(--neutral-200)",
                        color: "var(--text)",
                      }}
                    />
                  </div>

                  {/* Согласие + отправка */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <label
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "var(--text)" }}
                    >
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="h-4 w-4"
                        style={{ accentColor: "var(--primary)" }}
                      />
                      <span>
                        Piekrītu personas datu apstrādei saskaņā ar{" "}
                        <a
                          href="/lv/privatuma-politika/"
                          className="underline"
                        >
                          Privātuma politiku
                        </a>
                        .
                      </span>
                    </label>

                    <button
                      type="submit"
                      onClick={onSubmit}
                      disabled={!amount || Number(amount) <= 0 || !agree}
                      className="h-10 px-4 rounded-md text-sm font-semibold"
                      style={{
                        background:
                          !amount || Number(amount) <= 0 || !agree
                            ? "var(--neutral-200)"
                            : "var(--primary)",
                        color:
                          !amount || Number(amount) <= 0 || !agree
                            ? "rgba(6,3,13,0.5)"
                            : "#fff",
                        border: "none",
                        minWidth: 160,
                        cursor:
                          !amount || Number(amount) <= 0 || !agree
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      Ziedot {amount ? `${amount} €` : ""}
                    </button>
                  </div>

                  <p className="text-xs text-[rgba(6,3,13,0.6)] text-center mt-2">
                    Pēc ziedojuma saņemšanas nosūtīsim apstiprinājumu uz e-pastu
                    (ja norādīts).
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
