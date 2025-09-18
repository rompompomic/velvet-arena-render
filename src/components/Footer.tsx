const Footer = () => {
  const quickLinks = [{
    name: 'Pakalpojumi',
    href: '/lv/pakalpojumi/'
  }, {
    name: 'Pasākumi',
    href: '/lv/pasakumi/'
  }, {
    name: 'Cenas',
    href: '/lv/cenas/'
  }, {
    name: 'Galerija',
    href: '/lv/galerija/'
  }, {
    name: 'Par mums',
    href: '/lv/par-mums/'
  }, {
    name: 'Kontakti',
    href: '/lv/kontakti/'
  }];
  const legalLinks = [{
    name: 'Privātuma politika',
    href: '/lv/privatuma-politika/'
  }, {
    name: 'Lietošanas noteikumi',
    href: '/lv/noteikumi/'
  }, {
    name: 'Drošības noteikumi',
    href: '/lv/drosibu-noteikumi/'
  }];
  return <footer className="bg-text text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* На lg всегда 4 колонки в ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* 1) Company Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 whitespace-nowrap">Latvian Horses</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas apmācības,
                  pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>

              {/* Contact Info */}
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
                    “Zustrenes”, Inčukalns, LV-2141, Latvija<br />
                  </span>
                </div>
              </div>
            </div>

            {/* 2) Ātrās saites */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Ātrās saites</h4>
              <nav className="space-y-3">
                {quickLinks.map(link => <a key={link.name} href={link.href} className="block text-white/80 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>)}
              </nav>
            </div>

            {/* 3) Juridiskā informācija */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Juridiskā informācija</h4>
              <nav className="space-y-3">
                {legalLinks.map(link => <a key={link.name} href={link.href} className="block text-white/80 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>)}
              </nav>
            </div>

            {/* 4) Dāvanu kartes */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Dāvanu kartes</h4>
              <a href="/lv/davanu-kartes/" className="inline-block px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary-700 transition-colors duration-300 text-center font-medium whitespace-nowrap">
                Pirkt karti
              </a>
              <p className="text-sm text-white/70 mt-2">
                Derīga 12 mēnešus • Elektroniska piegāde
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 Latvian Horses. Visas tiesības aizsargātas.
            </p>

            <div className="flex items-center gap-6">
              {/* Socials: Facebook, X, Instagram, TikTok */}
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="X">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 block"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>Instagram</title>
                  <path d="M12 0c3.3 0 3.7.01 5 .07 1.3.06 2.2.27 2.7.46.7.27 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.2.5.4 1.4.5 2.7.1 1.3.1 1.7.1 5s0 3.7-.1 5c-.1 1.3-.3 2.2-.5 2.7-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.5.2-1.4.4-2.7.5-1.3.1-1.7.1-5 .1s-3.7 0-5-.1c-1.3-.1-2.2-.3-2.7-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.2-.5-.4-1.4-.5-2.7C.01 15.7 0 15.3 0 12s.01-3.7.07-5c.06-1.3.27-2.2.46-2.7.27-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.5-.2 1.4-.4 2.7-.5C8.3.01 8.7 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm7.8-1.4a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
                </svg>
              </a>
            
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 block"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>TikTok</title>
                  <path d="M12.5 0h3.2c.1 1.5.7 2.8 1.7 3.8 1 .9 2.3 1.5 3.8 1.6v3.2c-1.7-.1-3.3-.6-4.7-1.5v7.8c0 2.9-1.6 5.3-4.1 6.4-2.6 1.1-5.6.5-7.5-1.4-2-2-2.6-4.9-1.5-7.5 1-2.5 3.5-4.1 6.4-4.1.2 0 .5 0 .7.1v3.2c-.2 0-.5 0-.7.1-1.3.3-2.3 1.3-2.5 2.6-.2 1.3.4 2.6 1.6 3.3 1.2.7 2.6.7 3.7 0 1.1-.6 1.7-1.8 1.7-3.1V0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;