const SponsorsSection = () => {
  // Placeholder sponsor logos - in real implementation these would be actual sponsor logos
  const sponsors = [{
    name: "Equestrian Federation",
    logo: "EF"
  }, {
    name: "Horse Care Latvia",
    logo: "HC"
  }, {
    name: "Sports Equipment Co",
    logo: "SE"
  }, {
    name: "Veterinary Services",
    logo: "VS"
  }, {
    name: "Feed & Nutrition",
    logo: "FN"
  }, {
    name: "Arena Construction",
    logo: "AC"
  }, {
    name: "Insurance Partner",
    logo: "IP"
  }, {
    name: "Transport Solutions",
    logo: "TS"
  }];
  return <section className="py-20 border-t border-neutral-200 bg-gray-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">
            Mūsu partneri
          </h2>
          <p className="text-muted-foreground">
            Mēs sadarbojas ar labākajiem uzņēmumiem jāšanas sporta jomā
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {sponsors.map((sponsor, index) => <div key={index} className="sponsor-logo flex items-center justify-center p-6 bg-light rounded-xl border border-transparent hover:border-primary/20 cursor-pointer transition-all duration-300">
              {/* Placeholder logo - in real implementation this would be an actual image */}
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-lg text-muted-foreground font-semibold text-lg">
                {sponsor.logo}
              </div>
            </div>)}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Interesē sadarbība?{" "}
            <a href="/lv/kontakti/" className="text-primary hover:text-primary-700 font-medium transition-colors duration-300">
              Sazinieties ar mums
            </a>
          </p>
        </div>
      </div>
    </section>;
};
export default SponsorsSection;