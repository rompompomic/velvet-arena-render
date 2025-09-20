import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Import a background image
import serviceRiding from "@/assets/service-riding-lessons.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO with background image matching Pakalpojumi style */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={serviceRiding}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
          </div>

          <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
            <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight drop-shadow-sm mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide drop-shadow-sm mb-6 uppercase">
              LAPA NAV ATRASTA
            </h2>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90 mb-8">
              Ups! Lapa, ko meklējat, neeksistē. Tā varētu būt pārvietota vai dzēsta.
            </p>
            
            <Button
              className="bg-primary text-white rounded-xl px-8 py-3
                         transition-all duration-300 hover:bg-primary-700 hover:scale-105"
              asChild
            >
              <a href="/lv/" className="!text-white">
                Atgriezties uz sākumlapu
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
