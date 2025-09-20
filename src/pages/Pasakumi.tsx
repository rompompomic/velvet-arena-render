import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar as CalendarIcon,
  List,
  MapPin,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";

import eventsHero from "@/assets/events-calendar-hero.jpg";
import eventCompetition1 from "@/assets/event-competition-1.jpg";
import eventShowjumping from "@/assets/event-showjumping.jpg";
import youthCup from "@/assets/youth-cup.jpg";

const Pasakumi = () => {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const events = [
    {
      id: "jauniesu-kauss-2025",
      title: "Jauniešu kausa fināla posms 2025",
      date: new Date(2025, 8, 19), // September 19, 2025
      endDate: new Date(2025, 8, 21),
      time: "09:00 - 18:00",
      location: "Galvenā arēna",
      category: "competition",
      participants: "Līdz 50",
      description:
        "Gada lielākā jauniešu sacensība Inčukalna rajonā ar starptautisku dalību",
      image: youthCup,
      registrationOpen: true,
      gallery: "/lv/galerija/pasakumi/jauniesu-kauss-2025/",
    },
    {
      id: "latvijas-zirgu-dienas-2025",
      title: "XVII Vislatvijas Zirgu dienas",
      date: new Date(2025, 7, 15),
      endDate: new Date(2025, 7, 17),
      time: "10:00 - 17:00",
      location: "Visa teritorija",
      category: "festival",
      participants: "Neierobežots",
      description:
        "Krāšņs svētku pasākums visiem zirgu mīļotājiem ar izrādēm un aktivitātēm",
      image: eventCompetition1,
      registrationOpen: true,
      gallery: "/lv/galerija/pasakumi/latvijas-zirgu-dienas-2025/",
    },
    {
      id: "yrs-open-2025",
      title: "YRS Open 2025",
      date: new Date(2025, 6, 4),
      endDate: new Date(2025, 6, 6),
      time: "08:00 - 19:00",
      location: "Starptautiskā arēna",
      category: "competition",
      participants: "Līdz 100",
      description:
        "Starptautiskās šķēršļu pārvarēšanas sacensības ar augstu līmeni",
      image: eventShowjumping,
      registrationOpen: true,
      gallery: "/lv/galerija/pasakumi/yrs-open-2025/",
    },
    {
      id: "pavasara-sacensibas-2025",
      title: "Pavasara šķēršļu pārvarēšanas sacensības",
      date: new Date(2025, 4, 17),
      endDate: new Date(2025, 4, 18),
      time: "09:00 - 16:00",
      location: "Iekštelpu arēna",
      category: "competition",
      participants: "Līdz 30",
      description:
        "Tradicionālās pavasara sacensības iekštelpu arēnā visiem līmeņiem",
      image: eventCompetition1,
      registrationOpen: false,
      gallery: "/lv/galerija/pasakumi/pavasara-sacensibas-2025/",
    },
  ];

  const categories = [
    { id: "all", name: "Visi pasākumi", count: events.length },
    {
      id: "competition",
      name: "Sacensības",
      count: events.filter((e) => e.category === "competition").length,
    },
    {
      id: "festival",
      name: "Svētki",
      count: events.filter((e) => e.category === "festival").length,
    },
    {
      id: "training",
      name: "Treniņi",
      count: events.filter((e) => e.category === "training").length,
    },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const eventDates = events.map((event) => event.date);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={eventsHero}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Pasākumi un sacensības
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Pievienojieties mūsu pasākumiem, sacensībām un svētkiem. Apskatiet
              kalendāru un reģistrējieties.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* View Toggle & Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode("calendar")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === "calendar"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <CalendarIcon className="w-4 h-4" />
                  Kalendārs
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === "list"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                  Saraksts
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category.name}
                    <span className="ml-1 text-xs">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar View */}
            {viewMode === "calendar" && (
              <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) setSelectedDate(date);
                      }}
                      className="rounded-md border-0"
                      modifiers={{
                        hasEvent: eventDates,
                      }}
                      modifiersStyles={{
                        hasEvent: {
                          position: "relative",
                          fontWeight: "bold",
                        },
                      }}
                      renderDay={(day, modifiers) => {
                        const isEvent = eventDates.some(
                          (d) =>
                            d.getDate() === day.getDate() &&
                            d.getMonth() === day.getMonth() &&
                            d.getFullYear() === day.getFullYear()
                        );
                        return (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {day.getDate()}
                            {isEvent && (
                              <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                            )}
                          </div>
                        );
                      }}
                    />
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">
                    {selectedDate
                      ? `Pasākumi ${selectedDate.toLocaleDateString("lv-LV")}`
                      : "Visi pasākumi"}
                  </h3>
                  <div className="space-y-4">
                    {filteredEvents
                      .filter(
                        (event) =>
                          !selectedDate ||
                          (event.date.getDate() === selectedDate.getDate() &&
                            event.date.getMonth() === selectedDate.getMonth() &&
                            event.date.getFullYear() ===
                              selectedDate.getFullYear())
                      )
                      .map((event) => (
                        <Card
                          key={event.id}
                          className="overflow-hidden hover-lift cursor-pointer group"
                        >
                          <a href={`/lv/pasakumi/${event.id}/`}>
                            <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-0">
                              <div className="relative h-48 md:h-32 overflow-hidden">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="text-lg font-semibold hover:text-primary transition-colors">
                                    {event.title}
                                  </h4>
                                  {event.registrationOpen && (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                      Pieraksts atvērts
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {event.time}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {event.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {event.participants}
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {event.description}
                                </p>
                              </CardContent>
                            </div>
                          </a>
                        </Card>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden hover-lift cursor-pointer group"
                  >
                    <a href={`/lv/pasakumi/${event.id}/`}>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between text-white mb-2">
                            <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                              {event.date.toLocaleDateString("lv-LV")}
                            </span>
                            {event.registrationOpen && (
                              <span className="text-xs bg-green-500 px-2 py-1 rounded-full">
                                Pieraksts atvērts
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary font-medium">
                            Uzzināt vairāk
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardContent>
                    </a>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pasakumi;
