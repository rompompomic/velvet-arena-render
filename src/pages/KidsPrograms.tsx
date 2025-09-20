import Header from "@/components/Header";
import Footer from "@/components/Footer";
import winterImage from "@/assets/winter-equestrian.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const KidsPrograms = () => {
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
              5. septembris 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Jaunas programmas bērniem no 4 gadiem
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Speciāli izstrādātas programmas vismazākajiem zirgu mīļotājiem, ņemot vērā vecuma īpatnības.
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-12 rounded-2xl overflow-hidden">
            <img 
              src={winterImage} 
              alt="Programmas bērniem" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Mēs ar lielu prieku paziņojam par jaunām, speciāli izstrādātām programmām vismazākajiem zirgu mīļotājiem – bērniem no 4 gadu vecuma. Šīs programmas ir veidotas, ņemot vērā bērnu attīstības īpatnības un vajadzības.
            </p>

            <h2>Programmu mērķi</h2>
            
            <p>
              Mūsu jaunās programmas ir vērstas uz:
            </p>
            <ul>
              <li>Drošības prasmju attīstīšanu ap zirgiem</li>
              <li>Pašapziņas un pārliecības veidošanu</li>
              <li>Fizisko spēju un koordinācijas uzlabošanu</li>
              <li>Empātijas un atbildības sajūtas attīstīšanu</li>
              <li>Sociālo prasmju pilnveidošanu</li>
            </ul>

            <h2>Programmu veidi</h2>
            
            <h3>1. "Pirmie soļi ar poniju" (4-6 gadi)</h3>
            <p>
              Šī programma ir īpaši veidota vismazākajiem dalībniekiem:
            </p>
            <ul>
              <li>Darbs ar mierīgiem, labi apmācītiem ponijiem</li>
              <li>30 minūšu nodarbības mazās grupās (maksimums 4 bērni)</li>
              <li>Spēles elementu izmantošana mācību procesā</li>
              <li>Pamata aprūpes prasmju apgūšana</li>
              <li>Vienkārši vingrinājumi sedlā</li>
            </ul>

            <h3>2. "Mazā jātnieka skola" (6-8 gadi)</h3>
            <p>
              Programma bērniem ar nelielu pieredzi vai tiem, kas vēlas attīstīt prasmes:
            </p>
            <ul>
              <li>45 minūšu nodarbības</li>
              <li>Pamatvingrinājumi un līdzsvara attīstīšana</li>
              <li>Zirgu aprūpes pamati</li>
              <li>Drošības noteikumu apgūšana</li>
              <li>Mazas grupas (maksimums 6 bērni)</li>
            </ul>

            <h3>3. "Brīvdienu nometnes"</h3>
            <p>
              Īpašas programmas skolas brīvlaikā:
            </p>
            <ul>
              <li>Pilnas dienas programmas (9:00-16:00)</li>
              <li>Dažādas aktivitātes: jāšana, aprūpe, spēles, māksla</li>
              <li>Ēdināšana iekļauta</li>
              <li>Maksimums 15 dalībnieki</li>
            </ul>

            <h2>Drošība pirmajā vietā</h2>
            
            <p>
              Visās programmās īpaša uzmanība tiek pievērsta drošībai:
            </p>
            <ul>
              <li>Speciāli apmācīti treneri darbam ar bērniem</li>
              <li>Augstas kvalitātes aizsargaprīkojums</li>
              <li>Nelieli grupas izmēri individuālai uzmanībai</li>
              <li>Regulāras drošības pārbaudes</li>
            </ul>

            <h2>Treneru kvalifikācija</h2>
            
            <p>
              Mūsu treneri, kas strādā ar bērniem, ir ieguvuši papildu kvalifikāciju:
            </p>
            <ul>
              <li>Sertifikāts darbam ar bērniem</li>
              <li>Pirmās palīdzības kursi</li>
              <li>Bērnu psiholoģijas pamati</li>
              <li>Regulāras profesionālās pilnveides aktivitātes</li>
            </ul>

            <h2>Reģistrācija un cenas</h2>
            
            <p>
              Programmas sākas 15. septembrī. Vietu skaits ir ierobežots, tāpēc iesakām reģistrēties pēc iespējas ātrāk.
            </p>
            
            <p>
              Speciālas cenas programmām:
            </p>
            <ul>
              <li>"Pirmie soļi ar poniju" - €25 par nodarbību</li>
              <li>"Mazā jātnieka skola" - €30 par nodarbību</li>
              <li>"Brīvdienu nometne" - €60 par dienu</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Reģistrējiet savu bērnu jau šodien!</h3>
            <p className="text-muted-foreground mb-6">
              Dodiet savam bērnam iespēju izjust īpašo saikni ar zirgiem un attīstīt jauna prasmes.
            </p>
            <Button size="lg">
              Reģistrēties programmā
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default KidsPrograms;