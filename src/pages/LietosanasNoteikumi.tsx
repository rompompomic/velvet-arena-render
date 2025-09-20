import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LietosanasNoteikumi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            style={{ borderColor: "#963026" }}
            className="border-2 p-8 md:p-12 rounded-lg bg-card my-[60px]"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Lietošanas noteikumi
            </h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Terms of Use
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Dāvanu karšu pasūtīšanas un lietošanas noteikumi (distances līgums)
              </h3>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Vispārīgie noteikumi</h4>
                <p className="mb-3">
                  <strong>1.1.</strong> Šie dāvanu karšu pasūtīšanas un lietošanas noteikumi (“Noteikumi”) sniedz informāciju par SIA “Prano” (“Pārdevējs”) interneta vietnē www.latvianhorses.lv (Jauno Jātnieku skola) piedāvāto dāvanu karšu iegādi un lietošanu. Šie Noteikumi ir distances līgums starp Pārdevēju un šo Noteikumu 5.1. punktā norādīto personu (turpmāk — “Pircējs”), Pārdevējs un Pircējs kopā — “Puses”.
                </p>
                <p className="mb-3">
                  <strong>1.2.</strong> Dāvanu kartes tiek izsniegtas, lai Pircēji vai lietotāji norēķinātos par SIA “Prano” pakalpojumiem. Dāvanu kartes nav paredzētas skaidras naudas izsniegšanai.
                </p>
                <p className="mb-3">
                  <strong>1.4.</strong> Šie Noteikumi var tikt grozīti Noteikumu 6. sadaļā noteiktajā kārtībā. Katru reizi, veicot pasūtījumu, ieteicams pārskatīt Noteikumus, lai pārliecinātos par piemērojamiem nosacījumiem. Pēdējie grozījumi veikti 30.04.2021.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Informācija par Pārdevēju</h4>
                <p className="mb-3">
                  <strong>2.1.</strong> Šie Noteikumi tiek piemēroti, veicot dāvanu karšu pasūtīšanu un iegādi interneta vietnē www.latvianhorses.lv. Pārdevējs ir SIA “Prano” — sabiedrība ar ierobežotu atbildību, kas reģistrēta Latvijas Republikas Komercreģistrā, reģ. Nr. 40002081792, juridiskā adrese: Rīga, Mārupes iela 4, LV-1002.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Informācija par preci</h4>
                <p className="mb-3">
                  <strong>3.1.</strong> Pamatojoties uz Pircēja pasūtījumiem interneta vietnē, Pārdevējs pārdod dāvanu kartes, kas paredzētas norēķiniem par SIA “Prano” pakalpojumiem.
                </p>
                <p className="mb-3">
                  <strong>3.2.</strong> Pārdevējs piedāvā dāvanu kartes 25 EUR, 50 EUR un 100 EUR vērtībā.
                </p>
                <p className="mb-3">
                  <strong>3.3.</strong> Ar dāvanu karti var norēķināties Jauno Jātnieku skolā, Inčukalnā, “Zustrenes”, par SIA “Prano” sniegtajiem pakalpojumiem.
                </p>
                <p className="mb-3">
                  <strong>3.4.</strong> Dāvanu kartei ir ierobežots derīguma termiņš — ne ilgāks kā 12 (divpadsmit) mēneši no iegādes brīža. Termiņš ir norādīts uz kartes, tas netiek pagarināts vai atjaunots. Pēc termiņa beigām Pircējs un kartes lietotājs zaudē prasījuma tiesības pret Pārdevēju, un kartes atlikums tiek dzēsts.
                </p>
                <p className="mb-3">
                  <strong>3.5.</strong> Dāvanu karti var izmantot pilnā vai daļējā apmērā. Neizmantoto atlikumu neizmaksā skaidrā naudā; to var izmantot tikai pakalpojumu apmaksai Jauno Jātnieku skolā.
                </p>
                <p className="mb-3">
                  <strong>3.6.</strong> Dāvanu karti var lietot kopā ar citiem maksāšanas līdzekļiem — maksājumu karti vai skaidru naudu.
                </p>
                <p className="mb-3">
                  <strong>3.7.</strong> Pēc Pircēja izvēles dāvanu karti noformē elektroniski vai papīra formātā.
                </p>
                <p className="mb-3">
                  <strong>3.8.</strong> Dāvanu karte nav apmaināma pret naudu ne tās derīguma termiņa laikā, ne pēc tā.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Pakalpojumu cena un apmaksa</h4>
                <p className="mb-3">
                  <strong>4.1.</strong> Dāvanu karšu cenas ir norādītas vietnē www.latvianhorses.lv.
                </p>
                <p className="mb-3">
                  <strong>4.2.</strong> Par dāvanu karšu iegādi var norēķināties ar maksājumu (kredīta vai debeta) karti.
                </p>
                <p className="mb-3">
                  <strong>4.3.</strong> Dāvanu karte tiek sagatavota pēc pasūtījuma pabeigšanas vietnē un kad Pārdevējs saņem informāciju par maksājuma saņemšanu bankas kontā.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Līguma noslēgšana</h4>
                <p className="mb-3">
                  <strong>5.1.</strong> Dāvanu kartes šajā vietnē var iegādāties:
                </p>
                <p className="mb-3 ml-4">a) fiziskas personas, kas sasniegušas 18 gadu vecumu;</p>
                <p className="mb-3 ml-4">b) juridiskas personas.</p>
                <p className="mb-3">
                  <strong>5.2.</strong> Piekrītot šiem Noteikumiem, Pircējs apliecina, ka tam ir tiesības veikt pasūtījumus šajā vietnē.
                </p>
                <p className="mb-3">
                  <strong>5.3.</strong> Pārdevēja noteiktā pasūtīšanas kārtība nodrošina Pircējam iespēju pārbaudīt un izlabot kļūdas pirms galīgā pasūtījuma iesniegšanas. Ieteicams rūpīgi pārbaudīt katru soli.
                </p>
                <p className="mb-3">
                  <strong>5.4.</strong> Līgums starp Pircēju un Pārdevēju uzskatāms par noslēgtu brīdī, kad Pircējs aizpilda visu nepieciešamo informāciju, izvēlas dāvanu karti, norāda vārdu, uzvārdu/nosaukumu, adresi, tālruni, e-pastu, piegādes veidu, iepazīstas ar Noteikumiem, nospiež “Veikt pasūtījumu” un apmaksā to. Neapmaksājot pasūtījumu, Līgums nav noslēgts.
                </p>
                <p className="mb-3">
                  <strong>5.5.</strong> Pēc apmaksas Pārdevējs nosūta Pircējam e-pastu, kas apstiprina pasūtījuma saņemšanu.
                </p>
                <p className="mb-3">
                  <strong>5.6.</strong> Ja izvēlēta elektroniska piegāde, dāvanu karte tiek nosūtīta uz Pircēja e-pasta adresi 1 (vienas) dienas laikā no apmaksas brīža.
                </p>
                <p className="mb-3">
                  <strong>5.7.</strong> Ja izvēlēta papīra forma, Pārdevējs informē Pircēju ar īsziņu, kad karte ir gatava saņemšanai Jauno Jātnieku skolā, Inčukalnā, “Zustrenes”. Pirms izsniegšanas Pārdevējs var pieprasīt personas identifikāciju.
                </p>
                <p className="mb-3">
                  <strong>5.8.</strong> Katrs noslēgtais līgums (pasūtījums) tiek reģistrēts un glabāts vietnes datu bāzē.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Tiesības grozīt noteikumus</h4>
                <p className="mb-3">
                  <strong>6.1.</strong> Pārdevējs patur tiesības grozīt šos Noteikumus, tajā skaitā saistībā ar:
                </p>
                <p className="mb-3 ml-4">a) apmaksas noteikumu izmaiņām;</p>
                <p className="mb-3 ml-4">b) piemērojamo tiesību aktu izmaiņām.</p>
                <p className="mb-3">
                  <strong>6.2.</strong> Katru reizi, slēdzot Līgumu, piemērojama tā Noteikumu redakcija, kas ir spēkā Līguma slēgšanas dienā.
                </p>
                <p className="mb-3">
                  <strong>6.3.</strong> Grozot Noteikumus, Pārdevējs informē Pircēju savā interneta vietnē, norādot grozījumu datumu 1.4. punktā.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Personas datu apstrāde</h4>
                <p className="mb-3">
                  Sadaļas saturs atbilstoši vietējiem datu aizsardzības normatīvajiem aktiem (GDPR).
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Pušu tiesības un pienākumi</h4>
                <p className="mb-3">
                  <strong>8.1.</strong> Pārdevēja pienākumi izriet no šiem Noteikumiem un Latvijas Republikas tiesību aktiem.
                </p>
                <p className="mb-3">
                  <strong>8.2.</strong> Pārdevējam ir tiesības:
                </p>
                <p className="mb-3 ml-4">nodot pasūtījuma izpildi trešajai personai;</p>
                <p className="mb-3 ml-4">atteikties izsniegt dāvanu karti, ja pastāv pamatotas aizdomas par nelikumīgi iegūtu līdzekļu legalizāciju;</p>
                <p className="mb-3 ml-4">īstenot citas tiesības, kas izriet no tiesību aktiem.</p>
                <p className="mb-3">
                  <strong>8.3.</strong> Pircēja pienākumi:
                </p>
                <p className="mb-3 ml-4">sniegt pasūtījuma formā tikai pareizu un pilnīgu informāciju;</p>
                <p className="mb-3 ml-4">godprātīgi lietot vietni un nekaitēt tās darbībai;</p>
                <p className="mb-3 ml-4">nododot karti trešajai personai, iepazīstināt to ar Noteikumiem, īpaši par derīguma termiņu;</p>
                <p className="mb-3 ml-4">ievērot šajos Noteikumos un normatīvajos aktos noteiktās prasības.</p>
                <p className="mb-3">
                  <strong>8.4.</strong> Pircēja tiesības:
                </p>
                <p className="mb-3 ml-4">nodot dāvanu karti jebkurai trešajai personai vai izmantot to pašam;</p>
                <p className="mb-3 ml-4">īstenot citas tiesības, kas paredzētas tiesību aktos.</p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Atbildība</h4>
                <p className="mb-3">
                  <strong>9.1.</strong> Par Noteikumu neizpildi Puses atbild saskaņā ar spēkā esošajiem normatīvajiem aktiem.
                </p>
                <p className="mb-3">
                  <strong>9.2.</strong> Puses tiek atbrīvotas no atbildības, ja neizpilde radusies nepārvaramas varas apstākļu dēļ (ugunsgrēks, zemestrīce, karadarbība, valsts institūciju darbība u. c.).
                </p>
                <p className="mb-3">
                  <strong>9.3.</strong> Pārdevējs neatbild par trūkumiem, kas radušies nepilnīgas vai nepareizas Pircēja sniegtās informācijas dēļ.
                </p>
                <p className="mb-3">
                  <strong>9.4.</strong> Pircējs atbild par iesniegto datu pareizību un to kļūdu sekām.
                </p>
                <p className="mb-3">
                  <strong>9.5.</strong> Pārdevējs tiek atbrīvots no atbildības gadījumos, kad zaudējumi radušies tāpēc, ka Pircējs nav ievērojis Noteikumus vai Privātuma politiku.
                </p>
                <p className="mb-3">
                  <strong>9.6.</strong> Pārdevējam, pārkāpjot Noteikumus, ir pienākums atlīdzināt Pircējam paredzamos zaudējumus.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Nobeiguma noteikumi</h4>
                <p className="mb-3">
                  <strong>10.1.</strong> Izmaiņas stājas spēkā ar to publicēšanas brīdi vietnē www.latvianhorses.lv.
                </p>
                <p className="mb-3">
                  <strong>10.2.</strong> Noteikumiem piemēro Latvijas Republikas tiesību normas.
                </p>
                <p className="mb-3">
                  <strong>10.3.</strong> Strīdi tiek risināti sarunu ceļā; ja vienošanās netiek panākta 30 dienu laikā, strīds nododams Latvijas tiesai.
                </p>
              </section>

              <section className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">• Atteikuma tiesības</h4>
                <p className="mb-3">
                  <strong>11.1.</strong> Patērētājs (fiziska persona) var izmantot atteikuma tiesības saskaņā ar Patērētāju tiesību aizsardzības likumu, atkāpjoties no līguma 14 kalendāro dienu laikā. Termiņš beidzas 15. dienā pēc līguma noslēgšanas.
                </p>
                <p className="mb-3">
                  <strong>11.2.</strong> Atteikuma tiesības neattiecas uz Ministru kabineta 2014. gada 20. maija noteikumu Nr.255 “Noteikumi par distances līgumu” 22. punktā noteiktajiem gadījumiem, tostarp, ja pakalpojuma sniegšana pilnībā pabeigta pirms atteikuma termiņa beigām.
                </p>
                <p className="mb-3">
                  <strong>11.3.</strong> Pārdevējs atmaksā saņemtos maksājumus 30 dienu laikā pēc savlaicīga atteikuma paziņojuma saņemšanas.
                </p>
                <p className="mb-3">
                  <strong>11.4.</strong> Svarīgi: Pasūtītājam ir jāmaksā proporcionāla maksa par saņemtajiem pakalpojumiem līdz atteikuma brīdim, ja par to ir ticis informēts.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-muted">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Piezīme:</strong> Nodarbību laiks var mainīties — sazināsimies ar jums un precizēsim visas nianses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LietosanasNoteikumi;
