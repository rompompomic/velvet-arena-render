const DonationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-section mb-6">
            Ziedojumi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Jūsu atbalsts palīdz mums uzturēt augstas kvalitātes aprūpi zirgiem un 
            nodrošināt labākos apstākļus apmācībām un pasākumiem. Katrs ziedojums 
            ir nozīmīgs mūsu kopienas attīstībā.
          </p>
          
          <a 
            href="#"
            className="text-primary hover:text-primary-700 font-semibold text-lg border-b-2 border-primary/30 hover:border-primary transition-all duration-300 pb-1"
          >
            Ziedot
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;