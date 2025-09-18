interface Sponsor {
  name: string;
  logo: string; // В реальной реализации заменить на путь к изображению / компонент
}
const SponsorsSection: React.FC = () => {
  const sponsors: Sponsor[] = [{
    name: 'Equestrian Federation',
    logo: 'EF'
  }, {
    name: 'Horse Care Latvia',
    logo: 'HC'
  }, {
    name: 'Sports Equipment Co',
    logo: 'SE'
  }, {
    name: 'Veterinary Services',
    logo: 'VS'
  }, {
    name: 'Feed & Nutrition',
    logo: 'FN'
  }, {
    name: 'Arena Construction',
    logo: 'AC'
  }, {
    name: 'Insurance Partner',
    logo: 'IP'
  }, {
    name: 'Transport Solutions',
    logo: 'TS'
  }];
  return <section aria-labelledby="sponsors-heading" className="py-24 border-t border-neutral-200 bg-[#2f2f2f]/[0.08]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title Block */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 id="sponsors-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-text/90 mb-5">
            Mūsu partneri
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground/90">
            Mēs sadarbojamies ar uzticamiem uzņēmumiem jāšanas sporta un aprūpes jomā, lai nodrošinātu kvalitāti katrā detaļā.
          </p>
        </div>

        {/* Grid of Sponsors */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6 md:gap-7 mb-10" aria-label="Sponsor logos">
          {sponsors.map((sponsor, index) => <li key={sponsor.name} className="group">
              <div className="relative rounded-2xl p-4 md:p-5 bg-white/70 backdrop-blur-sm ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden logo-appear" style={{
            animationDelay: `${index * 70}ms`
          }} aria-label={sponsor.name}>
                {/* subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-at-t from-primary/10 via-transparent to-transparent" />
                <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-neutral-100 text-neutral-500 font-semibold text-lg md:text-xl tracking-wide select-none">
                  {sponsor.logo}
                </div>
              </div>
            </li>)}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            Interesē sadarbība?{' '}
            <a href="/lv/kontakti/" className="relative font-medium text-primary transition-colors duration-300 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
              Sazinieties ar mums
              <span className="block absolute -bottom-0.5 left-0 w-full h-px bg-current scale-x-0 group-[li]:scale-x-100 transition-transform" />
            </a>
          </p>
        </div>
      </div>

      {/* Local styles */}
      <style>{`
        @keyframes fadePop {
          0% { opacity: 0; transform: scale(.92) translateY(14px); }
          55% { opacity: 1; transform: scale(1.02) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .logo-appear { opacity: 0; animation: fadePop .85s cubic-bezier(.16,.84,.44,1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .logo-appear { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
        /* Utility for radial hover highlight */
        .bg-radial-at-t { background: radial-gradient(circle at 50% 0%, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)); }
      `}</style>
    </section>;
};
export default SponsorsSection;