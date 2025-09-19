const MapSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="text-center mb-6 pt-12">
        <h2 className="text-section mb-4">Karte</h2>
        <p className="text-lg text-muted-foreground">
          Atrodiet mūs Inčukalnā, Latvijā
        </p>
      </div>

      {/* Taller full width map */}
      <div className="w-full h-[400px] md:h-[450px] lg:h-[540px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10808.5!2d24.7346!3d57.0870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e94938415b1c4d%3A0x929d09628b4257d9!2sYoung%20Riders%20School!5e1!3m2!1slv!2slv!4v1758207770935!5m2!1slv!2slv"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Latvian Horses atrašanās vieta kartē - satelīta skats"
        />
      </div>
    </section>
  );
};

export default MapSection;