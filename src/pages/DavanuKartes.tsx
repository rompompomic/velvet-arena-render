import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceRiding from "@/assets/service-riding-lessons.jpg";
import excursionsImage from "@/assets/service-excursions.jpg";

const DavanuKartes = () => {
  const [customAmount, setCustomAmount] = useState("");

  const giftCards = [
    { amount: 25, price: "€25.00" },
    { amount: 50, price: "€50.00" },
    { amount: 100, price: "€100.00" },
    { custom: true }, // новая карточка
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
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
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Dāvanu kartes
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Dāviniet iespēju piedzīvot neaizmirstamas emocijas ar zirgiem. 
              Mūsu dāvanu kartes ir ideāls veids, kā pārsteigt tuvos cilvēkus.
            </p>
          </div>
        </section>

        {/* Gift Cards Grid */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#2f2f2f14" }}>>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {giftCards.map((card, index) => (
                <div
                  key={index}
                  className="group relative glass-card overflow-hidden hover-lift cursor-pointer transition-all duration-300"
                >
                  <div className="relative h-96">
                    <img
                      src={excursionsImage}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative h-full p-8 flex flex-col justify-center items-center text-center">
                      <h3 className="text-white text-3xl font-bold mb-4">
                        Dāvanu karte
                      </h3>
                      {card.custom ? (
                        <div className="text-white text-3xl font-semibold">
                          Savs apjoms
                        </div>
                      ) : (
                        <div className="text-white text-5xl font-extrabold">
                          {card.amount}€
                        </div>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6">
                      {card.custom ? (
                        <>
                          <input
                            type="number"
                            min="5"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Ievadiet summu (€)"
                            className="w-40 rounded-lg px-3 py-2 text-center text-black focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <Button
                            asChild
                            disabled={!customAmount}
                            className="bg-primary text-white rounded-xl px-8 py-3 text-lg font-semibold 
                                       transition-all duration-300 hover:bg-primary-700 hover:scale-105"
                          >
                            <a href={`/lv/checkout/?amount=${customAmount || 0}`} className="!text-white">
                              Pirkt
                            </a>
                          </Button>
                        </>
                      ) : (
                        <Button
                          asChild
                          className="bg-primary text-white rounded-xl px-10 py-4 text-lg font-semibold 
                                     transition-all duration-300 hover:bg-primary-700 hover:scale-105"
                        >
                          <a href={`/lv/checkout/?amount=${card.amount}`} className="!text-white">
                            Pirkt
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
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

export default DavanuKartes;
