const MapSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="text-center mb-6 pt-12">
        <h2 className="text-section mb-4">Karte</h2>
        <p className="text-lg text-muted-foreground">
          Atrodiet mūs Inčukalnā, Latvijā
        </p>
      </div>

      {/* Full width map */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.3591186086278!2d24.734602999999996!3d57.087059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e94938415b1c4d%3A0x929d09628b4257d9!2sYoung%20Riders%20School%20(Young%20Riders%20School)!5e1!3m2!1sen!2ses!4v1758207770935!5m2!1sen!2ses&z=13"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Latvian Horses atrašanās vieta kartē - satelīta skats"
        />
      </div>
    </section>
  );
};

export default MapSection;
