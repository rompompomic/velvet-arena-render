import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import serviceRiding from "@/assets/service-riding-lessons.jpg";

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("digital");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  // Get amount from URL params (in real app)
  const urlParams = new URLSearchParams(window.location.search);
  const amount = urlParams.get('amount') || '25';
  const price = parseFloat(amount);

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
              Pasūtījuma noformēšana
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Aizpildiet informāciju, lai noformētu dāvanu kartes pirkumu
            </p>
          </div>
        </section>

        {/* Checkout Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Billing & Shipping Form */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Rēķina un piegādes informācija</h2>
                
                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vārds *</Label>
                      <Input id="firstName" type="text" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Uzvārds *</Label>
                      <Input id="lastName" type="text" required />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country">Valsts / Reģions *</Label>
                    <Input id="country" type="text" defaultValue="Latvija" required />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Ielas adrese *</Label>
                    <Input id="address" type="text" placeholder="Mājas numurs un ielas nosaukums" required />
                  </div>

                  {/* City and Postcode */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Pilsēta *</Label>
                      <Input id="city" type="text" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode">Pasta indekss *</Label>
                      <Input id="postcode" type="text" required />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefons *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-pasta adrese *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>

                  {/* Order Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Papildu informācija</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Piezīmes par pasūtījumu, piemēram, īpašas piegādes norādes."
                      rows={4}
                    />
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="space-y-8">
                
                {/* Order Details */}
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-6">Jūsu pasūtījums</h2>
                  
                  <div className="space-y-4">
                    {/* Product */}
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="font-medium">Produkts</span>
                      <span className="font-medium">Kopsumma</span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span>Dāvanu karte {amount}€</span>
                      <span>€{price.toFixed(2)}</span>
                    </div>

                    {/* Subtotal */}
                    <div className="flex justify-between py-3 border-t border-border">
                      <span className="font-medium">Starpsumma</span>
                      <span className="font-medium">€{price.toFixed(2)}</span>
                    </div>

                    {/* Shipping */}
                    <div className="py-3 border-b border-border">
                      <div className="font-medium mb-3">Piegāde</div>
                      <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="digital" id="digital" />
                          <Label htmlFor="digital">Digitālā dāvanu karte (Bezmaksas)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="printed" id="printed" />
                          <Label htmlFor="printed">Drukāta dāvanu karte (+€2.00)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between py-3 text-xl font-bold">
                      <span>Kopā</span>
                      <span>€{(price + (deliveryMethod === 'printed' ? 2 : 0)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-6">Maksājums</h2>
                  
                  <div className="space-y-6">
                    {/* Payment Method */}
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" checked />
                      <Label htmlFor="card">Maksājumu karte</Label>
                    </div>

                    {/* Terms Agreement */}
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        Es esmu izlasījis un piekrītu mājaslapas{" "}
                        <a href="/lv/lietosanas-noteikumi/" className="text-primary hover:underline">
                          lietošanas noteikumiem
                        </a> *
                      </Label>
                    </div>

                    {/* Buy Button */}
                    <Button 
                      className="w-full py-4 text-lg font-semibold"
                      disabled={!agreedToTerms}
                      asChild
                    >
                      <a href="/lv/paldies-par-pirkumu/">
                        Pirkt
                      </a>
                    </Button>
                  </div>
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

export default Checkout;