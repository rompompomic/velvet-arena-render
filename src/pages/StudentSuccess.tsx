import Header from "@/components/Header";
import Footer from "@/components/Footer";
import eventImage from "@/assets/event-showjumping.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const StudentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Atpakaļ uz jaunumiem
          </Button>

          {/* Article Header */}
          <header className="mb-8">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              10. septembris 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mūsu audzēkņu panākumi sacensībās
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Apsveicam mūsu audzēkņus ar lieliskajiem rezultātiem nesenajās konkūra un dresūras sacensībās.
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-12 rounded-2xl overflow-hidden">
            <img 
              src={eventImage} 
              alt="Mūsu audzēkņu panākumi sacensībās" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Esam lepni par mūsu audzēkņu izcilajiem panākumiem nesenajās sacensībās. Viņu centība, veltītais laiks un profesionālo treneru vadība ir devusi lieliskus rezultātus.
            </p>

            <h2>Šķēršļu jāšanas sacensības</h2>
            
            <h3>Jauno jātnieku kategorija (līdz 16 gadiem)</h3>
            <ul>
              <li><strong>1. vieta</strong> - Anna Bērziņa ar zirgu "Thunderbolt" (80 cm šķēršļi)</li>
              <li><strong>2. vieta</strong> - Mārtiņš Ozoliņš ar zirgu "Silver Star" (80 cm šķēršļi)</li>
              <li><strong>3. vieta</strong> - Laura Kalniņa ar zirgu "Golden Dream" (60 cm šķēršļi)</li>
            </ul>

            <h3>Jauniešu kategorija (16-21 gads)</h3>
            <ul>
              <li><strong>1. vieta</strong> - Roberts Liepiņš ar zirgu "Black Beauty" (110 cm šķēršļi)</li>
              <li><strong>2. vieta</strong> - Kristīne Zariņa ar zirgu "Wind Dancer" (100 cm šķēršļi)</li>
            </ul>

            <h2>Dresūras sacensības</h2>
            
            <p>
              Arī dresūras sacensībās mūsu audzēkņi parādīja izcilus rezultātus:
            </p>

            <ul>
              <li><strong>1. vieta novicīšu klasē</strong> - Emma Pētersone ar zirgu "Moonlight Sonata"</li>
              <li><strong>2. vieta elementārā līmenī</strong> - Jānis Krūmiņš ar zirgu "Royal Prince"</li>
              <li><strong>3. vieta elementārā līmenī</strong> - Sandra Vitola ar zirgu "Elegant Lady"</li>
            </ul>

            <h2>Treneru komentāri</h2>
            
            <blockquote>
              <p>
                "Esmu īpaši lepns par mūsu jaunajiem jātniekiem. Viņi ir pierādījuši, ka ar pareizu treningu un veltību var sasniegt lieliskus rezultātus. Katrs no viņiem ir attīstījies ne tikai kā jātnieks, bet arī kā personība."
              </p>
              <footer>— Aigars Bregzis, galvenais treneris</footer>
            </blockquote>

            <h2>Turpmākie mērķi</h2>
            
            <p>
              Šie panākumi ir tikai sākums. Mūsu audzēkņi jau gatavo sevi nākamajām sacensībām, kas notiks oktobrī. Plānojam piedalīties gan vietējās, gan starptautiskās sacensībās.
            </p>

            <p>
              Īpaši priecājamies par to, ka arvien vairāk bērnu un jauniešu izvēlas jāšanu kā savu hobiju un sporta veidu. Tas liecina par mūsu skolas kvalitāti un treneru profesionalitāti.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Vēlaties pievienoties mūsu komandai?</h3>
            <p className="text-muted-foreground mb-6">
              Sāciet savu ceļu jāšanas sportā kopā ar mūsu pieredzējušajiem treneriem.
            </p>
            <Button size="lg">
              Pieteikties treniņiem
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default StudentSuccess;