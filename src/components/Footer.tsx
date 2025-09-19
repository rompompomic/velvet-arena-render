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
                <h3 className="text-xl font-semibold mb-3 whitespace-nowrap">Latvian Horses</h3>
                <p className="text-white/80 leading-relaxed">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas apmācības, pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.67.359-1.006 1.121-.839 1.876.147.667.505 1.297 1.068 1.86s1.193.92 1.86 1.068c.755.167 1.517-.169 1.876-.839l1.541-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/90">+37128677177</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/90">info@latvianhorses.lv</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/90">“Zustrenes”, Inčukalns, LV-2141, Latvija</span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="min-w-0">
              <h4 className="text-base font-semibold mb-5 whitespace-nowrap">Ātrās saites</h4>
              <nav className="space-y-2.5">
                {quickLinks.map((l) => (
                  <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-200">
                    {l.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* 3 */}
            <div className="min-w-0">
              <h4 className="text-base font-semibold mb-5 whitespace-nowrap">Juridiskā informācija</h4>
              <nav className="space-y-2.5">
                {legalLinks.map((l) => (
                  <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-200">
                    {l.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* 4 - Gift card (mobile/tablet) — слева, компактно */}
            <div className="min-w-0">
              <h4 className="text-base font-semibold mb-3 whitespace-nowrap">Dāvanu kartes</h4>
              <a
                href="/lv/davanu-kartes/"
                className="inline-flex items-center justify-center
                           px-4 py-2 rounded-lg bg-primary text-white font-medium
                           hover:bg-primary-700 transition-colors
                           w-auto min-w-[160px] max-w-full"
              >
                Pirkt karti
              </a>
              <p className="text-sm text-white/70 mt-2">Derīga 12 mēnešus • Elektroniska piegāde</p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex w-full items-start">
            {/* Left column */}
            <div className="max-w-sm pr-6 shrink-0">
              <div className="mb-5">
                <h3 className="text-xl font-semibold mb-3 whitespace-nowrap">Latvian Horses</h3>
                <p className="text-white/80 leading-relaxed">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas apmācības, pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.67.359-1.006 1.121-.839 1.876.147.667.505 1.297 1.068 1.86s1.193.92 1.86 1.068c.755.167 1.517-.169 1.876-.839l1.541-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-white/90">+37128677177</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-white/90">info@latvianhorses.lv</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-white/90">“Zustrenes”, Inčukalns, LV-2141, Latvija</span>
                </div>
              </div>
            </div>

            {/* Center columns */}
            <div className="flex gap-20 mx-auto px-4">
              <div className="min-w-[150px]">
                <h4 className="text-base font-semibold mb-5 whitespace-nowrap">Ātrās saites</h4>
                <nav className="space-y-2.5 text-sm leading-relaxed">
                  {quickLinks.map((l) => (
                    <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-200">
                      {l.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="min-w-[180px]">
                <h4 className="text-base font-semibold mb-5 whitespace-nowrap">Juridiskā informācija</h4>
                <nav className="space-y-2.5 text-sm leading-relaxed">
                  {legalLinks.map((l) => (
                    <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-200">
                      {l.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right column */}
            <div className="ml-auto min-w-[190px] text-right shrink-0">
              <h4 className="text-base font-semibold mb-2 whitespace-nowrap">Dāvanu kartes</h4>
              <a
                href="/lv/davanu-kartes/"
                className="inline-flex justify-center
                           w-auto min-w-[170px] px-5 py-2.5
                           bg-primary rounded-lg text-white font-medium
                           hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Pirkt karti
              </a>
              <p className="text-sm text-white/70 mt-2">Derīga 12 mēnešus • Elektroniska piegāde</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">© 2025 Latvian Horses. Visas tiesības aizsargātas.</p>
            {/* соц. иконки неизменны */}
            <div className="flex items-center gap-6">{/* ... */}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
