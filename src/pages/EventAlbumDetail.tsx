import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { Home, ChevronRight, ArrowLeft } from "lucide-react";

const EventAlbumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Mock data - in a real app, this would be fetched based on the id
  const albumData: Record<string, any> = {
    "jauniesu-kauss-2025": {
      title: "Jauniešu kausa fināla posms 2025",
      date: "19-21 septembris, 2025",
      location: "Inčukalna rajons, 'Zustrenes'",
      description: "Gada lielākā jauniešu sacensība, kurā piedalījās vairāk nekā 50 dalībnieki no visas Latvijas. Sacensības notika trīs dienas ar dažādām disciplīnām un vecuma grupām.",
      eventLink: "/lv/pasakumi/jauniesu-kauss-2025/",
      coverImage: "/src/assets/gallery-jauniesu-kauss-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/youth-cup.jpg", alt: "Sacensību atklāšana", caption: "Sacensību svinīgā atklāšana" },
        { id: "2", src: "/src/assets/event-showjumping.jpg", alt: "Jātnieks šķērslī", caption: "Precīzs šķēršļu pārvarējums" },
        { id: "3", src: "/src/assets/youth-championship-album.jpg", alt: "Uzvarētāji", caption: "Uzvarētāju apbalvošana" },
        { id: "4", src: "/src/assets/event-competition-1.jpg", alt: "Komandas foto", caption: "Visu dalībnieku kopīgais foto" },
        { id: "5", src: "/src/assets/Horse1.png", alt: "Dalībnieku zirgi", caption: "Sacensību zirgi pirms startiem" },
        { id: "6", src: "/src/assets/Horse2.png", alt: "Treniņš", caption: "Sagatavošanās treniņš" },
        { id: "7", src: "/src/assets/events-calendar-hero.jpg", alt: "Pasākuma atmosfēra", caption: "Krāšņā sacensību atmosfēra" },
        { id: "8", src: "/src/assets/riding-school-training.jpg", alt: "Jātnieku sagatavošanās", caption: "Intensīvā sagatavošanās" }
      ]
    },
    "latvijas-zirgu-dienas-2025": {
      title: "XVII Vislatvijas Zirgu dienas",
      date: "15-17 augusts, 2025",
      location: "Jauno jātnieku skola, Inčukalns",
      description: "Krāšņs svētku pasākums visiem zirgu mīļotājiem ar dažādām aktivitātēm, izstādēm un izklaidēm.",
      eventLink: "/lv/pasakumi/zirgu-dienas-2025/",
      coverImage: "/src/assets/gallery-latvijas-zirgu-dienas-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/hero-equestrian.jpg", alt: "Svētku atklāšana", caption: "XVII Zirgu dienu svinīgā atklāšana" },
        { id: "2", src: "/src/assets/Horse3.png", alt: "Zirgu izstāde", caption: "Skaistāko zirgu demonstrācija" },
        { id: "3", src: "/src/assets/summer-camp-album.jpg", alt: "Bērnu aktivitātes", caption: "Bērniem paredzētās aktivitātes" },
        { id: "4", src: "/src/assets/events-calendar-hero.jpg", alt: "Vakarēšanās koncerts", caption: "Mūzikas koncerts zem zvaigznēm" },
        { id: "5", src: "/src/assets/Horse4.png", alt: "Zirgu parāde", caption: "Krāšņā zirgu parāde" },
        { id: "6", src: "/src/assets/service-excursions.jpg", alt: "Ekskursijas", caption: "Aizraujošās ekskursijas pa saimniecību" }
      ]
    },
    "yrs-open-2025": {
      title: "YRS Open Championship 2025",
      date: "12-14 jūlijs, 2025",
      location: "Jauno jātnieku skola, Inčukalns",
      description: "Starptautiskās sacensības jaunajiem jātniekiem ar dalībniekiem no Baltijas valstīm un citām Eiropas valstīm.",
      eventLink: "/lv/pasakumi/yrs-open-2025/",
      coverImage: "/src/assets/gallery-yrs-open-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/event-competition.jpg", alt: "Starptautiskās sacensības", caption: "YRS Open sākums" },
        { id: "2", src: "/src/assets/event-showjumping.jpg", alt: "Šķēršļu jāšana", caption: "Augstākā līmeņa šķēršļu jāšana" },
        { id: "3", src: "/src/assets/youth-championship-album.jpg", alt: "Starptautiskie dalībnieki", caption: "Dalībnieki no dažādām valstīm" },
        { id: "4", src: "/src/assets/Horse1.png", alt: "Čempionu zirgi", caption: "Līderu zirgi finālā" },
        { id: "5", src: "/src/assets/riding-school-training.jpg", alt: "Treniņu process", caption: "Sagatavošanās sacensībām" }
      ]
    },
    "pavasara-sacensibas-2025": {
      title: "Pavasara sacensības 2025",
      date: "25-26 maijs, 2025",
      location: "Jauno jātnieku skola, Inčukalns",
      description: "Tradicionālās pavasara sacensības, kas iezīmē aktīvās sezonas sākumu. Dalības iespējas visām vecuma grupām.",
      eventLink: "/lv/pasakumi/pavasara-sacensibas-2025/",
      coverImage: "/src/assets/gallery-pavasara-sacensibas-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/event-competition-1.jpg", alt: "Pavasara sacensības", caption: "Pavasara sacensību atklāšana" },
        { id: "2", src: "/src/assets/Horse2.png", alt: "Pavasara treniņi", caption: "Pirmie treniņi pēc ziemas" },
        { id: "3", src: "/src/assets/youth-cup.jpg", alt: "Jaunieši startā", caption: "Jauno jātnieku starts" },
        { id: "4", src: "/src/assets/events-calendar-hero.jpg", alt: "Sacensību gaisotne", caption: "Pavasarīgā sacensību atmosfēra" },
        { id: "5", src: "/src/assets/Horse3.png", alt: "Treniņu zirgi", caption: "Zirgi pavasara treniņos" },
        { id: "6", src: "/src/assets/riding-school-training.jpg", alt: "Praktiskais darbs", caption: "Praktiskās nodarbības laukā" }
      ]
    }
  };

  const album = id ? albumData[id] : null;

  useEffect(() => {
    if (!album) {
      // Redirect to 404 or event gallery if album not found
      window.location.href = "/lv/galerija/pasakumi/";
    }
  }, [album]);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  if (!album) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Album Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-start mb-6 text-sm text-black/80">
              <a href="/lv/" className="flex items-center hover:text-primary transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Sākums
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/lv/galerija/" className="hover:text-primary transition-colors">
                Galerija
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/lv/galerija/pasakumi/" className="hover:text-primary transition-colors">
                Pasākumi
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-black font-medium">{album.title}</span>
            </nav>

            <div className="mb-8">
              <a 
                href="/lv/galerija/pasakumi/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Atgriezties pie pasākumu galerijas
              </a>
            </div>

            {/* Album Info */}
            <div className="glass-card p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{album.title}</h1>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {album.date}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {album.location}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      {album.photos.length} fotogrāfijas
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {album.description}
                  </p>
                  <Button asChild>
                    <a href={album.eventLink}>
                      Skatīt pasākuma detaļas
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Button>
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {album.photos.map((photo: any, index: number) => (
                <div
                  key={photo.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-muted/20 aspect-square hover-lift"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          photos={album.photos}
          currentIndex={currentPhotoIndex}
          onClose={closeLightbox}
          onNavigate={navigateToPhoto}
        />
      )}
    </div>
  );
};

export default EventAlbumDetail;