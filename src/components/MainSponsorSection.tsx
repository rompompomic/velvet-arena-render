const MainSponsorSection = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sponsor Logo Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-24 bg-neutral-200 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-semibold">SPONSOR LOGO</span>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-section mb-4">
                Galvenais partneris
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mēs lepojas ar sadarbību ar uzticamiem partneriem, kuri atbalsta mūsu misiju 
                veidot kvalitatīvus jāšanas pakalpojumus un pasākumus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSponsorSection;