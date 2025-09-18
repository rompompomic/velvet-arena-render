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
        <div className="py-16">
          {/* Mobile / tablet layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:hidden">
            {/* 1 */}
            <div className="max-w-md">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 whitespace-nowrap">Latvian Horses</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas apmācības, pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.67.359-1.006 1.121-.839 1.876.147.667.505 1.297 1.068 1.86s1.193.92 1.86 1.068c.755.167 1.517-.169 1.876-.839l1.541-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/90">+37128677177</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/90">info@latvianhorses.lv</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/90">
                    “Zustrenes”, Inčukalns, LV-2141, Latvija
                    <br />
                  </span>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Ātrās saites</h4>
              <nav className="space-y-3">{quickLinks.map((l) => <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-300">{l.name}</a>)}</nav>
            </div>

            {/* 3 */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Juridiskā informācija</h4>
              <nav className="space-y-3">{legalLinks.map((l) => <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-300">{l.name}</a>)}</nav>
            </div>

            {/* 4 - Gift card block: make button full-width on mobile */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-4 whitespace-nowrap">Dāvanu kartes</h4>

              {/* Button now full width on small screens, auto width from sm */}
              <a
                href="/lv/davanu-kartes/"
                className="inline-block w-full sm:w-auto text-center px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary-700 transition-colors duration-300 font-medium whitespace-nowrap"
              >
                Pirkt karti
              </a>

              <p className="text-sm text-white/70 mt-3">Derīga 12 mēnešus • Elektroniska piegāde</p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex w-full items-start">
            {/* Left column */}
            <div className="max-w-sm pr-6 shrink-0">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 whitespace-nowrap">Latvian Horses</h3>
                <p className="text-white/80 leading-relaxed">Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas apmācības, pasākumi un atpūta harmonijā ar dabu.</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.67.359-1.006 1.121-.839 1.876.147.667.505 1.297 1.068 1.86s1.193.92 1.86 1.068c.755.167 1.517-.169 1.876-.839l1.541-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-white/90">+37128677177</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-white/90">info@latvianhorses.lv</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-white/90">“Zustrenes”, Inčukalns, LV-2141, Latvija</span>
                </div>
              </div>
            </div>

            {/* Center columns */}
            <div className="flex gap-24 mx-auto px-4">
              <div className="min-w-[150px]">
                <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Ātrās saites</h4>
                <nav className="space-y-3 text-sm leading-relaxed">
                  {quickLinks.map((l) => <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-300">{l.name}</a>)}
                </nav>
              </div>
              <div className="min-w-[180px]">
                <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Juridiskā informācija</h4>
                <nav className="space-y-3 text-sm leading-relaxed">
                  {legalLinks.map((l) => <a key={l.name} href={l.href} className="block text-white/80 hover:text-white transition-colors duration-300">{l.name}</a>)}
                </nav>
              </div>
            </div>

            {/* Right column */}
            <div className="ml-auto min-w-[170px] text-right shrink-0">
              <h4 className="text-lg font-semibold mb-1 whitespace-nowrap">Dāvanu kartes</h4>
              <a href="/lv/davanu-kartes/" className="inline-block px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary-700 transition-colors duration-300 font-medium whitespace-nowrap">Pirkt karti</a>
              <p className="text-sm text-white/70 mt-2">Derīga 12 mēnešus • Elektroniska piegāde</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">© 2025 Latvian Horses. Visas tiesības aizsargātas.</p>

            <div className="flex items-center gap-6">
              {/* Social icons... (unchanged) */}
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="X">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="Instagram" title="Instagram">
                <svg className="w-5 h-5 block" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.326-3.608C4.534 2.567 5.801 2.279 7.167 2.217 8.433 2.159 8.813 2.163 12 2.163zm0 1.622c-3.142 0-3.507.012-4.74.069-1.02.047-1.574.216-1.942.364-.489.19-.838.418-1.205.785-.367.367-.595.716-.785 1.205-.148.368-.317.922-.364 1.942-.057 1.233-.069 1.598-.069 4.74s.012 3.507.069 4.74c.047 1.02.216 1.574.364 1.942.19.489.418.838.785 1.205.367.367.716.595 1.205.785.368.148.922.317 1.942.364 1.233.057 1.598.069 4.74.069s3.507-.012 4.74-.069c1.02-.047 1.574-.216 1.942-.364.489-.19.838-.418 1.205-.785.367-.367.595-.716.785-1.205.148-.368.317-.922.364-1.942.057-1.233.069-1.598.069-4.74s-.012-3.507-.069-4.74c-.047-1.02-.216-1.574-.364-1.942-.19-.489-.418-.838-.785-1.205a3.37 3.37 0 0 0-1.205-.785c-.368-.148-.922-.317-1.942-.364-1.233-.057-1.598-.069-4.74-.069zm0 3.915a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 1.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.7-2.047a1.237 1.237 0 1 1 0 2.475 1.237 1.237 0 0 1 0-2.475z" /></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="TikTok" title="TikTok">
                <svg className="w-5 h-5 block" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.681 0h3.027a6.88 6.88 0 0 0 .112 1.273c.275 1.471.97 2.73 2.2 3.655 1.28.965 2.743 1.32 4.33 1.392v3.106c-1.61.065-3.145-.24-4.63-.934-.69-.325-1.31-.748-1.972-1.127l-.022 8.31c0 1.33-.272 2.592-.902 3.76-1.198 2.215-3.075 3.57-5.55 3.88-1.87.236-3.62-.138-5.19-1.23-1.822-1.274-2.89-3.008-3.188-5.175-.33-2.42.334-4.56 2.003-6.39 1.43-1.574 3.247-2.43 5.37-2.61.29-.025.585-.03.912-.043v3.22c-.12.017-.242.027-.362.05-1.217.238-2.187.82-2.83 1.9-.97 1.61-.76 3.68.51 5.02.65.67 1.45 1.06 2.38 1.176 1.92.24 3.69-.86 4.17-2.676.09-.35.13-.72.133-1.085l.01-15.7z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
