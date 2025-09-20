import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Mail, Download, Calendar, Phone } from "lucide-react";
import serviceRiding from "@/assets/service-riding-lessons.jpg";

const PaldiesParPirkumu = () => {
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
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
              Paldies par pirkumu!
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto text-white/90">
              Jūsu pasūtījums ir veiksmīgi apstrādāts. Drīzumā saņemsiet 
              apstiprinājumu un dāvanu karti.
            </p>
          </div>
        </section>

        {/* Success Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Success Message */}
            <div className="glass-card p-8 md:p-12 text-center mb-12">
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Jūsu dāvanu karte ir gatava!
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Pasūtījuma numurs: <span className="font-mono font-bold text-foreground">#DK-2024-001</span>
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <p className="text-foreground">
                    Jūsu dāvanu karte ir nosūtīta uz norādīto e-pasta adresi. 
                    Ja neesat saņēmuši e-pastu, lūdzu pārbaudiet spam mapi.
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
              {/* Email Confirmation */}
              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">E-pasta apstiprinājums</h3>
                <p className="text-sm text-muted-foreground">
                  Apstiprinājums ar pasūtījuma detaļām nosūtīts uz jūsu e-pastu
                </p>
              </div>

              {/* Download */}
              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Download className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Lejupielādēt karti</h3>
                <p className="text-sm text-muted-foreground">
                  Dāvanu karti var lejupielādēt un izdrukāt mājās
                </p>
              </div>

              {/* Validity */}
              <div className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Derīguma termiņš</h3>
                <p className="text-sm text-muted-foreground">
                  Dāvanu karte derīga 12 mēnešus no pirkuma datuma
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Nepieciešama palīdzība?</h3>
              <p className="text-muted-foreground mb-6">
                Ja jums ir jautājumi par pasūtījumu vai dāvanu karti, sazinieties ar mums:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium">+371 28677177</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">info@latvianhorses.lv</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button asChild className="px-8 py-3">
                <a href="/lv/davanu-kartes/">
                  Pirkt vēl vienu karti
                </a>
              </Button>
              
              <Button variant="outline" asChild className="px-8 py-3">
                <a href="/">
                  Atgriezties sākumlapā
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaldiesParPirkumu;
