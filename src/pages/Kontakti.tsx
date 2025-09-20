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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Ziņojums nosūtīts!",
      description: "Mēs ar jums sazināsimies tuvākajā laikā.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kontakti
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Sazinieties ar mums – mēs ar prieku atbildēsim uz jūsu jautājumiem
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Sūtīt ziņojumu</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Vārds *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-pasts *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefons</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Ziņojums *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Nosūtīt ziņojumu
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
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
                      <p className="text-muted-foreground">
                        "Zustrenes", Inčukalns, LV-2141, Latvija
                      </p>
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

              {/* Social Media */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Sekojiet mums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Sekojiet mūsu jaunumiem sociālajos tīklos un uzziniet par jaunākajiem pasākumiem un treniņiem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <MapSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakti;