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

  return (
    <section
      className="py-20"
      style={
        {
          // Design tokens (same approach as раньше — можно вынести в :root)
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
          ["--shadow-md" as any]: "0 6px 16px rgba(0,0,0,0.08)",
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="mb-3"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
              fontSize: 36,
              lineHeight: "44px",
              fontWeight: 600,
              color: "var(--text)",
            }}
          >
            Atbalsti Latvian Horses
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: "24px",
              color: "rgba(6,3,13,0.7)",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Tava līdzdalība palīdz uzturēt zirgu labturību, attīstīt jauno jātnieku skolu un rīkot pasākumus.
          </p>
        </div>

        {/* Card + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Gift Card visual (left) */}
          <div
            className="rounded-[12px] p-6 md:p-8 flex flex-col justify-between"
            style={{
              background: "linear-gradient(180deg, var(--primary-50), rgba(255,255,255,0.95))",
              border: "1px solid var(--neutral-200)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      lineHeight: "16px",
                      textTransform: "uppercase",
                      color: "var(--accent-700)",
                      background: "var(--accent-50)",
                      padding: "4px 8px",
                      borderRadius: 999,
                      display: "inline-block",
                      fontWeight: 600,
                    }}
                  >
                    Dāvanu karte
                  </div>
                </div>
                <div aria-hidden style={{ opacity: 0.15 }}>
                  {/* simple decorative horse silhouette (placeholder) */}
                  <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="40" rx="6" fill="white" />
                  </svg>
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <div
                  style={{
                    fontSize: 28,
                    lineHeight: "36px",
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                >
                  Atbalsti mūs ar
                </div>

                <div
                  className="mt-4"
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--neutral-200)",
                      padding: "14px 20px",
                      borderRadius: 10,
                      boxShadow: "var(--shadow-sm)",
                      minWidth: 140,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 20, lineHeight: "28px", fontWeight: 700, color: "var(--primary)" }}>
                      {amount ? `${amount} €` : "— €"}
                    </div>
                    <div style={{ fontSize: 12, lineHeight: "16px", color: "rgba(6,3,13,0.6)", marginTop: 6 }}>
                      {freq === "monthly" ? "Ik mēnesi" : "Vienreizējs"}
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, color: "rgba(6,3,13,0.8)", fontSize: 14, lineHeight: "20px" }}>
                      Dāvanu karte — izmantojama treniņiem, nodarbībām vai atbalstam zirgiem. Pielāgo summu labajā formā.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer of card */}
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 12, color: "rgba(6,3,13,0.7)" }}>Latvian Horses</div>
              <div style={{ fontSize: 12, color: "rgba(6,3,13,0.6)" }}>#support</div>
            </div>
          </div>

          {/* Minimal Form (right) */}
          <div
            className="rounded-[12px] p-6 md:p-8"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--neutral-200)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--primary)", margin: "0 auto 12px", display: "block" }}
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h3 style={{ fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "var(--text)" }}>
                  Paldies!
                </h3>
                <p style={{ color: "rgba(6,3,13,0.7)", marginTop: 8 }}>Mēs novērtējam tavu atbalstu.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Presets */}
                <div>
                  <label style={{ display: "block", fontSize: 14, lineHeight: "20px", fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
                    Izvēlies summu
                  </label>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {presets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePreset(p)}
                        className="inline-flex items-center justify-center"
                        style={{
                          height: 40,
                          minWidth: 64,
                          padding: "0 12px",
                          borderRadius: 10,
                          border: amount === p ? `1px solid var(--primary)` : `1px solid var(--neutral-200)`,
                          background: amount === p ? "var(--primary)" : "transparent",
                          color: amount === p ? "#fff" : "var(--text)",
                          cursor: "pointer",
                          transition: "all .18s ease",
                        }}
                      >
                        {p} €
                      </button>
                    ))}

                    <div style={{ position: "relative" }}>
                      <input
                        inputMode="decimal"
                        pattern="[0-9]*"
                        value={amount}
                        onChange={(e) => {
                          const v = e.target.value.replace(/[^\d]/g, "");
                          setAmount(v === "" ? "" : Number(v));
                        }}
                        placeholder="Cita summa"
                        style={{
                          height: 40,
                          width: 140,
                          padding: "0 36px 0 12px",
                          borderRadius: 10,
                          border: `1px solid var(--neutral-200)`,
                          outline: "none",
                          fontSize: 14,
                          color: "var(--text)",
                        }}
                      />
                      <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "rgba(6,3,13,0.6)" }}>
                        €
                      </span>
                    </div>
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <div style={{ display: "inline-flex", borderRadius: 10, overflow: "hidden", border: "1px solid var(--neutral-200)" }}>
                    <button
                      type="button"
                      onClick={() => setFreq("one")}
                      style={{
                        padding: "8px 12px",
                        background: freq === "one" ? "var(--primary)" : "transparent",
                        color: freq === "one" ? "#fff" : "var(--text)",
                        border: "none",
                        cursor: "pointer",
                        minWidth: 110,
                      }}
                    >
                      Vienreizējs
                    </button>
                    <button
                      type="button"
                      onClick={() => setFreq("monthly")}
                      style={{
                        padding: "8px 12px",
                        background: freq === "monthly" ? "var(--primary)" : "transparent",
                        color: freq === "monthly" ? "#fff" : "var(--text)",
                        borderLeft: "1px solid var(--neutral-200)",
                        cursor: "pointer",
                        minWidth: 110,
                      }}
                    >
                      Ik mēnesi
                    </button>
                  </div>
                </div>

                {/* Contact row (optional) */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
                  <input
                    type="text"
                    placeholder="Vārds (nav obligāti)"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: `1px solid var(--neutral-200)`,
                      outline: "none",
                      fontSize: 14,
                      color: "var(--text)",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="E-pasts (rēķinam)"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: `1px solid var(--neutral-200)`,
                      outline: "none",
                      fontSize: 14,
                      color: "var(--text)",
                    }}
                  />
                </div>

                {/* Payment method */}
                <div>
                  <label style={{ display: "block", fontSize: 14, lineHeight: "20px", fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
                    Apmaksas veids
                  </label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      type="button"
                      onClick={() => setMethod("card")}
                      style={{
                        height: 40,
                        padding: "0 12px",
                        borderRadius: 10,
                        border: method === "card" ? `1px solid var(--primary)` : `1px solid var(--neutral-200)`,
                        background: method === "card" ? "var(--primary-50)" : "transparent",
                        color: method === "card" ? "var(--primary)" : "var(--text)",
                        cursor: "pointer",
                      }}
                    >
                      Bankas karte
                    </button>
                    <button
                      type="button"
                      onClick={() => setMethod("bank")}
                      style={{
                        height: 40,
                        padding: "0 12px",
                        borderRadius: 10,
                        border: method === "bank" ? `1px solid var(--primary)` : `1px solid var(--neutral-200)`,
                        background: method === "bank" ? "var(--primary-50)" : "transparent",
                        color: method === "bank" ? "var(--primary)" : "var(--text)",
                        cursor: "pointer",
                      }}
                    >
                      Pārskaitījums
                    </button>
                  </div>

                  {method === "bank" && (
                    <div style={{ marginTop: 10, padding: 12, borderRadius: 10, background: "var(--light)", border: "1px solid var(--neutral-200)" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>Rekvizīti</div>
                      <div style={{ fontSize: 13, color: "rgba(6,3,13,0.7)", marginTop: 6 }}>
                        Saņēmējs: Latvian Horses
                        <br />
                        IBAN: —
                      </div>
                    </div>
                  )}
                </div>

                {/* Consent */}
                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "var(--text)" }}>
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    style={{ width: 18, height: 18, accentColor: "var(--primary)", marginTop: 2 }}
                  />
                  <span>
                    Piekrītu personas datu apstrādei saskaņā ar{" "}
                    <a href="/lv/privatuma-politika/" className="underline">
                      Privātuma politiku
                    </a>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!amount || Number(amount) <= 0 || !agree}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "var(--primary)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 16,
                    border: "none",
                    cursor: "pointer",
                    transition: "background .18s ease, transform .12s ease, box-shadow .12s ease",
                  }}
                  onMouseDown={(e) => ((e.currentTarget.style.background = "var(--primary-700)"))}
                  onMouseUp={(e) => ((e.currentTarget.style.background = "var(--primary)"))}
                >
                  Ziedot {amount ? `${amount} €` : ""}
                  {freq === "monthly" && <span style={{ marginLeft: 8, opacity: 0.9 }}>/ mēnesī</span>}
                </button>

                <p style={{ textAlign: "center", fontSize: 12, color: "rgba(6,3,13,0.6)" }}>
                  Pēc ziedojuma nosūtīsim apstiprinājumu uz e-pastu (ja norādīts).
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
