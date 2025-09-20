import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ChevronRight } from "lucide-react";
import heroImage from "@/assets/service-riding-lessons.jpg";
import ridingTraining from "@/assets/riding-school-training.jpg";
import summerCamp from "@/assets/summer-camp-album.jpg";
import horseCare from "@/assets/horse-care-album.jpg";
import winterTraining from "@/assets/winter-training.jpg";
import galleryIkdienasDzive from "@/assets/gallery-ikdienas-dzive-1.jpg";
import galleryJaunieJatniekki from "@/assets/gallery-jaunie-jatniekki-1.jpg";
import galleryZiemasSagatavosana from "@/assets/gallery-ziemas-sagatavosana-1.jpg";
import galleryVasarasNometne from "@/assets/gallery-vasaras-nometne-1.jpg";
import galleryZirguApruupe from "@/assets/gallery-zirgu-apruupe-1.jpg";
import galleryInstruktoruDarbs from "@/assets/gallery-instruktoru-darbs-1.jpg";

const RidingSchoolGallery = () => {
  // Mock data for riding school albums
  const schoolAlbums = [
    {
      id: "ikdienas-dzive-2025",
      title: "Ikdienas dzīve skolā",
      season: "2025. gads",
      coverImage: galleryIkdienasDzive,
      photoCount: 52,
      description: "Mūsu audzēkņu ikdienas aktivitātes, treniņi un brīvais laiks ar zirgiem"
    },
    {
      id: "jaunie-jatniekki-2025",
      title: "Jaunie jātnieki",
      season: "Pavasaris 2025",
      coverImage: galleryJaunieJatniekki,
      photoCount: 38,
      description: "Bērnu pirmie soļi jāšanas mākslā un draudzība ar zirgiem"
    },
    {
      id: "ziemas-sagatavosana-2025",
      title: "Ziemas sagatavošanās",
      season: "Ziema 2024/2025",
      coverImage: galleryZiemasSagatavosana,
      photoCount: 29,
      description: "Īpašā ziemas treniņu programma iekštelpu apstākļos"
    },
    {
      id: "vasaras-nometne-2024",
      title: "Vasaras nometne",
      season: "Vasara 2024",
      coverImage: galleryVasarasNometne,
      photoCount: 67,
      description: "Nezarstamas vasaras atmiņas ar zirgiem dabas vidē"
    },
    {
      id: "zirgu-apruupe-2024",
      title: "Zirgu aprūpe un ikdiena",
      season: "Visu gadu",
      coverImage: galleryZirguApruupe,
      photoCount: 43,
      description: "Kā mēs rūpējamies par saviem četrkājainajiem draugiem"
    },
    {
      id: "instruktoru-darbs-2024",
      title: "Instruktoru darbs",
      season: "2024. gads",
      coverImage: galleryInstruktoruDarbs,
      photoCount: 31,
      description: "Mūsu pieredzējušo instruktoru ikdienas darbs ar audzēkņiem"
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
              Jāšanas skola
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Ieskats mūsu skolas ikdienas dzīvē — audzēkņu progress, zirgu aprūpe un skaistākie mirkļi kopā.
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
              <span className="text-black font-medium">Jāšanas skola</span>
            </nav>

            {/* Story Layout - Featured Album */}
            <div className="mb-12">
              <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-96 overflow-hidden">
                    <img
                      src={schoolAlbums[0].coverImage}
                      alt={schoolAlbums[0].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      {schoolAlbums[0].photoCount}
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                      Populārākais
                    </span>
                    <h2 className="text-3xl font-bold mb-4">{schoolAlbums[0].title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {schoolAlbums[0].description}
                    </p>
                    <Button
                      className="w-fit justify-between bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                      asChild
                    >
                      <a href={`/lv/galerija/jauno-jatnieku-skola/${schoolAlbums[0].id}/`}>
                        Apskatīt albumu
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Albums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schoolAlbums.slice(1).map((album) => (
                <div
                  key={album.id}
                  className="glass-card overflow-hidden hover-lift group cursor-pointer"
                  onMouseEnter={() => setHoveredAlbum(album.id)}
                  onMouseLeave={() => setHoveredAlbum(null)}
                >
                  <a href={`/lv/galerija/jauno-jatnieku-skola/${album.id}/`}>
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
                          {album.season}
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

export default RidingSchoolGallery;