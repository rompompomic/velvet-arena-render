const Footer = () => {
  const quickLinks = [
    { name: "Pakalpojumi", href: "/lv/pakalpojumi/" },
    { name: "Pasākumi", href: "/lv/pasakumi/" },
    { name: "Cenas", href: "/lv/cenas/" },
    { name: "Galerija", href: "/lv/galerija/" },
    { name: "Par mums", href: "/lv/par-mums/" },
    { name: "Kontakti", href: "/lv/kontakti/" },
  ];

  const legalLinks = [
    { name: "Privātuma politika", href: "/lv/privatuma-politika/" },
    { name: "Lietošanas noteikumi", href: "/lv/noteikumi/" },
    { name: "Drošības noteikumi", href: "/lv/drosibu-noteikumi/" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/latvianhorses",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 10.02v-7.09H7.9v-2.93h2.4V9.86c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.93h-2.2v7.09C18.34 21.25 22 17.09 22 12.07Z"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/latvianhorses",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M18.244 2h3.223l-7.03 8.03L22 22h-5.93l-4.64-6.058L6.06 22H2.835l7.53-8.596L2 2h6.07l4.196 5.59L18.244 2Zm-2.08 18.03h1.786L7.91 3.89H6.02l10.144 16.14Z"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/latvianhorses",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM18 6.5a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
          />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@latvianhorses",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
          <path
            fill="currentColor"
            d="M14 2h3.2a6.8 6.8 0 0 0 4.8 4.8V10a9.6 9.6 0 0 1-4.8-1.6v6.5A6.9 6.9 0 1 1 12 8c.3 0 .7.02 1 .06V11a4 4 0 1 0 1 3V2Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-text text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-14">
          {/* Mobile / tablet layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:hidden">
            {/* 1 */}
            <div className="max-w-md">
              <div className="mb-5">
                <h3 className="text-xl font-semibold mb-3 whitespace-nowrap">
                  Latvian Horses
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas
                  apmācības, pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+37128677177"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[hsl(var(--primary-50))]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.81.37 1.6.72 2.34a2 2 0 01-.45 2.18L8.09 9.91a16 16 0 006 6l1.67-1.24a2 2 0 012.18-.45c.74.35 1.53.6 2.34.72a2 2 0 011.72 1.98z" />
                  </svg>
                  <span>+37128677177</span>
                </a>

                <a
                  href="mailto:info@latvianhorses.lv"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[hsl(var(--primary-50))]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@latvianhorses.lv</span>
                </a>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[hsl(var(--primary-50))] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white/90">
                    “Zustrenes”, Inčukalns, LV-2141, Latvija
                  </span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="min-w-0">
              <h4 className="text-base font-semibold mb-5 whitespace-nowrap">
                Ātrās saites
              </h4>
              <nav className="space-y-2.5">
                {quickLinks.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    className="block text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {l.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* 3 */}
            <div className="min-w-0">
              <h4 className="text-base font-semibold mb-5 whitespace-nowrap">
                Juridiskā informācija
              </h4>
              <nav className="space-y-2.5">
                {legalLinks.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    className="block text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {l.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* 4 - Gift card (mobile/tablet) */}
            <div className="min-w-0">
              <h4 className="text-base font-semibold mb-1 whitespace-nowrap">
                Dāvanu kartes
              </h4>
              <a
                href="/lv/davanu-kartes/"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[hsl(var(--primary))] text-white font-medium hover:bg-[hsl(var(--primary-700))] transition-colors w-auto mt-1"
              >
                Pirkt karti
              </a>
              <p className="text-sm text-white/70 mt-2">
                Derīga 12 mēnešus • Elektroniska piegāde
              </p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex w-full items-start">
            {/* Left column */}
            <div className="max-w-sm pr-6 shrink-0">
              <div className="mb-5">
                <h3 className="text-xl font-semibold mb-3 whitespace-nowrap">
                  Latvian Horses
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas
                  apmācības, pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+37128677177"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[hsl(var(--primary-50))]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.81.37 1.6.72 2.34a2 2 0 01-.45 2.18L8.09 9.91a16 16 0 0 0 6 6l1.67-1.24a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 1.98z" />
                  </svg>
                  <span>+37128677177</span>
                </a>
                <a
                  href="mailto:info@latvianhorses.lv"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[hsl(var(--primary-50))]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@latvianhorses.lv</span>
                </a>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[hsl(var(--primary-50))] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-white/90">
                    “Zustrenes”, Inčukalns, LV-2141, Latvija
                  </span>
                </div>
              </div>
            </div>

            {/* Center columns */}
            <div className="flex gap-20 mx-auto px-4">
              <div className="min-w-[150px]">
                <h4 className="text-base font-semibold mb-5 whitespace-nowrap">
                  Ātrās saites
                </h4>
                <nav className="space-y-2.5 text-sm leading-relaxed">
                  {quickLinks.map((l) => (
                    <a
                      key={l.name}
                      href={l.href}
                      className="block text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {l.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="min-w-[180px]">
                <h4 className="text-base font-semibold mb-5 whitespace-nowrap">
                  Juridiskā informācija
                </h4>
                <nav className="space-y-2.5 text-sm leading-relaxed">
                  {legalLinks.map((l) => (
                    <a
                      key={l.name}
                      href={l.href}
                      className="block text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {l.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right column */}
            <div className="ml-auto min-w-[190px] text-right shrink-0">
              <h4 className="text-base font-semibold mb-1 whitespace-nowrap">
                Dāvanu kartes
              </h4>
              <a
                href="/lv/davanu-kartes/"
                className="inline-flex justify-center
                           w-auto min-w-[170px] px-5 py-2.5
                           bg-[hsl(var(--primary))] rounded-lg text-white font-medium
                           hover:bg-[hsl(var(--primary-700))] transition-colors whitespace-nowrap mt-1"
              >
                Pirkt karti
              </a>
              <p className="text-sm text-white/70 mt-2">
                Derīga 12 mēnešus • Elektroniska piegāde
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 Latvian Horses. Visas tiesības aizsargātas.
            </p>

            {/* Соцсети */}
            <div className="flex items-center gap-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[hsl(var(--primary))] transition-colors transform hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
