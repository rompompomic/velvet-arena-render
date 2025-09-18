const MapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-section mb-4">
            Karte
          </h2>
          <p className="text-lg text-muted-foreground">
            Atrodiet mūs Inčukalnā, Latvijā
          </p>
        </div>
        
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=57.087131,24.734054&z=15&t=k&hl=lv&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Latvian Horses atrašanās vieta kartē - satelīta skats"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;