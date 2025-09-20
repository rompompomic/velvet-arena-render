import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-equestrian.jpg";
import eventImage from "@/assets/event-showjumping.jpg";
import ridingImage from "@/assets/service-riding-lessons.jpg";

const Galerija = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section - same style as Pakalpojumi */}
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
              Galerija
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Apskatiet mūsu fotogrāfiju kolekciju — no ikdienas dzīves skolā līdz svarīgākajiem pasākumiem un sacensībām.
            </p>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event Gallery Block */}
              <div className="glass-card overflow-hidden hover-lift group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={eventImage}
                    alt="Pasākumu galerija"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Pasākumi un sacensības</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Fotogrāfijas no mūsu organizētajiem pasākumiem, sacensībām un īpašajiem notikumiem.
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <Button
                    className="w-full justify-between bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                    asChild
                  >
                    <a href="/lv/galerija/pasakumi/">
                      Skatīt pasākumu galeriju
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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

              {/* Riding School Gallery Block */}
              <div className="glass-card overflow-hidden hover-lift group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ridingImage}
                    alt="Jāšanas skolas galerija"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Jāšanas skola</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Ikdienas dzīve skolā, treniņi, audzēkņu panākumi un skaistākie mirkļi ar zirgiem.
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <Button
                    className="w-full justify-between bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                    asChild
                  >
                    <a href="/lv/galerija/jauno-jatnieku-skola/">
                      Skatīt skolas galeriju
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Galerija;