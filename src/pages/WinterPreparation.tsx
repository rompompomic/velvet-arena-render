import Header from "@/components/Header";
import Footer from "@/components/Footer";
import winterImage from "@/assets/winter-equestrian.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const WinterPreparation = () => {
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
              15. septembris 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ziemas sezona: zirgu sagatavošana aukstumam
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stāstām par to, kā pareizi sagatavot zirgus ziemas periodam un nodrošināt tiem komfortablus turēšanas apstākļus.
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-12 rounded-2xl overflow-hidden">
            <img 
              src={winterImage} 
              alt="Ziemas sagatavošana zirgiem" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Ziemas periods ir īpašs laiks gan zirgiem, gan to īpašniekiem. Pareiza sagatavošana un aprūpe ziemas mēnešos ir būtiska, lai nodrošinātu zirgu veselību un labsajūtu.
            </p>

            <h2>Galvenie sagatavošanas posmi</h2>
            
            <h3>1. Spalvas maiņa un aprūpe</h3>
            <p>
              Rudens laikā zirgi dabīgi nomaina savu vasaras spalvu pret biezāku ziemas spalvu. Šajā laikā ir svarīgi:
            </p>
            <ul>
              <li>Regulāri sukāt zirgu, lai atbrīvotos no atmirušajiem matiem</li>
              <li>Nodrošināt kvalitatīvu barību, kas veicina spalvas augšanu</li>
              <li>Izvairīties no pārāk biežas mazgāšanas</li>
            </ul>

            <h3>2. Uztura korekcijas</h3>
            <p>
              Ziemas periodā zirgu organisma enerģijas patēriņš palielinās, lai uzturētu ķermeņa temperatūru:
            </p>
            <ul>
              <li>Palielināt šķiedru (siena) daudzumu uzturā</li>
              <li>Pievienot kvalitatīvu koncentrātu barību</li>
              <li>Nodrošināt pastāvīgu piekļuvi svaigam ūdenim</li>
            </ul>

            <h3>3. Mājokļa sagatavošana</h3>
            <p>
              Stallim jābūt sagatavotam ziemas apstākļiem:
            </p>
            <ul>
              <li>Pārbaudīt jumta hermētiskumu</li>
              <li>Nodrošināt pietiekamu ventilāciju bez caurvēja</li>
              <li>Sagatavot papildu pakaišus</li>
              <li>Pārbaudīt ūdensapgādes sistēmu</li>
            </ul>

            <h2>Praktiskās rekomendācijas</h2>
            
            <p>
              Mūsu pieredzē, ziemas periodā īpaši svarīgi ir uzmanīgi sekot līdzi zirgu kondīcijai un uzvedībai. Regulāras veterinārās pārbaudes palīdz savlaicīgi identificēt iespējamās problēmas.
            </p>

            <p>
              Ja jums ir jautājumi par zirgu sagatavošanu ziemai, lūdzu, sazinieties ar mūsu speciālistiem. Mēs ar prieku palīdzēsim izveidot individuālu aprūpes plānu jūsu zirgam.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Nepieciešama palīdzība?</h3>
            <p className="text-muted-foreground mb-6">
              Mūsu speciālisti ir gatavi palīdzēt jums sagatavot jūsu zirgu ziemas sezonai.
            </p>
            <Button size="lg">
              Sazināties ar speciālistiem
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default WinterPreparation;