import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ChevronRight } from "lucide-react";
import heroImage from "@/assets/event-competition.jpg";
import eventCompetition1 from "@/assets/event-competition-1.jpg";
import youthChampionship from "@/assets/youth-championship-album.jpg";
import eventShowjumping from "@/assets/event-showjumping.jpg";
import youthCup from "@/assets/youth-cup.jpg";

const EventGallery = () => {
  // Mock data for event albums (only events, no training sessions)
  const eventAlbums = [
    {
      id: "jauniesu-kauss-2025",
      title: "Jauniešu kausa fināla posms 2025",
      date: "19-21 septembris, 2025",
      coverImage: youthChampionship,
      photoCount: 24,
      description: "Gada lielākā jauniešu sacensība Inčukalna rajonā"
    },
    {
      id: "latvijas-zirgu-dienas-2025",
      title: "XVII Vislatvijas Zirgu dienas",
      date: "15-17 augusts, 2025", 
      coverImage: eventCompetition1,
      photoCount: 45,
      description: "Krāšņs svētku pasākums visiem zirgu mīļotājiem"
    },
    {
      id: "yrs-open-2025",
      title: "YRS Open 2025",
      date: "4-6 jūlijs, 2025",
      coverImage: eventShowjumping,
      photoCount: 32,
      description: "Starptautiskās šķēršļu pārvarēšanas sacensības"
    },
    {
      id: "pavasara-sacensibas-2025",
      title: "Pavasara šķēršļu pārvarēšanas sacensības",
      date: "17-18 maijs, 2025",
      coverImage: youthCup,
      photoCount: 28,
      description: "Tradicionālās pavasara sacensības iekštelpu arēnā"
    }
  ];

  const [hoveredAlbum, setHoveredAlbum] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={heroImage}
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
              Fotogrāfijas no mūsu organizētajiem pasākumiem, sacensībām un īpašajiem notikumiem visā gada garumā.
            </p>
          </div>
        </section>

        {/* Albums Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-start mb-8 text-sm text-black/80">
              <a href="/lv/" className="flex items-center hover:text-primary transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Sākums
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/lv/galerija/" className="hover:text-primary transition-colors">
                Galerija
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-black font-medium">Pasākumi</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventAlbums.map((album) => (
                <div
                  key={album.id}
                  className="glass-card overflow-hidden hover-lift group cursor-pointer"
                  onMouseEnter={() => setHoveredAlbum(album.id)}
                  onMouseLeave={() => setHoveredAlbum(null)}
                >
                  <a href={`/lv/galerija/pasakumi/${album.id}/`}>
                    {/* Album Cover */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Photo Count Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                        <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        {album.photoCount}
                      </div>

                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
                        hoveredAlbum === album.id ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>

                    {/* Album Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {album.date}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {album.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {album.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventGallery;