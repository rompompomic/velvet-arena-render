import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, Phone, Mail, Image, CheckCircle2, X, User, CalendarClock, Home, ChevronRight } from "lucide-react";
import eventShowjumping from "@/assets/event-showjumping.jpg";
import youthCup from "@/assets/youth-cup.jpg";
import eventCompetition1 from "@/assets/event-competition-1.jpg";

const EventDetail = () => {
  const { event: eventId } = useParams();
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [registrationSent, setRegistrationSent] = useState(false);

  // Mock event data
  const eventData = {
    "jauniesu-kauss-2025": {
      title: "Jauniešu kausa fināla posms 2025",
      date: "19-21 septembris, 2025",
      time: "09:00 - 18:00",
      location: "Galvenā arēna",
      participants: "Līdz 50 dalībnieki",
      description: "Gada lielākā jauniešu sacensība Inčukalna rajonā ar starptautisku dalību. Sacensības notiks trīs dienu garumā ar dažādām vecuma grupām un prasmju līmeņiem.",
      image: youthCup,
      registrationAvailable: true,
      gallery: "/lv/galerija/pasakumi/jauniesu-kauss-2025/",
      program: [
        { time: "09:00 - 10:00", activity: "Reģistrācija un sacensību sagatavošana" },
        { time: "10:00 - 12:00", activity: "Jauniešu grupa (12-16 gadi) - kvalifikācija" },
        { time: "12:00 - 13:00", activity: "Pusdienu pārtraukums" },
        { time: "13:00 - 15:00", activity: "Jauniešu grupa (16-18 gadi) - kvalifikācija" },
        { time: "15:00 - 17:00", activity: "Fināla posmi visām grupām" },
        { time: "17:00 - 18:00", activity: "Apbalvošanas ceremonija" }
      ],
      requirements: [
        "Dalībnieka vecums: 12-18 gadi",
        "Jāšanas pieredze vismaz 2 gadi",
        "Veselības apdrošināšana",
        "Sava ekipējuma esamība",
        "Iepriekšēja reģistrācija obligāta"
      ],
      fees: "€25 reģistrācijas maksa + €15 par katru sacensību kārtu"
    },
    "latvijas-zirgu-dienas-2025": {
      title: "XVII Vislatvijas Zirgu dienas",
      date: "15-17 augusts, 2025",
      time: "10:00 - 17:00",
      location: "Visa teritorija",
      participants: "Neierobežots",
      description: "Krāšņs svētku pasākums visiem zirgu mīļotājiem ar izrādēm, aktivitātēm, tirdziņu un izglītojošām lekcijām. Trīs dienu svētki visai ģimenei.",
      image: eventCompetition1,
      registrationAvailable: true,
      gallery: "/lv/galerija/pasakumi/latvijas-zirgu-dienas-2025/",
      program: [
        { time: "10:00 - 10:30", activity: "Atklāšanas ceremonija" },
        { time: "10:30 - 12:00", activity: "Zirgu šķirņu prezentācija" },
        { time: "12:00 - 13:00", activity: "Pusdienu pārtraukums" },
        { time: "13:00 - 15:00", activity: "Tradicionālās jāšanas demonstrācija" },
        { time: "15:00 - 16:00", activity: "Bērnu aktivitātes ar zirgiem" },
        { time: "16:00 - 17:00", activity: "Mūzikas un deju izrāde" }
      ],
      requirements: [
        "Brīva pieeja visiem interesentiem",
        "Bērniem līdz 12 gadiem pavadība",
        "Ērtie apavi pastaigas apmeklēšanai",
        "Reģistrācija nav nepieciešama"
      ],
      fees: "Bezmaksas pasākums"
    },
    "yrs-open-2025": {
      title: "YRS Open 2025",
      date: "4-6 jūlijs, 2025",
      time: "08:00 - 19:00",
      location: "Starptautiskā arēna",
      participants: "Līdz 100 dalībnieki",
      description: "Starptautiskās šķēršļu pārvarēšanas sacensības ar augstu līmeni. Sacensības notiks trīs dienu garumā ar dažādām klasēm un augstuma kategorijām.",
      image: eventShowjumping,
      registrationAvailable: true,
      gallery: "/lv/galerija/pasakumi/yrs-open-2025/",
      program: [
        { time: "08:00 - 09:00", activity: "Dalībnieku reģistrācija un zirgu veterinārā pārbaude" },
        { time: "09:00 - 11:00", activity: "Siltināšanas laukums un treniņu sesijas" },
        { time: "11:00 - 13:00", activity: "Jauniešu klases 80cm - 100cm" },
        { time: "13:00 - 14:00", activity: "Pusdienu pārtraukums" },
        { time: "14:00 - 16:00", activity: "Pieaugušo klases 110cm - 130cm" },
        { time: "16:00 - 18:00", activity: "Augstākā līmeņa klases 140cm+" },
        { time: "18:00 - 19:00", activity: "Apbalvošanas ceremonija" }
      ],
      requirements: [
        "Federācijas licence vai starptautiskā atļauja",
        "Zirga reģistrācijas dokumenti",
        "Veterinārā pase ar vakcinācijām",
        "Apdrošināšanas polise",
        "Aizsargekipējuma komplekts",
        "Iepriekšēja pieteikšanās līdz 20. jūnijam"
      ],
      fees: "€45 reģistrācija + €25 par katru klasi"
    },
    "pavasara-sacensibas-2025": {
      title: "Pavasara šķēršļu pārvarēšanas sacensības",
      date: "17-18 maijs, 2025",
      time: "09:00 - 16:00",
      location: "Iekštelpu arēna",
      participants: "Līdz 30 dalībnieki",
      description: "Tradicionālās pavasara sacensības iekštelpu arēnā visiem līmeņiem. Ideālas gan iesācējiem, gan pieredzējušiem jātniekiem.",
      image: eventCompetition1,
      registrationAvailable: false,
      gallery: "/lv/galerija/pasakumi/pavasara-sacensibas-2025/",
      program: [
        { time: "09:00 - 09:30", activity: "Dalībnieku reģistrācija" },
        { time: "09:30 - 10:30", activity: "Iesācēju grupa - šķēršļi līdz 60cm" },
        { time: "10:30 - 11:30", activity: "Vidējā grupa - šķēršļi 70cm-80cm" },
        { time: "11:30 - 12:00", activity: "Kafijas pauze" },
        { time: "12:00 - 13:30", activity: "Augstākā grupa - šķēršļi 90cm-110cm" },
        { time: "13:30 - 14:30", activity: "Pusdienu pārtraukums" },
        { time: "14:30 - 15:30", activity: "Komandu sacensības" },
        { time: "15:30 - 16:00", activity: "Apbalvošana un noslēguma ceremonija" }
      ],
      requirements: [
        "Jāšanas pieredze vismaz 6 mēneši",
        "Dalība grupas nodarbībās vai individuālās stundās",
        "Aizsargķiveres un zābaku esamība",
        "Vecāku atļauja (līdz 18 gadiem)",
        "Reģistrācija līdz 10. maijam"
      ],
      fees: "€20 reģistrācijas maksa visām grupām"
    }
  };

  const currentEvent = eventData[eventId as keyof typeof eventData];

  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Pasākums nav atrasts</h1>
            <p className="text-muted-foreground mb-8">Meklētais pasākums neeksistē vai ir pārcelts.</p>
            <Button asChild>
              <a href="/lv/pasakumi/">Atgriezties pie pasākumiem</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationSent(true);
    setTimeout(() => {
      setRegistrationOpen(false);
      setRegistrationSent(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={currentEvent.image}
              alt={currentEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              {currentEvent.title}
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              {currentEvent.description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-start mb-6 text-sm text-black/80">
            <a href="/lv/" className="flex items-center hover:text-primary transition-colors">
              <Home className="w-4 h-4 mr-2" />
              Sākums
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="/lv/pasakumi/" className="hover:text-primary transition-colors">
              Pasākumi
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-black font-medium">{currentEvent.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Event Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Datums</p>
                        <p className="font-medium">{currentEvent.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Laiks</p>
                        <p className="font-medium">{currentEvent.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Vieta</p>
                        <p className="font-medium">{currentEvent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Dalībnieki</p>
                        <p className="font-medium">{currentEvent.participants}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {currentEvent.registrationAvailable && (
                      <Button 
                        onClick={() => setRegistrationOpen(true)}
                        className="bg-primary text-white rounded-xl 
                                   transition-all duration-300 hover:bg-primary-700 hover:scale-105"
                      >
                        Reģistrēties
                      </Button>
                    )}
                    <Button
                      asChild
                      className="bg-transparent text-white rounded-xl 
                                 transition-all duration-300 hover:scale-105"
                    >
                      <a href={currentEvent.gallery} className="flex items-center !text-white">
                        <Image className="w-4 h-4 mr-2 !text-white" />
                        Foto galerija
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Program */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Pasākuma programma</h3>
                  <div className="space-y-3">
                    {currentEvent.program.map((item, index) => (
                      <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="text-sm font-medium text-primary min-w-[100px]">
                          {item.time}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Requirements */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Dalības nosacījumi</h3>
                  <div className="space-y-3">
                    {currentEvent.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Dalības maksa</h3>
                  <p className="text-muted-foreground">{currentEvent.fees}</p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Kontakti</h3>
                  <div className="space-y-3">
                    <a href="tel:+37128677177" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="font-medium">+371 28677177</span>
                    </a>
                    <a href="mailto:info@latvianhorses.lv" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="font-medium">info@latvianhorses.lv</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Registration Modal */}
      {registrationOpen && (
        <div 
          role="dialog" 
          aria-modal="true" 
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/60" 
          onClick={() => setRegistrationOpen(false)}
        >
          <div 
            className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl" 
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold">Reģistrācija pasākumam</h4>
                <button 
                  onClick={() => setRegistrationOpen(false)} 
                  className="p-2 rounded-lg hover:bg-neutral-100" 
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!registrationSent ? (
                <form className="grid gap-4" onSubmit={handleRegistration}>
                  <div className="bg-muted/30 p-4 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">{currentEvent.title}</h5>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Datums: {currentEvent.date}</p>
                      <p>Dalības maksa: {currentEvent.fees}</p>
                    </div>
                  </div>

                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> Vārds, Uzvārds
                    </span>
                    <input 
                      required 
                      type="text" 
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" 
                      placeholder="Jūsu vārds un uzvārds" 
                    />
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="grid gap-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" /> Telefons
                      </span>
                      <input 
                        required 
                        type="tel" 
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" 
                        placeholder="+371 ..." 
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> E-pasts
                      </span>
                      <input 
                        required 
                        type="email" 
                        className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" 
                        placeholder="name@example.com" 
                      />
                    </label>
                  </div>

                  <label className="grid gap-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <CalendarClock className="w-4 h-4 text-primary" /> Papildu informācija
                    </span>
                    <textarea 
                      rows={3} 
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 resize-none" 
                      placeholder="Jāšanas pieredze, īpaši norādījumi utt." 
                    />
                  </label>

                  <button 
                    type="submit" 
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary text-white 
                               px-4 py-2.5 font-medium transition-all duration-300 
                               hover:bg-primary-700 hover:scale-105"
                  >
                    Nosūtīt pieteikumu
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
                  <p className="text-lg font-medium">Pieteikums nosūtīts!</p>
                  <p className="text-sm text-muted-foreground">Mēs sazināsimies ar jums tuvākajā laikā.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EventDetail;