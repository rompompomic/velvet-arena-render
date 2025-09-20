import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";

const Kontakti = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Ziņojums nosūtīts!", description: "Mēs ar jums sazināsimies tuvākajā laikā." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO как на Pakalpojumi; добавлен отступ сверху под фикс-хедер */}
      <section className="relative mt-16 md:mt-20">
        <div className="absolute inset-0">
          <img
            src={contactHeroBg}
            alt="Kontakti"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl py-20 md:py-28 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Kontakti
          </h1>
          <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Sazinieties ar mums – mēs ar prieku atbildēsim uz jūsu jautājumiem
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <main className="pt-12 md:pt-16 pb-0">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Форма */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Sūtīt ziņojumu</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Vārds *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-pasts *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefons</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Ziņojums *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="mt-1" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white rounded-xl 
                               transition-all duration-300 hover:bg-primary-700 hover:scale-105"
                  >
                    Nosūtīt ziņojumu
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Контакты */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Kontaktinformācija</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefons</h3>
                      <a href="tel:+37128677177" className="text-muted-foreground hover:text-primary transition-colors">
                        +371 28677177
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-pasts</h3>
                      <a href="mailto:info@latvianhorses.lv" className="text-muted-foreground hover:text-primary transition-colors">
                        info@latvianhorses.lv
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adrese</h3>
                      <p className="text-muted-foreground">"Zustrenes", Inčukalns, LV-2141, Latvija</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Svarīga informācija</h3>
                      <p className="text-muted-foreground text-sm">
                        Nodarbību grafiks var mainīties. Mēs ar jums sazināsimies, lai apstiprinātu visas detaļas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Соцсети */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Sekojiet mums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground" aria-label="Facebook" asChild>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground" aria-label="Instagram" asChild>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground" aria-label="X (Twitter)" asChild>
                      <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.73l-4.72-6.2L5.44 22H2.5l7.06-8.06L1.5 2h6.86l4.33 5.73L18.244 2Zm-2.36 18h1.77L8.21 4h-1.8l9.474 16Z" />
                        </svg>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground" aria-label="TikTok" asChild>
                      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path d="M12.5 2h2.2c.2 1.1.8 2.1 1.6 2.9a5.9 5.9 0 0 0 3 1.5v2.3a8.3 8.3 0 0 1-3.9-1.1v6.6a6.6 6.6 0 1 1-6.6-6.6c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1a4.1 4.1 0 1 0 4.1 4.1V2Z" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Sekojiet mūsu jaunumiem sociālajos tīklos un uzziniet par jaunākajiem pasākumiem un treniņiem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* КАРТА — отдельная full-bleed секция, без контейнера, вплотную к футеру */}
        <section className="w-full">
          {/* Если MapSection сам ограничивает ширину — убедись, что внутри него нет container */}
          <div className="w-full">
            <MapSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakti;
