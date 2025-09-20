import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivatumaPolitika = () => {
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
              Privātuma politika
            </h1>

            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <section className="mb-8">
                <p className="mb-4">
                  Mēs, biedrība "Jauno jātnieku skola", turpmāk tekstā- Mēs vai Biedrība, esam Latvijā vadošie nacionāla un starptautiska līmeņa jāšanas sacensību organizatori. Mēs attīstāmies un sniedzam arvien jaunus pakalpojumus, kā piemēram jāšanas sporta treniņi. Mēs nodrošinām ne tikai kvalitatīvu sacensību un treniņu organizāciju, bet arī apmeklētāju un klientu, turpmāk tekstā- Jūsu, personas datu aizsardzību.
                </p>
                <p className="mb-4">
                  Ar šo Privātuma politiku, turpmāk tekstā – Politika, mēs sniedzam informāciju par to, kā vācam, apstrādājam, glabājam, kopīgojam, strukturējam, izpaužam, labojam, iznīcinām un aizsargājam Jūsu personas datus, kā informējam par tiesībām, kas Jums ir pieejamas saistībā ar mūsu veikto personas datu apstrādi, palīdzam saprast kādā veidā un kādiem mērķiem dati tiek apstrādāti. Šī Politika attiecas uz jebkuru fizisku personu datiem, ko esam ieguvuši tieši no Jums, kā arī tādiem personas datiem, ko esam ieguvuši no trešajām personām.
                </p>
                <p className="mb-4">
                  Ja Mēs atjaunināsim šo Politiku, visas izmaiņas, kā arī Politikas vēsturiskās redakcijas, tiks publicētas Biedrības mājaslapā www.latvianhorses.lv.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datu pārzinis</h2>
                <p className="mb-3">
                  <strong>1.1.</strong> Personas datu apstrādes pārzinis ir biedrība "Jauno jātnieku skola", reģ. Nr. LV40008114442, juridiskā adrese: Mārupes iela 4, Rīga, LV-1002, tel.: +371 28677177 (turpmāk tekstā "Biedrība"), mājaslapa: www.latvianhorses.lv.
                </p>
                <p className="mb-3">
                  <strong>1.2.</strong> Datu aizsardzības speciālisti: SIA "DataWay", e-pasts – info@dataway.lv
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tiesiskais pamats</h2>
                <p className="mb-3">
                  <strong>2.1.</strong> Eiropas Parlamenta un padomes Regula Nr.2016/679 (2016. gada 27.aprīlis) par fizisku personu aizsardzību attiecībā uz personas datu apstrādi un šādu datu brīvu apriti,
                </p>
                <p className="mb-3">
                  <strong>2.2.</strong> Fizisko personu datu apstrādes likums,
                </p>
                <p className="mb-3">
                  <strong>2.3.</strong> Informācijas atklātības likums,
                </p>
                <p className="mb-3">
                  <strong>2.4.</strong> Elektronisko dokumentu likums,
                </p>
                <p className="mb-3">
                  <strong>2.5.</strong> Parādu ārpustiesas atgūšanas likums,
                </p>
                <p className="mb-3">
                  <strong>2.6.</strong> citi Latvijas Republikā spēkā esošie tiesību akti.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Personas datu kategorijas</h2>
                <p className="mb-4">Mēs, atkarībā no Jūsu vajadzībām un saņemamajiem pakalpojumiem, apstrādājam šādas personas datu kategorijas:</p>
                <p className="mb-3">
                  <strong>3.1.</strong> vārds, uzvārds, personas kods/ dzimšanas datums, korespondences adrese, telefona numurs un e-pasta adrese;
                </p>
                <p className="mb-3">
                  <strong>3.2.</strong> bankas dati;
                </p>
                <p className="mb-3">
                  <strong>3.3.</strong> personu apliecinošo dokumentu dati (dokumenta numurs, izdošanas datums un vieta, utt.);
                </p>
                <p className="mb-3">
                  <strong>3.4.</strong> komunikācijas dati – e-pasts, vēstule vai cita informācija, kas saistīta ar Jūsu komunikāciju ar Mums;
                </p>
                <p className="mb-3">
                  <strong>3.5.</strong> noteiktos gadījumos – Jūsu IP adreses informācija;
                </p>
                <p className="mb-3">
                  <strong>3.6.</strong> sīkdatnes (tīmekļa vietas pārlūkošanas dati) – dati par Biedrības mājaslapas www.latvianhorses.lv apmeklēšanu;
                </p>
                <p className="mb-3">
                  <strong>3.7.</strong> fotoattēli un video ieraksti;
                </p>
                <p className="mb-3">
                  <strong>3.8.</strong> videonovērošanas ieraksti un attēli;
                </p>
                <p className="mb-3">
                  <strong>3.9.</strong> dati, kurus Jūs paziņojat Mums.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Personas datu apstrādes pamats</h2>
                <p className="mb-3">
                  <strong>4.1.</strong> Likuma prasība – lai Mēs varētu veikt ar likumu uzliktos pienākumus un realizētu ar likumu uzliktās tiesības, likuma ietvaros ir jāveic fiziskas persona datu apstrāde, piemēram grāmatvedības, nodevu un nodokļu jomā.
                </p>
                <p className="mb-3">
                  <strong>4.2.</strong> Personas piekrišana – fiziska persona, kā personas datu subjekts, pati dod piekrišanu personas datu vākšanai un apstrādei noteiktiem mērķiem. Personas piekrišana ir viņas brīvi sniegta, konkrēta, apzināta, tādējādi atļaujot Mums apstrādāt personas datus noteiktajiem nolūkiem. Jūsu piekrišana Mums ir saistoša, ja tā ir sniegta mutiski (sarunas laikā), rakstiski (aizpildot veidlapu), vai skaidri apstiprinošas darbības veidā, piemēram, ierodoties Mūsu rīkotā publiskā pasākumā. Jums ir tiesības jebkurā laikā atsaukt savu iepriekš sniegto piekrišanu, izmantojot norādīto Biedrības kontaktinformāciju.
                </p>
                <p className="mb-3">
                  <strong>4.3.</strong> Līguma noslēgšana, grozīšana un izpilde – lai Mēs varētu noslēgt un izpildīt līgumu ar Jums, sniedzot pakalpojumus un apkalpojot Jūs, Mums jāapkopo un jāapstrādā noteikti personas dati, kas tiek savākti pirms līguma noslēgšanas vai jau noslēgtā līguma laikā.
                </p>
                <p className="mb-3">
                  <strong>4.4.</strong> Vitāli svarīgu interešu aizsardzība – Jūsu vai citas fiziskās personas vitāli svarīgo interešu nodrošināšana, īpašuma aizsardzība un noziedzīgu nodarījumu novēršana.
                </p>
                <p className="mb-3">
                  <strong>4.5.</strong> Sabiedrības interešu nodrošināšana – padarot pieejamus Mūsu rīkotajos pasākumos, piemēram, sacensībās, uzņemtos fotoattēlus un videoierakstus, publicējot sacensību rezultātus apbalvoto vietu ieguvēju godināšanai un informēšanai par pasākuma norisi.
                </p>
                <p className="mb-3">
                  <strong>4.6.</strong> Biedrības leģitīmas intereses – ar likumu uzlikto pienākumu izpilde, starp Biedrību un Jums pastāvošajām saistībām vai noslēgtā līguma (darījuma), vai no likuma izrietošo pienākumu izpilde, kvalitatīvu pakalpojumu un savlaicīga atbalsta sniegšana Jums. Mums ir tiesības apstrādāt Jūsu personas datus pamatojoties uz leģitīmajām interesēm tādā apjomā, kāds tam ir objektīvi nepieciešams un pietiekams šajā Politikā norādītājiem nolūkiem.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Personas datu apstrādes mērķis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2"><strong>5.1.</strong> veikt saimniecisko darbību;</p>
                    <p className="mb-2"><strong>5.2.</strong> reģistrēt un apstrādāt pieteikumus jāšanas apmācībām;</p>
                    <p className="mb-2"><strong>5.3.</strong> pārbaudīt Jūsu identitāti;</p>
                    <p className="mb-2"><strong>5.4.</strong> nodrošināt līguma saistību izpildi;</p>
                    <p className="mb-2"><strong>5.5.</strong> saglabāt pieteikumus un iesniegumus;</p>
                    <p className="mb-2"><strong>5.6.</strong> veikt sarunas ierakstus;</p>
                    <p className="mb-2"><strong>5.7.</strong> analizēt mājaslapas lietojumu;</p>
                    <p className="mb-2"><strong>5.8.</strong> sagrupēt klientu datu bāzi;</p>
                    <p className="mb-2"><strong>5.9.</strong> reklamēt pakalpojumus;</p>
                    <p className="mb-2"><strong>5.10.</strong> nosūtīt ziņojumus par līgumu;</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>5.11.</strong> novērst krāpnieciskas darbības;</p>
                    <p className="mb-2"><strong>5.12.</strong> nodrošināt pārvaldību un uzskaiti;</p>
                    <p className="mb-2"><strong>5.13.</strong> uzlabot pakalpojumu kvalitāti;</p>
                    <p className="mb-2"><strong>5.14.</strong> administrēt maksājumus;</p>
                    <p className="mb-2"><strong>5.15.</strong> administrēt neveiktus maksājumus;</p>
                    <p className="mb-2"><strong>5.16.</strong> aizsargāt tiesiskās intereses;</p>
                    <p className="mb-2"><strong>5.17.</strong> veikt videonovērošanu;</p>
                    <p className="mb-2"><strong>5.18.</strong> veikt fotografēšanu;</p>
                    <p className="mb-2"><strong>5.19.</strong> publicēt fotoattēlus;</p>
                    <p className="mb-2"><strong>5.20.</strong> publicēt sacensību rezultātus.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Apstrādes nepieciešamība</h2>
                <p className="mb-4">Mēs apstrādājam Jūsu personas datus, lai nodrošinātu kvalitatīvu, savlaicīgu un ērtu pakalpojumu sniegšanu, savu un ar likumu uzliktu pienākumu veikšanai, tai skaitā, bet ne tikai:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2"><strong>6.1.</strong> iesniegumu apstrādei;</p>
                    <p className="mb-2"><strong>6.2.</strong> sūdzību izskatīšanai;</p>
                    <p className="mb-2"><strong>6.3.</strong> informēšanai par pakalpojumiem;</p>
                    <p className="mb-2"><strong>6.4.</strong> noziedzīgu nodarījumu novēršanai;</p>
                    <p className="mb-2"><strong>6.5.</strong> iekšējo procesu veidošanai;</p>
                    <p className="mb-2"><strong>6.6.</strong> jāšanas sporta popularizēšanai;</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>6.7.</strong> informēšanai par pasākumiem;</p>
                    <p className="mb-2"><strong>6.8.</strong> veselīga dzīvesveida veicināšanai;</p>
                    <p className="mb-2"><strong>6.9.</strong> kultūras mantojuma saglabāšanai;</p>
                    <p className="mb-2"><strong>6.10.</strong> mārketinga nolūkiem;</p>
                    <p className="mb-2"><strong>6.11.</strong> citiem likumā noteiktiem nolūkiem.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Sīkdatnes</h2>
                <p className="mb-3">
                  <strong>7.1.</strong> Sīkdatnes ir nelielas teksta datnes, kas tiek izveidotas un saglabātas Jūsu ierīcē, apmeklējot Mūsu interneta vietni www.latvianhorses.lv. Sīkdatnes "atceras" lietotāja pieredzi un pamatinformāciju un tādējādi uzlabo Mūsu mājaslapas lietošanas ērtumu.
                </p>
                <p className="mb-3">
                  <strong>7.2.</strong> Izmantojot sīkdatnes, tiek apstrādāti kopējie lietotāju paradumi un vietnes lietošanas vēsture, diagnosticētas problēmas un trūkumi vietnes darbībā.
                </p>
                <p className="mb-3">
                  <strong>7.3.</strong> Vislabākajai lietotāja pieredzei iesakām sīkfailus saglabāt. Ja nevēlaties sīkfailus saglabāt, dzēšana ir iespējama savas ierīces pārlūkprogrammas uzstādījumos.
                </p>
                <p className="mb-3">
                  <strong>7.4.</strong> Biedrības uzturētā vietne izmanto funkcionālās, analītiskās un obligātās sīkdatnes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Personas datu iegūšana</h2>
                <p className="mb-3">
                  <strong>8.1.</strong> izmantojot Mūsu pakalpojumus;
                </p>
                <p className="mb-3">
                  <strong>8.2.</strong> apmeklējot vai pārlūkojot Mūsu mājaslapu;
                </p>
                <p className="mb-3">
                  <strong>8.3.</strong> filmējot ar Mūsu videonovērošanas iekārtām;
                </p>
                <p className="mb-3">
                  <strong>8.4.</strong> fotografējot Mūsu teritorijā notiekošos pasākumus;
                </p>
                <p className="mb-3">
                  <strong>8.5.</strong> apstrādājot personas datus no publiski pieejamiem reģistriem.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Personas datu glabāšanas termiņš</h2>
                <p className="mb-4">Mēs apstrādājam Jūsu personas datus, kamēr pastāv vismaz viens no šādiem apstākļiem:</p>
                <p className="mb-3">
                  <strong>9.1.</strong> Jūs apmeklējat Mūsu organizētus pasākumus, jāšanas apmācības, seminārus;
                </p>
                <p className="mb-3">
                  <strong>9.2.</strong> personas datu glabāšanās termiņš ir noteikts normatīvajos aktos;
                </p>
                <p className="mb-3">
                  <strong>9.3.</strong> cik tas ir nepieciešams Biedrības leģitīmo interešu realizācijai;
                </p>
                <p className="mb-3">
                  <strong>9.4.</strong> kamēr nav atsaukta Jūsu piekrišana personas datu apstrādei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Personas datu nodošana</h2>
                <p className="mb-3">
                  <strong>10.1.</strong> Mēs nenodosim Jūsu personas datus apstrādei valstīm ārpus Eiropas Savienības un Eiropas Ekonomiskās zonas.
                </p>
                <p className="mb-3">
                  <strong>10.2.</strong> Mums ir tiesības izmantot pasākumu norises audio, audiovizuālas fiksēšanas un fotografēšanas rezultātā iegūto materiālu jebkādā veidā.
                </p>
                <p className="mb-3">
                  <strong>10.3.</strong> Mūsu organizētajos pasākumos esošie plašsaziņas līdzekļi darbojas saskaņā ar profesionālo darbību regulējošajiem likumiem.
                </p>
                <p className="mb-3">
                  <strong>10.4.</strong> Mēs varam sniegt informāciju par Jūsu personas datiem šādām saņēmēju kategorijām:
                </p>
                <p className="mb-3 ml-4">
                  <strong>10.4.1.</strong> tiesībsargājošām iestādēm, tiesai vai citām valsts un pašvaldības iestādēm;
                </p>
                <p className="mb-3 ml-4">
                  <strong>10.4.2.</strong> palīdzības dienestiem;
                </p>
                <p className="mb-3 ml-4">
                  <strong>10.4.3.</strong> personas datu apstrādātājiem, kas mums sniedz noteiktus pakalpojumus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Personas datu aizsardzība</h2>
                <p className="mb-3">
                  <strong>11.1.</strong> Mēs nodrošinām, pastāvīgi pārskatām un uzlabojam aizsardzības pasākumus, lai aizsargātu Jūsu personas datus no nesankcionētas piekļuves.
                </p>
                <p className="mb-3">
                  <strong>11.2.</strong> Mēs rūpīgi pārbaudām visus pakalpojumu sniedzējus, kas apstrādā personas datus.
                </p>
                <p className="mb-3">
                  <strong>11.3.</strong> Mēs neuzņemamies atbildību par nesankcionētu piekļuvi datiem, ja tas nav noticis no Mūsu vainas.
                </p>
                <p className="mb-3">
                  <strong>11.4.</strong> Jūsu datu apdraudēšanas gadījumā Mēs paziņosim par to Jums.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Jūsu tiesības</h2>
                <p className="mb-3">
                  <strong>12.1.</strong> Jūs varat vērsties pie Mums, lai saņemtu personas datu kopijas.
                </p>
                <p className="mb-3">
                  <strong>12.2.</strong> Jūs varat pieprasīt labot personas datus:
                </p>
                <p className="mb-3 ml-4">
                  <strong>12.2.1.</strong> rakstveida formā Biedrības juridiskajā adresē,
                </p>
                <p className="mb-3 ml-4">
                  <strong>12.2.2.</strong> elektroniskā pasta veidā, parakstot ar drošu elektronisko parakstu.
                </p>
                <p className="mb-3">
                  <strong>12.3.</strong> Jums ir tiesības iegūt informāciju par personām, kuras ir saņēmušas informāciju par Jums.
                </p>
                <p className="mb-3">
                  <strong>12.4.</strong> Jūs varat pieprasīt dzēst vai ierobežot personas datu apstrādi (tiesības "tikt aizmirstam").
                </p>
                <p className="mb-3">
                  <strong>12.5.</strong> Jums ir tiesības uz savu personas datu pārnesamību.
                </p>
                <p className="mb-3">
                  <strong>12.6.</strong> Jūs varat vērsties pie Mums vai Datu valsts inspekcijā (www.dvi.gov.lv).
                </p>
                <p className="mb-3">
                  <strong>12.7.</strong> Jūs varat vērsties pie datu aizsardzības speciālista:
                </p>
                <p className="mb-3 ml-4">
                  <strong>12.7.1.</strong> rakstveida formā Biedrības juridiskajā adresē,
                </p>
                <p className="mb-3 ml-4">
                  <strong>12.7.2.</strong> elektroniskā pasta veidā, parakstot ar drošu elektronisko parakstu.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-muted">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Piezīme:</strong> Nodarbību laiks var mainīties, mēs sazināsimies ar jums un precizēsim visas nianses.
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

export default PrivatumaPolitika;