import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { Home, ChevronRight, ArrowLeft } from "lucide-react";

const RidingSchoolAlbumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Mock data - in a real app, this would be fetched based on the id
  const albumData: Record<string, any> = {
    "ikdienas-dzive-2025": {
      title: "Ikdienas dzīve skolā",
      season: "2025. gads",
      description: "Ieskats mūsu audzēkņu ikdienas dzīvē - no rīta zirgu barošanas līdz vakara treniņiem. Šeit redzamas gan pirmās nodarbības ar mazākajiem audzēkņiem, gan nopietni treniņi ar pieredzējušajiem jātniekiem.",
      relatedLinks: [
        { title: "Jāšanas treniņi", href: "/lv/pakalpojumi/jasanas-trenini/" }        
      ],
      coverImage: "/src/assets/gallery-ikdienas-dzive-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/horse-care-album.jpg", alt: "Rīta barošana", caption: "Rīta barošanas procedūra stalļos" },
        { id: "2", src: "/src/assets/riding-school-training.jpg", alt: "Pirmā nodarbība", caption: "Mazā jātnieka pirmā iepazīšanās ar zirgu" },
        { id: "3", src: "/src/assets/service-riding-lessons.jpg", alt: "Treniņš arēnā", caption: "Treniņu process iekštelpu arēnā" },
        { id: "4", src: "/src/assets/Horse1.png", alt: "Zirgu aprūpe", caption: "Audzēkņi mācās rūpēties par zirgiem" },
        { id: "5", src: "/src/assets/hero-equestrian.jpg", alt: "Vakara aktivitātes", caption: "Vakara nodarbības dabas vidē" },
        { id: "6", src: "/src/assets/Horse2.png", alt: "Komandas darbs", caption: "Kopīgs darbs pie zirgu aprūpes" },
        { id: "7", src: "/src/assets/service-horse-stable.jpg", alt: "Stalli", caption: "Mūsdienīgie zirgu stalli" },
        { id: "8", src: "/src/assets/Horse3.png", alt: "Zirgu draudzība", caption: "Cieša saikne starp bērniem un zirgiem" }
      ]
    },
    "jaunie-jatniekki-2025": {
      title: "Jaunie jātnieki",
      season: "Pavasaris 2025",
      description: "Bērnu pirmie soļi jāšanas mākslā. Skaistas atmiņas par to, kā mūsu mazākie audzēkņi iemācījās draudzēties ar zirgiem un gūt pirmās jāšanas prasmes.",
      relatedLinks: [
        { title: "Iesācēju kursi", href: "/lv/pakalpojumi/jasanas-trenini/" }
      ],
      coverImage: "/src/assets/gallery-jaunie-jatniekki-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/summer-camp-album.jpg", alt: "Pirmā iepazīšanās", caption: "Pirmā reize, kad bērns satiek zirgu" },
        { id: "2", src: "/src/assets/service-riding-lessons.jpg", alt: "Drošības pamācība", caption: "Instruktors māca drošības noteikumus" },
        { id: "3", src: "/src/assets/Horse4.png", alt: "Mazais jātnieks", caption: "Pirmais sēdējums sedlos" },
        { id: "4", src: "/src/assets/riding-school-training.jpg", alt: "Prieks sejās", caption: "Bezgalīgs prieks pēc veiksmīgas nodarbības" },
        { id: "5", src: "/src/assets/Horse1.png", alt: "Pirmie soļi", caption: "Pirmie neatkarīgie soļi ar zirgu" },
        { id: "6", src: "/src/assets/service-excursions.jpg", alt: "Grupas nodarbība", caption: "Kopīgās aktivitātes ar vienaudžiem" }
      ]
    },
    "ziemas-sagatavosana-2025": {
      title: "Ziemas sagatavošanās",
      season: "Ziema 2024/2025",
      description: "Īpašā ziemas treniņu programma, kas notiek iekštelpu apstākļos. Šajā laikā audzēkņi turpina attīstīt savas prasmes neatkarīgi no laika apstākļiem.",
      relatedLinks: [
        { title: "Ziemas sagatavošanās", href: "/lv/jaunumi/winter-preparation/" },
        { title: "Laukumu īre", href: "/lv/pakalpojumi/laukumu-ire/" }
      ],
      coverImage: "/src/assets/gallery-ziemas-sagatavosana-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/winter-training.jpg", alt: "Iekštelpu treniņš", caption: "Treniņš iekštelpu arēnā ziemas laikā" },
        { id: "2", src: "/src/assets/service-riding-lessons.jpg", alt: "Teorijas nodarbība", caption: "Teorijas apguves process" },
        { id: "3", src: "/src/assets/winter-equestrian.jpg", alt: "Zirgu aprūpe ziemā", caption: "Īpašā zirgu aprūpe ziemas sezonā" },
        { id: "4", src: "/src/assets/service-arena-rental.jpg", alt: "Siltas telpas", caption: "Siltas telpas treniņiem" },
        { id: "5", src: "/src/assets/Horse2.png", alt: "Ziemas zirgi", caption: "Zirgi ziemas treniņu laikā" },
        { id: "6", src: "/src/assets/Horse4.png", alt: "Ziemas jāšana", caption: "Ziemas apstākļos pielāgotā jāšana" }
      ]
    },
    "vasaras-nometne-2024": {
      title: "Vasaras nometne 2024",
      season: "Vasara 2024",
      description: "Neaizmirstamā vasaras nometne, kurā bērni pavadīja veselu nedēļu kopā ar zirgiem, apgūstot jāšanas prasmes un baudot dabas skaistumu.",
      relatedLinks: [
      ],
      coverImage: "/src/assets/gallery-vasaras-nometne-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/summer-camp-album.jpg", alt: "Vasaras nometne", caption: "Vasaras nometnes sākums" },
        { id: "2", src: "/src/assets/service-excursions.jpg", alt: "Dabas izpēte", caption: "Izpētot apkārtējās dabas skaistumu" },
        { id: "3", src: "/src/assets/Horse3.png", alt: "Vasaras jāšana", caption: "Brīvā dabā ar zirgiem" },
        { id: "4", src: "/src/assets/hero-equestrian.jpg", alt: "Grupu aktivitātes", caption: "Kopīgās vasaras aktivitātes" },
        { id: "5", src: "/src/assets/riding-school-training.jpg", alt: "Laukuma treniņi", caption: "Treniņi svaigā gaisā" },
        { id: "6", src: "/src/assets/Horse1.png", alt: "Draudzība", caption: "Jaunas draudzības ar zirgiem" }
      ]
    },
    "zirgu-apruupe-2024": {
      title: "Zirgu aprūpe 2024",
      season: "Gada garumā",
      description: "Kā mūsu audzēkņi mācās rūpēties par zirgiem - barošana, tīrīšana, veselības uzraudzība un ikdienas aprūpe.",
      relatedLinks: [
        { title: "Zirgu uzturēšana", href: "/lv/pakalpojumi/zirgu-uzturesana/" },
        { title: "Jāšanas treniņi", href: "/lv/pakalpojumi/jasanas-trenini/" }
      ],
      coverImage: "/src/assets/gallery-zirgu-apruupe-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/horse-care-album.jpg", alt: "Zirgu aprūpe", caption: "Ikdienas zirgu aprūpes darbi" },
        { id: "2", src: "/src/assets/service-horse-stable.jpg", alt: "Stalļu darbi", caption: "Stalļu uzkopšana un uzturēšana" },
        { id: "3", src: "/src/assets/Horse2.png", alt: "Zirgu barošana", caption: "Zirgu barošanas process" },
        { id: "4", src: "/src/assets/Horse4.png", alt: "Zirgu tīrīšana", caption: "Zirgu regulārā tīrīšana" },
        { id: "5", src: "/src/assets/service-other-services.jpg", alt: "Aprūpes prasmes", caption: "Audzēkņi apgūst aprūpes prasmes" },
        { id: "6", src: "/src/assets/Horse3.png", alt: "Rūpīga aprūpe", caption: "Mīļa un rūpīga zirgu aprūpe" }
      ]
    },
    "instruktoru-darbs-2024": {
      title: "Instruktoru darbs 2024",
      season: "2024. gads",
      description: "Mūsu pieredzējušo instruktoru ikdienas darbs - mācīšana, konsultēšana un audzēkņu attīstības veicināšana.",
      relatedLinks: [
        { title: "Jāšanas treniņi", href: "/lv/pakalpojumi/jasanas-trenini/" },
        { title: "Par mums", href: "/lv/" }
      ],
      coverImage: "/src/assets/gallery-instruktoru-darbs-1.jpg",
      photos: [
        { id: "1", src: "/src/assets/service-riding-lessons.jpg", alt: "Individuālās nodarbības", caption: "Instruktors individuālajā nodarbībā" },
        { id: "2", src: "/src/assets/riding-school-training.jpg", alt: "Grupu nodarbības", caption: "Grupu treniņu vadīšana" },
        { id: "3", src: "/src/assets/service-corporate.jpg", alt: "Korporatīvie treniņi", caption: "Speciālie korporatīvie treniņi" },
        { id: "4", src: "/src/assets/Horse1.png", alt: "Darbs ar zirgiem", caption: "Instruktora darbs ar mācību zirgiem" },
        { id: "5", src: "/src/assets/service-excursions.jpg", alt: "Ekskursiju vadīšana", caption: "Informatīvu ekskursiju organizēšana" },
        { id: "6", src: "/src/assets/hero-equestrian.jpg", alt: "Profesionālā pieeja", caption: "Profesionāla pieeja katram audzēknim" }
      ]
    }
  };

  const album = id ? albumData[id] : null;

  useEffect(() => {
    if (!album) {
      // Redirect to 404 or riding school gallery if album not found
      window.location.href = "/lv/galerija/jauno-jatnieku-skola/";
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
              <a href="/lv/galerija/jauno-jatnieku-skola/" className="hover:text-primary transition-colors">
                Jāšanas skola
              </a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-black font-medium">{album.title}</span>
            </nav>

            <div className="mb-8">
              <a 
                href="/lv/galerija/jauno-jatnieku-skola/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Atgriezties pie jāšanas skolas galerijas
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
                      {album.season}
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
                  
                  {/* Related Links */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Saistītās lapas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {album.relatedLinks.map((link: any, index: number) => (
                        <Button
                          key={index}
                          size="sm"
                          asChild
                          className="border border-primary text-primary rounded-xl
                                     transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 group"
                        >
                          <a href={link.href} className="text-inherit">
                            {link.title}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
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

export default RidingSchoolAlbumDetail;