import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Landmark } from "lucide-react";

// Import images
import donateHero from "@/assets/donate-horse-new.png";
import horseCare from "@/assets/gallery-zirgu-apruupe-1.jpg";
import youthPrograms from "@/assets/gallery-jaunie-jatniekki-1.jpg";
import facilities from "@/assets/about-facilities.jpg";

const Ziedojumi = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Latvija",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const urlAmount = searchParams.get("amount");
    const urlPaymentMethod = searchParams.get("payment");
    if (urlAmount) setAmount(urlAmount);
    if (urlPaymentMethod) setPaymentMethod(urlPaymentMethod);
  }, [searchParams]);

  const presetAmounts = [10, 20, 30, 50];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !agreeToTerms) return;

    const params = new URLSearchParams({
      type: "donation",
      amount: amount.toString(),
      method: paymentMethod,
    });
    window.location.href = `/lv/checkout/?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative">
          <div className="absolute inset-0">
            <img src={donateHero} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Atbalsti Latvian Horses
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Tava līdzdalība palīdz uzturēt zirgu labturību, attīstīt jauno
              jātnieku skolu un rīkot kvalitatīvus pasākumus.
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Ziedojuma detaļas
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Ziedojuma summa</h3>

                  {/* пресеты + “Cita summa” в одной сетке */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    {presetAmounts.map((preset) => (
                      <Button
                        key={preset}
                        type="button"
                        variant={amount === preset.toString() ? "default" : "outline"}
                        onClick={() => setAmount(preset.toString())}
                        className="h-12"
                      >
                        €{preset}
                      </Button>
                    ))}

                    {/* custom amount cell */}
                    <div className="col-span-2 md:col-span-1 flex items-center gap-2">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Cita summa"
                        className="w-full h-12 px-3 border border-input bg-background rounded-md"
                        min="1"
                        inputMode="numeric"
                      />
                      <span className="text-muted-foreground">€</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method (иконки lucide-react) */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Apmaksas veids</h3>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="font-medium flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Bankas karte
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="font-medium flex items-center gap-2">
                        <Landmark className="w-4 h-4" />
                        Bankas pārskaitījums
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Anonymous */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="anonymous">Ziedot anonīmi (nav nepieciešami personas dati)</Label>
                </div>

                {/* Personal Info */}
                {!isAnonymous && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personas informācija</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Vārds *</Label>
                        <input
                          type="text"
                          id="firstName"
                          value={personalInfo.firstName}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, firstName: e.target.value })
                          }
                          className="w-full h-10 px-3 border border-input bg-background rounded-md mt-1"
                          required={!isAnonymous}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Uzvārds *</Label>
                        <input
                          type="text"
                          id="lastName"
                          value={personalInfo.lastName}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, lastName: e.target.value })
                          }
                          className="w-full h-10 px-3 border border-input bg-background rounded-md mt-1"
                          required={!isAnonymous}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-pasta adrese *</Label>
                        <input
                          type="email"
                          id="email"
                          value={personalInfo.email}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, email: e.target.value })
                          }
                          className="w-full h-10 px-3 border border-input bg-background rounded-md mt-1"
                          required={!isAnonymous}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Tālruņa numurs</Label>
                        <input
                          type="tel"
                          id="phone"
                          value={personalInfo.phone}
                          onChange={(e) =>
                            setPersonalInfo({ ...personalInfo, phone: e.target.value })
                          }
                          className="w-full h-10 px-3 border border-input bg-background rounded-md mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <Label htmlFor="message">Ziņojums (neobligāti)</Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Īss ziņojums par jūsu atbalstu..."
                    className="w-full h-24 px-3 py-2 border border-input bg-background rounded-md mt-1 resize-none"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-0.5 rounded"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    Es piekrītu{" "}
                    <a href="/lv/lietosanas-noteikumi/" className="text-primary underline">
                      lietošanas noteikumiem
                    </a>{" "}
                    un{" "}
                    <a href="/lv/privatuma-politika/" className="text-primary underline">
                      privātuma politikai
                    </a>
                    . *
                  </Label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold"
                  disabled={
                    !amount ||
                    !agreeToTerms ||
                    (!isAnonymous &&
                      (!personalInfo.firstName || !personalInfo.lastName || !personalInfo.email))
                  }
                >
                  Ziedot €{amount || "0"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Where Donations Go */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kur tiek izmantoti ziedojumi</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Katrs eiro tiek rūpīgi izmantots, lai uzlabotu zirgu dzīves kvalitāti un attīstītu
                mūsu programmas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Horse Care */}
              <div className="glass-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={horseCare}
                    alt="Zirgu aprūpe"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold">Zirgu labturība</h3>
                  </div>
                  <p className="text-muted-foreground">
                    40% no ziedojumiem tiek izmantoti augstas kvalitātes barībai, veterinārajai
                    aprūpei un regulārām veselības pārbaudēm.
                  </p>
                </div>
              </div>

              {/* Youth Programs */}
              <div className="glass-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={youthPrograms}
                    alt="Jauno jātnieku programmas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold">Jauno jātnieku attīstība</h3>
                  </div>
                  <p className="text-muted-foreground">
                    35% finansē mācību programmas, nometnes un sacensību dalības maksu bērniem no
                    maznodrošinātām ģimenēm.
                  </p>
                </div>
              </div>

              {/* Facilities */}
              <div className="glass-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={facilities}
                    alt="Infrastruktūras uzlabošana"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold">Infrastruktūras attīstība</h3>
                  </div>
                  <p className="text-muted-foreground">
                    25% tiek investēti drošības uzlabojumos, aprīkojuma atjaunošanā un vides
                    labiekārtošanā.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 glass-card p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Tavs ieguldījums 2023. gadā</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">156</div>
                  <div className="text-sm text-muted-foreground">Bērni apmeklēja nometnes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24</div>
                  <div className="text-sm text-muted-foreground">Zirgi saņēma aprūpi</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">89</div>
                  <div className="text-sm text-muted-foreground">Bezmaksas nodarbības</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">€12,450</div>
                  <div className="text-sm text-muted-foreground">Savākti ziedojumi</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You */}
        <section className="py-12 text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Paldies par atbalstu!</h2>
            <p className="text-muted-foreground mb-6">
              Katrs ziedojums ir nozīmīgs un palīdz mums turpināt darbu ar zirgiem un bērniem.
              Mēs sūtīsim tev ziņojumu par ziedojuma izmantošanu.
            </p>
            <div className="text-sm text-muted-foreground">
              Jautājumi? Sazinies ar mums:{" "}
              <a href="mailto:info@latvianhorses.lv" className="text-primary underline">
                info@latvianhorses.lv
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ziedojumi;
